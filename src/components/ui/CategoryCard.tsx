import Link from 'next/link'
import Image from 'next/image'

interface CategoryCardProps {
  name: string
  description: string
  articleCount: number
  imageUrl: string
  href: string
  color: string
}

const CategoryCard = ({ name, description, articleCount, imageUrl, href, color }: CategoryCardProps) => {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
        <div className="relative h-32 overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized={imageUrl.includes('cdn.builder.io')}
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-80`}></div>
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {description}
          </p>
          <div className="text-xs text-gray-500">
            {articleCount} articles
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CategoryCard
