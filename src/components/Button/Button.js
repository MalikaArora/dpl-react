import Button from '@dpl/react-button';
import './Button.css';

//logo, icon

function App(props) {
  const {variant = 'primary', children, ...rest} = props
  return (
    <div>      
       <Button 
       className={`button ${variant}`} {...rest}>{children}</Button>
    </div>
  );
}

export default App;
