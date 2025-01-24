import { SanityFetch } from "@/sanity/lib/fetch";
import { chefQuery } from "@/sanity/lib/query";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define Types for the Chef Data
type Chef = {
  _id: string;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  imageUrl: string;
  imageWidth: number; // Added width for image
  imageHeight: number; // Added height for image
  description: string;
  available: boolean;
};

export default async function SanityChefData() {
  let chefs: Chef[] = [];
  let isLoading = false;

  try {
    isLoading = true;
    const result = await SanityFetch({ query: chefQuery });
    chefs = result || []; // Adjust this based on your actual data structure
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
  } finally {
    isLoading = false;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-10">
        Meet Our Chefs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading ? (
          <p className="text-center text-lg font-medium text-gray-600">Loading...</p>
        ) : chefs.length === 0 ? (
          <p className="text-center text-lg font-medium text-gray-600">No chefs found.</p>
        ) : (
          chefs.map((chef) => (
            <div
              key={chef._id}
              className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              {/* Image Section */}
              <div className="relative h-64">
                <Image
                  src={chef.imageUrl || "/placeholder.svg"} // Default placeholder if imageUrl is missing
                  alt={chef.name}
                  width={chef.imageWidth} // Ensure correct width is used
                  height={chef.imageHeight} // Ensure correct height is used
                  objectFit="cover"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white px-4 py-2">
                  {chef.available ? "Available" : "Not Available"}
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 space-y-4 flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-gray-900 text-center">{chef.name}</h2>
                <p className="text-center text-gray-600 italic">{chef.position}</p>
                <p className="text-center text-gray-700">
                  <span className="font-semibold">{chef.experience}</span> years of experience
                </p>
                <p className="text-center text-gray-600">
                  <span className="font-medium">Specialty:</span> {chef.specialty}
                </p>
                <p className="text-gray-800 text-sm text-center">{chef.description}</p>
                <Link href={`/chefs/${chef._id}`}>
                  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Hire Me
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
