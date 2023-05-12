import Link from "next/link"

export default function Navbar() {
  return (
    <>
        <header className="text-gray-600 body-font border-b">
            <div className="container mx-auto flex flex-wrap py-3 lg:px-12 flex-col md:flex-row items-center">
                <Link href='/Components/home' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-white">
                    <h1 className="ml-3 text-3xl font-bold">Portofolio</h1>
                </Link>
                <nav className="mx-auto flex flex-wrap items-center text-base justify-center">
                  <Link href="/Components/home" className="text-xl text-black font-medium mr-5 hover:underline dark:text-white">
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
                <button className="text-xl font-bold text-white inline-flex items-center bg-blue-900 border-0 py-1 px-8 focus:outline-none hover:bg-white hover:border-blue-900 hover:text-blue-900 hover:shadow-lg hover:shadow-blue-200 rounded-3xl mt-4 md:mt-0 dark:hover:bg-purple-500">
                    Download CV
                </button>
            </div>
            </header>
    </>
  )
}