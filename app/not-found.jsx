import React from 'react'

function notFound() {
    return (
        <div className='min-h-screen bg-white text-center flex justify-center items-center gap-5 flex-col p-10'>
            <h1 className='text-4xl lg:text-6xl p-5 text-center font-extrabold'>
                404 | Not Found
            </h1>
            <p className='text-xs'>
                The page you are looking for could not be found.
                Please check the URL you entered and try again.
                If you are still having trouble, please contact the website administrator.
            </p>
            <div className="divider">OR</div>
            <p className='text-xs'>Visit the developers website for more info.</p>
            <a href="https:ittidevelops.com" className='bg-indigo-500 text-white py-3 px-5 rounded boxShadow' target='_blank'>ITTI Develops</a>
        </div>
    )
}

export default notFound