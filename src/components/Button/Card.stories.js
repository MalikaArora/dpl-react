import React from 'react';

import Card from '@dpl/react-card';

export default {
  title: 'Card',
  component: Card,
  
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  maxWidth: '100px',
  primary: true,
  children: <div>
      <h1>Card Header</h1>
      <p>Card content goes here</p>
      <button>Primary</button>
  </div>,
};