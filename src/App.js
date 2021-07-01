import logo from './logo.svg';
import './App.css';
import Button from '@dpl/react-button';
import DropDownList from '@dpl/react-dropdown-list';
import Card from '@dpl/react-card';
import CardLayout from '@dpl/react-card-layout';

function App() {
  return (
    <div>
      <Button>button</Button>

      <CardLayout>
        <Card>card</Card>
      </CardLayout>

    </div>
  );
}

export default App;
