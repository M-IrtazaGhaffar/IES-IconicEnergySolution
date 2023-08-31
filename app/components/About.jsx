import Image from 'next/image'
import React from 'react'
import Logo from "../assets/Logo1.png";

function About() {
    return (
        <div className='p-10 relative z-10 bgGen text-white'>
            <div className='max-w-[100vw] overflow-hidden'>
                <div className='w-10 h-20 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[15%] left-[60%]'></div>
                <div className='w-10 h-20 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[30%] left-[30%]'></div>
                <div className='w-10 h-20 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[45%] left-[45%]'></div>
                <div className='w-10 h-20 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[60%] left-[15%]'></div>
                <div className='w-10 h-20 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[35%] left-[70%]'></div>
                <div className='w-10 h-20 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[50%] left-[50%]'></div>
                <div className='w-10 h-20 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[20%] left-[85%]'></div>
                <div className='w-10 h-20 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[65%] left-[35%]'></div>
            </div>
            <h3 className='text-6xl font-extrabold text-center p-5 z-10'>Yes!</h3>
            <p className='text-center font-bold z-10'>Iconic Energy Solution is renowned service provideer company dealing in Standby Power, Civil Works and Air Conditioning Systems in the Banking, Restaurants, Textile & Education sectors.</p>
            <div className='flex items-center z-10 lg:justify-evenly justify-between gap-10 flex-col md:flex-row-reverse lg:p-10'>
                <Image src={Logo} width={300} />
                <div className='lg:w-[50%] z-10'>
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