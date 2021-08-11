import React from "react";
import Wizard from "../Wizard";
import './ShowDataSelectionWizard.css';

const ShowDataSelectionWizard = () => {
    const [dstname, setdstname] = React.useState("");
    const [dstdpn, setdstdpn] = React.useState("");
    const [ath, setath] = React.useState("");
    const [dstscttyp, setdstscttyp] = React.useState("");
    const [mdlpoptyp, setmdlpoptyp] = React.useState("");
    const [dstthstyp, setdstthstyp] = React.useState("");
    const [dstcaltyp, setdstcaltyp] = React.useState("");
    const [dstnortyp, setdstnortyp] = React.useState("");
    const [radio1, setRadio1] = React.useState("");
    const [radio2, setRadio2] = React.useState("");

    const [isSaved, setIsSaved] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleChange1 = event => {
      setdstname(event.target.value);
    };

    const handleChange2 = event => {
        setdstdpn(event.target.value);
      };

      const handleChange3 = event => {
        setath(event.target.value);
      };

      const handleChange4 = event => {
        setdstscttyp(event.target.value);
      };

      const handleChange5 = event => {
        setmdlpoptyp(event.target.value);
      };

      const handleChange6 = event => {
        setdstthstyp(event.target.value);
      };

      const handleChange7 = event => {
        setdstcaltyp(event.target.value);
      };

      const handleChange8 = event => {
        setdstnortyp(event.target.value);
      };

      const handleChange9 = event => {
        setRadio1(event.target.value);
      };

      const handleChange10 = event => {
        setRadio2(event.target.value);
      };

    const clearState = () => {
        setdstname("");
        setdstdpn("");
        setath("");
        setdstscttyp("");
        setmdlpoptyp("");
        setdstthstyp("");
        setdstcaltyp("");
        setdstnortyp("");
        setRadio1("");
        setRadio2("");
    }

    const saveFunction = () => {
      setIsSaved(true);    
    }
    const submitFunction = () => {
      setIsSubmitted(true);       
    }

  if( isSaved )  
  {return (
    <div>ALL THE DATA ENTERED IS SAVED</div>
   )
  }
  else if( isSubmitted )  
  {return (
    <div className="submitted-header">
      <h1>SUCCESS</h1>
      <br></br>
      ALL THE DATA ENTERED IS SUBMITTED
    </div>
   )
  }
  else
  {
    return (  
        
        <div>
          <Wizard cancelDeletion={() => clearState()} onSaveClicked={() => saveFunction()} onSubmitClicked={((radio1 != "")&&(radio2 != "")&&(dstname != "")&&(dstdpn != "")&&(ath != "")&&(dstscttyp != "")&&(mdlpoptyp != "")&&(dstthstyp != "")&&(dstcaltyp != "")&&(dstnortyp != "") ? "true" : "false")} submitFunctionDefined={() => submitFunction()}>
            <Wizard.Step name="Name" key="1" nextallowed={(dstname != "")&&(dstdpn != "")&&(ath != "") ? "allowed" : "notallowed"}>
              <h1 className="step-heading">Name</h1>
              <br></br>
              <div className="step-body">
                <label for="dstname">Dataset Name:  </label>
                <input type="text" id="dstname" value={dstname} onChange={handleChange1}></input> <br></br>
                <br></br>
                <label for="dstdpn">Dataset Description:  </label>
                <input type="text" id="dstdpn" value={dstdpn} onChange={handleChange2}></input> <br></br>
                <br></br>
                <label for="ath">Author:  </label>
                <input type="text" id="ath" value={ath} onChange={handleChange3}></input>
              </div>
            </Wizard.Step>
            <Wizard.Step name="Dates" key="2" nextallowed={((radio1 != ""))&&((radio2 != ""))&&(dstscttyp != "") ? "allowed" : "notallowed"}>
              <div>
                <h1 className="step-heading">Dates</h1>
                <br></br>
                <div className="step-body">
                  <label for="dstsubs">Is this Dataset a Subscription?  </label>
                  <input type="radio" id="subsyes" value="r1y" checked={(radio1 == "r1y")} onChange={handleChange9}></input> 
                  <label for="subsyes">Yes</label>
                  <input type="radio" id="subsno" value="r1n" checked={(radio1 == "r1n")} onChange={handleChange9}></input>
                  <label for="subsno">No</label>
                  <br></br>
                  <br></br>
                  <label for="dstexp">Is this an Express Dataset?  </label>
                  <input type="radio" id="expyes" value="r2y" checked={(radio2 == "r2y")} onChange={handleChange10}></input> 
                  <label for="expyes">Yes</label>
                  <input type="radio" id="expno" value="r2n" checked={(radio2 == "r2n")} onChange={handleChange10}></input>
                  <label for="expno">No</label>
                  <br></br>
                  <br></br>
                  <label for="dstsct">Select Dataset:   </label>
                  <select name="dstsct" id="dstsct" value={dstscttyp} onChange={handleChange4} >
                    <option value="" selected disabled hidden>Select option</option>
                      <option value="1">Dataset 1</option>
                      <option value="2">Dataset 2</option>
                      <option value="3">Dataset 3</option>
                  </select>
                </div>
              </div>
            </Wizard.Step>
            <Wizard.Step name="Options" key="3" nextallowed={(mdlpoptyp != "")&&(dstthstyp != "")&&(dstcaltyp != "")&&(dstnortyp != "") ? "allowed" : "notallowed"}>
              <div>
                <h1 className="step-heading">Options</h1>
                <br></br><br></br>
                <div className="step-body">
                  <label for="mdlpop">Medical Population:  </label>
                  <select name="mdlpop" id="mdlpop" value={mdlpoptyp} onChange={handleChange5} >
                      <option value="1">Include</option>
                      <option value="2">Exclude</option>
                  </select>
                  <br></br>
                  <br></br>  
                  <label for="dstths">Default Catastrosphic Threshold:  </label>
                  <select name="dstths" id="dstths" value={dstthstyp} onChange={handleChange6} >
                      <option value="1">$50000</option>
                      <option value="2">$60000</option>
                      <option value="3">$80000</option>
                  </select>
                  <br></br>
                  <br></br>
                  <label for="dstcal">Catastrophic Calculation:  </label>
                  <select name="dstcal" id="dstcal" value={dstcaltyp} onChange={handleChange7} >
                      <option value="1">Medical Only</option>
                      <option value="2">Others</option>
                  </select>
                  <br></br>
                  <br></br>
                  <label for="dstnor">Default Comparative Norm:  </label>
                  <select name="dstnor" id="dstnor" value={dstnortyp} onChange={handleChange8} >
                      <option value="1">Global Markets</option>
                      <option value="2">Key Accounts</option>
                      <option value="3">Public Sector</option>
                  </select>
                </div>
              </div>
            </Wizard.Step>
            <Wizard.Step name="Advanced Options" key="4">
              <div>
                <h1 className="step-heading">Advanced Options</h1>
                <br></br>
                <div className="step-body">
                  Final Step
                </div>
              </div>
            </Wizard.Step>
          </Wizard>
        </div>
    
    );
  }
}

export default ShowDataSelectionWizard;
