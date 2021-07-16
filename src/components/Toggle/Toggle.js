import React, {useState} from 'react';

import './Toggle.css';


const Toggle = (props) => {
  // const {variant = 'toggle_green', children, ...rest} = props

    const [on, setOnState] = useState(false);
    const togglee = () => setOnState(o => !o);
    return (
    <button class={`${on ? 'on' : 'off'} ${'t_button'} ${on ? 'ontext' : 'offtext'}`} on={props.on} onClick={togglee}>
        <span class={on ? 'ontextin' : 'offtextin'}>{on ? "hello" : "hi"}</span>
        <span class="pin" />
    </button>
    );
  }

  export default Toggle;

 