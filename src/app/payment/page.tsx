'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAppContext } from '../context/AppContext'

export default function PaymentPage() {
  const { cart, clearCart } = useAppContext()
  const router = useRouter()
  const [cardNumber, setCardNumber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')

  const total = cart.reduce((sum, item) => sum + item.priceRange.min, 0)

  const handlePayment = () => {
    if (cardNumber.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '') {
      alert('Please fill in all payment details')
      return
    }
    // Here you would typically process the payment with a payment gateway
    alert('Payment processed successfully!')
    clearCart()
    router.push('/order-confirmation')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="123"
          />
        </div>
        <div className="font-bold mb-4">Total: ${total.toFixed(2)}</div>
        <button
          onClick={handlePayment}
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Pay Now
        </button>
      </div>
    </div>
  )
}

