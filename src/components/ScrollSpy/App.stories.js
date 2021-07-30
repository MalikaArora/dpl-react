import { Nav } from './nav';
import { Main } from './pages';
import NavProvider from './context/NavContext';
import './App.css';

export default{
	title: 'ScrollSpy'
}
export const App = () => {
	return (
		<div className='ScrollSpy'>
			<NavProvider>
				<Nav />
				<Main />
			</NavProvider>
		</div>
	);
}

