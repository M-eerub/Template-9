"use client"

import { SetStateAction, useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface Product {
  name: string
  category: string
  price: number
  originalPrice: number
  tags: string[]
  image: string
  description: string
  available: boolean
}

const products: Product[] = [
  {
    name: "Fresh Lime",
    category: "Drink",
    price: 38.0,
    originalPrice: 45.0,
    tags: ["Healthy", "Popular"],
    image: "/n2.jpeg",
    description: "Refreshing fresh lime drink made with natural ingredients.",
    available: true,
  },
  {
    name: "Chocolate Muffin",
    category: "Dessert",
    price: 28.0,
    originalPrice: 30.0,
    tags: ["Sell", "Sweet"],
    image: "/one.jpeg",
    description: "Soft and rich chocolate muffin topped with chocolate chips.",
    available: true,
  },
  {
    name: "Burger",
    category: "Sandwich",
    price: 21.0,
    originalPrice: 45.0,
    tags: ["Popular"],
    image: "/pizza.png",
    description: "Juicy beef burger with fresh lettuce, tomatoes, and cheese.",
    available: true,
  },
  {
    name: "Country Burger",
    category: "Sandwich",
    price: 45.0,
    originalPrice: 50.0,
    tags: ["Recommended"],
    image: "/pasta.jpeg",
    description: "Classic country-style burger served with fries.",
    available: true,
  },
  {
    name: "Pizza",
    category: "Main Course",
    price: 43.0,
    originalPrice: 50.0,
    tags: ["Cheesy", "Vegetarian"],
    image: "/two.jpeg",
    description: "Delicious vegetarian pizza topped with fresh vegetables and cheese.",
    available: true,
  },
  {
    name: "Chicken Chup",
    category: "Appetizer",
    price: 12.0,
    originalPrice: 15.0,
    tags: ["Sell", "Crispy"],
    image: "/on1.jpeg",
    description: "Crispy fried chicken bites served with dipping sauce.",
    available: true,
  },
  {
    name: "Lemonade",
    category: "Drink",
    price: 35.0,
    originalPrice: 40.0,
    tags: ["Refreshing", "Popular"],
    image: "/two.jpeg",
    description: "Zesty and tangy lemonade made with fresh lemons.",
    available: true,
  },
  {
    name: "Blueberry Muffin",
    category: "Dessert",
    price: 30.0,
    originalPrice: 35.0,
    tags: ["Sweet", "Tasty"],
    image: "/two.jpeg",
    description: "Fluffy muffin filled with blueberries and a hint of vanilla.",
    available: true,
  },
  {
    name: "Veggie Burger",
    category: "Sandwich",
    price: 25.0,
    originalPrice: 30.0,
    tags: ["Vegetarian", "Popular"],
    image: "/two.jpeg",
    description: "A healthy and delicious veggie patty burger with lettuce and tomato.",
    available: true,
  },
  {
    name: "Classic Cheeseburger",
    category: "Sandwich",
    price: 30.0,
    originalPrice: 35.0,
    tags: ["Classic", "Popular"],
    image: "/two.jpeg",
    description: "Classic cheeseburger with a melted cheese slice and fresh toppings.",
    available: true,
  },
  {
    name: "Margherita Pizza",
    category: "Main Course",
    price: 40.0,
    originalPrice: 45.0,
    tags: ["Vegetarian", "Cheesy"],
    image: "/two.jpeg",
    description: "Traditional margherita pizza with fresh mozzarella and basil.",
    available: true,
  },
  {
    name: "Buffalo Wings",
    category: "Appetizer",
    price: 18.0,
    originalPrice: 22.0,
    tags: ["Spicy", "Crispy"],
    image: "/two.jpeg",
    description: "Spicy and crispy buffalo chicken wings with dipping sauce.",
    available: true,
  },
  {
    name: "Ice Cream Sundae",
    category: "Dessert",
    price: 20.0,
    originalPrice: 25.0,
    tags: ["Sweet", "Tasty"],
    image: "/two.jpeg",
    description: "Creamy ice cream topped with chocolate syrup and whipped cream.",
    available: true,
  },
  {
    name: "Fruit Punch",
    category: "Drink",
    price: 28.0,
    originalPrice: 32.0,
    tags: ["Fruity", "Refreshing"],
    image: "/two.jpeg",
    description: "A delicious mix of tropical fruits in a refreshing punch.",
    available: true,
  },
  {
    name: "BBQ Chicken Pizza",
    category: "Main Course",
    price: 50.0,
    originalPrice: 55.0,
    tags: ["Cheesy", "Spicy"],
    image: "/two.jpeg",
    description: "BBQ chicken pizza with smoky sauce, onions, and cheese.",
    available: true,
  },
  {
    name: "Vegetable Spring Rolls",
    category: "Appetizer",
    price: 15.0,
    originalPrice: 20.0,
    tags: ["Vegetarian", "Crunchy"],
    image: "/two.jpeg",
    description: "Crispy vegetable spring rolls served with a sweet chili dipping sauce.",
    available: true,
  }
]

export default function SearchHome() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <Input
        type="search"
        placeholder="Search products..."
        className="mb-8"
        value={searchQuery}
        onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 p-4">
              <span className="text-sm text-gray-600">{product.category}</span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

