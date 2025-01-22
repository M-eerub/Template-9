"use client";
import { groq } from "next-sanity";
import { redirect, useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import CheckoutForm from "./checkout-form";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

// interface Chef {
//   _id: any;
//   name: string;
//   position: string;
//   hourlyRate: number;
//   imageUrl: string;
// }

// async function getChef(id: any): Promise<Chef | null> {
//   // const { id } = useParams()
//   const query = groq`*[_type == "chef" && _id == $id][0]{
//     _id,
//     name,
//     position,
//     hourlyRate,
//     "imageUrl": image.asset->url
//   }`;

//   try {
//     const chef = await client.fetch(query, { id });
//     return chef || null;
//   } catch (error) {
//     console.error("Error fetching chef data:", error);
//     return null;
//   }
// }

export default function CheckoutPage() {
  const { id } = useParams();

  console.log(id);

  const [chef, setChef] = useState() as any;
  const fetchData = async () => {
    const query = groq`*[_type == "chef" && _id == $id][0]{
     _id,
     name,
     position,
     experience,
     specialty,
   hourlyRate,
     "imageUrl": image.asset->url,
     description,
     available
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
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Checkout Form Section */}
        <div className="md:col-span-2">
          <Card className="p-6">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            <CheckoutForm chefId={chef?._id} />
          </Card>
        </div>

        {/* Order Summary Section */}
        <div>
          <Card className="p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={chef?.imageUrl || "/placeholder.svg"}
                alt={chef?.name || "Chef"}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{chef?.name}</h3>
                <p className="text-gray-600">{chef?.position}</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Rate per hour</span>
                {/* <span>${chef?.hourlyRate?.toFixed(2)}</span> */}
              </div>
              <div className="flex justify-between mb-2">
                <span>Hours</span>
                <span>1</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  {/* <span>${chef?.hourlyRate.toFixed(2)}</span> */}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
