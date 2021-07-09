import React from 'react';
import {Primary, Secondary} from '../Button/Button.stories';

export default {
    title: 'form/Subscription'
}

export const PrimarySubscription = () => {
    return (<>
        <Primary />
        <Secondary />
    </>);
}