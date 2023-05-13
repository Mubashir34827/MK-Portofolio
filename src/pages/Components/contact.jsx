import { contactBar } from '../api/hello'

export default function Contact() {
  return (
    <>
        <section className="text-gray-600 dark:text-white mb-8 pt-8 lg:px-48 md:px-16 sm:px-12 xs:px-4 body-font ">
            <div className="px-6">
                <h1 className="ps-2 pb-2 text-3xl font-bold">Get In <span className="text-blue-500">Touch</span></h1>
                <hr />
            </div>
            <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap">
                <div className="lg:w-1/2 md:w-1/2 sm:w-2/2 xs:w-2/2 rounded-lg sm:mr-10 lg:py-16 md:py-12 sm:py-8 xs:py-6 flex">
                    <div className="text-gray-600 body-font">
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
                            {contactBar.map((item) => (
                                <div key={item.id} className="p-2 sm:w-2/2 w-full">
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                        {item.icon}
                                        <span className="title-font ps-4 font-medium hover:text-blue-600">
                                            <a href={item.link}>{item.title}</a>
                                        </span>
                                    </div>
                                </div>
                            ))}
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
                                <button className="flex mx-auto text-white font-bold transition ease-in-out delay-100 hover:-translate-y-1 duration-1000 hover:scale-110 bg-blue-900 py-2 px-8 focus:outline-none hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 border-blue-900 rounded-3xl text-lg dark:bg-blue-500 dark:text-white dark:hover:bg-white dark:hover:text-blue-500">
                                    Send Message
                                </button>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </section>
    </>
  )
}
