import DataTable from "./datatable/index";

const columns = [
  { name: "No#", field: "id", sortable: false, bools: false },
  { name: "Name", field: "name", sortable: true, bools: false },
  { name: "Email", field: "email", sortable: true, bools: false },
  // { name: "Comment", field: "body", sortable: true, bools: false },
  // { name: "From", field: "from", sortable: true, bools: false},
  { name: "Human", field: "human", sortable: true, bools: true},
  { name: "Life", field: "life", sortable: true, bools: true}
];

const rows = [
  { id: '1', name: 'Cheese', email:"abc",  human:"true", life:"false"},
  { id: '2', name: 'Milk', email:"def", human:"false", life:"false"},
  { id: '3', name: 'Yoghurt', email:"aghi", human:"true", life:"true"},
  { id: '4', name: 'Heavy Cream', email:"jkl", human:"true", life:"false"},
  { id: '5', name: 'Butter', email:"amno", human:"false", life:"false" },
  { id: '6', name: 'Sour Cream ', email:"pqr", human:"false", life:"true" },
  { id: '7', name: 'Fancy French', email:"stu", human:"false",life:"false" },
];
// const rows = [
//   { id: '1', name: 'Cheese', email:"abc", body:"aaa", from:"qwer" },
//   { id: '2', name: 'Milk', email:"def", body:"ddd", from:"tyuio" },
//   { id: '3', name: 'Yoghurt', email:"aghi", body:"ggg", from:"asdf" },
//   { id: '4', name: 'Heavy Cream', email:"jkl", body:"jjj", from:"ghjk" },
//   { id: '5', name: 'Butter', email:"amno", body:"mmm", from:"zxcv" },
//   { id: '6', name: 'Sour Cream ', email:"pqr", body:"ppp", from:"bnml" },
//   { id: '7', name: 'Fancy French Cheese 🇫🇷', email:"stu", body:"sss", from:"polkjm" },
// ];

function App() {
  return (
    <div>
      <DataTable columns={columns} rows={rows} isSortable="true" showCheckbox="true"></DataTable>
    </div>
  );
}

export default App;
