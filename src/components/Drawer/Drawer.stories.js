import Drawer from '@dpl/react-drawer';
import Button from '@dpl/react-button';
import React, {useState} from 'react';
import Center from '../Center/Center';

import './Drawer.css';

export default {
    title: 'Drawer',
    // component: Button
    // decorators: [story => <Center>{story()}</Center>],
    
}

export const ShowDrawer = () => {

    const [isOpen, setIsOpen] = useState(false);
    function toggleDrawer(){
      setIsOpen(!isOpen);
      console.log(isOpen);
    } 
    
      return (
          <div>
         <Button className="overlay_button" onClick={() => toggleDrawer()}>{isOpen ? "OPEN" : "CLOSE"}</Button>

      <Drawer className="drawer"
        open={isOpen}
        size={{ sm: "500px", md: "700px", lg: "700px", xl: "700px" }}
      >

           <Center>THIS IS A DRAWER</Center>
      </Drawer>
      </div>
       );
      }