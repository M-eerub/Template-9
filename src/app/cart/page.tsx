'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAppContext } from '../context/AppContext'
import { Trash2 } from 'lucide-react'

export default function CartPage() {
  const { cart, removeFromCart } = useAppContext()
  const router = useRouter()

  const total = cart.reduce((sum, item) => sum + item.priceRange.min, 0)

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!')
    } else {
      router.push('/checkout')
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="bg-white rounded-lg shadow p-4 flex items-center">
                  <div className="flex-shrink-0 h-24 w-24 relative mr-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.priceRange.min}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors duration-200"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-between items-center">
              <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
              <button 
                onClick={handleCheckout}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
        <Link href="/" className="mt-8 inline-block text-blue-600 hover:text-blue-700">
          Continue Shopping
        </Link>
      </div>
    </main>
  )
}

