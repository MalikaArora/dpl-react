import DataTable from "./datatable/index";
export default{
  title: 'New Data Table 2'
}
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
  { id: '8', name: 'Cheese', email:"abc",  human:"true", life:"false"},
  { id: '9', name: 'Milk', email:"def", human:"false", life:"false"},
  { id: '10', name: 'Yoghurt', email:"aghi", human:"true", life:"true"},
  { id: '11', name: 'Heavy Cream', email:"jkl", human:"true", life:"false"},
  { id: '12', name: 'Butter', email:"amno", human:"false", life:"false" },
  { id: '13', name: 'Sour Cream ', email:"pqr", human:"false", life:"true" },
  { id: '14', name: 'Fancy French', email:"stu", human:"false",life:"false" },
  { id: '15', name: 'Cheese', email:"abc",  human:"true", life:"false"},
  { id: '16', name: 'Milk', email:"def", human:"false", life:"false"},
  { id: '17', name: 'Yoghurt', email:"aghi", human:"true", life:"true"},
  { id: '18', name: 'Heavy Cream', email:"jkl", human:"true", life:"false"},
  { id: '19', name: 'Butter', email:"amno", human:"false", life:"false" },
  { id: '20', name: 'Sour Cream ', email:"pqr", human:"false", life:"true" },
  { id: '21', name: 'Fancy French', email:"stu", human:"false",life:"false" },
  { id: '22', name: 'Cheese', email:"abc",  human:"true", life:"false"},
  { id: '23', name: 'Milk', email:"def", human:"false", life:"false"},
  { id: '24', name: 'Yoghurt', email:"aghi", human:"true", life:"true"},
  { id: '25', name: 'Heavy Cream', email:"jkl", human:"true", life:"false"},
  { id: '26', name: 'Butter', email:"amno", human:"false", life:"false" },
  { id: '27', name: 'Sour Cream ', email:"pqr", human:"false", life:"true" },
  { id: '28', name: 'Fancy French', email:"stu", human:"false",life:"false" },
  { id: '29', name: 'Cheese', email:"abc",  human:"true", life:"false"},
  { id: '30', name: 'Milk', email:"def", human:"false", life:"false"},
  { id: '31', name: 'Yoghurt', email:"aghi", human:"true", life:"true"},
  { id: '32', name: 'Heavy Cream', email:"jkl", human:"true", life:"false"},
  { id: '33', name: 'Butter', email:"amno", human:"false", life:"false" },
  { id: '34', name: 'Sour Cream ', email:"pqr", human:"false", life:"true" },
  { id: '35', name: 'Fancy French', email:"stu", human:"false",life:"false" },
  { id: '36', name: 'Cheese', email:"abc",  human:"true", life:"false"},
  { id: '37', name: 'Milk', email:"def", human:"false", life:"false"},
  { id: '38', name: 'Yoghurt', email:"aghi", human:"true", life:"true"},
  { id: '39', name: 'Heavy Cream', email:"jkl", human:"true", life:"false"},
  { id: '40', name: 'Butter', email:"amno", human:"false", life:"false" },
  { id: '41', name: 'Sour Cream ', email:"pqr", human:"false", life:"true" },
  { id: '42', name: 'Fancy French', email:"stu", human:"false",life:"false" },
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

export const App = () => {
  return (
    <div>
      <DataTable columns={columns} rows={rows} isSortable="true" showCheckbox="true"></DataTable>
    </div>
  );
}

