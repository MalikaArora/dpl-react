import React from "react";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './FileUpload.css';
export default {
    title: "File Upload"
}
const styles = {
  fontFamily: "sans-serif",
  padding: '5%'
  // textAlign: "center"
};

const heading = {
  color: '#ba5710',
  fontWeight: 600,
  fontSize: '1.2rem'
};
const submitForm = e => {
  var formdata = new FormData();
  e.preventDefault();
  console.log(e);
  var name = document.getElementById("testName").value;
  formdata.append("name", name);
  var file = document.getElementById("testFile");
  console.log(file.files[0]);
  formdata.append("testFile", file.files[0]);
  for (var key of formdata.entries()) {
    console.log(key[0] + ", " + key[1]);
  }
};

export const App = () => (
  <div style={styles}>
    <div style={heading}> Customers </div>
    <form onSubmit={submitForm} id="testForm" style={{display:'flex', flexDirection:'row', padding: '2%'}}>
      <label style={{margin: '2%'}}>Select Customers</label>

      <div className="file-upload" style={{margin: '2%'}}>
        <label for="testFile">
         
        <i className='fa fa-upload' style={{cursor:'pointer'}}></i>
        {'\t Import'}
        </label>
      <input type="file" name="test" id="testFile" />
      </div>

      <a style={{margin: '2%', textDecoration: 'none', color: 'black'}} href="https://uhgazure-my.sharepoint.com/:x:/g/personal/arora_malika_optum_com/Eby24JIGwWpHoP5Kz4DlIaoBD9OrE9FpfDuQYzpwFT2N3w?e=svac0i" target="__blank"><i className='fa fa-external-link' style={{cursor:'pointer', color: 'black'}}></i>{'\t Template'}</a>

      {/* <button type="submit">Submit</button> */}
    </form>
  </div>
);

