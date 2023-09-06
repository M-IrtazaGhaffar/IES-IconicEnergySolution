import Image from 'next/image'
import React from 'react'
import Logo from "../assets/Logo123.png";

function page() {
  return (
    <div className='lg:min-h-screen min-h-screen p-10 bg-white'>
      <h1 className='text-4xl lg:text-6xl p-5 text-center font-extrabold'>
        Other Services
      </h1>
      <div className='flex flex-wrap gap-5 items-center justify-center py-20'>
        <div className='lg:w-[15vw] lg:h-[15vw] bg-slate-50 rounded-full flex items-center justify-center text-xs p-5 font-semibold text-center border-4 border-indigo-500 boxShadow'>
          Renovation of branches  in banking  sector
        </div>
        <div className='lg:w-[15vw] lg:h-[15vw] bg-slate-50 rounded-full flex items-center justify-center text-xs p-5 font-semibold text-center border-4 border-indigo-500 boxShadow lg:relative top-24'>
          New sound proof canopies  of gensets
        </div>
        <Image src={Logo} width={250} className='' />
        <div className='lg:w-[15vw] lg:h-[15vw] bg-slate-50 rounded-full flex items-center justify-center text-xs p-5 font-semibold text-center border-4 border-indigo-500 boxShadow lg:relative top-24'>
          Transformer  Repairing work
        </div>
        <div className='lg:w-[15vw] lg:h-[15vw] bg-slate-50 rounded-full flex items-center justify-center text-xs p-5 font-semibold text-center border-4 border-indigo-500 boxShadow'>
          Earthing work
        </div>
      </div>
    </div>
  )
}

export default page