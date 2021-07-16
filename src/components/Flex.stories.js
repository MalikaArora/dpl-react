import React from 'react';
import Center from './Center/Center';
import Flex from '@dpl/react-flexbox';
export default{
    title: 'Flex',
    // component: Button
    decorators: [story => <Center>{story()}</Center>],
    argTypes: {
        variant: {control: 'text'}
    }
}


export const ShowFlex = () => <Flex gutter={3}>
<Flex.Item span={3}>25%</Flex.Item>
<Flex.Item span={3}>25%</Flex.Item>
<Flex.Item span={3}>25%</Flex.Item>
<Flex.Item span={3}>25%</Flex.Item>
<Flex.Item span={6}>50%</Flex.Item>
<Flex.Item span={6}>50%</Flex.Item>
<Flex.Item span={12}>100%</Flex.Item>
</Flex>