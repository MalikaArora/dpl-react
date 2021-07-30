import React, {
  FC,
  useEffect,
  useReducer,
  useRef,
  KeyboardEvent,
  useMemo,
  ChangeEvent,
  createRef,
} from "react";
import styled, { css } from "styled-components";
import { Key, Z_INDEX } from "@constant";
import { CaretDownCentered } from "@uitk/react-icons";
import { Checkbox } from "../../Checkbox";
import {
  DropdownActionType,
  DropdownMultiProps,
  IDropdownItem,
} from "../types";
import { dropdownReducer } from "../DropdownReducer";
import { DropdownMultiItem } from "./DropdownMultiItem";
import { DropdownButton } from "../DropdownButton";
import { getMultiActions } from "../utilities";
import { useVisuallyHidden } from "@react-aria/visually-hidden";
import { DropdownMultiGroup } from "./DropdownMultiGroup";

const DropdownMultiButton = styled(DropdownButton)<{
  isOpen: boolean;
  triggerHeight: string;
}>`
  ${({ isOpen, triggerHeight }) => css`
    ${isOpen &&
    css`
      overflow-y: scroll;
      height: ${triggerHeight};
    `};
  `}
`;

const DropdownMultiButtonText = styled.span``;

const DropdownMenuContainer = styled.div<{ isOpen?: boolean }>`
  ${({
    isOpen,
    theme: { borderRadiusFormElement, colorBackgroundDropdown, durationFast },
  }) => css`
    width: 100%;
    display: none;
    padding: 0;
    margin: 0;
    border none;
    outline: none;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: ${colorBackgroundDropdown};
    border-radius: ${borderRadiusFormElement};
    animation: slide-down ${durationFast} cubic-bezier(0, 0, 0.38, 0.9);
    position: absolute;
    max-height: 23.75rem;
    box-shadow: ${props => props.theme.dropShadowDropdown};
    border: ${props => props.theme.colorBorderBase} ${props =>
    props.theme.borderWidthBase};
    margin-top: 2px;
    z-index: ${Z_INDEX.ZERO};
    ${isOpen && listOpenStyles};
  `}
`;

const DropdownFieldset = styled.fieldset`
  padding: 0 ${props => props.theme.spacingXS}
    ${props => props.theme.spacingBase};
  margin: ${props => props.theme.spacingXXS} 0 0 0;
  border: none;
`;

const DropdownFieldsetLegend = styled.legend`
  padding: ${props => props.theme.spacingXS} 0;
  margin-bottom: ${props => props.theme.spacingXXS};
  color: ${props => props.theme.colorTextFormLabel};
  font-weight: ${props => props.theme.fontWeightLabels};
`;

const DropdownIcon = styled(CaretDownCentered)`
  position: absolute;
  right: ${props => props.theme.spacingSM};
  top: calc(50% - 12px);
`;

const listOpenStyles = css`
  display: block;
`;

const selectAllCheckedStyles = css`
  background-color: ${props => props.theme.colorBackgroundSelected};
`;

const SelectAllContainer = styled.div<{ isChecked?: boolean }>`
  ${({ isChecked, theme: { colorBackgroundAccent, spacingXXS } }) => css`
    padding-left: ${spacingXXS} / 2;
    background-color: ${colorBackgroundAccent};

    ${isChecked && selectAllCheckedStyles};

    .uitk-checkbox {
      pointer-events: none;
    }
    .uitk-checkbox-container {
      margin: 0;
    }
  `}
`;

const SelectAllCheckbox = styled(Checkbox)`
  label {
    width: 100%;
  }
`;

const canFocusItemByKey = (key: string, initialCharacters: string[]) => {
  return (
    key.length === 1 && key.match(/\S/) && initialCharacters.indexOf(key) > -1
  );
};

const getNextItemIndexByCharacter = (
  startIndex: number,
  character: string,
  initialCharacters: string[]
) => {
  for (let i = startIndex; i < initialCharacters.length; i++) {
    if (character === initialCharacters[i]) {
      return i;
    }
  }
  return -1;
};

const focusItemByCharacter = (
  focusCharacter: string,
  initialCharacters: string[],
  focusedIndex: number,
  dropdownItemRefs: Map<
    string | number,
    React.MutableRefObject<HTMLSpanElement>
  >,
  flatItems: IDropdownItem[]
) => {
  let itemIndex = getNextItemIndexByCharacter(
    focusedIndex + 1,
    focusCharacter,
    initialCharacters
  );
  if (itemIndex === -1 && focusedIndex !== -1) {
    itemIndex = getNextItemIndexByCharacter(
      0,
      focusCharacter,
      initialCharacters
    );
  }

  if (itemIndex > -1) {
    dropdownItemRefs.get(flatItems[itemIndex].id).current?.focus();
    dropdownItemRefs.get(flatItems[itemIndex].id).current?.scrollIntoView({
      block: "center",
    });
  }
};

const getItemsAsFlat = (items: IDropdownItem[]) => {
  const flatItems: IDropdownItem[] = [];
  items.forEach(item => {
    Array.isArray(item.value)
      ? flatItems.push(...item.value)
      : flatItems.push(item);
  });
  return flatItems;
};

const getInitialCharacters = (items: IDropdownItem[]) => {
  const initialCharacters: string[] = [];
  items.forEach(item => {
    Array.isArray(item.value)
      ? initialCharacters.push(...getInitialCharacters(item.value))
      : initialCharacters.push(item.label.charAt(0).toLowerCase());
  });
  return initialCharacters;
};

const _DropdownMulti: FC<DropdownMultiProps> = ({
  buttonDescriptiveText = "Press enter or space to expand the list and use tab key to navigate through the list",
  disabled,
  error,
  fieldsetLabel,
  id,
  initialValues = [],
  items,
  labelledBy,
  onBlur,
  onChange,
  placeholderText = "Please Select",
  required,
  selectAllLabel = "Select All",
  selectGroupLabel = "Select Group",
  selectedText = "selected",
}) => {
  const dropdownRef = useRef<HTMLDivElement>();
  const dropdownButtonRef = useRef<HTMLButtonElement>();
  const selectAllRef = useRef<HTMLInputElement>();
  const [
    { focusedIndex, initialCharacters, isOpen, selectedItems, triggerHeight },
    dispatch,
  ] = useReducer(dropdownReducer, {
    isOpen: false,
    selectedItems: getItemsAsFlat(initialValues),
    focusedIndex: -1,
    initialCharacters: [],
  });

  const dropdownMultiActions = useMemo(() => getMultiActions(dispatch), [
    dispatch,
  ]);

  const flatItems = useMemo(() => {
    return getItemsAsFlat(items);
  }, [items]);

  const dropdownItemRefs = useMemo(() => {
    const itemRefs = new Map();
    flatItems.forEach(item => {
      itemRefs.set(item.id, createRef<HTMLInputElement>());
    });
    return itemRefs;
  }, [flatItems]);

  const getRefForOption = useMemo(() => {
    return (id: string | number) => dropdownItemRefs.get(id);
  }, [items, dropdownItemRefs]);

  const { visuallyHiddenProps } = useVisuallyHidden();

  const isIndeterminate = () =>
    selectedItems.length > 0 && selectedItems.length !== flatItems.length;

  const getButtonText = () => {
    if (selectedItems.length > 0) {
      return selectedItems.map(selectedItem => selectedItem.label).join(", ");
    }
    return placeholderText;
  };

  const handleExternalClick = ({ target }: MouseEvent) => {
    if (
      (target as HTMLLabelElement).htmlFor !== id &&
      !dropdownRef.current?.contains(target as HTMLElement)
    ) {
      dropdownMultiActions.closeDropdown();
      onBlur?.();
    }
  };

  const onKeydownTrigger = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === Key.TAB && (!isOpen || event.shiftKey)) {
      dropdownMultiActions.closeDropdown();
      onBlur?.();
    } else if (event.key === Key.ESC) {
      dropdownMultiActions.closeDropdown();
    }
  };

  const onKeyDownMenu = (event: KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case Key.ESC:
        dropdownMultiActions.closeDropdown();
        dropdownButtonRef?.current.focus();
        break;
      case Key.HOME:
        dropdownItemRefs.get(flatItems[0].id).current?.focus();
        break;
      case Key.END:
        dropdownItemRefs
          .get(flatItems[flatItems.length - 1].id)
          .current?.focus();
        break;
      default:
        canFocusItemByKey(event.key, initialCharacters) &&
          focusItemByCharacter(
            event.key,
            initialCharacters,
            focusedIndex,
            dropdownItemRefs,
            flatItems
          );
        break;
    }
  };

  const onKeyDownItem = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      event.key === Key.TAB &&
      !event.shiftKey &&
      index === flatItems.length - 1
    ) {
      dropdownMultiActions.closeDropdown();
      onBlur?.();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleExternalClick);
    return () => document.removeEventListener("mousedown", handleExternalClick);
  }, []);

  useEffect(() => {
    dispatch({
      type: DropdownActionType.SET_TRIGGER_HEIGHT,
      payload: dropdownButtonRef.current.offsetHeight + "px",
    });
    if (isOpen) {
      isOpen && selectAllRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    onChange?.(selectedItems);
  }, [selectedItems]);

  useEffect(() => {
    selectAllRef.current &&
      (selectAllRef.current.indeterminate = isIndeterminate());
  }, [items, selectedItems]);

  useEffect(() => {
    dispatch({
      type: DropdownActionType.SET_INITIAL_CHARACTERS,
      payload: getInitialCharacters(items),
    });
  }, [items]);

  return (
    <div ref={dropdownRef}>
      <DropdownMultiButton
        data-testid="dropdown-multi-btn"
        type="button"
        error={Boolean(error)}
        disabled={disabled}
        id={id}
        aria-labelledby={labelledBy}
        aria-describedby={`${id}-support-text-multi`}
        aria-expanded={isOpen}
        aria-required={required}
        onClick={() => dispatch({ type: DropdownActionType.TOGGLE_DROPDOWN })}
        isOpen={isOpen}
        triggerHeight={triggerHeight}
        onKeyDown={onKeydownTrigger}
        ref={dropdownButtonRef}
      >
        <DropdownMultiButtonText id={`${id}-text`}>
          {getButtonText()}
          {selectedItems.length > 0 && (
            <span {...visuallyHiddenProps}>({selectedText})</span>
          )}
        </DropdownMultiButtonText>

        <span id={`${id}-support-text-multi`} {...visuallyHiddenProps}>
          {buttonDescriptiveText}
        </span>
        <DropdownIcon size="m" />
      </DropdownMultiButton>
      <DropdownMenuContainer isOpen={isOpen} onKeyDown={onKeyDownMenu}>
        <DropdownFieldset>
          <DropdownFieldsetLegend>
            <span>{fieldsetLabel}</span>
          </DropdownFieldsetLegend>
          <SelectAllContainer
            isChecked={selectedItems.length === flatItems.length}
          >
            <SelectAllCheckbox
              id={`${id}-select-all`}
              checkboxRef={selectAllRef}
              checked={selectedItems.length === flatItems.length}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                dropdownMultiActions.onSelectAll(event, flatItems)
              }
              onFocus={() => dropdownMultiActions.onFocusItem(-1)}
            >
              {selectAllLabel}
            </SelectAllCheckbox>
          </SelectAllContainer>
          {isOpen &&
            items.map((item, index) =>
              Array.isArray(item.value) ? (
                <DropdownMultiGroup
                  key={item.label}
                  rootId={`${id}-item-${index}`}
                  dropdownGroup={item}
                  selectedItems={selectedItems}
                  getItemRef={getRefForOption}
                  flatItems={flatItems}
                  onSelectItems={dropdownMultiActions.onSelectItems}
                  onFocus={dropdownMultiActions.onFocusItem}
                  onKeyDownGroupItem={onKeyDownItem}
                  selectGroupLabel={selectGroupLabel}
                />
              ) : (
                <DropdownMultiItem
                  key={item.label}
                  id={`${id}-item-${index}`}
                  selected={selectedItems.indexOf(item) > -1}
                  checked={selectedItems.indexOf(item) > -1}
                  onChange={() =>
                    dropdownMultiActions.onSelectItems([item], selectedItems)
                  }
                  onFocus={() =>
                    dropdownMultiActions.onFocusItem(flatItems.indexOf(item))
                  }
                  checkboxRef={getRefForOption(item.id)}
                  label={item.label}
                  onKeyDownItem={(event: KeyboardEvent<HTMLInputElement>) =>
                    onKeyDownItem(event, flatItems.indexOf(item))
                  }
                />
              )
            )}
        </DropdownFieldset>
      </DropdownMenuContainer>
    </div>
  );
};

export const DropdownMulti = styled(_DropdownMulti)``;
