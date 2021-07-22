import React from "react";
import {
  Button,
  ButtonList,
  CheckBox,
  DropDownList,
  LinkButton,
  TextBox,
} from "@avrc/form-elements";

export default {
  title: "@avrc/form-elements",
};

export const ButtonBasic = () => (
  <ButtonList>
    <Button primary>Primary</Button>
    <Button>Secondary</Button>
    <Button disabled>Disabled</Button>
    <LinkButton>Cancel</LinkButton>
  </ButtonList>
);
ButtonBasic.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const CheckBoxBasic = (props) => <CheckBox {...props} />;
CheckBoxBasic.args = {
  checked: false,
  indeterminate: false,
};
CheckBoxBasic.argTypes = {
  checked: {
    control: "boolean",
  },
  disabled: {
    control: "boolean",
  },
  indeterminate: {
    control: "boolean",
  },
};

export const DropDownListBasic = () => (
    <DropDownList>
      <DropDownList.Group label="Group">
        <DropDownList.Item>1</DropDownList.Item>
        <DropDownList.Item>2</DropDownList.Item>
      </DropDownList.Group>
      <DropDownList.Item>3</DropDownList.Item>
      <DropDownList.Item>4</DropDownList.Item>
    </DropDownList>
  );
  
  export const TextBoxBasic = (props) => <TextBox {...props} />;
  TextBoxBasic.parameters = {
    controls: { hideNoControlsWarning: true },
  };