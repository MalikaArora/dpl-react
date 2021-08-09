
// Externals
import React from 'react';
import './mainstyles.css';
// Internals
import Popover from './Popover';


export default {
    title: 'Popover',
    // component: Button
    // decorators: [story => <Center>{story()}</Center>],
    
}

export const ShowPopover = () => {
    
      return (
          <div className='popover'>
        <section>
        {/* <h1>Popovers using React Hooks</h1> */}
        <Popover title="Popover on top" position="top">
            <button>Popover on top</button>
        </Popover>
        <Popover title="Popover on bottom" position="bottom">
            <button>Popover on Bottom</button>
        </Popover>
        <Popover title="Popover on left" position="left">
            <button>Popover on left</button>
        </Popover>
        <Popover title="Popover on right" position="right">
            <button>Popover on right</button>
        </Popover>
    </section>
    </div>
       );
      }

      ShowPopover.storyName='Popover';
