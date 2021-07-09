import DropDownList from '@dpl/react-dropdown-list';
import React, {useState} from 'react';


const ShowDropdown = () => {
  const [Value, setValue] = React.useState("0");
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
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
  );
};

export default ShowDropdown;