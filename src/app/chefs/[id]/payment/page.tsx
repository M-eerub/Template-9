import { SanityFetch } from "@/sanity/lib/fetch"
import { groq } from "next-sanity"
import { redirect } from "next/navigation"
import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import Link from "next/link"

type Chef = {
  _id: string
  name: string
  position: string
  experience: number
  specialty: string
  imageUrl: string
  description: string
  available: boolean
  hourlyRate: number // Make sure this field exists in your Sanity schema
}

async function getChef(id: string): Promise<Chef | null> {
  const query = groq`*[_type == "chef" && _id == $id][0]{
    _id,
    name,
    position,
    experience,
    specialty,
    "imageUrl": image.asset->url,
    description,
    available,
    hourlyRate
  }`

  try {
    const chef = await SanityFetch({ query, params: { id } })
    return chef
  } catch (error) {
    console.error("Error fetching chef data:", error)
    return null
  }
}

export default async function ChefPaymentPage({ params }: { params: { id: string } }) {
  const chef = await getChef(params.id)

  if (!chef) {
    redirect("/chefs")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Hire {chef.name}</h1>
        <div className="flex items-center gap-4 mb-6">
          <img
            src={chef.imageUrl || "/placeholder.svg"}
            alt={chef.name}
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{chef.name}</h2>
            <p className="text-gray-600">{chef.position}</p>
          </div>
        </div>
        <div className="mb-6">
          <p>
            <strong>Specialty:</strong> {chef.specialty}
          </p>
          <p>
            <strong>Experience:</strong> {chef.experience} years
          </p>
          <p>
            <strong>Hourly Rate:</strong> ${chef.hourlyRate}/hour
          </p>
        </div>
        <Link href={`/chefs/${chef._id}/checkout`}>
          <Button className="w-full">Proceed to Checkout</Button>
        </Link>
      </Card>
    </div>
  )
}

