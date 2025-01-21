"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import Image from "next/image"

export default function CheckoutForm({ chefId }: { chefId: string }) {
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // Here you would implement your payment processing logic
    setTimeout(() => {
      setIsProcessing(false)
      // Redirect to success page or show confirmation
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Express Payment Options */}
      <div className="space-y-4">
        <div className="flex gap-4">
          <Button
            type="button"
            className="flex-1 bg-[#FFC439] hover:bg-[#F2BA36] text-black"
            onClick={() => {
              /* Implement PayPal payment */
            }}
          >
            <Image src="/paypal.svg" alt="PayPal" width={80} height={20} />
          </Button>
          <Button
            type="button"
            className="flex-1 bg-black hover:bg-gray-800"
            onClick={() => {
              /* Implement Google Pay */
            }}
          >
            <Image src="/google-pay.svg" alt="Google Pay" width={80} height={20} />
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or pay with card</span>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input type="email" id="email" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <Input type="text" id="firstName" required />
            </div>
            <div>
              <Label htmlFor="lastName">Last name</Label>
              <Input type="text" id="lastName" required />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Payment Information</h3>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="card">Card number</Label>
            <Input type="text" id="card" placeholder="1234 1234 1234 1234" required />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <Label htmlFor="expiry">Expiry date</Label>
              <Input type="text" id="expiry" placeholder="MM / YY" required />
            </div>
            <div>
              <Label htmlFor="cvc">CVC</Label>
              <Input type="text" id="cvc" placeholder="123" required />
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Complete Order"}
      </Button>
    </form>
  )
}

