import './ToggleButton.css';
import ToggleButton from './ToggleButton'
export default {
    title: 'Toggle',
    argTypes: {
      variant: {control: 'text'}
  }
}

const Checked = () => <>ON</>;
const UnChecked = () => <>OFF</>;

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Toggle Button</p>
        <ToggleButton  color='#e55353' />
        <ToggleButton  color='#2eb85c' />
        <ToggleButton  color='#f9b115' />
        <ToggleButton  color='#ced2d8' />
        <ToggleButton  color='#3399ff' />

        <br/>
        <p>Disabled Toggle Button</p>
        <ToggleButton onChange={state => console.log(state)} disabled={true}/>
        <br/>
        <p>Toggle Button - Default Value TRUE</p>
        <ToggleButton onChange={state => console.log(state)} defaultChecked={true} />
        <br/>
        <p>Toggle Button - Text</p>
        <ToggleButton color='#e55353' onChange={state => console.log(state)} icons={{checked: <Checked />, unchecked: <UnChecked />}} />
        <ToggleButton color='#2eb85c' onChange={state => console.log(state)} icons={{checked: <Checked />, unchecked: <UnChecked />}} />
        <ToggleButton color='#f9b115' onChange={state => console.log(state)} icons={{checked: <Checked />, unchecked: <UnChecked />}} />
        <ToggleButton color='#ced2d8' onChange={state => console.log(state)} icons={{checked: <Checked />, unchecked: <UnChecked />}} />
        <ToggleButton color='#3399ff' onChange={state => console.log(state)} icons={{checked: <Checked />, unchecked: <UnChecked />}} />
        <p>Toggle Button - Text without Pills</p>
        <ToggleButton pills={false} color='#e55353' onChange={state => console.log(state)} icons={{checked: <Checked />, unchecked: <UnChecked />}} />
        <ToggleButton pills={false} color='#2eb85c' onChange={state => console.log(state)} icons={{checked: <Checked />, unchecked: <UnChecked />}} />
        <ToggleButton pills={false} color='#f9b115' onChange={state => console.log(state)} icons={{checked: <Checked />, unchecked: <UnChecked />}} />
        <ToggleButton pills={false} color='#ced2d8' onChange={state => console.log(state)} icons={{checked: <Checked />, unchecked: <UnChecked />}} />
        <ToggleButton pills={false} color='#3399ff' onChange={state => console.log(state)} icons={{checked: <Checked />, unchecked: <UnChecked />}} />

      </header>
    </div>
  );
}

App.storyName='Toggle';
