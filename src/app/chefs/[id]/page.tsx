import { SanityFetch } from "@/sanity/lib/fetch"
import { groq } from "next-sanity"
import React from "react"
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
    available
  }`

  try {
    // Remove the generic type parameter from SanityFetch
    const chef = await SanityFetch({ query, params: { id } })
    return chef
  } catch (error) {
    console.error("Error fetching chef data:", error)
    return null
  }
}

export async function generateStaticParams() {
  const query = groq`*[_type == "chef"]{ _id }`
  // Remove the generic type parameter here as well
  const chefs = await SanityFetch({ query })
  return chefs.map((chef: { _id: string }) => ({
    id: chef._id,
  }))
}

export default async function ChefPage({ params }: { params: { id: string } }) {
  const chef = await getChef(params.id)

  if (!chef) {
    return <div className="text-center text-2xl mt-10">Chef not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={chef.imageUrl || "/placeholder.svg"}
              alt={chef.name}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{chef.position}</div>
            <h1 className="mt-1 text-4xl font-bold text-gray-900">{chef.name}</h1>
            <p className="mt-2 text-gray-600">{chef.description}</p>
            <div className="mt-4">
              <span className="text-gray-500">Experience:</span>{" "}
              <span className="font-semibold">{chef.experience} years</span>
            </div>
            <div className="mt-2">
              <span className="text-gray-500">Specialty:</span> <span className="font-semibold">{chef.specialty}</span>
            </div>
            <div className="mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  chef.available ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                }`}
              >
                {chef.available ? "Available for Hire" : "Not Available"}
              </span>
            </div>
            {
  chef.available && (
    <Link href={`/chefs/${chef._id}/payment`} className="mt-6">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Contact for Hiring
      </button>
    </Link>
  )
}
          </div>
        </div>
      </div>
    </div>
  )
}

