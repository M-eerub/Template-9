import { MenuItem } from '@/app/type/menu'
import { MenuItemCard } from './menu-item-card'

interface MenuSectionProps {
  title: string
  items: MenuItem[]
}

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

