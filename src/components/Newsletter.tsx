
"use client";

import { Button } from "flowbite-react";


export default function Component() {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="gap-16 justify-between items-center p-6 text-white bg-gray-900 rounded-lg dark:bg-gray-800 lg:flex lg:gap-24 md:p-12">
            <div className="w-full">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl">Sign up for our newsletter</h2>
                <p className="font-light text-gray-400 sm:text-xl">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
            </div>
            <div className="mt-6 w-full lg:mt-0">
                <form action="#">
                    <div className="items-center mb-3 space-y-4 sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <label htmlFor="member_email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" required=""/>
                        </div>
                        <div>
                            <button className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-blue-600 border-blue-600 hover:border-blue-700 sm:rounded-none sm:rounded-r-lg hover:bg-blue-700 focus:ring-4 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">Subscribe</button>
                        </div>
                    </div>
                    <div className="text-sm text-left text-gray-400 dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-white hover:underline">Read our Privacy Policy</a>.</div>
                </form>
            </div>
        </div>
    </div>
  </section>
  );
}
