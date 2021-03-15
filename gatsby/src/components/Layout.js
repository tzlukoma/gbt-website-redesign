import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
	return (
		<div>
			<Nav />
            <div className="pt-16">
	{children}
            </div>
		
			<Footer />
		</div>
	);
}
