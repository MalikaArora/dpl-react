import React from 'react';

import Header from '@dpl/react-dpl-header';

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  appName: "TEST_HEADER",
  logoUrl: "/",
  onLogoCLick: alert('You clicked'), 

};