import Image from 'next/image';
import MK from '../../../public/Imgs/MK.jpg'
import { useState, useEffect } from 'react';

const items = ['web developer', 'Programmer', 'Data scientist'];
const intervalDuration = 2000;

export default function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, intervalDuration);

        return () => {
        clearInterval(interval);
        };
    }, []);

  return (
    <>
        <section className="text-gray-600 dark:text-gray-100 body-font lg:pt-16 lg:pb-20 md:py-16 py-10 lg:px-20 md:px-16 sm:px-12 xs:px-4 px-3">
            <div className="mx-auto flex md:flex-row flex-col">
                <div className="flex flex-col lg:w-1/2 md:w-1/2 sm:w-full xs:w-full w-full lg:mb-0 lg:mt-16 md:mt-10 md:mb-0 sm:mb-10 xs:mb-8 mb-4 lg:pr-24 md:pr-16 lg:items-start md:items-start sm:items-center lg:text-left md:text-left sm:text-center xs:text-center text-center">
                    <h1 className='text-blue-500 dark:text-blue-300 text-xl'>I am {items[currentIndex]}!</h1>
                    <h1 className="title-font lg:text-5xl md:text-4xl sm:text-3xl xs:text-3xl text-xl mb-4 font-bold text-blue-900 dark:text-white">
                        Mubashir Iftikhar
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        We are a team of expert web developers who specialize in creating stunning, functional websites for businesses of all sizes. Our passion for design and attention to detail ensure that every project we undertake is completed to the highest standard.
                    </p>
                    <div className="lg:text-2xl font-bold">
                        <button className="lg:mx-2 md:mx-2 sm:mx-2 xs:w-full ms-1 mr-5 transition ease-in-out delay-100 hover:-translate-y-1 duration-1000 hover:scale-110 text-white rounded-3xl bg-blue-900 py-1 px-6 focus:outline-none hover:bg-white border-2 hover:text-blue-900 dark:shadow-none dark:bg-blue-500 dark:hover:bg-white dark:hover:text-blue-500 border-blue-900">
                            <a href="https://www.linkedin.com/in/mubashir-iftikhar-751761246/">
                                Linked In
                            </a>
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full h-96">
                    <Image className="lg:object-fill md:object-fill h-96 lg:w-96 md:w-96 lg:ms-32" alt="Mubashir" style={{borderRadius: '20px'}} src={MK} />
                </div>
            </div>
        </section>
    </>
  )
}
