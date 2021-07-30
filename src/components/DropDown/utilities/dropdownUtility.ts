import React from "react";
import { DropdownActionType, IDropdownAction, IDropdownItem } from "../";
import { ChangeEvent } from "react";

export const getMultiActions = (dispatch: React.Dispatch<IDropdownAction>) => {
  return {
    closeDropdown: () => {
      dispatch({ type: DropdownActionType.CLOSE_DROPDOWN });
    },
    onFocusItem: (focusedIndex: number) => {
      dispatch({ type: DropdownActionType.FOCUS_ITEM, payload: focusedIndex });
    },
    onSelectAll: (
      event: ChangeEvent<HTMLInputElement>,
      items: IDropdownItem[]
    ) => {
      if (event.target.checked) {
        dispatch({ type: DropdownActionType.SET_ITEMS, payload: items });
      } else {
        dispatch({ type: DropdownActionType.DESELECT_ALL });
      }
    },
    onSelectItems: (items: IDropdownItem[], selectedItems: IDropdownItem[]) => {
      const intersection = items.filter(item =>
        selectedItems.includes(item)
      );
      if (intersection.length === 0) {
        dispatch({
          type: DropdownActionType.ADD_SELECTED_ITEMS,
          payload: items,
        });
      } else if (intersection.length === items.length) {
        dispatch({
          type: DropdownActionType.REMOVE_SELECTED_ITEMS,
          payload: items,
        });
      } else {
        dispatch({
          type: DropdownActionType.ADD_SELECTED_ITEMS,
          payload: items.filter(item => !intersection.includes(item)),
        });
      }
    },
  };
};
