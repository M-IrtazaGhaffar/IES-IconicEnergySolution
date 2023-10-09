import Image from 'next/image'
import React from 'react'
import Img1 from "../assets/ats1.jpg";
import Img2 from "../assets/ats2.jpg";
import Img3 from "../assets/ats3.jpg";
import Img4 from "../assets/ats4.jpg";
import Img5 from "../assets/ats5.jpg";
import Img6 from "../assets/ats6.jpg";
import Img7 from "../assets/ats7.jpg";
import Link from 'next/link';

function page() {
  const data = [
    'Hybrid Transfer Switch (HTS)',
    'Dynamic Transfer Switch (DTS)',
    'Static Transfer Switch (STS)',
    'Automatic Transfer Switch (ATS)',
    'Manual Transfer Switch (MTS)'
  ]
  return (
    <div className='min-h-screen p-10 bg-white'>
      <h1 className='text-4xl lg:text-6xl p-5 text-center font-extrabold'>
        ATS Panels
      </h1>
      <p className='text-xs text-center'>
        An ATS panel, or Automatic Transfer Switch, is a device that automatically switches between two power sources. This is typically used in commercial and industrial settings to ensure that there is always a backup power source available in case of a power outage.
      </p>
      <h3 className='text-2xl text-center font-semibold py-5 lg:py-10'>
        ATS Panels we produce
      </h3>
      <div className='flex justify-center py-10 items-center gap-10 flex-wrap'>
        <Image alt='Image' src={Img7} width={250} className='border-4 rounded border-indigo-500' />
        <Image alt='Image' src={Img4} width={250} className='border-4 rounded border-indigo-500' />
        <Image alt='Image' src={Img5} width={250} className='border-4 rounded border-indigo-500' />
        <Image alt='Image' src={Img6} width={250} className='border-4 rounded border-indigo-500' />
      </div>
      <h3 className='text-2xl text-center font-semibold py-5 lg:py-10'>
        Types of ATS Panels available
      </h3>
      <div className='flex justify-center py-10 items-center gap-10 flex-wrap'>
        <Image alt='Image' src={Img1} width={300} />
        <Image alt='Image' src={Img3} width={300} />
        <Image alt='Image' src={Img2} width={300} />
      </div>
      <ul className='flex items-center justify-center gap-5 flex-wrap p-10'>
        {
          data.map((item) => {
            return <li className='bg-indigo-500 text-white px-5 py-2 rounded font-semibold boxShadow text-center' key={item}>{item}</li>
          })
        }
      </ul>
      <ul className='text-md list-decimal list-inside space-y-5'>
        <h3 className='text-2xl font-semibold py-3'>
          Some Features about ATS Panels!
        </h3>
        <li>The ATS panels are designed to be easy to use, even for non-technical users.</li>
        <li>The ATS panels are highly reliable and can withstand harsh environmental conditions.</li>
        <li>The ATS panels can be used in a wide range of applications, including commercial, industrial, and residential settings.</li>
        <li>The ATS panels are affordable and offer a good value for money.</li>
        <h3 className='text-2xl font-semibold py-3'>
          Also
        </h3>
        <li>An ATS panel ensures that there is always a backup power source available in case of a power outage. This can help to prevent downtime and loss of productivity.</li>
        <li>An ATS panel can protect sensitive equipment from damage caused by power outages. This is important for businesses that rely on critical equipment, such as servers and data centers.</li>
        <li>An ATS panel can help to improve safety by preventing accidents caused by power outages. This is important for businesses that operate in hazardous environments, such as manufacturing plants and warehouses.</li>
      </ul>
      <Link href='/contact' className='text-indigo-500 text-lg flex gap-3 py-10 flex-wrap items-center justify-center'>
        Learn More
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor" /></svg>
      </Link>
    </div>
  )
}

export default page