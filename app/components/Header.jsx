import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Camera from "../assets/camera.png";

function Header() {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center gap-6 text-center p-10'>
            <Image src={Camera} width={350} className='relative opacity-80 left-0 py-10 lg:p-0 lg:absolute lg:top-48' alt='IMG' />
            <h1 className='text-4xl lg:text-6xl font-bold flex flex-col gap-2 z-10'>
                So! You're in Search of
                <span className='text-indigo-600 text-6xl lg:text-8xl'>
                    Energy Solutions?
                </span>
            </h1>
            <p className='z-10'>
                Then you&#39;re at the right place. No need to worry about it, we&#39;re here for you. <span className='font-semibold'>Iconic Energy Solutions</span> is one of best Energy problems solvers all over the <span className='text-teal-700 font-semibold'>Pakistan</span> & they&#39;ll help you to get rid of it.
            </p>
            <Link className='bg-indigo-500 px-4 py-2 rounded text-white flex items-center gap-2 boxShadow' href='/contact'>
                Get Ready to Dive
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down mt-5 relative animate-bounce" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
            </svg>
            <div className='w-12 h-12 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[15%] left-[60%]'></div>
            <div className='w-12 h-12 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[30%] left-[30%]'></div>
            <div className='w-12 h-12 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[45%] left-[45%]'></div>
            <div className='w-12 h-12 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[60%] left-[15%]'></div>
            <div className='w-12 h-12 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[35%] left-[70%]'></div>
            <div className='w-12 h-12 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[50%] left-[50%]'></div>
            <div className='w-12 h-12 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[20%] left-[85%]'></div>
            <div className='w-12 h-12 bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-90 blur-2xl absolute top-[65%] left-[35%]'></div>
        </div>
    )
}

export default Header