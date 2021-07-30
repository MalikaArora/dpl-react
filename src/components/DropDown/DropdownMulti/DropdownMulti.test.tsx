import React from "react";
import { Dropdown, IDropdownItem } from "../";
import { cleanup, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "@test-util";

const itemList: IDropdownItem[] = [
  { id: "1", label: "Ireland", value: "EIR" },
  { id: "2", label: "England", value: "ENG" },
  { id: "3", label: "Germany", value: "GER" },
  { id: "4", label: "France", value: "FRANC" },
  { id: "5", label: "Scotland", value: "SCOT" },
];

const charNavItemList: IDropdownItem[] = [
  { id: "1", label: "England", value: "ENG" },
  { id: "2", label: "Ireland", value: "EIR" },
  { id: "3", label: "Greece", value: "GRE" },
  { id: "4", label: "Sweden", value: "SWE" },
  { id: "5", label: "Scotland", value: "SCOT" },
  { id: "6", label: "France", value: "FRANC" },
  { id: "7", label: "Germany", value: "GER" },
  { id: "8", label: "Switzerland", value: "SWI" },
];

const groupedItems = [
  { id: "1", label: 'England', value: 'ENG' },
  { id: "2", label: 'Scotland', value: 'SCOT' },
  {
    id: "3",
    label: 'Ireland',
    value: [
      { id: "4", label: 'Dublin', value: 'DUB' },
      { id: "5", label: 'Meath', value: 'MEA' },
      { id: "6", label: 'Westmeath', value: 'WM' },
    ],
  },
  { id: "7", label: 'Spain', value: 'SPN' },
  {
    id: "8",
    label: 'France',
    value: [
      { id: "9", label: 'Paris', value: 'PAR' },
      { id: "10", label: 'Nice', value: 'NIC' },
    ],
  },
  { id: "11", label: 'Germany', value: 'GER' },
];

const tabNTimes = (n: number) => {
  for (let i = 0; i < n; i++) {
    userEvent.tab();
  }
};

window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe("dropdown multi test", () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test("it displays selected options", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByText("England"));
    userEvent.click(screen.getByText("Ireland"));
    userEvent.click(screen.getByText("France"));
    expect(screen.getByRole("button")).toHaveTextContent(
      "England, Ireland, France"
    );
  });

  test("it displays updated selection when option de-selected", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByText("England"));
    userEvent.click(screen.getByText("Ireland"));
    userEvent.click(screen.getByText("France"));
    expect(screen.getByRole("button")).toHaveTextContent(
      "England, Ireland, France"
    );
    userEvent.click(screen.getByText("Ireland"));
    expect(screen.getByRole("button")).toHaveTextContent("England, France");
  });

  test("it displays provided fieldset legend text", () => {
    renderWithTheme(
      <Dropdown
        type="multi"
        items={itemList}
        fieldsetLabel="Fieldset Legend Test"
      />
    );

    userEvent.click(screen.getByRole("button"));
    expect(
      screen.getByRole("group", { name: /Fieldset Legend Test/i })
    ).toBeInTheDocument();
  });

  test("it focuses select all when dropdown opens", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByLabelText("Select All")).toHaveFocus();
  });

  test("it selects all options when select all checkbox clicked", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByText("Select All"));
    expect(screen.getByRole("button")).toHaveTextContent(
      "Ireland, England, Germany, France, Scotland"
    );
  });

  test("it selects all options in group when group select all checkbox clicked", () => {
    renderWithTheme(
      <Dropdown type="multi" items={groupedItems} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.queryAllByText("Select Group")[0]);
    expect(screen.getByRole("button")).toHaveTextContent(
      "Dublin, Meath, Westmeath"
    );
  });

  test("it renders select all with provided label", () => {
    renderWithTheme(
      <Dropdown
        type="multi"
        items={itemList}
        fieldsetLabel="Fieldset Legend"
        selectAllLabel="Test Select All"
      />
    );

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Test Select All")).toBeDefined();
  });

  test("it renders all group select all labels with provided group label", () => {
    renderWithTheme(
      <Dropdown
        type="multi"
        items={groupedItems}
        fieldsetLabel="Fieldset Legend"
        selectGroupLabel="Test Select Group"
      />
    );

    userEvent.click(screen.getByRole("button"));
    expect(screen.getAllByText("Test Select Group").length).toEqual(2);
  });

  test("it uses provided selected text in trigger", () => {
    renderWithTheme(
      <Dropdown
        type="multi"
        items={itemList}
        fieldsetLabel="Fieldset Legend"
        selectedText="are selected"
      />
    );

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByText("Select All"));
    expect(screen.getByRole("button").textContent).toContain("(are selected)");
  });

  test("it uses provided button descriptive text in trigger", () => {
    renderWithTheme(
      <Dropdown
        type="multi"
        items={itemList}
        fieldsetLabel="Fieldset Legend"
        buttonDescriptiveText="description"
      />
    );

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByText("Select All"));
    expect(screen.getByRole("button").textContent).toContain("description");
  });

  test("it focuses next item when tab is pressed", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByLabelText("Select All")).toHaveFocus();
    tabNTimes(3);
    expect(screen.getByLabelText("Germany")).toHaveFocus();
    userEvent.tab();
    expect(screen.getByLabelText("France")).toHaveFocus();
  });

  test("it focuses previous item when shift tab is pressed", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByLabelText("Select All")).toHaveFocus();
    tabNTimes(3);
    expect(screen.getByLabelText("Germany")).toHaveFocus();
    userEvent.tab({ shift: true });
    expect(screen.getByLabelText("England")).toHaveFocus();
  });

  test("it focuses previous item when shift tab is pressed on last item", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByLabelText("Select All")).toHaveFocus();
    tabNTimes(5);
    expect(screen.getByLabelText("Scotland")).toHaveFocus();
    userEvent.tab({ shift: true });
    expect(screen.getByLabelText("France")).toHaveFocus();
  });

  test("it focuses dropdown trigger when shift tab is pressed on select all", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByLabelText("Select All")).toHaveFocus();
    userEvent.tab({ shift: true });
    expect(screen.getByLabelText("Please Select")).toHaveFocus();
  });

  test("it focuses first item when home key is pressed", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    tabNTimes(3);
    expect(screen.getByLabelText("Germany")).toHaveFocus();
    fireEvent.keyDown(screen.getByRole("group"), { key: "Home" });
    expect(screen.getByLabelText("Ireland")).toHaveFocus();
  });

  test("it focuses last item when end key is pressed", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    tabNTimes(3);
    expect(screen.getByLabelText("Germany")).toHaveFocus();
    fireEvent.keyDown(screen.getByRole("group"), { key: "End" });
    expect(screen.getByLabelText("Scotland")).toHaveFocus();
  });

  test("it closes dropdown when last item is tabbed off", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    tabNTimes(5);
    expect(screen.getByLabelText("Scotland")).toHaveFocus();
    userEvent.tab();
    expect(screen.queryByText("Ireland")).toBeNull();
  });

  test("it closes dropdown and focuses trigger when escape key pressed", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).not.toHaveFocus();
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    userEvent.type(screen.getByRole("button"), "{esc}", { skipClick: true });
    expect(screen.queryByText("Ireland")).toBeNull();
    expect(screen.getByRole("button")).toHaveFocus();
  });

  test("it closes dropdown when another element is clicked", () => {
    const DummyComponent: React.FC = () => (
      <>
        <Dropdown
          type="multi"
          items={itemList}
          fieldsetLabel="Fieldset Legend"
        />
        <button>Test Button</button>
      </>
    );
    renderWithTheme(<DummyComponent />);
    userEvent.click(screen.getAllByRole("button")[0]);
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    userEvent.click(screen.getAllByRole("button")[1]);
    expect(screen.queryByText("Ireland")).toBeNull();
  });

  test("it closes dropdown when trigger is shift tabbed", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByLabelText("Select All")).toHaveFocus();
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    userEvent.tab({ shift: true });
    expect(screen.getByRole("button")).toHaveFocus();
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    userEvent.tab({ shift: true });
    expect(screen.queryByText("Ireland")).toBeNull();
  });

  test("it closes dropdown when escape key pressed", () => {
    renderWithTheme(
      <Dropdown type="multi" items={itemList} fieldsetLabel="Fieldset Legend" />
    );

    userEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Ireland")).toBeInTheDocument();
    userEvent.type(screen.getByRole("button"), "{esc}", { skipClick: true });
    expect(screen.queryByText("Ireland")).toBeNull();
  });

  test("it focuses 'Ireland' when 'i' is pressed, and 'Greece' when 'g' is pressed", () => {
    renderWithTheme(
      <Dropdown
        type="multi"
        items={charNavItemList}
        fieldsetLabel="Fieldset Legend"
      />
    );

    userEvent.click(screen.getByRole("button"));
    fireEvent.keyDown(screen.getByRole("group"), { key: "i" });
    expect(screen.getByLabelText("Ireland")).toHaveFocus();
    fireEvent.keyDown(screen.getByRole("group"), { key: "g" });
    expect(screen.getByLabelText("Greece")).toHaveFocus();
  });

  test("it cycles focus through items beginning with pressed character when character typed multiple times", () => {
    renderWithTheme(
      <Dropdown
        type="multi"
        items={charNavItemList}
        fieldsetLabel="Fieldset Legend"
      />
    );

    userEvent.click(screen.getByRole("button"));
    fireEvent.keyDown(screen.getByRole("group"), { key: "s" });
    expect(screen.getByLabelText("Sweden")).toHaveFocus();
    fireEvent.keyDown(screen.getByRole("group"), { key: "s" });
    expect(screen.getByLabelText("Scotland")).toHaveFocus();
    fireEvent.keyDown(screen.getByRole("group"), { key: "s" });
    expect(screen.getByLabelText("Switzerland")).toHaveFocus();
    fireEvent.keyDown(screen.getByRole("group"), { key: "s" });
    expect(screen.getByLabelText("Sweden")).toHaveFocus();
  });

  test("it doesn't change focus when no item begins with pressed character", () => {
    renderWithTheme(
      <Dropdown
        type="multi"
        items={charNavItemList}
        fieldsetLabel="Fieldset Legend"
      />
    );

    userEvent.click(screen.getByRole("button"));
    fireEvent.keyDown(screen.getByRole("group"), { key: "i" });
    expect(screen.getByLabelText("Ireland")).toHaveFocus();
    fireEvent.keyDown(screen.getByRole("group"), { key: "x" });
    expect(screen.getByLabelText("Ireland")).toHaveFocus();
  });
});
