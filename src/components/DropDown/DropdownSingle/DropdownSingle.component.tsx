import React, { FC } from "react";
import styled, { css } from "styled-components";
import { Z_INDEX } from "@constant";
import { math } from "polished";
import { remToPx } from "@lib";
import { getBorderWidthFromToken } from "../../../styles";
import { CaretDownCentered } from "@uitk/react-icons/esm";
import { DropdownSingleProps, IDropdownItem } from "../types";
import { useSelect } from "downshift";
import { DropdownButton } from "../DropdownButton";

const DropdownIcon = styled(CaretDownCentered)`
  position: absolute;
  right: ${props => props.theme.spacingSM};
  top: calc(50% - 12px);
`;

const listOpenStyles = css`
  box-shadow: ${props => props.theme.dropShadowDropdown};
  border: ${props => props.theme.colorBorderBase}
    ${props => props.theme.borderWidthBase};
  margin-top: 2px;
`;

const listItemActiveStyles = css`
  ${({
    theme: {
      borderRadiusFormElement,
      borderWidthBase,
      colorBackgroundBrand,
      colorBorderFocus,
      colorBorderFocusInverse,
      colorTextBrandPrimary,
    },
  }) => css`
    background-color: ${colorBackgroundBrand};
    color: ${colorTextBrandPrimary};
    position: relative;
    outline: none;

    ${DropdownListItemText} {
      border-top: ${borderWidthBase} ${colorBorderFocus};
    }

    &:after {
      border-radius: ${borderRadiusFormElement};
      border: 2px solid ${colorBorderFocusInverse};
      content: "";
      position: absolute;
      top: 3px;
      bottom: 3px;
      left: 0;
      right: 3px;
    }
  `}
`;

const listItemTextFirstStyles = css`
  border-top: ${props => props.theme.borderWidthBase} transparent;
`;

const listItemSelectedStyles = css`
  ${({
    theme: { borderWidthFormElementFocus, colorBorderFocus, fontWeightStrong },
  }) => css`
    border-left: ${borderWidthFormElementFocus} ${colorBorderFocus};
    font-weight: ${fontWeightStrong};
  `}
`;

const DropdownList = styled.ul<{
  isOpen: boolean;
}>`
  ${({
    isOpen,
    theme: { borderRadiusFormElement, colorBackgroundDropdown, durationFast },
  }) => css`
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    outline: none;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: ${colorBackgroundDropdown};
    border-radius: ${borderRadiusFormElement};
    animation: slide-down ${durationFast} cubic-bezier(0, 0, 0.38, 0.9);
    position: absolute;
    max-height: 23.75rem;
    z-index: ${Z_INDEX.ZERO};
    ${isOpen && listOpenStyles};
  `}
`;

const DropdownListItem = styled.li<{
  active: boolean;
  selected: boolean;
}>`
  ${({
    active,
    selected,
    theme: { borderWidthFormElementFocus, colorText01 },
  }) => css`
    cursor: pointer;
    color: ${colorText01};
    border-left: ${borderWidthFormElementFocus} transparent;

    ${selected && listItemSelectedStyles};
    ${active && listItemActiveStyles};
  `}
`;

const DropdownListItemText = styled.span<{ first: boolean }>`
  ${({
    first,
    theme: {
      borderWidthBase,
      borderWidthFormElementFocus,
      colorBorderBase,
      spacingSM,
      spacingXS,
      spacingXXS,
    },
  }) => css`
    flex-grow: 1;
    background-color: transparent;
    padding: ${spacingXS} ${spacingSM} ${spacingXS} ${spacingXXS};
    border-top: ${borderWidthBase} ${colorBorderBase};
    display: flex;
    margin-left: ${math(
      remToPx(spacingXS) +
        " - " +
        getBorderWidthFromToken(borderWidthFormElementFocus)
    )};

    ${first && listItemTextFirstStyles};
  `}
`;

const itemToString = (item: IDropdownItem) => (item ? item.label : "");

export const DropdownSingle: FC<DropdownSingleProps> = ({
  disabled,
  error,
  id,
  items,
  labelledBy,
  onBlur,
  onChange,
  placeholderText,
  required,
  value,
}) => {
  const {
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    selectedItem,
  } = useSelect({
    items,
    itemToString,
    selectedItem: value,
    onSelectedItemChange: ({ selectedItem }) => onChange?.(selectedItem),
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      const { highlightedIndex } = state;
      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownArrowUp:
          if (highlightedIndex === 0) {
            return {
              ...changes,
              highlightedIndex: items.length - 1,
            };
          }
          break;
        case useSelect.stateChangeTypes.MenuKeyDownArrowDown:
          if (highlightedIndex === items.length - 1) {
            return {
              ...changes,
              highlightedIndex: 0,
            };
          }
          break;
      }
      return changes;
    },
    onStateChange: ({ type }) => {
      if (type === useSelect.stateChangeTypes.MenuBlur) {
        onBlur?.();
      }
    },
  });

  return (
    <>
      <DropdownButton
        type="button"
        error={error}
        disabled={disabled}
        {...getToggleButtonProps({
          "aria-labelledby": null,
        })}
        id={id}
        aria-expanded={isOpen}
        aria-labelledby={labelledBy}
        aria-required={required}
      >
        <span id={`${id}-text`}>
          {itemToString(selectedItem) || placeholderText || "Please Select"}
        </span>
        <DropdownIcon size="m" />
      </DropdownButton>
      <DropdownList
        {...getMenuProps({
          onKeyDown(event) {
            event.stopPropagation();
          },
          "aria-labelledby": `${id}-lbl`,
        })}
        isOpen={isOpen}
      >
        {isOpen &&
          items.map((item, index) => (
            <DropdownListItem
              active={index === highlightedIndex}
              selected={selectedItem?.id === item.id}
              key={item.label}
              {...getItemProps({ item, index })}
            >
              <DropdownListItemText first={index === 0}>
                {item.label}
              </DropdownListItemText>
            </DropdownListItem>
          ))}
      </DropdownList>
    </>
  );
};
