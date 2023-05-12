import React, { useState } from 'react';
import Link from 'next/link';

export default function Responsive_Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <span className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full`} id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <li>
            <Link href='/Components/home' className={`block py-2 pl-3 pr-4 rounded ${ activeLink === '/Components/home'
                  ? 'text-white bg-blue-700 dark:bg-blue-600' : 'text-gray-900 dark:text-white hover:bg-gray-100'}`}
                  onClick={() => handleLinkClick('/Components/home')} aria-current={activeLink === '/Components/home' ? 'page' : undefined}>
                <span>
                  Home
                </span>
              </Link>
            </li>
            <li>
            <Link href='/Components/about' className={`block py-2 pl-3 pr-4 rounded ${ activeLink === '/Components/about'
                  ? 'text-white bg-blue-700 dark:bg-blue-600' : 'text-gray-900 dark:text-white hover:bg-gray-100'}`}
                  onClick={() => handleLinkClick('/Components/about')} aria-current={activeLink === '/Components/about' ? 'page' : undefined}>
                <span>About</span>
              </Link>
            </li>
            <li>
            <Link href='/Components/skills' className={`block py-2 pl-3 pr-4 rounded ${ activeLink === '/Components/skills'
                ? 'text-white bg-blue-700 dark:bg-blue-600' : 'text-gray-900 dark:text-white hover:bg-gray-100'}`}
                  onClick={() => handleLinkClick('/Components/skills')} aria-current={activeLink === '/Components/skills' ? 'page' : undefined}>
                <span>Skills</span>
              </Link>
            </li>
            <li>
            <Link href='/Components/services' className={`block py-2 pl-3 pr-4 rounded ${ activeLink === '/Components/services'
                      ? 'text-white bg-blue-700 dark:bg-blue-600' : 'text-gray-900 dark:text-white hover:bg-gray-100'}`}
                  onClick={() => handleLinkClick('/Components/services')} aria-current={activeLink === '/Components/serivces' ? 'page' : undefined}>                
                <span>Services</span>
            </Link>
            </li>
            <li>
            <Link href='/Components/contact' className={`block py-2 pl-3 pr-4 rounded ${ activeLink === '/Components/contact'
                      ? 'text-white bg-blue-700 dark:bg-blue-600' : 'text-gray-900 dark:text-white hover:bg-gray-100'}`}
                  onClick={() => handleLinkClick('/Components/contact')} aria-current={activeLink === '/Components/contact' ? 'page' : undefined}>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};