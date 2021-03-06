import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Home = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const homeRef = useNav('Home');

	return (
		<div className='pages'>

		<section ref={homeRef} id='homeContainer'>
			
			<div>
				<h3>HOME</h3>
				<p>This is the home section</p>
			</div>
		</section>
		</div>
	);
};

export default Home;
