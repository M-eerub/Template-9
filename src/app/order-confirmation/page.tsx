'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface ShipmentData {
  trackingNumber: string
  estimatedDelivery: string
  status: string
  currentLocation: string
  deliveryCharges: number
}

export default function OrderConfirmationPage() {
  const router = useRouter()
  const [shipmentData, setShipmentData] = useState<ShipmentData | null>(null)

  useEffect(() => {
    const fetchShipmentData = async () => {
      try {
        const response = await fetch('/api/shipment?orderId=123') // You would use a real order ID here
        const data = await response.json()
        setShipmentData(data)
      } catch (error) {
        console.error('Error fetching shipment data:', error)
      }
    }

    fetchShipmentData()
  }, [])

  return (
    <div className="container mx-auto p-4 text-center items-center">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
      <p className="mb-4">Thank you for your order!</p>
      {shipmentData ? (
        <>
          <p className="mb-2">Tracking Number: {shipmentData.trackingNumber}</p>
          <p className="mb-2">Estimated Delivery: {new Date(shipmentData.estimatedDelivery).toDateString()}</p>
          <p className="mb-2">Status: {shipmentData.status}</p>
          <p className="mb-2">Current Location: {shipmentData.currentLocation}</p>
          <p className="mb-4">Delivery Charges: ${shipmentData.deliveryCharges.toFixed(2)}</p>
        </>
      ) : (
        <p>Loading shipment information...</p>
      )}
      <button
        onClick={() => router.push('/')}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to Home
      </button>
    </div>
  )
}

