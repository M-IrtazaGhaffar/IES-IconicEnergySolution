import React from 'react'

function page() {
    const address = [
        {
            city: 'Islamabad - CORPORATE OFFICE',
            street: 'Office number 12 Mehran plaza lst floor main soan avenue soan garden, Islamabad'
        },
        {
            city: 'Hyderabad',
            street: 'Thandi Sarak lashari hotal jamali para, Hyderabad'
        },
        {
            city: 'Karachi',
            street: 'House No 185 st #4 Ground Floor KDA Employees society Korangi, Karachi'
        },
        {
            city: 'Peshawar',
            street: 'Noshehrg foud jagra stop Mai GT Road, Peshawar'
        },
        {
            city: 'Lahore',
            street: 'House No 448, Street No l18 Mandi Stop, Multan Chungi, Lahore'
        },
        {
            city: 'Mansehra',
            street: 'Acil general store chakiya road belaa akbar Khan, Mansehra'
        },
    ]
    return (
        <div className="px-6 py-24 sm:py-32 lg:px-8 bg-white text-black">
            <h1 className="text-4xl p-3 font-bold tracking-tight sm:text-6xl text-center">Contact Sales</h1>
            <div className='flex flex-wrap items-center justify-center'>
                <div className="mx-auto max-w-2xl text-center z-10">
                    <p className="mt-2 text-sm leading-8">
                        Get started on projects, request information about services, or ask about inventory. Our sales team is ready to help spec and find equipment for simple to complex industrial equipment systems! Our team usually responds within one business day. For information immediately, please call us during normal business hours to let us know about your wonderings to catch you!
                    </p>
                    <h3 className='text-2xl font-semibold py-10'>Otherwise</h3>
                    <div className='flex gap-3 flex-col text-slate-50 p-10 rounded relative bgCall'>
                        <div className='flex flex-col gap-1 items-start'>
                            <h3 className='text-lg font-semibold pb-3 flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                                </svg>
                                Call Us
                            </h3>
                            <a href="tel:+923335390253" className='text-sm'>0333-5390253</a>
                            <a href="tel:+923014082482" className='text-sm'>0301-4082482</a>
                            <a href="tel:+923315614692" className='text-sm'>0331-5614692</a>
                            <a href="tel:+923435453572" className='text-sm'>0343-5453572</a>
                            <a href="tel:+923416400400" className='text-sm'>0341-6400400</a>
                        </div>
                        <div className="divider">OR</div>
                        <div className='flex flex-col gap-1 items-start'>
                            <h3 className='text-lg font-semibold pb-3 flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                                </svg>
                                Mail Us
                            </h3>
                            <a href="mailto:Info@iconicenergy.com.pk">Info@iconicenergy.com.pk</a>
                        </div>
                    </div>
                </div>
                <form action="https://formspree.io/f/xrgwkbdp" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className='flex flex-col gap-3 lg:w-[30vw]'>
                        <div>
                            <label htmlFor="first-name" className="block text-xs font-semibold leading-6  ">First name</label>
                            <div className="mt-1">
                                <input type="text" name="First Name" id="first-name" autoComplete="given-name" className="block w-[90vw] lg:w-full bg-transparent rounded-md border-0 px-3.5 py-2 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6" required placeholder="What's your First name?" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-xs font-semibold leading-6  ">Company</label>
                            <div className="mt-1">
                                <input type="text" name="Company" id="company" autoComplete="organization" className="block w-full bg-transparent outline-none rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6" required placeholder="What's your occupation?" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-xs font-semibold leading-6  ">Email</label>
                            <div className="mt-1">
                                <input type="email" name="Email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2  bg-transparent outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6" required placeholder='Do you own an email?' />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-xs font-semibold leading-6  ">Phone number</label>
                            <div className="relative mt-1">
                                <input type="tel" name="Phone Number" id="phone-number" autoComplete="tel" className="block w-full bg-transparent outline-none rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6" required placeholder='How can we contact you?' />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-xs font-semibold leading-6  ">Message</label>
                            <div className="mt-1">
                                <textarea name="Message" id="message" rows="8" className="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 resize-none" required placeholder='Describe yourself...'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button type="submit" className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:scale-105 drop-shadow-2xl transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Let&#39;s talk</button>
                    </div>
                </form>
            </div>
            <div className='flex justify-center items-center min-w-full py-20'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.557297260315!2d73.14703859110026!3d33.56487680461503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec4cb06fe58d%3A0x1741b4e276218c34!2sSoan%20Ave%2C%20Islamabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693425552437!5m2!1sen!2s" className='w-[95vw] h-96 drop-shadow-2xl' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* Addresses */}
            <h3 className='text-3xl font-semibold text-center pt-10'>
                Planning to visit us?
            </h3>
            <p className='text-center pb-10 pt-3'>Here you go with our addresses</p>
            <div className="flex flex-wrap justify-center items-start gap-3">
                {
                    address.map(item => {
                        return (
                            <div className="collapse collapse-arrow lg:w-[40vw] bg-slate-100">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    {item.city}
                                </div>
                                <div className="collapse-content">
                                    <p>{item.street}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default page