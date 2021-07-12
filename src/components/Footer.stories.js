import React from 'react';
import Footer from '@dpl/react-dpl-footer';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  appName: "FOOTER TITLE",
  children: <div>Your use of this product is governed by the terms of your company agreement. You may not use or disclose this product or allow others to use it or disclose it, except as permitted by your agreement with Optum.</div>,
};
