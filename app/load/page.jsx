import React from 'react'
import Load from '../components/Load'

function page() {
    return (
        <div className='p-10 min-h-screen bg-white'>
            <h1 className='text-4xl lg:text-6xl p-5 text-center font-extrabold'>
                Load Calculator
            </h1>
            <p className='text-center text-xs'>Iconic Energy Solutons provides you Electric Load Calculator which is a powerful tool designed to streamline and simplify the complex process of determining the electrical load requirements for residential, commercial, and industrial settings. This innovative software or hardware application provides users with an invaluable resource for accurate and efficient load assessment, ensuring the safe and efficient distribution of electrical power.</p>
            <Load />
        </div>
    )
}

export default page