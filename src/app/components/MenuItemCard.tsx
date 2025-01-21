import Image from 'next/image'
import Link from 'next/link'
import { MenuItem } from '@/app/type/menu'

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <Link href={`/dish/${item.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <span className="text-orange-500 font-medium">
              ${item.priceRange.min} - ${item.priceRange.max}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">{item.calories} CAL</span>
            <span className="text-blue-600 hover:text-blue-700">View Details →</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

