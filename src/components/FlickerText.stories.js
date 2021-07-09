import React from 'react';

import FlickerText from '@dpl/react-ficker-text';

export default {
  title: 'FlickerText',
  component: FlickerText,
};

const Template = (args) => <FlickerText {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  text: 'Welcome',

};