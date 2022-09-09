/* This example requires Tailwind CSS v2.0+ */

import AboutNav from "./AboutNav";

export default function AboutHome() {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900">Who We Are</h1>
          </div>
        </div>
      </div>
    </>
  );
}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
