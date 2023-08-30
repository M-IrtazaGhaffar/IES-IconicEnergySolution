import React from 'react'

function page() {
    return (
        <div class="px-6 py-24 sm:py-32 lg:px-8 bg-white text-black">
            <div className='flex flex-wrap items-center justify-center'>
                <div class="mx-auto max-w-2xl text-center z-10">
                    <h2 class="text-4xl font-bold tracking-tight sm:text-6xl">Contact sales</h2>
                    <p class="mt-2 text-sm leading-8">
                        Get started on projects, request information about services, or ask about inventory. Our sales team is ready to help spec and find equipment for simple to complex industrial equipment systems! Our team usually responds within one business day. For information immediately, please call us during normal business hours to let us know about your wonderings to catch you!
                    </p>
                    <h3 className='text-2xl font-semibold py-10'>Otherwise</h3>
                    <div className='flex gap-3 flex-col bg-slate-200 p-10 rounded'>
                        <div className='flex flex-col gap-1 items-start'>
                            <h3 className='text-lg pb-3'>
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
                            <h3 className='text-lg pb-3'>
                                Mail Us
                            </h3>
                            <a href="mailto:Info@iconicenergy.com.pk">Info@iconicenergy.com.pk</a>
                        </div>
                    </div>
                </div>
                <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
                    {/* <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"> */}
                    <div className='flex flex-col gap-3 lg:w-[30vw]'>
                        <div>
                            <label for="first-name" class="block text-xs font-semibold leading-6  ">First name</label>
                            <div class="mt-1">
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-[90vw] lg:w-full bg-transparent rounded-md border-0 px-3.5 py-2 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6" required placeholder="What's your First name?" />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="company" class="block text-xs font-semibold leading-6  ">Company</label>
                            <div class="mt-1">
                                <input type="text" name="company" id="company" autocomplete="organization" class="block w-full bg-transparent outline-none rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6" required placeholder="What's your occupation?" />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-xs font-semibold leading-6  ">Email</label>
                            <div class="mt-1">
                                <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2  bg-transparent outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6" required placeholder='Do you own an email?' />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="phone-number" class="block text-xs font-semibold leading-6  ">Phone number</label>
                            <div class="relative mt-1">
                                <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full bg-transparent outline-none rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6" required placeholder='How can we contact you?' />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-xs font-semibold leading-6  ">Message</label>
                            <div class="mt-1">
                                <textarea name="message" id="message" rows="8" class="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6 resize-none" required placeholder='Describe yourself...'></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5">
                        <button type="submit" class="block w-full rounded-md bg-[#576CBC] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:scale-105 drop-shadow-2xl transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Let&#39;s talk</button>
                    </div>
                </form>
            </div>
            <div className='flex justify-center items-center min-w-full py-20'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.557297260315!2d73.14703859110026!3d33.56487680461503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec4cb06fe58d%3A0x1741b4e276218c34!2sSoan%20Ave%2C%20Islamabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693425552437!5m2!1sen!2s" className='w-[95vw] h-96 drop-shadow-2xl' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* Addresses */}
            <h3 className='text-3xl font-semibold text-center pt-10'>
                Planning to visit us?
            </h3>
            <p className='text-center pb-10 pt-3'>Here you go with our addresses</p>
            <div className="flex flex-wrap justify-center items-start gap-3">
                <div className="collapse collapse-arrow lg:w-[40vw] bg-slate-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Islamabad - CORPORATE OFFICE
                    </div>
                    <div className="collapse-content">
                        <p>Office number 12 Mehran plaza lst floor main soan avenue soan garden Islamabad</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow lg:w-[40vw] bg-slate-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Hyderabad
                    </div>
                    <div className="collapse-content">
                        <p>Thandi Sarak lashari hotal jamali para Hyderabad</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow lg:w-[40vw] bg-slate-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Karachi
                    </div>
                    <div className="collapse-content">
                        <p>House No 185 st #4 Ground Floor KDA Employees society Korangi karachi</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow lg:w-[40vw] bg-slate-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Peshawar
                    </div>
                    <div className="collapse-content">
                        <p>Noshehrg foud jagra stop Mai Gt roud peshawar</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow lg:w-[40vw] bg-slate-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Lahore
                    </div>
                    <div className="collapse-content">
                        <p>House No 448, Street No l18 Mandi Stop, Multan Chungi, Lahore</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow lg:w-[40vw] bg-slate-100">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Mansehra
                    </div>
                    <div className="collapse-content">
                        <p>Acil general store chakiya road belaa akbar Khan mansehra</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page