import { skills } from "../api/hello"

export default function Skills() {
  return (
    <>
        <section className="text-gray-600 body-font lg:mt-24 lg:mb-16 md:mt-20 sm:mt-5 mt-4 mb-12 mx-auto lg:px-24 md:px-16 sm:px-10 xs:px-10">
            <h1 className="pt-5 pb-12 text-6xl font-bold text-center text-blue-500 dark:text-white">Skills</h1>
            <div className="flex flex-wrap -m-4">
                {skills.map((item) => (
                <div key={item.id} className="2xl:w-1/4 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full lg:py-4 lg:px-4 md:py-4 md:px-4 sm:py-3 sm:px-3 xs:px-2 py-2 ps-8 pe-4">
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-blue-700 dark:text-white">{item.name}</span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">{item.value}%</span>
                    </div>
                    <div className="w-full h-3 mb-4 bg-gray-200 rounded-full">
                        <div style={{width: `${item.bar}`}} className='h-full text-center text-xs text-white bg-blue-500 dark:bg-blue-500 rounded-full'></div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    </>
  )
}
