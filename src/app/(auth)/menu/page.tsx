import Link from 'next/link'
import { menuItems } from '@/app/data/menu-items'
import { MenuSection } from '@/app/components/menu-section'
import { ShoppingCart, Heart } from 'lucide-react'

export default function Home() {
  const categories = [
    { id: 'starter', name: 'Starter Menu' },
    { id: 'main', name: 'Main Courses' },
    { id: 'desert', name: 'Desserts' },
    { id: 'drink', name: 'Drinks' }
  ]

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Menu</h1>
          <div className="flex space-x-4">
            <Link href="/cart" className="text-orange-600 hover:text-blue-700 font-bold flex items-center">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Cart
            </Link>
            <Link href="/wishlist" className="text-orange-500 hover:text-blue-700 flex font-bold items-center">
              <Heart className="mr-2 h-5 w-5" />
              Wishlist
            </Link>
          </div>
        </div>
        
        {categories.map((category) => (
          <MenuSection
            key={category.id}
            title={category.name}
            items={menuItems.filter(item => item.category === category.id)}
          />
        ))}
      </div>
    </main>
  )
}

