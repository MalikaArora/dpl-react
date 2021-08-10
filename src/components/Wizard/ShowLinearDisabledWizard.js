import React from "react";
import Wizard from "./Wizard";
import './ShowWizard.css';

const ShowLinearDisabledWizard = () => {
    const [treetyp, setTreetyp] = React.useState("0");
    const [selected, setSelected] = React.useState(false); 
    const [selected2, setSelected2] = React.useState(false);
    const [isSaved, setIsSaved] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleChange = event => {
      setTreetyp(event.target.value);
    };

    const clearState = () => {
      setTreetyp("0");
      setSelected(false);
      setSelected2(false);
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
      <p>ALL THE DATA ENTERED IS SUBMITTED</p>
    </div>
   )
  }
  else
  {
    return (  
        
        <div>
          <Wizard cancelDeletion={() => clearState()} onSaveClicked={() => saveFunction()} onSubmitClicked={((selected2&&selected) ? "true" : "false")} submitFunctionDefined={() => submitFunction()}>
            <Wizard.Step name="1.Introduction" key="1">
              <p>The Linear Wizard can be navigated through using the next/previous buttons and the step headers. Steps must be completed in sequence.</p>
            </Wizard.Step>
            <Wizard.Step name="2. Terms and coditions" key="2" nextallowed={selected ? "allowed" : "notallowed"}>
              <div>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus erat, ultricies malesuada rutrum nec, eleifend vel sem. Morbi quis dictum orci, congue rutrum lacus. Maecenas malesuada vitae sapien quis pretium. Proin eu scelerisque lorem. Maecenas eget augue a quam viverra eleifend. Nam aliquam feugiat lacinia. Vestibulum vehicula rutrum augue, convallis volutpat elit condimentum eget. Aliquam pretium urna scelerisque, faucibus mauris et, maximus erat. In aliquam lacinia lacinia. Integer ut mauris id urna placerat vehicula. Etiam ut tortor erat.

                </p>
                <input type="checkbox" id="CheckBox" checked={selected} onClick={() => {setSelected(!selected)}} />
                <label for="CheckBox">Click to agree</label>
              </div>
            </Wizard.Step>
            <Wizard.Step name="3. Tree" key="3" disabled="true">
              <div>
                <label for="tree">Select a tree:  </label>
                <select name="tree" id="tree" value={treetyp} onChange={handleChange} >
                    <option value="mango">MANGO</option>
                    <option value="apple">APPLE</option>
                    <option value="neem">NEEM</option>
                </select>
              </div>
            </Wizard.Step>
            <Wizard.Step name="4.Confirmation" key="4">
              <div>Final Component
                  <p>Please confirm that you would like to complete the wizard.</p>
                  <input type="checkbox" id="CheckBox" checked={selected2} onClick={() => {setSelected2(!selected2)}} />
                  <label for="CheckBox">Click to confirm</label>

              </div>
            </Wizard.Step>
          </Wizard>
        </div>
    
    );
  }
}

export default ShowLinearDisabledWizard;
