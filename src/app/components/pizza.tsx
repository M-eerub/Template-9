/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function ForthHero() {
  return (
    <div className="min-h-screen bg-black text-white p-2 flex flex-col justify-center items-center">
      <div className="w-full -mt-80 max-w-[1000px] grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <img src="/4.jpeg" alt="Pizza" className="mb-4 rounded-md w-full h-auto" />
          <div className="text-2xl font-bold">Beef Burger</div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <img src="/on1.jpeg" alt="Another" className="mb-4 rounded-md w-full h-auto" />
          <div className="text-2xl font-bold">Another Dish</div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <img src="/on3.jpeg" alt="Yet Another" className="mb-4 rounded-md w-full h-auto" />
          <div className="text-2xl font-bold">Salad</div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <img src="/3.jpeg" alt="Final" className="mb-4 rounded-md w-full h-auto" />
          <div className="text-2xl font-bold">Chicken Nuggets</div>
        </div>
      </div>
    </div>
  )
}
