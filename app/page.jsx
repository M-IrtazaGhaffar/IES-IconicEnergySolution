import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Newsletter from './components/Newsletter'
import Work from './components/Work'
import Message from './components/Message'
import Responses from './components/Responses'
import Services from './components/Services'
import Image from 'next/image'
import Img from "./assets/head1.png";
// import Logo from "./assets/Logo1.png";

function page() {
  return (
    <div className='bg-white min-h-screen max-w-[100vw]'>
      {/* <div className="p-10 flex justify-center items-center min-h-[50vh]">
        <Image src={Logo} width={350} className='' />
      </div> */}
      <Header />
      <div className='flex items-center justify-center pt-0 px-10 pb-20'>
        <Image src={Img} alt='Img' width={500} />
      </div>
      <About />
      <Message />
      <div className="divider"></div>
      <Services />
      <div className="divider"></div>
      <Responses />
      <Work />
      <Newsletter />
    </div>
  )
}

export default page