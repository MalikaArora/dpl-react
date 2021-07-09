import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@dpl/react-button';
import DropDownList from '@dpl/react-dropdown-list';
import Card from '@dpl/react-card';
import CardLayout from '@dpl/react-card-layout';
import Icon from '@dpl/react-icons';
import OptumLogo from '@dpl/react-optum-logo';
import Drawer from '@dpl/react-drawer';
import Menu, { MenuContext } from "@dpl/react-menu";

//logo, icon

function App() {

  // const [isOpen, setIsOpen] = useState(false);
  // function toggleDrawer(){
  //   setIsOpen(!isOpen);
  //   console.log(isOpen);
  // } 

  const [isVisible, setVisible] = React.useState(false);

  const [Value, setValue] = React.useState("0");
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <DropDownList onChange={handleChange}>
      <DropDownList.Group label="Light Side">
        <DropDownList.Item value="han_solo">Han Solo</DropDownList.Item>
        <DropDownList.Item value="luke_skywalker">Luke Skywalker</DropDownList.Item>
        <DropDownList.Item value="princess_leia">Princess Leia</DropDownList.Item>
      </DropDownList.Group>
      <DropDownList.Group label="Dark Side">
        <DropDownList.Item value="darth_vader">Darth Vader</DropDownList.Item>
        <DropDownList.Item value="emperor_palpatine">Emperor Palpatine</DropDownList.Item>
      </DropDownList.Group>
    </DropDownList>

    {/* <Button>button</Button> */}
    
    {/* <Drawer
      open={isOpen}
      size={{ sm: "500px", md: "700px", lg: "90px", xl: "150px" }}
    > this is a drawer
    <Button onClick={() => toggleDrawer()}>{isOpen ? "i'm open" : "i'm close"}</Button>
    </Drawer> */}

    </div>
  );
}

export default App;
