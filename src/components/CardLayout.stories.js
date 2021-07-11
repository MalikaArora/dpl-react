import React from 'react';
import CardLayout from '@dpl/react-card-layout';
import Card from '@dpl/react-card';

export default {
  title: 'CardLayout',
  component: CardLayout,
};

const Template = (args) => <CardLayout {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children:<React.Fragment>
    <Card primary={true}>
        <div>
            <h1>Card Header</h1>
            <p>Card content goes here</p>
            <button>Primary</button>
        </div>
    </Card>
    <Card primary={true} className="uhc">
        <div>
            <h1>Card Header</h1>
            <p>Card content goes here</p>
            <button>Primary</button>
        </div>
    </Card>
    <Card >
        <div>
            <h1>Card Header</h1>
            <p>Card content goes here</p>
            <button>Basic</button>
        </div>
    </Card>
  </React.Fragment>,
};
