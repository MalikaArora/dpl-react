import React from "react";
import DataTable from "@avrc/data-table";

export default {
  title: "@avrc/DataTable",
  component: DataTable,
};

const columns = [
  {
    label: "Summary Place of Service Description",
    width: 25,
  },
  { align: "center", label: "Change", width: 15 },
  { align: "right", label: "Current Units" },
  { align: "right", label: "Prior Units" },
  {
    align: "center",
    label: "Total Plan Paid PMPM",
    children: [
      { align: "right", label: "Current" },
      { align: "right", label: "Prior" },
      { align: "right", label: "Change Due to Volume" },
      { align: "right", label: "Change Due to Price" },
    ],
  },
];

const rows = [
  {
    data: [
      { text: "Inpatient" },
      { text: "-15.0%" },
      { text: "000" },
      { text: "000" },
      { text: "$000.00" },
      { text: "$000.00" },
      { text: "$000.00" },
      { text: "-$000.00" },
    ],
    children: [
      {
        data: [
          { text: "Sample", className: "colWidth25Pct" },
          {
            text: "25.0%",
          },
          { text: "000" },
          { text: "000" },
          { text: "$000.00" },
          { text: "$000.00" },
          { text: "$000.00" },
          { text: "$000.00" },
        ],
      },
      {
        data: [
          {
            text: "Sample",
          },
          {
            text: "-50.0%",
          },
          { text: "000" },
          { text: "000" },
          { text: "$000.00" },
          { text: "$000.00" },
          { text: "$000.00" },
          { text: "$000.00" },
        ],
      },
      {
        data: [
          {
            text: "Sample",
          },
          {
            text: "2.0%",
          },
          { text: "000" },
          { text: "000" },
          { text: "$000.00" },
          { text: "$000.00" },
          { text: "$000.00" },
          { text: "$000.00" },
        ],
      },
    ],
  },
  {
    data: [
      { text: "Outpatient" },
      { text: "30.0%" },
      { text: "000" },
      { text: "000" },
      { text: "$000.00" },
      { text: "$000.00" },
      { text: "$000.00" },
      { text: "-$000.00" },
    ],
    children: [
      {
        data: [
          { text: "Sample", className: "colWidth25Pct" },
          {
            text: "15.0%",
          },
          { text: "000" },
          { text: "000" },
          { text: "$000.00" },
          { text: "$000.00" },
          { text: "$000.00" },
          { text: "$000.00" },
        ],
      },
      {
        data: [
          {
            text: "Sample",
          },
          {
            text: "-5.0%",
          },
          { text: "000" },
          { text: "000" },
          { text: "$000.00" },
          { text: "$000.00" },
          { text: "$000.00" },
          { text: "$000.00" },
        ],
      },
    ],
  },
];

export const Basic = () => (
  <DataTable
    columns={columns}
    rows={rows.map((row) => ({ ...row, children: [] }))}
  />
);
Basic.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Expandable = () => <DataTable columns={columns} rows={rows} />;
Expandable.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Selectable = () => {
  const [selectedIndexes, setSelectedIndexes] = React.useState([]);

  return (
    <DataTable
      columns={columns}
      onRowSelect={(rowIndex) => {
        selectedIndexes.includes(rowIndex)
          ? setSelectedIndexes(
              selectedIndexes.filter((index) => index !== rowIndex)
            )
          : setSelectedIndexes([...selectedIndexes, rowIndex]);
      }}
      rows={rows.map((row) => ({ ...row, children: [] }))}
      selectedRowIndexes={selectedIndexes}
    />
  );
};
Selectable.parameters = {
  controls: { hideNoControlsWarning: true },
};