import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const chefs = [
  { name: 'D.Estwood', role: 'Chief Chef', image: '/c1.jpeg' },
  { name: 'D.Scoriesh', role: 'Assistant Chef', image: '/c2.jpeg' },
  { name: 'M. William', role: 'Advertising Chef', image: '/c3.jpeg' },
  { name: 'W.Readfroad', role: 'Chef', image: '/c4.jpeg' },
]

const SixHero: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-center text-orange-500 text-2xl mb-2">Chefs</h2>
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">
          <span className="text-orange-500">Me</span>et Our Chef
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {chefs.map((chef, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-72">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-1">{chef.name}</h3>
                <p className="text-gray-400">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href = "/cheif" className = "">
          <button className="bg-transparent border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300">
            See More
          </button>
          </Link>
          
        </div>
      </div>
    </section>
  )
}

export default SixHero

