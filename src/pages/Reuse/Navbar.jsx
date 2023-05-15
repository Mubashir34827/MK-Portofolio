import Link from "next/link"
import { useState } from 'react';
import Head from "next/head";


import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const router = useRouter();
  const { asPath } = router;

  const titleMap = {
    "/Components/home": "Home",
    "/Components/profile": "Profile",
    "/Components/services": "Services",
    "/Components/about": "About",
    "/Components/skills": "Skills",
    "/Components/contact": "Contact Us",
  };

  useEffect(() => {
    const currentTitle = titleMap[asPath] || "Default Title";
    document.title = currentTitle;
  }, [asPath]);
  
  

  return (
    <>
       <Head>
        <title>Home</title>
      </Head>
      <div className="hidden lg:block md:block sm:hidden xs:hidden fixed top-0 left-0 right-0">
        <header className="text-gray-600 body-font border-b bg-white dark:bg-black">
          <div className="container mx-auto flex flex-wrap py-3 lg:px-12 flex-col md:flex-row items-center">
              <Link href='/Components/home' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-white">
                  <h1 className="ml-3 text-3xl font-bold">Mubashir</h1>
              </Link>
              <nav className="mx-auto flex flex-wrap items-center text-base justify-center">
                <Link href="/Components/profile" className="text-xl text-black font-medium mr-5 hover:underline dark:text-white">
                  Home
                </Link>
                <Link href="/Components/services" className="text-xl text-black font-medium mr-5 hover:underline dark:text-white">
                  Services
                </Link>
                <Link href="/Components/about" className="text-xl text-black font-medium mr-5 hover:underline dark:text-white">
                  About
                </Link>
                <Link href="/Components/skills" className="text-xl text-black font-medium mr-5 hover:underline dark:text-white">
                  Skills
                </Link>
                <Link href="/Components/contact" className="text-xl text-black font-medium mr-5 hover:underline dark:text-white">
                  Contact
                </Link>
              </nav>
              <button className="text-xl font-bold text-white inline-flex items-center bg-blue-900 border-0 py-1 px-8 focus:outline-none hover:bg-white hover:border-blue-900 hover:text-blue-900 hover:shadow-lg hover:shadow-blue-200 rounded-3xl mt-4 md:mt-0 dark:bg-blue-500 dark:hover:bg-white">
                  Download CV
              </button>
          </div>
        </header>
      </div>
      <div className="lg:hidden md:hidden sm:block xs:block">
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
            <Link href="/Components/home">
              <span className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Mubashir
                </span>
              </span>
            </Link>
            <button data-collapse-toggle="navbar-hamburger" type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-hamburger" aria-expanded={isMenuOpen ? 'true' : 'false'} onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" ></path>
              </svg>
            </button>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full`} id="navbar-hamburger">
              <ul className="flex flex-col font-medium mt-4 mr-11 rounded-lg bg-gray-50 dark:bg-gray-800">
                <li>
                <Link href='/Components/profile' className={`block py-2 pl-3 pr-4 rounded ${ activeLink === '/Components/home'
                      ? 'text-white bg-blue-700 dark:bg-blue-500' : 'text-gray-900 dark:text-white hover:bg-gray-100'}`}
                      onClick={() => handleLinkClick('/Components/home')} aria-current={activeLink === '/Components/home' ? 'page' : undefined}>
                    <span>
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                <Link href='/Components/about' className={`block py-2 pl-3 pr-4 rounded ${ activeLink === '/Components/about'
                      ? 'text-white bg-blue-700 dark:bg-blue-500' : 'text-gray-900 dark:text-white hover:bg-gray-100'}`}
                      onClick={() => handleLinkClick('/Components/about')} aria-current={activeLink === '/Components/about' ? 'page' : undefined}>
                    <span>About</span>
                  </Link>
                </li>
                <li>
                <Link href='/Components/skills' className={`block py-2 pl-3 pr-4 rounded ${ activeLink === '/Components/skills'
                    ? 'text-white bg-blue-700 dark:bg-blue-500' : 'text-gray-900 dark:text-white hover:bg-gray-100'}`}
                      onClick={() => handleLinkClick('/Components/skills')} aria-current={activeLink === '/Components/skills' ? 'page' : undefined}>
                    <span>Skills</span>
                  </Link>
                </li>
                <li>
                <Link href='/Components/services' className={`block py-2 pl-3 pr-4 rounded ${ activeLink === '/Components/services'
                          ? 'text-white bg-blue-700 dark:bg-blue-500' : 'text-gray-900 dark:text-white hover:bg-gray-100'}`}
                      onClick={() => handleLinkClick('/Components/services')} aria-current={activeLink === '/Components/serivces' ? 'page' : undefined}>                
                    <span>Services</span>
                </Link>
                </li>
                <li>
                <Link href='/Components/contact' className={`block py-2 pl-3 pr-4 rounded ${ activeLink === '/Components/contact'
                          ? 'text-white bg-blue-700 dark:bg-blue-500' : 'text-gray-900 dark:text-white hover:bg-gray-100'}`}
                      onClick={() => handleLinkClick('/Components/contact')} aria-current={activeLink === '/Components/contact' ? 'page' : undefined}>
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
