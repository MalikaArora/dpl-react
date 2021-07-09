import React from 'react';

import ButtonList from '@dpl/react-button-list';
import Button from '@dpl/react-button'

export default {
  title: 'ButtonList',
  component: ButtonList,
  
};

const Template = (args) => <ButtonList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  spacing: 1,
  vertical: false,
  children: <div>
      <Button>Click Here 1</Button>
      <Button>Click Here 2</Button>
  </div>,
  
};