import Card from '@dpl/react-card';
import Center from '../Center/Center';

import CardLayout from '@dpl/react-card-layout';

export default {
    title: 'Card',
    // component: Button
    decorators: [story => <Center>{story()}</Center>],
    argTypes: {
        variant: { control: 'text' }
    }
}

export const ShowCard = () =>
    <CardLayout>
        <Card> CARD 1 </Card>
        <Card> CARD 2 </Card>
        <Card> CARD 3 </Card>
        <Card> CARD 4 </Card>
    </CardLayout>

