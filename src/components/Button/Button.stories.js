import React from 'react';
import App from './Button.js';
import Center from '../Center/Center';
import {text,boolean} from '@storybook/addon-knobs';

export default{
    title: 'Button',
    // component: Button
    decorators: [story => <Center>{story()}</Center>],
    argTypes: {
        variant: {control: 'text'}
    }
}


export const PrimaryButton = () => <App 
variant='btn_primary'  disabled={boolean('Disabled', false)}>
{text('Label', 'Primary')}
</App>

App.args = {
    
  };
  
export const SecondaryButton = () => <App variant='btn_secondary'>Secondary</App>
export const SuccessButton = () => <App variant='btn_success'>Success</App>
export const DangerButton = () => <App variant='btn_danger'>Danger</App>


PrimaryButton.storyName='Primary Button';
SecondaryButton.storyName='Secondary Button';