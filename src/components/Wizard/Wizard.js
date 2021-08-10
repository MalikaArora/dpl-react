import React, { useEffect, useState } from "react";
import './styles.css';
import Notification from "./Notification";
import warningIcon from './assets/warning.svg';
import Step from "./Step";

const Wizard = (props) => {
  const { children } = props;
  const { cancelDeletion } = props;
  const { onSaveClicked } = props;
  const { onSubmitClicked } = props;
  const { submitFunctionDefined } = props; 
  const { nonlinear } = props;
  const [wizardHeader, setWizardHeader] = useState([]);
  const [wizardNextAllowed, setWizardNextAllowed] = useState([]);
  const [wizardAllowAccess, setWizardAllowAccess] = useState([]);
  const [wizardStepCompleted, setWizardStepCompleted] = useState([]);
  const [wizardStepVisited, setWizardStepVisited] = useState([]);
  const [wizardDisabled, setWizardDisabled] = useState([]);
  const [childContent, setChildContent] = useState({});
  const [active, setActive] = useState(-1);
  
  const [totalSteps, setTotalSteps] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(-1);
  const [statusWarningNext, setStatusWarningNext] = useState(false);
  const [statusWarningProgressbar, setStatusWarningProgressbar] = useState(false);
  const [statusCancel, setStatusCancel] = useState(false);
  const [statusWarningSubmit, setStatusWarningSubmit] = useState(false);

  useEffect(() => {
    const headers = [];
    const nextAllowed = [];
    const allowAccess = [];
    const stepCompleted = [];
    const stepVisited = [];
    const stepDisabled = [];
    const childCnt = {};
    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;
      const { name } = element.props;
      headers.push(name);
      const { nextallowed } = element.props;
      nextAllowed.push(nextallowed);
      ((nextAllowed[nextAllowed.length - 1] == "notallowed")||(((allowAccess.length > 1)&&(allowAccess[allowAccess.length - 1] == "false"))||((allowAccess.length == 1)&&(allowAccess[0] == "false"))) ? allowAccess.push("false") : allowAccess.push("true"));
      const { disabled } = element.props;
      stepDisabled.push(disabled);
      stepCompleted.push("false");
      stepVisited.push("false");
      childCnt[name] = element.props.children;
      
    });
    setWizardHeader(headers);
    setTotalSteps(headers.length);
    setWizardNextAllowed(nextAllowed);
    setWizardAllowAccess(allowAccess);
    setWizardDisabled(stepDisabled);
    setActive(active === -1 ? headers[0] : active);
    setWizardStepCompleted( wizardStepCompleted.length == 0 ? stepCompleted : wizardStepCompleted);
    stepVisited[0]="true";
    setWizardStepVisited( wizardStepVisited.length == 0 ? stepVisited : wizardStepVisited);
    setProgressBarWidth((progressBarWidth == -1) ? 50/(headers.length) : progressBarWidth);
    setChildContent({ ...childCnt });
    console.log(childCnt);
  }, [props, children]);

  if (nonlinear == "false")
  { const changeWizard = (name) => {
      {let act_index=-1;
        let stepcompletedvar = [];
        let stepvisitedvar = [];
        let nooftrues = 0;
        wizardHeader.map(item => (
          stepcompletedvar.push('false'),
          stepvisitedvar.push('false')
        )) 
      setActive(name);
      wizardHeader.map((item, index) => (        
        ((item == name) ? act_index=index : '')
      ))
      wizardStepCompleted.map((item, index) => (
        (((index<act_index)||(item == "true")) ? ((stepcompletedvar[index]='true'), (nooftrues = nooftrues+1) ) : '')     
      ))
      setWizardStepCompleted(stepcompletedvar);
      wizardStepVisited.map((item, index) => (
        (((index<=act_index)||(item == "true")) ? ((stepvisitedvar[index]='true')) : '')     
      ))
      setWizardStepVisited(stepvisitedvar);
      setProgressBarWidth(50/totalSteps + (nooftrues*100)/totalSteps);
      }
    };
    const handleNext = () => {
      let nextNotDisabledindex = -1;
      {wizardHeader.map((item, index) => (        
        (item === active ? 
          (wizardDisabled.map((i, idx) => (((nextNotDisabledindex == -1)&&((idx>index)&&(i == "false"))) ? (nextNotDisabledindex=idx) : '' ))
          ) : '')
      ))
      wizardHeader.map((item, index) => (        
          (((item === active)&&(nextNotDisabledindex != -1)) ? (wizardNextAllowed[index] === "allowed" ? (changeWizard(wizardHeader[nextNotDisabledindex])) : setStatusWarningNext(true)) : '')
      ))
      }        
    }

    const handleBack = () => {
      let prevNotDisabledindex = -1;
      {wizardHeader.map((item, index) => (        
        (item === active ? 
          (wizardDisabled.map((i, idx) => (((idx<index)&&(i == "false"))? (prevNotDisabledindex=idx) : '' ))
          ) : '')
      ))
      wizardHeader.map((item, index) => (        
          (item === active ? (changeWizard(wizardHeader[prevNotDisabledindex])) : '')
      ))}
    }

    const handleCancel = () => {
      cancelDeletion()
      setStatusCancel(false)  
      changeWizard(wizardHeader[0])

      const headers = [];
      const nextAllowed = [];
      const allowAccess = [];
      const stepCompleted = [];
      const stepVisited = [];
      const stepDisabled = [];
      const childCnt = {};
      React.Children.forEach(children, (element) => {
        if (!React.isValidElement(element)) return;
        const { name } = element.props;
        headers.push(name);
        const { nextallowed } = element.props;
        nextAllowed.push(nextallowed);
        ((nextAllowed[nextAllowed.length - 1] == "notallowed")||(((allowAccess.length > 1)&&(allowAccess[allowAccess.length - 1] == "false"))||((allowAccess.length == 1)&&(allowAccess[0] == "false"))) ? allowAccess.push("false") : allowAccess.push("true"));
        const { disabled } = element.props;
        stepDisabled.push(disabled);
        stepCompleted.push("false");
        stepVisited.push("false");
        childCnt[name] = element.props.children;
        
      });
      setWizardHeader(headers);
      setTotalSteps(headers.length);
      setWizardNextAllowed(nextAllowed);
      setWizardAllowAccess(allowAccess);
      setWizardDisabled(stepDisabled);
      setActive(headers[0]);
      setWizardStepCompleted(stepCompleted);
      stepVisited[0]="true";
      setWizardStepVisited(stepVisited);
      setProgressBarWidth(50/(headers.length));
      setChildContent({ ...childCnt });
    
    }

    const handleProgressClick = (props) => {
      {(((props > 0)&&(wizardAllowAccess[props-1] == "true"))||((props == 0)&&(wizardAllowAccess[props] == "true")) ? changeWizard(wizardHeader[props]) : setStatusWarningProgressbar(true));         
      }      
    }

    return (
      <div>  
      
        { (nonlinear == "false")&&(statusWarningNext && (<Notification closeNotification={() => setStatusWarningNext(false)}> <div className="notification"> <div className="notification-image"><img src={warningIcon} alt="anything" /></div> <div className="notification-title"><h1>WARNING</h1></div><p>All the fields in this step are not completed</p></div></Notification>))}
        { (nonlinear == "false")&&(statusWarningProgressbar && (<Notification closeNotification={() => setStatusWarningProgressbar(false)}> <div className="notification"> <div className="notification-image"><img src={warningIcon} alt="anything" /></div> <div className="notification-title"><h1>WARNING</h1></div><p>All the required fields are not completed to reach the selected step</p></div></Notification>))}  
        { statusCancel && (<Notification closeNotification={() => setStatusCancel(false)}> <div className="notification"> <div className="notification-image"><img src={warningIcon} alt="anything" /></div> <div className="notification-title"><h1>ARE YOU SURE ?</h1></div><p>All the data entered will be lost</p><button className="continue-dialog-buttons" onClick={handleCancel}>CONTINUE</button><button className="cancel-dialog-buttons" onClick={() => setStatusCancel(false)}>CANCEL</button></div></Notification>)}  
        { statusWarningSubmit && (<Notification closeNotification={() => setStatusWarningSubmit(false)}><div className="notification"> <div className="notification-image"><img src={warningIcon} alt="anything" /></div> <div className="notification-title"> <h1>WARNING</h1></div><p>All the fields required to submit are not completed</p></div></Notification>)}
        <div>
          <div className="wizard">
            <div className="wizard-progress" style={{ width: (nonlinear == "false")? `${progressBarWidth}%` : `100%`}}></div>  
            <div className="wizard-items" style={{ marginLeft: `${50/totalSteps}%`, marginRight: `${50/totalSteps}%`}}>
                {wizardHeader.map((item, index) => (
                    <div onClick={() => (wizardDisabled[index]=="false") ? handleProgressClick(index) : ''} key={index} className={"wizard-item" + ((wizardDisabled[index] == "true") ? " disabled" : ((item === active) ? " active" : ((wizardStepVisited[index] == "true") ? " completed" : "")))}>
                        <div className="wizard-content">
                          {item}
                        </div>  
                    </div>
                ))}
            </div>
            
          </div>  

          <div className="step-component">
              {Object.keys(childContent).map((key) => {
                  if (key === active) {
                    return <div>{childContent[key]}</div>;
                  } else {
                    return null;
                  }
              })}
          </div> 
        </div>
        <div className="btn-component">
              <input type={wizardHeader[0] === active ? 'hidden' : 'button'} value="Prev" onClick={handleBack} className="prev-button"/>
              <input type={wizardHeader[wizardHeader.length - 1] === active ? 'hidden' : 'button'} value="Next" onClick={handleNext} className="next-button" />
              <input type="button" value="Cancel" className="cancel-button" onClick={() => setStatusCancel(true)} />
              <input type="button" value="Submit" className="submit-button" onClick={() => (((onSubmitClicked == "false") ? setStatusWarningSubmit(true) : submitFunctionDefined()))}/>
              <input type="button" value="Save" className="save-button" onClick={() => onSaveClicked()}/>
        </div>
      
      </div>      
    );
  
  }
  else
  {const changeWizard = (name) => {
    {let act_index=-1;
      let stepvisitedvar = [];
      
      wizardHeader.map(item => (
        
        stepvisitedvar.push('false')
      )) 
     setActive(name);
     wizardHeader.map((item, index) => (        
      ((item == name) ? act_index=index : '')
     ))
     wizardStepVisited.map((item, index) => (
      (((index<=act_index)||(item == "true")) ? ((stepvisitedvar[index]='true')) : '')     
     ))
     setWizardStepVisited(stepvisitedvar);
    }
   };
  
    const handleNext = () => {
      let nextNotDisabledindex = -1;
      {wizardHeader.map((item, index) => (        
        (item === active ? 
          (wizardDisabled.map((i, idx) => (((nextNotDisabledindex == -1)&&((idx>index)&&(i == "false"))) ? (nextNotDisabledindex=idx) : '' ))
          ) : '')
      ))
      wizardHeader.map((item, index) => (        
        (((item === active)&&(nextNotDisabledindex != -1)) ? (changeWizard(wizardHeader[nextNotDisabledindex])) : '')
    ))
      }        
    }

    const handleBack = () => {
      let prevNotDisabledindex = -1;
      {wizardHeader.map((item, index) => (        
        (item === active ? 
          (wizardDisabled.map((i, idx) => (((idx<index)&&(i == "false"))? (prevNotDisabledindex=idx) : '' ))
          ) : '')
      ))
      wizardHeader.map((item, index) => (        
          (item === active ? (changeWizard(wizardHeader[prevNotDisabledindex])) : '')
      ))}
    }

    const handleCancel = () => {
      cancelDeletion()
      setStatusCancel(false)  
      changeWizard(wizardHeader[0])   
      const headers = [];
      const stepVisited = [];
      const stepDisabled = [];
      const childCnt = {};
      React.Children.forEach(children, (element) => {
        if (!React.isValidElement(element)) return;
        const { name } = element.props;
        headers.push(name);
        const { disabled } = element.props;
        stepDisabled.push(disabled);
        stepVisited.push("false");
        childCnt[name] = element.props.children;
        
      });
      setWizardHeader(headers);
      setTotalSteps(headers.length);
      setWizardDisabled(stepDisabled);
      setActive(headers[0]);
      stepVisited[0]="true";
      setWizardStepVisited(stepVisited);
      setChildContent({ ...childCnt });
    
    }

    const handleProgressClick = (props) => {
      {changeWizard(wizardHeader[props])
      }      
    }

    return (
      <div>  
        { statusCancel && (<Notification closeNotification={() => setStatusCancel(false)}> <div className="notification"> <div className="notification-image"><img src={warningIcon} alt="anything" /></div> <div className="notification-title"><h1>ARE YOU SURE ?</h1></div><p>All the data entered will be lost</p><button className="continue-dialog-buttons" onClick={handleCancel}>CONTINUE</button><button className="cancel-dialog-buttons" onClick={() => setStatusCancel(false)}>CANCEL</button></div></Notification>)}  
        { statusWarningSubmit && (<Notification closeNotification={() => setStatusWarningSubmit(false)}><div className="notification"> <div className="notification-image"><img src={warningIcon} alt="anything" /></div> <div className="notification-title"> <h1>WARNING</h1></div><p>All the fields required to submit are not completed</p></div></Notification>)}  
        <div>
          <div className="wizard">
            <div className="wizard-progress-nonlinear"></div> 
            <div className="wizard-items" style={{ marginLeft: `${50/totalSteps}%`, marginRight: `${50/totalSteps}%`}}>
                {wizardHeader.map((item, index) => (
                    <div onClick={() => (wizardDisabled[index]=="false") ? handleProgressClick(index) : ''} key={index} className={"wizard-item" + ((wizardDisabled[index] == "true") ? " disabled" : ((item === active) ? " active" : ((wizardStepVisited[index] == "true") ? " completed" : "")))}>
                        <div className="wizard-content">
                          {item}
                        </div>  
                    </div>
                ))}
            </div>
            
          </div>  

          <div className="step-component">
              {Object.keys(childContent).map((key) => {
                  if (key === active) {
                    return <div>{childContent[key]}</div>;
                  } else {
                    return null;
                  }
              })}
          </div> 
        </div>
        <div className="btn-component">
              <input type={wizardHeader[0] === active ? 'hidden' : 'button'} value="Prev" onClick={handleBack} className="prev-button"/>
              <input type={wizardHeader[wizardHeader.length - 1] === active ? 'hidden' : 'button'} value="Next" onClick={handleNext} className="next-button" />
              <input type="button" value="Cancel" className="cancel-button" onClick={() => setStatusCancel(true)} />
              <input type="button" value="Submit" className="submit-button" onClick={() => (((onSubmitClicked == "false") ? setStatusWarningSubmit(true) : submitFunctionDefined()))}/>
              
              <input type="button" value="Save" className="save-button" onClick={() => onSaveClicked()}/>
        </div>
      
      </div>      
    );

  }  
};

Wizard.defaultProps = {
  onSubmitClicked: "true",
  nonlinear: "false"
}

Wizard.Step = Step;

export default Wizard;