"use client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
type Chef = {
  _id: any;
  name: string;
  position: string;
  experience: number;
  specialty: string;
  imageUrl: string;
  description: string;
  available: boolean;
};

// async function getChef(id: any): Promise<any> {
//   const query = groq`*[_type == "chef" && _id == $id][0]{
//     _id,
//     name,
//     position,
//     experience,
//     specialty,
//     "imageUrl": image.asset->url,
//     description,
//     available
//   }`;

//   try {
//     // Remove the generic type parameter from SanityFetch
//     const chef = await SanityFetch({ query, params: { id } as any });
//     return chef;
//   } catch (error) {
//     console.error("Error fetching chef data:", error);
//     return null;
//   }
// }

// export async function generateStaticParams() {
//   const query = groq`*[_type == "chef"]{ _id }`;
//   // Remove the generic type parameter here as well
//   const chefs = await SanityFetch({ query });
//   return chefs.map((chef: { _id: any }) => ({
//     id: chef._id,
//   }));
// }

const ChefPage = () => {
  const { id }: any = useParams();
  console.log(id, "==>> id");
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
    available
  }`; // Add [0] to get a single document
    const chefs = await client.fetch(query, { id });
    console.log(chefs);
    if (!chefs) {
      return <div className="text-center text-2xl mt-10">Chef not found</div>;
    }
    setChef(chefs);
    console.log(chefs?.imageUrl, "==>>>> iamges");
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              className="h-48 w-full object-cover md:w-48"
              src={chef?.imageUrl ? chef?.imageUrl : "/placeholder.svg"}
              alt={""}
              width={500}
              height={500}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {chef?.position}
            </div>
            <h1 className="mt-1 text-4xl font-bold text-gray-900">
              {chef?.name}
            </h1>
            <p className="mt-2 text-gray-600">{chef?.description}</p>
            <div className="mt-4">
              <span className="text-gray-500">Experience:</span>{" "}
              <span className="font-semibold">{chef?.experience} years</span>
            </div>
            <div className="mt-2">
              <span className="text-gray-500">Specialty:</span>{" "}
              <span className="font-semibold">{chef?.specialty}</span>
            </div>
            <div className="mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  chef?.available
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {chef?.available ? "Available for Hire" : "Not Available"}
              </span>
            </div>
            {chef?.available && (
              <Link href={`/chefs/${chef?._id}/payment`} className="mt-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Contact for Hiring
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefPage;
