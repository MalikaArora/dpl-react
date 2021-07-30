import { getMultiActions } from "./dropdownUtility";
import { DropdownActionType, IDropdownItem } from "../types";
import { ChangeEvent } from "react";

const mockDispatch = jest.fn();
const multiActions = getMultiActions(mockDispatch);
const mockItems: IDropdownItem[] = [
  { id: "1", label: "Item 1", value: "One" },
  { id: "2", label: "Item 2", value: "Two" },
  { id: "3", label: "Item 3", value: "Three" },
];

describe("closeDropdown()", () => {
  it("dispatches close dropdown", () => {
    // ACT
    multiActions.closeDropdown();
    // ASSERT
    expect(mockDispatch).toHaveBeenCalledWith({
      type: DropdownActionType.CLOSE_DROPDOWN,
    });
  });
});

describe("onSelectAll()", () => {
  it("dispatches set items if target is checked", () => {
    // ARRANGE
    const mockEvent = {
      target: {
        checked: true,
      }
    } as ChangeEvent<HTMLInputElement>;
    // ACT
    multiActions.onSelectAll(mockEvent, mockItems);
    // ASSERT
    expect(mockDispatch).toHaveBeenCalledWith({ type: DropdownActionType.SET_ITEMS, payload: mockItems });
  });
  it("dispatches deselect all items if target is not checked", () => {
    // ARRANGE
    const mockEvent = {
      target: {
        checked: false,
      }
    } as ChangeEvent<HTMLInputElement>;
    // ACT
    multiActions.onSelectAll(mockEvent, mockItems);
    // ASSERT
    expect(mockDispatch).toHaveBeenCalledWith({ type: DropdownActionType.DESELECT_ALL });
  });
});

describe("onSelectItems()", () => {
  it("dispatches remove if item is already selected", () => {
    // ARRANGE
    const mockItem = { id: "1", label: "Item 1", value: "One" };
    const mockSelectedItems: IDropdownItem[] = [mockItem, mockItems[1]];
    // ACT
    multiActions.onSelectItems([mockItem], mockSelectedItems);
    // ASSERT
    expect(mockDispatch).toHaveBeenCalledWith({
      type: DropdownActionType.REMOVE_SELECTED_ITEMS,
      payload: [mockItem],
    });
  });
  it("dispatches add if item is not already selected", () => {
    // ARRANGE
    const mockItem = { id: "1", label: "Item 1", value: "One" };
    const mockSelectedItems: IDropdownItem[] = [mockItems[1], mockItems[2]];
    // ACT
    multiActions.onSelectItems([mockItem], mockSelectedItems);
    // ASSERT
    expect(mockDispatch).toHaveBeenCalledWith({
      type: DropdownActionType.ADD_SELECTED_ITEMS,
      payload: [mockItem],
    });
  });
});
