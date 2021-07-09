import React from 'react';

import Icon from '@dpl/react-icons';

export default {
  title: 'Icon',
  component: Icon,
  
};

const Template = (args) => <Icon {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    size: 2,
    type: "arrow_right",
};