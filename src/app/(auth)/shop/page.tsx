/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import React from "react";

const ProductDetails = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/Header-bg.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Shop Details</h1>
        <p className="text-white mt-2">
          <a href="/" className="text-gray-300 hover:underline">
            Home
          </a>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">Details</span>
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <img
              src="/Shopdetail-img/Image-1.png"
              alt="Product"
              className="w-96 h-96 rounded-lg"
            />
            <div className="flex gap-4 mt-4">
              <img
                src="/Shopdetail-img/Image-2.png"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <img
                src="/Shopdetail-img/Image-3.png"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <img
                src="/Shopdetail-img/Image-4.png"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <img
                src="/Shopdetail-img/Image-5.png"
                alt="Thumbnail"
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-2xl font-bold">Yummy Chicken Chup</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex autem, quae, ducimus id laborum quasi, numquam provident sapiente modi accusantium?
               Obcaecati corporis asperiores corrupti incidunt non dicta ratione recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor enim suscipit aliquid, veritatis reiciendis quaerat! Dicta, repudiandae repellendus
                provident adipisci perferendis aliquid fuga cumque labore ratione vel. Impedit, labore ratione.
            </p>
            <p className="text-3xl font-bold mt-4">$54.00</p>

            <div className="flex items-center gap-2 mt-4">
              <input
                type="number"
                defaultValue={1}
                className="w-16 text-center border rounded-lg"
              />
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition">
                Add to Cart
              </button>
            </div>

            <div className="text-sm text-gray-600 mt-4">
              <p>Category: Pizza</p>
              <p>Tags: Pizza, Shop</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="border-b pb-4">
            <h3 className="text-xl font-bold">Description</h3>
          </div>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem incidunt maiores
             illum eius explicabo reprehenderit aliquam consequuntur illo. Eius, quas. At veritatis facilis asperiores 
             qui velit blanditiis perspiciatis delectus?.

             Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam dolores odit adipisci maiores atque nesciunt
              iste eveniet possimus labore. Adipisci laborum natus magnam repudiandae quisquam alias unde, itaque dolor.
          </p>

          <h4 className="font-bold mt-6">Key Benefits:</h4>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Delicious and creamy textures</li>
            <li>Rich protein and flavor</li>
            <li>Perfect for family meals</li>
            <li>Rich protein and flavor</li>
            <li>Perfect for family meals</li>
          </ul>
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Similar Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border p-4 rounded-lg">
              <img
                src="/Shopdetail-img/Image-6.png"
                alt="Product"
                className="w-full h-40 object-cover rounded-lg"
              />
              <h4 className="mt-2 text-lg font-semibold">Fresh Lime</h4>
              <p className="text-gray-600">$32.00</p>
            </div>
            <div className="border p-4 rounded-lg">
              <img
                src="/Shopdetail-img/Image-7.png"
                alt="Product"
                className="w-full h-40 object-cover rounded-lg"
              />
              <h4 className="mt-2 text-lg font-semibold">Chocolate Muffin</h4>
              <p className="text-gray-600">$16.00</p>
            </div>
            <div className="border p-4 rounded-lg">
              <img
                src="/Shopdetail-img/Image-8.png"
                alt="Product"
                className="w-full h-40 rounded-lg"
                style={{ objectFit: 'cover' }} 
              />
              <h4 className="mt-2 text-lg font-semibold">Burger</h4>
              <p className="text-gray-600">$19.00</p>
            </div>
            <div className="border p-4 rounded-lg">
              <img
                src="/Shopdetail-img/Image-9.png"
                alt="Product"
                className="w-full h-40 object-cover rounded-lg"
              />
              <h4 className="mt-2 text-lg font-semibold">Fresh Salad</h4>
              <p className="text-gray-600">$22.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
