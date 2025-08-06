import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, UserIcon, ClockIcon } from 'lucide-react'

interface ArticleCardProps {
  title: string
  excerpt: string
  author: string
  publishDate: string
  readTime: string
  imageUrl: string
  slug: string
  category: string
  featured?: boolean
}

const ArticleCard = ({
  title,
  excerpt,
  author,
  publishDate,
  readTime,
  imageUrl,
  slug,
  category,
  featured = false
}: ArticleCardProps) => {
  const cardClasses = featured
    ? "group cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    : "group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"

  const imageHeight = featured ? "h-64" : "h-48"

  return (
    <Link href={`/article/${slug}`} className={cardClasses}>
      <div className="overflow-hidden rounded-t-lg">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={featured ? 256 : 192}
          className={`w-full ${imageHeight} object-cover group-hover:scale-105 transition-transform duration-300`}
          priority={featured}
          unoptimized={imageUrl.includes('cdn.builder.io')}
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {category}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <ClockIcon className="h-4 w-4 mr-1" />
            {readTime}
          </div>
        </div>

        <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          {title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <UserIcon className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>{publishDate}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard
