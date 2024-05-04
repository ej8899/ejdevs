
"use client";

import { Button } from "flowbite-react";


export default function Component() {
  return (
    <section className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply ">
      <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-16 z-1">
        <div className="mb-6 max-w-screen-lg lg:mb-0">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
            <p className="mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reiciendis sed officia nemo ducimus laboriosam atque, iusto suscipit porro non, ullam ad, voluptates placeat perspiciatis nihil similique exercitationem impedit temporibus.</p>
            <Button>
                Learn more about the plan
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Button>
                
            
        </div> 
        <div className="grid gap-8 pt-8 lg:pt-12 mt-8 lg:mt-12 border-t border-gray-600 sm:grid-cols-2 lg:grid-cols-4">
            <div>
                <h2 className="mb-1 text-lg font-bold">Fourth quarter 2021</h2>
                <p className="mb-1 text-sm text-gray-400">We announced fourth quarter 2021 results</p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
                    Read more
                    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
            <div>
                <h2 className="mb-1 text-lg font-bold">Zero emissions</h2>
                <p className="mb-1 text-sm text-gray-400">Flowbite aims to achieve net-zero emissions</p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
                    Read more
                    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
            <div>
                <h2 className="mb-1 text-lg font-bold">New York</h2>
                <p className="mb-1 text-sm text-gray-400">Plans for net zero emissions in New York </p>
                <a href="#" className="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
                    Read more
                    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
            <div>
                <h2 className="mb-1 text-lg font-bold">2022 plans</h2>
                <p className="mb-1 text-sm text-gray-400">Investing in the future of Africa</p>
                <a href="#" className="text-primary-500 inline-flex items-center text-sm font-semibold hover:underline">
                    Read more
                    <svg className="ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>              
    </div>
  </section>
  );
}
