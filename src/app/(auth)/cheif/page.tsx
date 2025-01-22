/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */

import React from "react";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", Images: "/Chief-img/Cheif-1.png" },
  { name: "Jorina Begum", role: "Chef", Images: "/Chief-img/Cheif-2.png" },
  { name: "M. Mohammad", role: "Chef", Images: "/Chief-img/Cheif-3.png" },
  { name: "Munna Kathy", role: "Chef", Images: "/Chief-img/Cheif-4.png" },
  { name: "Bisnu Devgon", role: "Chef", Images: "/Chief-img/Cheif-5.png" },
  { name: "Motin Molladsf", role: "Chef", Images: "/Chief-img/Cheif-6.png" },
  { name: "William Rumi", role: "Chef", Images: "/Chief-img/Cheif-7.png" },
  { name: "Kets William Roy", role: "Chef", Images: "/Chief-img/Cheif-8.png" },
  { name: "Mahmud Kholil", role: "Chef", Images: "/Chief-img/Cheif-9.png" },
  { name: "Ataur Rahman", role: "Chef", Images: "/Chief-img/Cheif-10.png" },
  { name: "Monalisa Holly", role: "Chef", Images: "/Chief-img/Cheif-11.png" },
  { name: "Tahmina Rummi", role: "Chef", Images: "/Chief-img/Cheif-12.png" },
];

const ChefGallery = () => {
  return (

        <div className="bg-orange-200 py-10">
        {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/Header-bg.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Our Chefs</h1>
        <p className="text-white mt-2">
          <a href="/" className="text-gray-300 hover:underline">
            Home
          </a>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Cheifs</span>
        </p>
      </div>

      {/* Images Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Chefs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={chef.Images}
                alt={chef.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{chef.name}</h3>
                <p className="text-gray-500 text-sm">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefGallery;
