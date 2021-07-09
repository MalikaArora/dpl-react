import React from 'react';

import Container from '@dpl/react-container';

export default {
  title: 'Container',
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  backgroundColor: '#457831',  
  maxWidth: '100px',
  children: <div>
      Hello
  </div>,

};