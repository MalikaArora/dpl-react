export type IDropdownItem = {
  id: string | number;
  label: string;
  value: string | number | IDropdownItem[];
};

interface DropdownBaseProps {
  /**
   * Optional classname applied to component root.
   */
  className?: string;
  /**
   * Id of Dropdown.
   */
  id?: string;
  /**
   * Array of items that will be rendered in the dropdown component.
   */
  items: IDropdownItem[];
  /**
   * Whether dropdown is in error state.
   */
  error?: null | string;
  /**
   * Whether dropdown is in disabled state.
   */
  disabled?: boolean;
  /**
   * Whether dropdown is required.
   */
  required?: boolean;
  /**
   * Placeholder for dropdown without a selection.
   */
  placeholderText?: string;
  /**
   * Callback for when dropdown is blurred.
   */
  onBlur?: () => void;
}

export interface DropdownSingleProps extends DropdownBaseProps {
  type: "single";
  /**
   * Provided value for single context dropdown.
   */
  value: IDropdownItem;
  /**
   * Use Form Control describedby as labelledby for uniform screen reader performance.
   */
  labelledBy?: string;
  /**
   * Callback for when dropdown value changes.
   */
  onChange?: onSingleDropdownChange;
  // mark multi props as never types
  fieldsetLabel?: never;
  initialValues?: never;
  selectAllLabel?: never;
  selectGroupLabel?: never;
  buttonDescriptiveText?: never;
  selectedText?: never;
}

export interface DropdownMultiProps extends DropdownBaseProps {
  type: "multi";
  /**
   * Provided values for multi context dropdown.
   */
  initialValues?: IDropdownItem[];
  /**
   * Provided label for dropdown fieldset.
   */
  fieldsetLabel: string;
  /**
   * Callback for when dropdown value changes.
   */
  onChange?: onMultiDropdownChange;
  /**
   * Use Form Control describedby as labelledby for uniform screen reader performance.
   */
  labelledBy?: string;
  /**
   * Provided label for dropdown select all.
   */
  selectAllLabel?: string;
  /**
   * Provided label for dropdown groups select all.
   */
  selectGroupLabel?: string;
  /**
   * Provided, visually hidden descriptive text for button used for a11y.
   */
  buttonDescriptiveText?: string
  /**
   * Provided, visually hidden selected text for button used for a11y.
   */
  selectedText?: string
  // mark single props as never types
  value?: never;
}

export type DropdownProps = DropdownSingleProps | DropdownMultiProps;

export type onSingleDropdownChange = (selection: IDropdownItem) => void;

export type onMultiDropdownChange = (selection: IDropdownItem[]) => void;


export type IDropdownState = {
  isOpen: boolean;
  selectedItems: IDropdownItem[];
  triggerHeight?: string;
  focusedIndex: number;
  initialCharacters: string[];
};

export type IDropdownAction = {
  type?: DropdownActionType;
  payload?: any;
};

export enum DropdownActionType {
  TOGGLE_DROPDOWN,
  CLOSE_DROPDOWN,
  ADD_SELECTED_ITEMS,
  REMOVE_SELECTED_ITEMS,
  SET_ITEMS,
  SET_TRIGGER_HEIGHT,
  DESELECT_ALL,
  FOCUS_ITEM,
  SET_INITIAL_CHARACTERS,
}
