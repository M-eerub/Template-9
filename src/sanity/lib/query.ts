import { defineQuery } from "next-sanity";
import { groq } from "next-sanity"

export const foodQuery = groq`*[_type == "food"] {
  _id,
  name,
  category,
  price,
  originalPrice,
  description,
  "imageUrl": image.asset->url
}`

export const foodByIdQuery = groq`*[_type == "food" && _id == $id][0] {
  _id,
  name,
  category,
  price,
  originalPrice,
  description,
  "imageUrl": image.asset->url,
  tags,
  available
}`


export const chefQuery = groq`*[_type == "chef"] {
    _id,
    name,
    position,
    experience,
    specialty,
    "imageUrl": image.asset->url,
    "imageWidth": image.asset->metadata.dimensions.width, // Add width
    "imageHeight": image.asset->metadata.dimensions.height, // Add height
    description,
    available
  }`;
  