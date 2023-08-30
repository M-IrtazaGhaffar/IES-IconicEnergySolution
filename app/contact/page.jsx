import React from 'react'

function page() {
    return (
        <div class="px-6 py-24 sm:py-32 lg:px-8 bg-white text-black">
            <div class="mx-auto max-w-2xl text-center z-10">
                <h2 class="text-4xl font-bold tracking-tight sm:text-6xl">Contact sales</h2>
                <p class="mt-2 text-sm leading-8">
                    Get started on projects, request information about services, or ask about inventory. Our sales team is ready to help spec and find equipment for simple to complex industrial equipment systems! Our team usually responds within one business day. For information immediately, please call us during normal business hours to let us know about your wonderings to catch you!
                </p>
            </div>
            <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label for="first-name" class="block text-xs font-semibold leading-6  ">First name</label>
                        <div class="mt-1">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6" required placeholder="What's your First name?" />
                        </div>
                    </div>
                    <div>
                        <label for="last-name" class="block text-xs font-semibold leading-6  ">Last name</label>
                        <div class="mt-1">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full bg-transparent rounded-md border-0 px-3.5 py-2 outline-none shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset   sm:text-sm sm:leading-6" required placeholder="What's your First name?" />
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
            <div className='flex justify-center items-center min-w-full py-20'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.557297260315!2d73.14703859110026!3d33.56487680461503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec4cb06fe58d%3A0x1741b4e276218c34!2sSoan%20Ave%2C%20Islamabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1693425552437!5m2!1sen!2s" className='w-[95vw] h-96'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default page