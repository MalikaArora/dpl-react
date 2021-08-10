import React from "react";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './FileUpload.css';
export default {
  title: "File Upload"
}


// var filename1='';
var filename;
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
  filename = file.files[0];
  console.log(file.files[0]);
  formdata.append("testFile", file.files[0]);
  for (var key of formdata.entries()) {
    console.log(key[0] + ", " + key[1]);
  }
};

// function onFileUpload() {
//   var file = document.getElementById("testFile");

//   if (file) {
//     filename1 = file.files[0].name;
//     console.log("file " + filename1);

//     return filename1;
//   }

//   else
//     return '';
// }
export const App = () => {

  let file = null;


  const [fileName, setFilename] = React.useState('No file selected');


  function onChangee(e) {

    switch (e.target.name) {
      case 'selectedFile':
        if (e.target.files.length > 0) {

          setFilename(e.target.files[0].name);
        }
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });    }
  };

  return (
    <div style={styles}>
      <div style={heading}> Customers </div>


      <form onSubmit={submitForm} id="testForm" style={{ display: 'flex', flexDirection: 'row', padding: '2%' }}>

        <label style={{ margin: '1%' }}>Select Customers</label>

        <div className="file-upload" style={{ margin: '1%', width: '30%' }}>
          <label for="testFile">

            <i className='fa fa-upload' style={{ cursor: 'pointer' }}></i>
            {'\t Import'}
          </label>

          {/* <div>{onFileUpload()}</div> */}

          <input type="file" name="test" name="selectedFile"
            id="testFile" onChange={(event) => onChangee(event)} />

          <label htmlFor="file" className="uploaded">{fileName}</label>

        </div>


        <a style={{  marginTop: '1%', textDecoration: 'none', color: 'black' }} href="https://uhgazure-my.sharepoint.com/:x:/g/personal/arora_malika_optum_com/Eby24JIGwWpHoP5Kz4DlIaoBD9OrE9FpfDuQYzpwFT2N3w?e=svac0i" target="__blank"><i className='fa fa-external-link' style={{ cursor: 'pointer', color: 'black' }}></i>{'\t Template'}</a>

        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

