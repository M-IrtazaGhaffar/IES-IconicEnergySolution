import React from 'react'

function loading() {
    return (
        <div className='min-h-screen flex justify-center items-center flex-col gap-10 p-10 text-center'>
            <div className='w-14 h-14 bg-transparent border-t-2 border-sky-500 rounded-full animate-spin'></div>
            <div>
                Please wait while we process your request!
            </div>
            <p className='text-xs absolute bottom-10 opacity-75'>
                www.iconic.com.pk
            </p>
        </div>
    )
}

export default loading