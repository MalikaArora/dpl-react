import React from 'react';
 
import Flex from '@dpl/react-flexbox';
 
export default {
  title: 'Flex',
  component: Flex,
  
};
 
const Template = (args) => <Flex {...args} />;
 
export const Primary = Template.bind({});
Primary.args = {
  gutter: 3,
  children: <React.Fragment>
        <Flex.Item span={3}>25%</Flex.Item>
        <Flex.Item span={3}>25%</Flex.Item>
        <Flex.Item span={3}>25%</Flex.Item>
        <Flex.Item span={3}>25%</Flex.Item>
        <Flex.Item span={6}>50%</Flex.Item>
        <Flex.Item span={6}>50%</Flex.Item>
        <Flex.Item span={12}>100%</Flex.Item>
  </React.Fragment>,
  
};