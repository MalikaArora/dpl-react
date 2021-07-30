import React from 'react';
import App from './Button.js';
import Center from '../Center/Center';
import { text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  // component: Button
  decorators: [story => <Center>{story()}</Center>],
  argTypes: {
    variant: { control: 'text' }
  }
}


export const ColorButton = () => {
return (
<>
<App
  variant='btn_primary' disabled={boolean('Disabled', false)}>
  {text('Label', 'Primary')}
</App>

<App variant='btn_secondary'>Secondary</App>
<App variant='btn_success'>Success</App>
<App variant='btn_danger'>Danger</App>
</>
);
}




ColorButton.storyName = 'Button Colours';
