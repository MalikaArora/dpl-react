import React from 'react';
import Card from '@dpl/react-card';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const ShowCard = Template.bind({});
ShowCard.args = {
  maxWidth: '250px',
  primary: true,
  className: "uhc",
  children: <div>
      <h1>Card Header</h1>
      <p>Card content goes here</p>
      <button>Primary</button>
  </div>,
};

ShowCard.storyName='Card';
