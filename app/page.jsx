import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Newsletter from './components/Newsletter'
import Work from './components/Work'
import Message from './components/Message'
import Responses from './components/Responses'
import Services from './components/Services'

function page() {
  return (
    <div className='bg-white min-h-screen max-w-[100vw]'>
      <Header />
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