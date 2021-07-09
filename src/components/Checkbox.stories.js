import React from 'react';

import CheckBox from '@dpl/react-checkbox';

export default {
  title: 'CheckBox',
  component: CheckBox,
};

const Template = (args) => <CheckBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Check It',
  selected: true,
  onChange: alert('You checked'),
};