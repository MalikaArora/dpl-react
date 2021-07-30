import { DropdownActionType, IDropdownState, IDropdownAction } from "./types";

export const dropdownReducer = (
  dropdownState: IDropdownState,
  action: IDropdownAction
): IDropdownState => {
  switch (action.type) {
    case DropdownActionType.TOGGLE_DROPDOWN:
      return {
        ...dropdownState,
        isOpen: !dropdownState.isOpen,
      };
    case DropdownActionType.CLOSE_DROPDOWN:
      return {
        ...dropdownState,
        isOpen: false,
      };
    case DropdownActionType.ADD_SELECTED_ITEMS:
      return {
        ...dropdownState,
        selectedItems: [...dropdownState.selectedItems, ...action.payload],
      };
    case DropdownActionType.REMOVE_SELECTED_ITEMS:
      return {
        ...dropdownState,
        selectedItems: dropdownState.selectedItems.filter(
          item => !action.payload.includes(item)
        ),
      };
    case DropdownActionType.SET_ITEMS:
      return {
        ...dropdownState,
        selectedItems: action.payload,
      };
    case DropdownActionType.DESELECT_ALL:
      return {
        ...dropdownState,
        selectedItems: [],
      };
    case DropdownActionType.SET_TRIGGER_HEIGHT:
      return {
        ...dropdownState,
        triggerHeight: action.payload,
      };
    case DropdownActionType.FOCUS_ITEM:
      return {
        ...dropdownState,
        focusedIndex: action.payload,
      };
    case DropdownActionType.SET_INITIAL_CHARACTERS:
      return {
        ...dropdownState,
        initialCharacters: action.payload,
      };
    default:
      return dropdownState;
  }
};
