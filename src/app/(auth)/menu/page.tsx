"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { menuItems } from '@/app/data/menu-items';
import { MenuSection } from '@/app/components/menu-section';
import { ShoppingCart, Heart } from 'lucide-react';
// import SearchBar from '@/app/components/searchbar/Searchbar'; // Import SearchBar component

export default function Home() {
  const categories = [
    { id: 'starter', name: 'Starter Menu' },
    { id: 'main', name: 'Main Courses' },
    { id: 'desert', name: 'Desserts' },
    { id: 'drink', name: 'Drinks' }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(menuItems);

  // Handle Search and Filtering
  useEffect(() => {
    if (searchQuery) {
      const filtered = menuItems.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(menuItems); // Show all items if search is empty
    }
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Our Menu</h1>
          <div className="flex space-x-4">
            <Link href="/cart" className="text-blue-600 hover:text-blue-700 flex items-center">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Cart
            </Link>
            <Link href="/wishlist" className="text-blue-600 hover:text-blue-700 flex items-center">
              <Heart className="mr-2 h-5 w-5" />
              Wishlist
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {/* <SearchBar setSearchQuery={setSearchQuery} /> Pass setSearchQuery here */}

        {categories.map((category) => (
          <MenuSection
            key={category.id}
            title={category.name}
            items={filteredItems.filter(item => item.category === category.id)} // Filter items based on category and search
          />
        ))}
      </div>
    </main>
  );
}
