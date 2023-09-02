'use client';
import React, { useState } from 'react'

function Load() {
    const [Usage, setUsage] = useState([
        {
            name: 'tubelight',
            watt: 75,
            no: 0
        },
        {
            name: 'energysaver',
            watt: 25,
            no: 0
        },
        {
            name: 'led',
            watt: 12,
            no: 0
        },
        {
            name: 'fan',
            watt: 150,
            no: 0
        },
        {
            name: 'tv',
            watt: 250,
            no: 0
        },
        {
            name: 'tv32',
            watt: 100,
            no: 0
        },
        {
            name: 'computer',
            watt: 500,
            no: 0
        },
        {
            name: 'refrigerator',
            watt: 300,
            no: 0
        },
        {
            name: 'freezer',
            watt: 350,
            no: 0
        },
        {
            name: 'washingmachine',
            watt: 700,
            no: 0
        },
        {
            name: 'waterpump',
            watt: 800,
            no: 0
        },
        {
            name: 'iron',
            watt: 1000,
            no: 0
        },
        {
            name: 'ac1',
            watt: 1500,
            no: 0
        },
        {
            name: 'ac1.5',
            watt: 2000,
            no: 0
        },
    ])

    const [Load, setLoad] = useState(0)

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        for (let i = 0; i < Usage.length; i++) {
            if (name === Usage[i].name) {
                const item = Usage[i];
                item.no = +value
            }
        }

        console.log(Usage);
    }

    const calculate = () => {
        let sum = 0;
        let mul = 0;
        for (let i = 0; i < Usage.length; i++) {
            // console.log('No: ' + Usage[i].no);
            // console.log('wat: ' + Usage[i].watt);
            mul = Usage[i].no * Usage[i].watt
            // console.log(i + " -mul- " + mul);
            sum = sum + mul
            console.log(i + " -sum- " + sum);
        }
        setLoad(sum)
    }

    return (
        <div className='py-10 flex flex-wrap gap-10 items-center justify-center'>
            <div className='text-center px-10 py-5 border-2 border-[#576CBC]'>
                <h3 className='text-xl'>Peak Load</h3>
                <span className='text-3xl font-semibold'>~ {Load} W</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10">
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="tubelights" className='text-xs'>Tubelights</label>
                    <input id='tubelights' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 75 Watt' name='tubelight' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="energysaver" className='text-xs'>Energysaver</label>
                    <input id='energysaver' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 25 Watt' name='energysaver' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="led" className='text-xs'>LED Bulb</label>
                    <input id='led' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 12 Watt' name='led' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="fan" className='text-xs'>Fans</label>
                    <input id='fan' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 150 Watt' name='fan' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="tv" className='text-xs'>TV</label>
                    <input id='tv' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 250 Watt' name='tv' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="tv32" className='text-xs'>TV 32 inch</label>
                    <input id='tv32' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 100 Watt' name='tv32' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="computer" className='text-xs'>Computer</label>
                    <input id='computer' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 500 Watt' name='computer' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="refrigerator" className='text-xs'>Refrigerator</label>
                    <input id='refrigerator' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 300 Watt' name='refrigerator' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="freezer" className='text-xs'>Freezer</label>
                    <input id='freezer' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 350 Watt' name='freezer' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="washingmachine" className='text-xs'>Washing Machine</label>
                    <input id='washingmachine' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 700 Watt' name='washingmachine' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="waterpump" className='text-xs'>Water Pump</label>
                    <input id='waterpump' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 800 Watt' name='waterpump' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="iron" className='text-xs'>Iron</label>
                    <input id='iron' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 1000 Watt' name='iron' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="ac1" className='text-xs'>AC 1 ton</label>
                    <input id='ac1' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 1500 Watt' name='ac1' onChange={handleInput} />
                </div>
                <div className="flex flex-col gap-1 lg:w-[25vw]">
                    <label htmlFor="ac1.5" className='text-xs'>AC 1.5 ton</label>
                    <input id='ac1.5' className='bg-transparent border-2 border-slate-300 px-3 py-1 rounded outline-none' type='number' placeholder='1 for 2000 Watt' name='ac1.5' onChange={handleInput} />
                </div>
            </div>
            <button onClick={calculate} className='bg-indigo-500 px-10 py-3 text-white rounded font-semibold flex items-center gap-5 boxShadow'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 5H7V7H17V5Z" fill="currentColor" /><path d="M7 9H9V11H7V9Z" fill="currentColor" /><path d="M9 13H7V15H9V13Z" fill="currentColor" /><path d="M7 17H9V19H7V17Z" fill="currentColor" /><path d="M13 9H11V11H13V9Z" fill="currentColor" /><path d="M11 13H13V15H11V13Z" fill="currentColor" /><path d="M13 17H11V19H13V17Z" fill="currentColor" /><path d="M15 9H17V11H15V9Z" fill="currentColor" /><path d="M17 13H15V19H17V13Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3ZM5 3H19V21H5V3Z" fill="currentColor" /></svg>
                Calculate Load
            </button>
        </div>
    )
}

export default Load