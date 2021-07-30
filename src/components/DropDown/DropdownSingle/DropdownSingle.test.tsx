import React, { useState } from "react";
import { Dropdown, IDropdownItem } from "../";
import { fireEvent, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "@test-util";
import {
  boxShadowWidthFormsBase,
  colorBorderError,
} from "@uitk/themes/solas/design-tokens.common";
import 'jest-styled-components';

const itemList: IDropdownItem[] = [
  { id: "1", label: "Ireland", value: "EIR" },
  { id: "2", label: "England", value: "ENG" },
  { id: "3", label: "Germany", value: "GER" },
  { id: "4", label: "France", value: "FRANC" },
  { id: "5", label: "Scotland", value: "SCOT" },
];

describe("dropdown single test", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test("it opens dropdown with click", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} />
    );
    userEvent.click(screen.getByText("Please Select"));
    expect(screen.getByText("Ireland")).toBeInTheDocument();
  });

  test("it displays provided placeholder test", () => {
    renderWithTheme(
      <Dropdown
        type="single"
        items={itemList}
        placeholderText="Test Placeholder"
      />
    );
    expect(screen.getByRole("button")).toHaveTextContent(
      "Test Placeholder"
    );
  });

  test("it opens dropdown with enter", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} />
    );
    const dropdownTrigger = screen.getByText("Please Select");
    userEvent.tab();
    userEvent.type(dropdownTrigger, "{enter}", { skipClick: true });
    expect(screen.getByText("Ireland")).toBeInTheDocument();
  });

  test("it opens dropdown with space", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} />
    );
    const dropdownTrigger = screen.getByText("Please Select");
    userEvent.tab();
    userEvent.type(dropdownTrigger, "{space}", { skipClick: true });
    expect(screen.getByText("Ireland")).toBeInTheDocument();
  });

  test("it disables the dropdown if provided disabled prop", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} disabled />
    );
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
    expect(screen.queryByText("Ireland")).toBeNull();
  });

  test("it renders with error styling when error prop is set", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} error="error" />
    );
    expect(screen.getByRole("button")).toHaveStyleRule(`
        box-shadow: ${boxShadowWidthFormsBase} ${colorBorderError};
    `);
  });

  test("it displays selected option", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} />
    );
    expect(screen.getByRole("button")).toHaveTextContent(
      "Please Select"
    );
    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByText("England"));
    expect(screen.getByRole("button")).toHaveTextContent("England");
  });

  test("it highlights selected option in dropdown", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} />
    );
    expect(screen.getByRole("button")).toHaveTextContent(
      "Please Select"
    );
    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByText("England"));
    expect(screen.getByRole("button")).toHaveTextContent("England");
    userEvent.click(screen.getByRole("button"));
    const options = screen.getAllByRole("option");
    expect(options[1]).toHaveTextContent("England");
    expect(options[1]).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  test("it sets controlled value", () => {
    const DummyComponent: React.FC = () => {
      const [value, setValue] = useState(itemList[0]);
      const onChange = (selectedItem: IDropdownItem) => {
        setValue(selectedItem);
      };

      return (
        <Dropdown
          type="single"
          onChange={onChange}
          items={itemList}
          value={value}
         
        />
      );
    };
    renderWithTheme(<DummyComponent />);
    expect(screen.getByRole("button")).toHaveTextContent("Ireland");
    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByText("Germany"));
    expect(screen.getByRole("button")).toHaveTextContent("Germany");
  });

  test("it closes dropdown when another element is clicked", () => {
    const DummyComponent: React.FC = () => (
      <>
        <Dropdown type="single" items={itemList} />
        <button>Test Button</button>
      </>
    );
    renderWithTheme(<DummyComponent />);
    userEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    userEvent.click(screen.getAllByRole("button")[1]);
    expect(screen.queryByText("Ireland")).toBeNull();
  });

  test("it closes dropdown when tabbed off", () => {
    const DummyComponent: React.FC = () => (
      <>
        <Dropdown type="single" items={itemList} />
        <button>Test Button</button>
      </>
    );
    renderWithTheme(<DummyComponent />);
    userEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    userEvent.tab();
    expect(screen.queryByText("Ireland")).toBeNull();
  });

  test("it closes dropdown when escape key pressed", () => {
    const DummyComponent: React.FC = () => (
      <>
        <Dropdown type="single" items={itemList} />
        <button>Test Button</button>
      </>
    );
    renderWithTheme(<DummyComponent />);
    userEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    userEvent.type(screen.getAllByRole("button")[0], "{esc}", { skipClick: true });
    expect(screen.queryByText("Ireland")).toBeNull();
  });

  test("it highlights previous option if up key pressed", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} value={itemList[2]}/>
    );
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    const options = screen.getAllByRole("option");
    expect(options[2]).toHaveTextContent("Germany");
    expect(options[2]).toHaveAttribute(
      "aria-selected",
      "true"
    );
    fireEvent.keyDown(screen.getByRole("listbox"), { key: "ArrowUp" });
    expect(options[1]).toHaveTextContent("England");
    expect(options[1]).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  test("it highlights next option if down key pressed", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} value={itemList[2]}/>
    );
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    const options = screen.getAllByRole("option");
    expect(options[2]).toHaveAttribute(
      "aria-selected",
      "true"
    );
    fireEvent.keyDown(screen.getByRole("listbox"), { key: "ArrowDown" });
    expect(options[3]).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  test("it highlights first option if home key pressed", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} value={itemList[2]}/>
    );
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    const options = screen.getAllByRole("option");
    expect(options[2]).toHaveAttribute(
      "aria-selected",
      "true"
    );
    fireEvent.keyDown(screen.getByRole("listbox"), { key: "Home" });
    expect(options[0]).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  test("it highlights last option if home end pressed", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} value={itemList[2]}/>
    );
    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    const options = screen.getAllByRole("option");
    expect(options[2]).toHaveAttribute(
      "aria-selected",
      "true"
    );
    fireEvent.keyDown(screen.getByRole("listbox"), { key: "End" });
    expect(options[4]).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  test("it highlights first option if down key pressed on last", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} value={itemList[4]}/>
    );
    userEvent.click(screen.getByRole("button"));
    const options = screen.getAllByRole("option");
    expect(options[4]).toHaveAttribute(
      "aria-selected",
      "true"
    );
    fireEvent.keyDown(screen.getByRole("listbox"), { key: "ArrowDown" });
    expect(options[0]).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  test("it highlights last option if up key pressed on first", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} value={itemList[0]}/>
    );
    userEvent.tab();
    userEvent.type(screen.getByRole("button"), "{enter}", { skipClick: true });
    const options = screen.getAllByRole("option");
    expect(options[0]).toHaveAttribute(
      "aria-selected",
      "true"
    );
    fireEvent.keyDown(screen.getByRole("listbox"), { key: "ArrowUp" });
    expect(options[4]).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  test("it highlights option if first character is typed", () => {
    renderWithTheme(
      <Dropdown type="single" items={itemList} value={itemList[0]}/>
    );
    userEvent.tab();
    userEvent.type(screen.getByRole("button"), "{enter}", { skipClick: true });
    const options = screen.getAllByRole("option");
    expect(options[0]).toHaveAttribute(
      "aria-selected",
      "true"
    );
    fireEvent.keyDown(screen.getByRole("listbox"), { key: "S" });
    expect(options[0]).toHaveAttribute(
      "aria-selected",
      "false"
    );
    expect(options[4]).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });
});
