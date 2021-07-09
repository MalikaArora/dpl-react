import React from 'react';

import Content from '@dpl/react-content';

export default {
  title: 'Content',
  component: Content,
  
};

const Template = (args) => <Content {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  maxWidth: '100px',
  children: <div>
    Hello
  </div>,
};