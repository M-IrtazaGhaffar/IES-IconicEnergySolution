import Image from 'next/image'
import React from 'react'
import Logo from "../assets/Logo1.png";

function About() {
    return (
        <div className='p-10 relative z-10 bgGen text-white'>
            <div className="m-w-[90vw] absolute z-30 overflow-hidden">
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
            <h3 className='text-6xl font-extrabold text-center p-5'>Yes!</h3>
            <p className='text-center font-bold'>Iconic Energy Solution is renowned service provideer company dealing in Standby Power, Civil Works and Air Conditioning Systems in the Banking, Restaurants, Textile & Education sectors.</p>
            <div className='flex items-center lg:justify-evenly justify-between gap-10 flex-col md:flex-row-reverse lg:p-10'>
                <Image src={Logo} width={300} />
                <div className='w-[70%] lg:w-[50%]'>
                    <h3 className='py-5 underline underline-offset-8 text-4xl font-bold tracking-tight text-white sm:text-6xl"'>Why Us?</h3>
                    <p className='text-sm'>
                        Iconic Energy Solution is a world class service provider company dealing in Standby Power, Civil Works and Air Conditioníng Systems in the Banking, Restaurants, Textile & Education sectors. We have-managed to gain a foothold in the emerging but very competitive operations and maintenance industry of Pakistan.
                        <br />
                        Our professional solutions, strategic decisions, state of the art technology implications and motivated staff have made a visible distinction in the eyes of our clients - while comparing us with our competitors.
                        <br />
                        Iconic Energy Solution has bcen established by highly qualified and committed individuals, having diversified experience of different industries in general and telecom industry in particular. Our business philosophy is to build a long term business relationship and to come up with solutions aimed at reducing operational costs and maximizing ROI of the customer. Our aim is to provide O&M services
                        all over Pakistan with maximum efficiency in terms of quality of work and providing services on time.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About