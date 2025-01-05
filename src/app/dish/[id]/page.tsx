"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import { menuItems } from '../../data/menu-items';
import { useAppContext } from '@/app/context/AppContext';

export default function DishPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params); // Unwrapping the `params` promise
  const dish = menuItems.find((item) => item.id === id);
  const { addToCart, addToWishlist } = useAppContext();

  if (!dish) {
    return <div>Dish not found</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Menu
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-[400px]">
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-3xl font-bold text-gray-900">{dish.name}</h1>
              <span className="text-orange-500 text-xl font-semibold">
                ${dish.priceRange.min} - ${dish.priceRange.max}
              </span>
            </div>

            <p className="text-gray-600 text-lg mb-8">{dish.description}</p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
              <ul className="grid grid-cols-2 gap-3">
                {dish.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-gray-500 text-sm mb-6">{dish.calories} Calories</div>

            <div className="flex space-x-4">
              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(dish)}
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </button>

              {/* Add to Wishlist Button */}
              <button
                onClick={() => addToWishlist(dish)}
                className="flex items-center border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
