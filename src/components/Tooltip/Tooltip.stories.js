
// Externals
import React from 'react';
import './mainstyles.css';
// Internals
import Tooltip from './Tooltip';


export default {
    title: 'Tooltip',
    // component: Button
    // decorators: [story => <Center>{story()}</Center>],
    
}

export const ShowTooltip = () => {
    
      return (
          <div className="tooltip">
        <section>
        {/* <h1>Tooltips using React Hooks</h1> */}
        <Tooltip title="Tooltip on top" position="top">
            <button>Tooltip on top</button>
        </Tooltip>
        <Tooltip title="Tooltip on bottom" position="bottom">
            <button>Tooltip on Bottom</button>
        </Tooltip>
        <Tooltip title="Tooltip on left" position="left">
            <button>Tooltip on left</button>
        </Tooltip>
        <Tooltip title="Tooltip on right" position="right">
            <button>Tooltip on right</button>
        </Tooltip>
    </section>
    </div>
       );
      }

      ShowTooltip.storyName='Tooltip';
