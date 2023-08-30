import React from 'react'

function Header() {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center gap-6 text-center p-10'>
            <h1 className='text-4xl lg:text-6xl font-bold flex flex-col gap-2'>
                So! You're in Search of
                <span className='text-[#576CBC] text-6xl lg:text-8xl'>
                    Energy Solutions?
                </span>
            </h1>
            <p>
                Then you&#39;re at the right place. No need to worry about it, we&#39;re here for you. <span className='font-semibold'>Iconic Energy Solutions</span> is one of best Energy problems solvers all over the pakistan & they&#39;ll help you to get rid of it.
            </p>
            <button className='bg-[#576CBC] px-4 py-2 rounded text-white flex items-center gap-2'>
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down relative animate-bounce" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                </svg>
            </button>
        </div>
    )
}

export default Header