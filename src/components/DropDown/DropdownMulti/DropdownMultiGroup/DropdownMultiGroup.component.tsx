import React, { FC, KeyboardEvent, useEffect, useMemo, useRef } from "react";
import styled, { css } from "styled-components";
import { Checkbox, IDropdownItem } from "@component";
import { DropdownMultiItem } from "../DropdownMultiItem";

interface DropdownMultiGroupProps {
  dropdownGroup: IDropdownItem;
  selectedItems: IDropdownItem[];
  onSelectItems: (
    items: IDropdownItem[],
    selectedItems: IDropdownItem[]
  ) => void;
  onFocus: (focusIndex: number) => void;
  onKeyDownGroupItem: (
    event: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => void;
  getItemRef: (
    itemId: string | number
  ) => React.MutableRefObject<HTMLInputElement>;
  flatItems: IDropdownItem[];
  rootId: string;
  selectGroupLabel: string;
}

const DropdownGroupFieldset = styled.fieldset`
  padding: 0 ${props => props.theme.spacingXS}
    ${props => props.theme.spacingBase};
  margin: 0 0 ${props => props.theme.spacingXS}
    ${props => props.theme.spacingXS};
  border: ${props => props.theme.borderWidthBase}
    ${props => props.theme.colorBorderBaseAccessible};
  border-radius: ${props => props.theme.borderRadiusBase};
`;

const DropdownGroupedFieldsetLegend = styled.legend`
  padding: ${props => props.theme.spacingXS};
  margin-bottom: ${props => props.theme.spacingXXS};
  color: ${props => props.theme.colorTextFormLabel};
  font-weight: ${props => props.theme.fontWeightLabels};
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

const _DropdownMultiGroup: FC<DropdownMultiGroupProps> = ({
  dropdownGroup,
  flatItems,
  getItemRef,
  onFocus,
  onKeyDownGroupItem,
  onSelectItems,
  rootId,
  selectGroupLabel,
  selectedItems,
}) => {
  const groupedItems = dropdownGroup.value as IDropdownItem[];
  const groupSelectAllRef = useRef<HTMLInputElement>();

  const intersection = useMemo(() => {
    return groupedItems.filter(item => selectedItems.includes(item));
  }, [dropdownGroup, selectedItems]);

  const isIndeterminate = () => {
    return intersection.length > 0 && intersection.length !== groupedItems.length;
  };

  useEffect(() => {
    groupSelectAllRef.current &&
      (groupSelectAllRef.current.indeterminate = isIndeterminate());
  }, [dropdownGroup, selectedItems]);

  return (
    <DropdownGroupFieldset>
      <DropdownGroupedFieldsetLegend>{dropdownGroup.label}</DropdownGroupedFieldsetLegend>
      <SelectAllContainer isChecked={intersection.length === groupedItems.length}>
        <SelectAllCheckbox
          id={`${rootId}-select-all`}
          checkboxRef={groupSelectAllRef}
          checked={intersection.length === groupedItems.length}
          onChange={() => onSelectItems(groupedItems, selectedItems)}
          onFocus={() => onFocus(-1)}
        >
          {selectGroupLabel}{intersection.length === groupedItems.length}
        </SelectAllCheckbox>
      </SelectAllContainer>
      {groupedItems.map((groupedItem, index) => (
        <DropdownMultiItem
          key={groupedItem.label}
          checkboxRef={getItemRef(groupedItem.id)}
          selected={selectedItems.indexOf(groupedItem) > -1}
          checked={selectedItems.indexOf(groupedItem) > -1}
          onChange={() => onSelectItems([groupedItem], selectedItems)}
          onFocus={() => onFocus(flatItems.indexOf(groupedItem))}
          id={`${rootId}-${index}`}
          label={groupedItem.label}
          onKeyDownItem={(event: KeyboardEvent<HTMLInputElement>) =>
            onKeyDownGroupItem(event, flatItems.indexOf(groupedItem))
          }
        />
      ))}
    </DropdownGroupFieldset>
  );
};

export const DropdownMultiGroup = styled(_DropdownMultiGroup)``;
