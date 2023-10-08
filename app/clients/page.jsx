import React from 'react'
import Responses from '../components/Responses'
import ResponsesCarousel from "../components/ResponsesCarousel";

function page() {
  return (
    <div className='bg-white min-h-screen max-w-[100vw]'>
        <Responses />
        <ResponsesCarousel />
    </div>
  )
}

export default page