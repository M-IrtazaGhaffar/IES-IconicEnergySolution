import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Newsletter from './components/Newsletter'
import Work from './components/Work'
import Message from './components/Message'

function page() {
  return (
    <div className='bg-white min-h-screen'>
      <Header />
      <About />
      <Message />
      <Work />
      <Newsletter />
    </div>
  )
}

export default page