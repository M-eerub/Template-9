/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
const FirstHero = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-yellow-400 text-lg font-semibold mb-2">About us</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-400">We</span> Create the best foody product
          </h1>
          <p className="text-gray-400 mb-6">
          Welcome to Food Heaven, where every bite tells a story of freshness and flavor! Discover a world of mouthwatering recipes, kitchen secrets, and culinary inspirations crafted to bring joy to your table. Join us on a delicious journey to make every meal unforgettable
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-3">✔</span>
               Provide practical kitchen hacks and culinary tips 
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-3">✔</span>
              delicious recipes that highlight fresh ingredients and unique flavors.
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-3">✔</span>
              inspiring food stories to captivate your audience.
            </li>
          </ul>
          <Link href = "/menu" className = "">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500">
            Read More
          </button>
          </Link>
          
        </div>

        {/* Right Content */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/about3.jpeg"
            alt="Food Item 1"
            className="rounded-lg shadow-lg object-cover"
          />
          <div className="grid grid-rows-2 gap-4">
            <img
              src="/about.jpeg"
              alt="Food Item 2"
              className="rounded-lg shadow-lg object-cover"
            />
            <img
              src="/about2.jpeg"
              alt="Food Item 3"
              className="rounded-lg h-40 w-64 shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstHero;
