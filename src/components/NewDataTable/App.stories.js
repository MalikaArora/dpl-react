import DataTable from "./datatable/index";

export default {
  title: 'New Data Table'
}
const columns = [
  { name: "No#", field: "id", sortable: false, bools: false},
  { name: "Name", field: "name", sortable: true, bools: false},
  // { name: "Email", field: "email", sortable: true },
  // { name: "Comment", field: "body", sortable: true },
  // { name: "From", field: "from", sortable: true},
  { name: "Human", field: "human", sortable: true, bools: true},
  { name: "Life", field: "life", sortable: true, bools: true},
  { name: "Choices", field: "choices", sortable: false, check: true},


];

const rows = [
  { id: '1', name: 'Cheese', human:"true", life:"false", choices:"checked" },
  { id: '2', name: 'Milk', human:"false", life:"false" },
  { id: '3', name: 'Yoghurt', human:"true", life:"true" },
  { id: '4', name: 'Heavy Cream', human:"true", life:"false" },
  { id: '5', name: 'Butter', human:"false", life:"false" },
  { id: '6', name: 'Sour Cream ', human:"false", life:"true" },
  { id: '7', name: 'Fancy French', human:"false",life:"false" },
];

// const rows = [
//   { id: '1', name: 'Cheese', email:"abc", body:"aaa", from:"qwer" },
//   { id: '2', name: 'Milk', email:"def", body:"ddd", from:"tyuio" },
//   { id: '3', name: 'Yoghurt', email:"ghi", body:"ggg", from:"asdf" },
//   { id: '4', name: 'Heavy Cream', email:"jkl", body:"jjj", from:"ghjk" },
//   { id: '5', name: 'Butter', email:"mno", body:"mmm", from:"zxcv" },
//   { id: '6', name: 'Sour Cream ', email:"pqr", body:"ppp", from:"bnml" },
//   { id: '7', name: 'Fancy French Cheese 🇫🇷', email:"stu", body:"sss", from:"polkjm" },
// ];

export const App = () => {
  return (
    <div>
      <DataTable columns={columns} rows={rows}></DataTable>
    </div>
  );
}

