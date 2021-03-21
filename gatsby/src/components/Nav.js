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

  function manageMenu() {
    if (menuOpen) {
      setMenuOpen(false);
    } else return;
  }

  console.log(menuOpen);

  return (
    <header className="text-white lg:px-20 px-6 lg:py-0 py-2 bg-primary-500 flex flex-wrap items-center fixed w-full z-50 transition-all duration-200">
      <div className="flex items-center justify-between flex-1">
        <Link to="/">
          <img className="w-36" src="/logo.svg" />
        </Link>
      </div>
      <button
        htmlFor="menu-toggle"
        className="block pointer-cursor lg:hidden"
        onClick={handleMenuClick}
      >
        {/* heroicons.com - menu */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={
          'w-full lg:flex lg:items-center lg:w-auto ' +
          (menuOpen ? '' : 'hidden')
        }
        id="menu"
      >
        <nav>
          <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
            {links.map((link, idx) => {
              return (
                <li key={idx} onClick={() => manageMenu()}>
                  <Link
                    className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:text-secondary-300 hover:border-secondary-300 transition-all duration-500"
                    activeClassName="text-secondary-500"
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
