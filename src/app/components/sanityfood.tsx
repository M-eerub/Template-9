import { sanityFetch } from "@/sanity/lib/live"; // Import the function to fetch data
import { foodQuery } from "@/sanity/lib/queries"; // Import your query
import React from "react";

// Define Types for the Food Data
type Foods = {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  description: string;
  imageUrl: string;
};

export default async function SanityHomeData() {
  let foods: Foods[] = [];
  let isLoading = false;

  try {
    // Fetching the food data using Sanity's query
    isLoading = true;
    const result = await sanityFetch({ query: foodQuery }); // Fetch data
    foods = result?.data || []; // Make sure to access the data field correctly
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  } finally {
    isLoading = false;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-6">
        Our Delicious Foods
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Loading State */}
        {isLoading ? (
          <p className="text-center text-lg font-semibold text-gray-700">
            Loading...
          </p>
        ) : (
          foods.map((food) => (
            <div
              key={food._id}
              className="border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white hover:shadow-[0px_4px_20px_5px_rgba(0,120,255,0.6)] transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src={food.imageUrl}
                alt={food.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 space-y-3 flex-grow flex flex-col justify-between">
                {/* Name */}
                <h2 className="text-xl font-semibold text-gray-900 text-center">
                  {food.name}
                </h2>
                {/* Description */}
                <p className="text-gray-600 text-sm text-center">
                  {food.description}
                </p>
                {/* Price */}
                <p className="text-green-500 font-bold text-lg text-center">
                  ${food.price}
                </p>
                {/* Original Price (Optional) */}
                {food.originalPrice && food.originalPrice > food.price && (
                  <p className="text-gray-500 text-sm text-center line-through">
                    ${food.originalPrice}
                  </p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
