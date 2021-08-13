import DataTable from "./datatable/index";
export default{
  title: 'New Data Table 2'
}
const columns = [
  { name: "No#", field: "id", sortable: true, bools: false },
  { name: "Name", field: "name", sortable: true, bools: false },
  { name: "Email", field: "email", sortable: true, bools: false },
  // { name: "Comment", field: "body", sortable: true, bools: false },
  // { name: "From", field: "from", sortable: true, bools: false},
  { name: "Human", field: "human", sortable: true, bools: true},
  { name: "Life", field: "life", sortable: true, bools: true}
];

const rows = [
  { id: '1', name: 'name1', email:"abc",  human:"true", life:"false"},
  { id: '2', name: 'name2', email:"def", human:"false", life:"false"},
  { id: '3', name: 'name3', email:"aghi", human:"true", life:"true"},
  { id: '4', name: 'name4', email:"jkl", human:"true", life:"false"},
  { id: '5', name: 'name5', email:"amno", human:"false", life:"false" },
  { id: '6', name: 'name6', email:"pqr", human:"false", life:"true" },
  { id: '7', name: 'name7', email:"stu", human:"false",life:"false" },
  { id: '8', name: 'name8', email:"abc",  human:"true", life:"false"},
  { id: '9', name: 'name9', email:"def", human:"false", life:"false"},
  { id: '10', name: 'name10', email:"aghi", human:"true", life:"true"},
  { id: '11', name: 'name11', email:"jkl", human:"true", life:"false"},
  { id: '12', name: 'name12', email:"amno", human:"false", life:"false" },
  { id: '13', name: 'name13', email:"pqr", human:"false", life:"true" },
  { id: '14', name: 'name14', email:"stu", human:"false",life:"false" },
  { id: '15', name: 'name15', email:"abc",  human:"true", life:"false"},
  { id: '16', name: 'name16', email:"def", human:"false", life:"false"},
  { id: '17', name: 'name17', email:"aghi", human:"true", life:"true"},
  { id: '18', name: 'name18', email:"jkl", human:"true", life:"false"},
  { id: '19', name: 'name19', email:"amno", human:"false", life:"false" },
  { id: '20', name: 'name20', email:"pqr", human:"false", life:"true" },
  { id: '21', name: 'name21', email:"stu", human:"false",life:"false" },
  { id: '22', name: 'name22', email:"abc",  human:"true", life:"false"},
  { id: '23', name: 'name23', email:"def", human:"false", life:"false"},
  { id: '24', name: 'name24', email:"aghi", human:"true", life:"true"},
  { id: '25', name: 'name25', email:"jkl", human:"true", life:"false"},
  { id: '26', name: 'name26', email:"amno", human:"false", life:"false" },
  { id: '27', name: 'name27', email:"pqr", human:"false", life:"true" },
  { id: '28', name: 'name28', email:"stu", human:"false",life:"false" },
  { id: '29', name: 'name29', email:"abc",  human:"true", life:"false"},
  { id: '30', name: 'name30', email:"def", human:"false", life:"false"},
  { id: '31', name: 'name31', email:"aghi", human:"true", life:"true"},
  { id: '32', name: 'name32', email:"jkl", human:"true", life:"false"},
  { id: '33', name: 'name33', email:"amno", human:"false", life:"false" },
  { id: '34', name: 'name34', email:"pqr", human:"false", life:"true" },
  { id: '35', name: 'name35', email:"stu", human:"false",life:"false" },
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

