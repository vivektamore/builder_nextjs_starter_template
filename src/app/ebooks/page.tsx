import Layout from '@/components/layout/Layout'
import { BookOpenIcon, DownloadIcon, StarIcon, FilterIcon, SearchIcon, TrendingUpIcon } from 'lucide-react'
import Link from 'next/link'

// Mock data for eBooks
const ebooks = [
  {
    id: '1',
    title: 'The Complete SEO Guide 2024',
    description: 'Master the fundamentals of SEO with this comprehensive guide covering keyword research, on-page optimization, technical SEO, and link building strategies.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
    author: 'SEJ Editorial Team',
    pages: 156,
    downloads: '25.3K',
    rating: 4.8,
    category: 'SEO',
    format: 'PDF',
    featured: true,
    slug: 'complete-seo-guide-2024'
  },
  {
    id: '2',
    title: 'Content Marketing Playbook',
    description: 'Learn how to create, distribute, and promote content that drives traffic, generates leads, and builds brand authority in your industry.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=800',
    author: 'Content Marketing Institute',
    pages: 142,
    downloads: '18.7K',
    rating: 4.6,
    category: 'Content Marketing',
    format: 'PDF',
    featured: true,
    slug: 'content-marketing-playbook'
  },
  {
    id: '3',
    title: 'PPC Advertising Mastery',
    description: 'Advanced strategies for Google Ads, Facebook Ads, and other PPC platforms. Includes campaign optimization, bidding strategies, and ROI analysis.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2Fed8ddc195d9d48969e0292b9e62d317b?format=webp&width=800',
    author: 'PPC Hero',
    pages: 198,
    downloads: '14.2K',
    rating: 4.7,
    category: 'Paid Media',
    format: 'PDF',
    featured: false,
    slug: 'ppc-advertising-mastery'
  },
  {
    id: '4',
    title: 'Social Media Strategy Guide',
    description: 'Build a winning social media presence across all major platforms. Includes content planning, community management, and social advertising.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F52115549de9143c591653b13b2c69927?format=webp&width=800',
    author: 'Social Media Examiner',
    pages: 134,
    downloads: '22.1K',
    rating: 4.5,
    category: 'Social Media',
    format: 'PDF',
    featured: true,
    slug: 'social-media-strategy-guide'
  },
  {
    id: '5',
    title: 'Technical SEO Handbook',
    description: 'Deep dive into technical SEO including site architecture, Core Web Vitals, structured data, and mobile optimization best practices.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
    author: 'Technical SEO Pro',
    pages: 203,
    downloads: '16.8K',
    rating: 4.9,
    category: 'SEO',
    format: 'PDF',
    featured: false,
    slug: 'technical-seo-handbook'
  },
  {
    id: '6',
    title: 'Email Marketing Excellence',
    description: 'Build profitable email campaigns with advanced segmentation, automation, and personalization strategies that convert subscribers into customers.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=800',
    author: 'Email Marketing Institute',
    pages: 118,
    downloads: '19.4K',
    rating: 4.4,
    category: 'Email Marketing',
    format: 'PDF',
    featured: false,
    slug: 'email-marketing-excellence'
  },
  {
    id: '7',
    title: 'Local SEO Complete Guide',
    description: 'Dominate local search results with proven strategies for Google My Business, local citations, and location-based optimization.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2Fed8ddc195d9d48969e0292b9e62d317b?format=webp&width=800',
    author: 'Local SEO Expert',
    pages: 167,
    downloads: '12.6K',
    rating: 4.6,
    category: 'SEO',
    format: 'PDF',
    featured: false,
    slug: 'local-seo-complete-guide'
  },
  {
    id: '8',
    title: 'Digital Analytics Deep Dive',
    description: 'Master Google Analytics 4, Google Tag Manager, and other analytics tools to make data-driven marketing decisions that grow your business.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F52115549de9143c591653b13b2c69927?format=webp&width=800',
    author: 'Analytics Academy',
    pages: 189,
    downloads: '15.3K',
    rating: 4.7,
    category: 'Analytics',
    format: 'PDF',
    featured: false,
    slug: 'digital-analytics-deep-dive'
  }
]

const categories = [
  'All Categories',
  'SEO',
  'Content Marketing',
  'Paid Media',
  'Social Media',
  'Email Marketing',
  'Analytics',
  'E-commerce'
]

const featuredEbooks = ebooks.filter(ebook => ebook.featured)
const popularEbooks = ebooks.sort((a, b) => parseInt(b.downloads.replace('K', '')) - parseInt(a.downloads.replace('K', ''))).slice(0, 4)

export default function EbooksPage() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <BookOpenIcon className="h-16 w-16 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Digital Marketing eBooks
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Download our comprehensive collection of free digital marketing eBooks. 
                Get expert insights, actionable strategies, and proven tactics from industry leaders.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <span className="flex items-center">
                  <TrendingUpIcon className="h-4 w-4 mr-1" />
                  {ebooks.length} Free eBooks
                </span>
                <span className="flex items-center">
                  <DownloadIcon className="h-4 w-4 mr-1" />
                  100K+ Downloads
                </span>
                <span>Expert Authors</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search eBooks..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <SearchIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Most Popular</option>
                  <option>Most Recent</option>
                  <option>Highest Rated</option>
                  <option>Most Downloaded</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Featured eBooks */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured eBooks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredEbooks.map((ebook) => (
                <div key={ebook.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative">
                    <img
                      src={ebook.thumbnail}
                      alt={ebook.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                        FEATURED
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white text-gray-700 text-xs font-medium px-2 py-1 rounded">
                        {ebook.format}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        {ebook.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <StarIcon className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        {ebook.rating}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      <Link href={`/ebooks/${ebook.slug}`}>
                        {ebook.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {ebook.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>by {ebook.author}</span>
                      <span>{ebook.pages} pages</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <DownloadIcon className="h-4 w-4 mr-1" />
                        {ebook.downloads} downloads
                      </div>
                      
                      <Link
                        href={`/ebooks/${ebook.slug}`}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Download Free
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* All eBooks Grid */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">All eBooks</h2>
              <span className="text-gray-500">Showing {ebooks.length} eBooks</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ebooks.map((ebook) => (
                <div key={ebook.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img
                      src={ebook.thumbnail}
                      alt={ebook.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-white text-gray-700 text-xs font-medium px-2 py-1 rounded shadow">
                        {ebook.format}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                        {ebook.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-500">
                        <StarIcon className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                        {ebook.rating}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      <Link href={`/ebooks/${ebook.slug}`}>
                        {ebook.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                      {ebook.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>{ebook.pages} pages</span>
                      <div className="flex items-center">
                        <DownloadIcon className="h-3 w-3 mr-1" />
                        {ebook.downloads}
                      </div>
                    </div>
                    
                    <Link
                      href={`/ebooks/${ebook.slug}`}
                      className="block w-full bg-blue-600 text-white text-center py-2 rounded font-medium hover:bg-blue-700 transition-colors text-sm"
                    >
                      Download Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
              Load More eBooks
            </button>
          </div>

          {/* CTA Section */}
          <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with New eBooks</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Be the first to access our latest digital marketing guides, templates, and resources. 
              Join thousands of marketers who trust our insights.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
