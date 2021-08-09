import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Contact = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const contactRef = useNav('Contact');

	return (
		<div className='pages'>

		<section ref={contactRef} id='contactContainer'>
			
			<div>
				<h3>CONTACT</h3>
				<p>This is the contact section</p>
			</div>
		</section>
		</div>
	);
};

export default Contact;
