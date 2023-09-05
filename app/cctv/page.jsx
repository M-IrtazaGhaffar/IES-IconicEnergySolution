import Image from 'next/image'
import React from 'react'
import Img from "../assets/cctv1.jpg";
import Link from 'next/link';

function page() {
  const data = [
    'Dome cameras',
    'Bullet cameras',
    'PTZ cameras',
    'Wireless cameras',
    'Infrared cameras',
    'CCTV cameras with AI'
  ]
  return (
    <div className='min-h-screen p-10 bg-white'>
      <h1 className='text-4xl lg:text-6xl p-5 text-center font-extrabold'>
        CCTV Cameras
      </h1>
      <p className='text-xs text-center'>
        The CCTV camera sold by Iconic Energy Solutions is a high-quality security camera that is perfect for home and business use. It features a 1080p resolution, night vision, and motion detection. The camera is also weatherproof and can be mounted indoors or outdoors.
      </p>
      <div className='flex justify-center py-10'>
        <Image src={Img} width={500} className='border-4 border-indigo-500 rounded' />
      </div>
      <h3 className='text-2xl text-center font-semibold'>
        Types of CCTV Cameras available
      </h3>
      <ul className='flex items-center justify-center gap-5 flex-wrap p-10'>
        {
          data.map((item) => {
            return <li className='bg-indigo-500 text-white px-5 py-2 rounded font-semibold boxShadow' key={item}>{item}</li>
          })
        }
      </ul>
      <ul className='text-sm list-decimal list-inside'>
        <h3 className='text-2xl font-semibold py-3'>
          Some Features about CCTV!
        </h3>
        <li>The camera captures clear and detailed images, even in low-light conditions.</li>
        <li>The camera can see in total darkness up to 30 feet away.</li>
        <li>The camera can detect motion and send alerts to your phone or computer.</li>
        <li>The camera is protected from dust and water, making it suitable for indoor and outdoor use.</li>
        <li>The camera has a wide viewing angle of 120 degrees, so you can see a large area.</li>
        <li>The camera is easy to install and can be mounted on a wall or ceiling.</li>
        <h3 className='text-2xl font-semibold py-3'>
          Also
        </h3>
        <li>CCTV cameras can deter crime by making criminals think twice about targeting your property.</li>
        <li>CCTV footage can be used to solve crimes by providing evidence to the police.</li>
        <li>CCTV cameras can help you keep an eye on your property, even when you are not there.</li>
        <li>CCTV cameras can be used to monitor your employees to ensure that they are following company policies.</li>
      </ul>
      <Link href='/contact' className='text-indigo-500 text-lg flex gap-3 py-10 flex-wrap items-center justify-center'>
        Learn More
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor" /></svg>
      </Link>
    </div>
  )
}

export default page