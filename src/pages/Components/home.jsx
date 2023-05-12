import Image from 'next/image';
import MK from '../../../public/Imgs/MK.jpg'
import { useState, useEffect } from 'react';

const items = ['web development', 'Programmer', 'Data science'];
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
        <section className="text-gray-600 dark:text-gray-100 body-font pt-16 pb-20 px-20">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className='text-blue-500 dark:text-blue-300 text-xl'>I am {items[currentIndex]}!</h1>
                    <h1 className="title-font sm:text-3xl text-4xl mb-4 font-bold text-blue-900 dark:text-white">
                        Mubashir Iftikhar
                    </h1>
                    <p className="mb-8 leading-relaxed">We are a team of expert web developers who specialize in creating stunning, functional websites for businesses of all sizes. Our passion for design and attention to detail ensure that every project we undertake is completed to the highest standard.</p>
                    <div className="flex justify-center lg:text-2xl font-bold">
                        <button className="inline-flex mx-2 transition ease-in-out delay-100 hover:-translate-y-1  duration-1000 hover:scale-110 text-white rounded-3xl bg-blue-900 py-1 px-6 focus:outline-none hover:bg-white border-2 hover:text-blue-900 border-blue-900">
                            Download CV
                        </button>
                        <button className="inline-flex mx-2 transition ease-in-out delay-100 hover:-translate-y-1  duration-1000 hover:scale-110 text-white rounded-3xl bg-blue-900 py-1 px-6 focus:outline-none hover:bg-white border-2 hover:text-blue-900 border-blue-900">
                            Linked In
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-96">
                    <Image className="object-fill h-96 w-96 ms-20" alt="hero" style={{borderRadius: '20px'}} src={MK} />
                    {/* <Image className="w-full mb-10 object-cover object-center rounded-xl" alt="hero" src="https://dummyimage.com/720x600"/> */}
                </div>
            </div>
        </section>
    </>
  )
}
