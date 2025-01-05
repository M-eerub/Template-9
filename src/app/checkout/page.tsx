/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppContext } from '../context/AppContext'
import Image from 'next/image'

export default function CheckoutPage() {
  const { cart, removeFromCart } = useAppContext()
  const router = useRouter()
  const [address, setAddress] = useState('')

  const total = cart.reduce((sum, item) => sum + item.priceRange.min, 0)

  const handleCheckout = () => {
    if (address.trim() === '') {
      alert('Please enter a valid address')
      return
    }
    router.push('/payment')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center mb-2">
              <Image src={item.image} alt={item.name} width={50} height={50} className="mr-2" />
              <span className="flex-grow">{item.name}</span>
              <span>${item.priceRange.min.toFixed(2)}</span>
            </div>
          ))}
          <div className="font-bold mt-2">Total: ${total.toFixed(2)}</div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded"
            rows={4}
            placeholder="Enter your shipping address"
          />
          <button
            onClick={handleCheckout}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  )
}

