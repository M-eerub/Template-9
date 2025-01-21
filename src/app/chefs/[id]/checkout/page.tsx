import { SanityFetch } from "@/sanity/lib/fetch"
import { groq } from "next-sanity"
import { redirect } from "next/navigation"
import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import CheckoutForm from "./checkout-form"

async function getChef(id: string) {
  const query = groq`*[_type == "chef" && _id == $id][0]{
    _id,
    name,
    position,
    hourlyRate,
    "imageUrl": image.asset->url
  }`

  try {
    const chef = await SanityFetch({ query, params: { id } })
    return chef
  } catch (error) {
    console.error("Error fetching chef data:", error)
    return null
  }
}

export default async function CheckoutPage({ params }: { params: { id: string } }) {
  const chef = await getChef(params.id)

  if (!chef) {
    redirect("/chefs")
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="p-6">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            <CheckoutForm chefId={chef._id} />
          </Card>
        </div>

        <div>
          <Card className="p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex items-center gap-4 mb-4">
              <img
                src={chef.imageUrl || "/placeholder.svg"}
                alt={chef.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{chef.name}</h3>
                <p className="text-gray-600">{chef.position}</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Rate per hour</span>
                <span>${chef.hourlyRate}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Hours</span>
                <span>1</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${chef.hourlyRate}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

