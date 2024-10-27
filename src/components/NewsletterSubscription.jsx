import React from 'react';

const NewsletterSubscription = () => {
  return (
    <div className="px-5 sm:px-8 md:px-16 2xl:px-24 relative overflow-hidden flex flex-col items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16">
      
      <div className="-mt-1.5 lg:-mt-2 xl:-mt-0.5 text-center xl:text-left mb-7 md:mb-8 lg:mb-9 xl:mb-0">
        <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-gray-800 mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5">
          Get Expert Tips In Your Inbox
        </h3>
        <p className="text-xs leading-6 text-gray-600 md:text-sm md:leading-7">
          Subscribe to our newsletter and stay updated.
        </p>
      </div>
      
      <form className="flex-shrink-0 w-full sm:w-96 md:w-[545px] md:mt-7 z-10" noValidate>
        <div className="flex flex-col items-start justify-end sm:flex-row">
          <div className="w-full">
            <input
              
              type="email"
              placeholder="Write your email here"
              className="py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-gray-700 text-xs lg:text-sm placeholder-gray-500 min-h-12 bg-white border-gray-300 focus:outline-none focus:border-gray-800 h-11 md:h-12 lg:h-14 rounded-md text-center sm:text-left"
              autoComplete="off"
              spellCheck="false"
              aria-invalid="false"
            />
          </div>
          <button
            type="submit"
            className="text-[13px] md:text-sm leading-4 inline-flex justify-center text-center items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-white bg-gray-800 hover:bg-gray-600 px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 rounded-md mt-3 sm:mt-0 sm:ml-2 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>
      </form>

    
    </div>
  );
};

export default NewsletterSubscription;
