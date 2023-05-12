
export default function Contact() {
  return (
    <>
        <section className="text-gray-600 dark:text-white mb-8 lg:px-48 md:px-16 sm:px-12 xs:px-4 body-font relative">
            <div className="pt-10 px-6">
                <h1 className="ps-2 pb-2 text-3xl font-bold">Get In <span className="text-blue-500">Touch</span></h1>
                <hr />
            </div>
            <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap">
                <div className="lg:w-1/2 md:w-1/2 sm:w-2/2 xs:w-2/2 rounded-lg sm:mr-10 lg:py-16 md:py-12 sm:py-8 xs:py-6 flex">
                    <div className="text-gray-600 body-font">
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
                            <div className="p-2 sm:w-2/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-blue-500 w-6 h-6">
                                        <path stroke-linecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    <span className="title-font ps-4 font-medium hover:text-blue-600"><a href="https://maps.google.com">Str. 22, Township, Lahore, Pakistan</a></span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-2/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-blue-500 w-6 h-6">
                                        <path stroke-linecap="round" strokeLinejoin="round" d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                    <span className="title-font ps-4 font-medium hover:text-blue-600"><a href="">+92 312 3456789</a></span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-2/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500 w-6 h-6">
                                        <path fill-rule="evenodd" d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z" clip-rule="evenodd" />
                                    </svg>
                                    <span className="title-font ps-4 font-medium hover:text-blue-600"><a href="https://mail.google.com">example@gmail.com</a></span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-2/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500 w-6 h-6">
                                    <path fill-rule="evenodd" d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z" clip-rule="evenodd" />
                                </svg>
                                    <span className="title-font ps-4 font-medium hover:text-blue-600"><a href="https://pk.linkedin.com">@LinkedIn</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-1/2 sm:w-2/2 xs:w-2/2 bg-white dark:bg-transparent flex-col md:ml-auto w-full md:py-8 md:mt-0">
                    <div className="mx-10">
                        <div className="flex flex-wrap py-10 -m-2">
                            <div className="p-2 w-1/2">
                                <input type="text" id="name" name="name" placeholder="Name" className="w-full bg-gray-100 dark:bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="p-2 w-1/2">
                            <div className="relative">
                                <input type="email" id="email" name="email" placeholder="Email" className="w-full bg-gray-100 dark:bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            </div>
                            <div className="p-2 w-full">
                                <textarea id="message" name="message" placeholder="Message" className="w-full bg-gray-100 dark:bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white font-bold bg-blue-900 dark:bg-blue-600 border-2 dark:border-transparent py-2 px-8 focus:outline-none hover:bg-white hover:text-blue-600 hover:border-blue-600 rounded-3xl text-lg">Send Message</button>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}
