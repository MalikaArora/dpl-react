import React from 'react';

import Button from '@dpl/react-button';

export default {
  title: 'Button',
  component: Button,
  
};

const Template = (args) => <Button {...args} />;

export const PrimaryBtn = Template.bind({});
PrimaryBtn.args = {
  disabled: false,
  primary: true,
  children: 'Click Here',
  type: "button",
  onClick: alert('You clicked'),
};
