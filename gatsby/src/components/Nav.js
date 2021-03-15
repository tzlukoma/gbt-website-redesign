import React, { useState } from 'react';
import { Link } from 'gatsby';

export default function Nav() {
	const [menuOpen, setMenuOpen] = useState(false);

	const links = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'Schedule',
			link: '/schedule',
		},
		{
			name: 'Learn',
			link: '/learn',
		},
		{
			name: 'Books',
			link: '/books',
		},
		{
			name: 'About',
			link: '/about',
		},
	];

	function handleMenuClick() {
		setMenuOpen(!menuOpen);
	}

	console.log(menuOpen);

	return (
		<header className="text-white lg:px-5 px-6 bg-primary-500 flex flex-wrap items-center fixed w-full z-50 transition-all duration-200">
			<div className="flex items-center justify-between flex-1">
				<Link to="/">
					<img className="w-36" src="/logo.svg" />
				</Link>
			</div>
			<button
				htmlFor="menu-toggle"
				className="block pointer-cursor lg:hidden"
				onClick={handleMenuClick}>
				<svg
					className="text-white fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20">
					<title>menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
			<div
				className={
					'w-full lg:flex lg:items-center lg:w-auto ' +
					(menuOpen ? '' : 'hidden')
				}
				id="menu">
				<nav>
					<ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
						{links.map((link) => {
							return (
								<li>
									<Link
										className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:text-secondary-500 hover:border-secondary-300 transition-all duration-200"
										to={link.link}>
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>

		// <div className="mx-auto p-3 font-serif text-lg bg-primary-500">
		// 	<nav className="flex justify-between md:items-center ">
		//         <div className="grid grid-cols-3">

		// 		<div >
		// 			<div className={menuOpen ? `pb-5` : null}>
		// 				<a href="#">
		// 					<img className="w-40" src="/logo.svg" />
		// 				</a>
		// 			</div>
		// 		</div>
		// 		<div className="col-start-3"onClick={handleMenuClick}>
		// 				<div id="hamburgerbtn" className="md:hidden bg-white text-primary">
		// 					icon
		// 				</div>{' '}

		// 		</div>{' '}
		// 		<div>
		// 			<ul className={menuOpen ? `` : `hidden`}>
		// 				<li className="text-secondary-500 ">Home</li>
		// 				<li className="text-secondary-500 ">Schedule</li>
		// 				<li className="text-secondary-500 ">Learn</li>
		// 				<li className="text-secondary-500 ">Books</li>
		// 				<li className="text-secondary-500 ">About</li>
		// 			</ul>
		// 		</div>

		//         </div>

		//         <ul className="hidden md:flex md:flex-row text-secondary-500 cursor-pointer">
		// 			<li className="pr-10 hover:text-secondary-100">
		// 				<Link to="/">Home</Link>
		// 			</li>
		// 			<li className="pr-10 hover:text-secondary-100">
		// 				<Link to="/schedule">Schedule</Link>
		// 			</li>
		// 			<li className="pr-10 hover:text-secondary-100">
		// 				<Link to="/learn">Learn</Link>
		// 			</li>
		// 			<li className="pr-10 hover:text-secondary-100">
		// 				<Link to="/books">Books</Link>
		// 			</li>
		// 			<li className="pr-10 hover:text-secondary-100">
		// 				<Link to="/about">About</Link>
		// 			</li>
		// 		</ul>
		// 	</nav>
		// </div>
	);
}
