import React, {useState} from 'react';

// import Toggle from './Toggle';
import './Toggle.css';

export default {
    title: 'Toggle/Pills',
    argTypes: {
      variant: {control: 'text'}
  }
}

export const TogglePills = (props) => {
    // const {variant = 'toggle_green', children, ...rest} = props
  
      const [on, setOnState] = useState(false);
      const togglee = () => setOnState(o => !o);
      return (
          <div>
      <button className={`${on ? 'on' : 'off'} ${'t_button'} ${on ? 'ontext' : 'offtext'}`} on={props.on} onClick={togglee}>
          <span className={on ? 'ontextin' : 'offtextin'}>{on ? "ON" : "OFF"}</span>
          <span className="pin" />
      </button>
      <button className={`${on ? 'on' : 'off'} ${'t_button'} ${'toggle_red'} ${on ? 'ontext' : 'offtext'}`} on={props.on} onClick={togglee}>
          <span className={on ? 'ontextin' : 'offtextin'}>{on ? "ON" : "OFF"}</span>
          <span className="pin" />
      </button>
      <button className={`${on ? 'on' : 'off'} ${'t_button'} ${'toggle_green'} ${on ? 'ontext' : 'offtext'}`} on={props.on} onClick={togglee}>
          <span className={on ? 'ontextin' : 'offtextin'}>{on ? "ON" : "OFF"}</span>
          <span className="pin" />
      </button>
      <button className={`${on ? 'on' : 'off'} ${'t_button'} ${'toggle_blue'} ${on ? 'ontext' : 'offtext'}`} on={props.on} onClick={togglee}>
          <span className={on ? 'ontextin' : 'offtextin'}>{on ? "ON" : "OFF"}</span>
          <span className="pin" />
      </button>
      <button className={`${on ? 'on' : 'off'} ${'t_button'} ${'toggle_yellow'} ${on ? 'ontext' : 'offtext'}`} on={props.on} onClick={togglee}>
          <span className={on ? 'ontextin' : 'offtextin'}>{on ? "ON" : "OFF"}</span>
          <span className="pin" />
      </button>
      </div>
      );
    }

    

