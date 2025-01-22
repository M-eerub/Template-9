"use client";
import { groq } from "next-sanity";
import { redirect, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

// type Chef = {
//   _id: string;
//   name: string;
//   position: string;
//   experience: number;
//   specialty: string;
//   imageUrl: string;
//   description: string;
//   available: boolean;
//   hourlyRate: number; // Make sure this field exists in your Sanity schema
// };

// async function getChef(id: string): Promise<Chef | null> {
//   const query = groq`*[_type == "chef" && _id == $id][0]{
//     _id,
//     name,
//     position,
//     experience,
//     specialty,
//     "imageUrl": image.asset->url,
//     description,
//     available,
//     hourlyRate
//   }`;

//   try {
//     const chef = await SanityFetch({ query, params: { id } });
//     return chef;
//   } catch (error) {
//     console.error("Error fetching chef data:", error);
//     return null;
//   }
// }

export default function ChefPaymentPage() {
  const { id } = useParams();
  const [chef, setChef] = useState() as any;
  const fetchData = async () => {
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
    }`; // Add [0] to get a single document
    const chefs = await client.fetch(query, { id });
    console.log(chefs);
    if (!chefs) {
      redirect("/chefs");
      return null; // Required to avoid rendering further if redirect occurs
    }
    setChef(chefs);
    // console.log(chefs?.imageUrl, "==>>>> iamges");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Hire {chef?.name}</h1>
        <div className="flex items-center gap-4 mb-6">
          <Image
            src={chef?.imageUrl || "/placeholder.svg"}
            alt={""}
            className="w-20 h-20 rounded-full object-cover"
            width={500}
            height={500}
          />
          <div>
            <h2 className="text-xl font-semibold">{chef?.name}</h2>
            <p className="text-gray-600">{chef?.position}</p>
          </div>
        </div>
        <div className="mb-6">
          <p>
            <strong>Specialty:</strong> {chef?.specialty}
          </p>
          <p>
            <strong>Experience:</strong> {chef?.experience} years
          </p>
          <p>
            <strong>Hourly Rate:</strong> ${chef?.hourlyRate}/hour
          </p>
        </div>
        <Link href={`/chefs/${chef?._id}/checkout`}>
          <Button className="w-full">Proceed to Checkout</Button>
        </Link>
      </Card>
    </div>
  );
}
