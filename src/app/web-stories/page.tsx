import Layout from '@/components/layout/Layout'
import { PlayIcon, EyeIcon, ClockIcon, TrendingUpIcon, SearchIcon, FilterIcon } from 'lucide-react'
import Link from 'next/link'

// Mock data for Web Stories
const webStories = [
  {
    id: '1',
    title: 'SEO Trends 2024',
    description: 'Discover the top SEO trends that will dominate search in 2024. From AI integration to Core Web Vitals updates.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
    category: 'SEO',
    duration: '2:30',
    views: '45.2K',
    publishDate: '2024-01-15',
    featured: true,
    slug: 'seo-trends-2024'
  },
  {
    id: '2',
    title: 'Google Ads Best Practices',
    description: 'Master Google Ads with these essential best practices for campaign optimization and ROI improvement.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=800',
    category: 'Paid Media',
    duration: '3:15',
    views: '38.7K',
    publishDate: '2024-01-12',
    featured: true,
    slug: 'google-ads-best-practices'
  },
  {
    id: '3',
    title: 'Content Marketing Secrets',
    description: 'Unlock the secrets of successful content marketing with these proven strategies and techniques.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2Fed8ddc195d9d48969e0292b9e62d317b?format=webp&width=800',
    category: 'Content Marketing',
    duration: '2:45',
    views: '52.1K',
    publishDate: '2024-01-10',
    featured: true,
    slug: 'content-marketing-secrets'
  },
  {
    id: '4',
    title: 'Social Media Analytics Guide',
    description: 'Learn how to track and measure your social media performance with the right metrics and tools.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F52115549de9143c591653b13b2c69927?format=webp&width=800',
    category: 'Social Media',
    duration: '3:00',
    views: '29.8K',
    publishDate: '2024-01-08',
    featured: false,
    slug: 'social-media-analytics-guide'
  },
  {
    id: '5',
    title: 'Technical SEO Checklist',
    description: 'Complete technical SEO checklist to ensure your website is optimized for search engines.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
    category: 'SEO',
    duration: '4:20',
    views: '41.3K',
    publishDate: '2024-01-05',
    featured: false,
    slug: 'technical-seo-checklist'
  },
  {
    id: '6',
    title: 'Email Marketing Automation',
    description: 'Set up powerful email marketing automation sequences that convert subscribers into customers.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=800',
    category: 'Email Marketing',
    duration: '3:45',
    views: '33.6K',
    publishDate: '2024-01-03',
    featured: false,
    slug: 'email-marketing-automation'
  },
  {
    id: '7',
    title: 'Local SEO Optimization',
    description: 'Dominate local search results with these proven local SEO strategies and tactics.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2Fed8ddc195d9d48969e0292b9e62d317b?format=webp&width=800',
    category: 'SEO',
    duration: '2:55',
    views: '27.4K',
    publishDate: '2024-01-01',
    featured: false,
    slug: 'local-seo-optimization'
  },
  {
    id: '8',
    title: 'Conversion Rate Optimization',
    description: 'Increase your website conversions with these CRO techniques and testing strategies.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F52115549de9143c591653b13b2c69927?format=webp&width=800',
    category: 'Digital Marketing',
    duration: '3:30',
    views: '35.9K',
    publishDate: '2023-12-28',
    featured: false,
    slug: 'conversion-rate-optimization'
  },
  {
    id: '9',
    title: 'Influencer Marketing ROI',
    description: 'Measure and maximize your influencer marketing ROI with these advanced tracking methods.',
    thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
    category: 'Social Media',
    duration: '2:20',
    views: '22.7K',
    publishDate: '2023-12-25',
    featured: false,
    slug: 'influencer-marketing-roi'
  }
]

const categories = [
  'All Categories',
  'SEO',
  'Content Marketing', 
  'Paid Media',
  'Social Media',
  'Email Marketing',
  'Digital Marketing',
  'Analytics'
]

const featuredStories = webStories.filter(story => story.featured)
const trendingStories = webStories.sort((a, b) => parseFloat(b.views.replace('K', '')) - parseFloat(a.views.replace('K', ''))).slice(0, 6)

export default function WebStoriesPage() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-full">
                  <PlayIcon className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Web Stories Library
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed mb-8">
                Engage with bite-sized, visual content that delivers digital marketing insights in 
                quick, digestible stories. Perfect for mobile consumption and social sharing.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-purple-200">
                <span className="flex items-center">
                  <PlayIcon className="h-4 w-4 mr-1" />
                  {webStories.length} Stories
                </span>
                <span className="flex items-center">
                  <EyeIcon className="h-4 w-4 mr-1" />
                  500K+ Views
                </span>
                <span>Mobile Optimized</span>
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
                    placeholder="Search Web Stories..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <SearchIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Most Popular</option>
                  <option>Most Recent</option>
                  <option>Most Viewed</option>
                  <option>Longest</option>
                  <option>Shortest</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Featured Stories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Web Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredStories.map((story) => (
                <div key={story.id} className="relative group cursor-pointer">
                  <Link href={`/web-stories/${story.slug}`}>
                    <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      {/* Story Thumbnail */}
                      <div className="relative h-96 overflow-hidden">
                        <img
                          src={story.thumbnail}
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        
                        {/* Featured Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                            FEATURED
                          </span>
                        </div>

                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-opacity-100 transition-all transform group-hover:scale-110">
                            <PlayIcon className="h-8 w-8 text-purple-600" />
                          </div>
                        </div>

                        {/* Story Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="flex items-center justify-between mb-2">
                            <span className="bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded">
                              {story.category}
                            </span>
                            <div className="flex items-center text-xs">
                              <ClockIcon className="h-3 w-3 mr-1" />
                              {story.duration}
                            </div>
                          </div>
                          
                          <h3 className="text-lg font-bold mb-2">{story.title}</h3>
                          <p className="text-sm text-gray-200 line-clamp-2">{story.description}</p>
                          
                          <div className="flex items-center justify-between mt-3 text-xs">
                            <div className="flex items-center">
                              <EyeIcon className="h-3 w-3 mr-1" />
                              {story.views} views
                            </div>
                            <span>{story.publishDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Trending Stories */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <TrendingUpIcon className="h-8 w-8 text-red-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Trending Stories</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {trendingStories.map((story) => (
                <div key={story.id} className="relative group cursor-pointer">
                  <Link href={`/web-stories/${story.slug}`}>
                    <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={story.thumbnail}
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white bg-opacity-80 rounded-full p-2 group-hover:bg-opacity-100 transition-all">
                            <PlayIcon className="h-4 w-4 text-purple-600" />
                          </div>
                        </div>

                        {/* Story Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                          <div className="flex items-center justify-between mb-1 text-xs">
                            <span className="bg-purple-600 px-1 py-0.5 rounded text-xs">
                              {story.category}
                            </span>
                            <span>{story.duration}</span>
                          </div>
                          
                          <h3 className="text-sm font-semibold line-clamp-2">{story.title}</h3>
                          
                          <div className="flex items-center justify-between mt-1 text-xs">
                            <div className="flex items-center">
                              <EyeIcon className="h-3 w-3 mr-1" />
                              {story.views}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* All Stories Grid */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">All Web Stories</h2>
              <span className="text-gray-500">Showing {webStories.length} stories</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {webStories.map((story) => (
                <div key={story.id} className="relative group cursor-pointer">
                  <Link href={`/web-stories/${story.slug}`}>
                    <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={story.thumbnail}
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white bg-opacity-75 rounded-full p-2 group-hover:bg-opacity-100 transition-all">
                            <PlayIcon className="h-3 w-3 text-purple-600" />
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute top-2 right-2">
                          <span className="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                            {story.duration}
                          </span>
                        </div>

                        {/* Story Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                          <span className="bg-purple-600 text-xs px-1 py-0.5 rounded mb-1 inline-block">
                            {story.category}
                          </span>
                          
                          <h3 className="text-xs font-semibold line-clamp-2 mb-1">{story.title}</h3>
                          
                          <div className="flex items-center text-xs">
                            <EyeIcon className="h-2 w-2 mr-1" />
                            {story.views}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Load More Stories
            </button>
          </div>

          {/* CTA Section */}
          <section className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
            <PlayIcon className="h-16 w-16 mx-auto mb-4 text-purple-200" />
            <h2 className="text-3xl font-bold mb-4">Create Your Own Web Stories</h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Transform your content into engaging web stories that captivate your audience. 
              Our tools make it easy to create mobile-first, visual content.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </section>
        </div>
      </div>
    </Layout>
  )
}
