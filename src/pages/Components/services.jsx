import { services } from "../api/hello"

export default function Services() {
    return (
    <>
        <section className="text-gray-600 dark:text-gray-100 body-font lg:mx-20 md:mx-10 sm:mx-10 xs:mx-5">
            <div className="container-fluid lg:px-12 lg:py-6 xs:py-10 sm:py-10 md:py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="xs:text-3xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-6xl font-bold title-font mb-4 text-blue-500 dark:text-white">Services</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably have not heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                <div className="flex flex-wrap -m-4 dark:text-gray-950">
                    {services.map((item) => (
                        <div key={item.id} className="lg:px-4 lg:py-2 px-4 md:py-2 py-4 md:w-1/4 sm:w-1/2 w-full">
                            <div style={{height: '300px'}} className="border-2 border-blue-900 shadow-lg shadow-blue-900 xs:text-center sm:text-center md:text-start lg:text-start px-6 py-4 rounded-3xl hover:shadow-xl hover:bg-blue-900 dark:hover:bg-blue-500 dark:border-blue-500 dark:hover:border-blue-500 dark:bg-white text-blue-900 hover:text-white dark:hover:text-white-900 hover:shadow-blue-200">
                                {item.icon}
                                <h2 className="title-font font-bold text-xl">{item.title}</h2>
                                <p className="leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}     
                </div>
            </div>
        </section>
    </>
  )
}
