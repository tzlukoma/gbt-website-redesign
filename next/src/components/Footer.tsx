import React from 'react';

export default function Footer() {
	return (
		<footer className="px-5">
			<h5 className=" text-center">{`© George B. Thompson ${new Date().getFullYear()}`}</h5>
		</footer>
	);
}
