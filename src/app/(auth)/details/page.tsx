/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";


export default function FoodBlog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Blog Post 1 */}
          <article className="bg-white rounded-lg shadow-sm">
            <div className="relative h-[300px]">
              <img
                src="/one1.jpeg"
                alt="Blog Post 1"
                className="rounded-t-lg w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                Food
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 inline-block bg-gray-200"></span>
                  <span>Feb 14, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 inline-block bg-gray-200"></span>
                  <span>24 Comments</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 inline-block bg-gray-200"></span>
                  <span>55 Likes</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                10 Reasons To Do A Digital Detox Challenge
              </h2>
              <p className="text-gray-600 mb-4">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
              </p>
              <a href="#" className="inline-flex items-center text-orange-500 hover:text-orange-600">
                Read More →
              </a>
            </div>
          </article>

          {/* Blog Post 2 */}
          <article className="bg-white rounded-lg shadow-sm">
            <div className="relative h-[300px]">
              <img
                src="/two2.jpeg"
                alt="Blog Post 2"
                className="rounded-t-lg w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                Recipe
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 inline-block bg-gray-200"></span>
                  <span>Feb 14, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 inline-block bg-gray-200"></span>
                  <span>24 Comments</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-4 inline-block bg-gray-200"></span>
                  <span>55 Likes</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Traditional Soft Pretzels with Sweet Beer Cheese
              </h2>
              <p className="text-gray-600 mb-4">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
              <a href="/shop" className="inline-flex items-center text-orange-500 hover:text-orange-600">
                Read More →
              </a>
            </div>
          </article>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Author Profile */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-24 h-24 mx-auto mb-4">
              <img src="/man.jpeg" alt="Author Profile" className="rounded-full" />
            </div>
            <h3 className="text-xl font-bold mb-2">Prince Miyabi</h3>
            <div className="flex justify-center gap-1 mb-4">
              {"★★★★★".split("/man.jpeg").map((star, i) => (
                <span key={i} className="text-orange-500">
                  {star}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-600 hover:text-orange-500">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-orange-500">GitHub</a>
            </div>
          </div>
          {/* Recent Posts */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            {["/on1.jpeg", "/02.jpeg", "/03.jpeg", "/o4.jpeg"].map((post, i) => (
              <div key={i} className="flex gap-4 mb-4">
                <img src={post} alt={`Recent Post ${i + 1}`} className="w-12 h-12 rounded-lg" />
                <div>
                  <Link href = "" className = "">
                  <h4 className="font-medium">The food of Heaven</h4>
                  </Link>
                  
                  <p className="text-sm text-gray-500">Jan 01, 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
