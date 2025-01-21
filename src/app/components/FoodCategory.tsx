/* eslint-disable @next/next/no-img-element */
import React from "react";

const Sechero = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-yellow-400 text-lg font-semibold mb-2">Food Category</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          <span className="text-yellow-400">Choose</span> Food Item
        </h1>

        {/* Food Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Food Card 1 */}
          <div className="relative group">
            <img
              src="/on1.jpeg"
              alt="Fast Food Dish"
              className="w-full rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded mb-2">
                Save 30%
              </span>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                Fast Food Dish
              </button>
            </div>
          </div>

          {/* Food Card 2 */}
          <div className="h-40">
            <img
              src="/n2.jpeg"
              alt="Burger"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Food Card 3 */}
          <div>
            <img
              src="/on3.jpeg"
              alt="Salad"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Food Card 4 */}
          <div>
            <img
              src="/n3.jpeg"
              alt="Donuts"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sechero;
