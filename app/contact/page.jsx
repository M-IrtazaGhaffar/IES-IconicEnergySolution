import React from 'react'

function page() {
    return (
        <div class="px-6 py-24 sm:py-32 lg:px-8">
            <div className='z-0'>
                <div className='bg-sky-900/60 w-20 h-20 blur-xl absolute top-[20%] left-[20%]'></div>
                <div className='bg-sky-900/60 w-20 h-20 blur-xl absolute top-[40%] left-[60%]'></div>
                <div className='bg-sky-900/60 w-20 h-20 blur-xl absolute top-[60%] left-[40%]'></div>
                <div className='bg-sky-900/60 w-20 h-20 blur-xl absolute top-[80%] left-[80%]'></div>
            </div>
            <div class="mx-auto max-w-2xl text-center z-10">
                <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Contact sales</h2>
                <p class="mt-2 text-sm leading-8">Let us know about your wonderings to catch you!</p>
            </div>
            <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label for="first-name" class="block text-xs font-semibold leading-6  ">First name</label>
                        <div class="mt-2.5">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required placeholder="What's your First name?" />
                        </div>
                    </div>
                    <div>
                        <label for="last-name" class="block text-xs font-semibold leading-6  ">Last name</label>
                        <div class="mt-2.5">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required placeholder="What's your First name?"/>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="company" class="block text-xs font-semibold leading-6  ">Company</label>
                        <div class="mt-2.5">
                            <input type="text" name="company" id="company" autocomplete="organization" class="block w-full bg-transparent outline-none rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required placeholder="What's your occupation?"/>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-xs font-semibold leading-6  ">Email</label>
                        <div class="mt-2.5">
                            <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2  bg-transparent outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required placeholder='Do you own an email?' />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="phone-number" class="block text-xs font-semibold leading-6  ">Phone number</label>
                        <div class="relative mt-2.5">
                            <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full bg-transparent outline-none rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required placeholder='How can we contact you?'/>
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block text-xs font-semibold leading-6  ">Message</label>
                        <div class="mt-2.5">
                            <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 bg-transparent outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none" required placeholder='Describe yourself...'></textarea>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
                </div>
            </form>
        </div>
    )
}

export default page