/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // In a real application, you would integrate with a shipping API here
  const { searchParams } = new URL(request.url)
  const orderId = searchParams.get('orderId')

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Mock shipment data
  const shipmentData = {
    trackingNumber: 'TN' + Math.floor(Math.random() * 1000000),
    estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'In Transit',
    currentLocation: 'Distribution Center',
    deliveryCharges: 9.99,
  }

  return NextResponse.json(shipmentData)
}

