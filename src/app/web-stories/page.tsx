import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import { PlayIcon, ClockIcon, EyeIcon } from 'lucide-react'

interface WebStory {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  duration: string
  views: string
  publishDate: string
  category: string
  ampUrl: string
}

const webStories: WebStory[] = [
  {
    id: '1',
    title: 'SEO Trends 2024: What Every Marketer Should Know',
    description: 'Discover the top SEO trends that will shape digital marketing in 2024',
    thumbnailUrl: '/api/placeholder/300/400',
    duration: '2 min',
    views: '15.2K',
    publishDate: 'Dec 15, 2024',
    category: 'SEO',
    ampUrl: '/web-stories/amp/seo-trends-2024'
  },
  {
    id: '2',
    title: 'Content Marketing Mistakes to Avoid',
    description: 'Common pitfalls that can hurt your content marketing strategy',
    thumbnailUrl: '/api/placeholder/300/400',
    duration: '90 sec',
    views: '8.7K',
    publishDate: 'Dec 14, 2024',
    category: 'Content Marketing',
    ampUrl: '/web-stories/amp/content-marketing-mistakes'
  },
  {
    id: '3',
    title: 'Google Ads Best Practices Quick Guide',
    description: 'Essential tips for maximizing your Google Ads performance',
    thumbnailUrl: '/api/placeholder/300/400',
    duration: '2.5 min',
    views: '12.1K',
    publishDate: 'Dec 13, 2024',
    category: 'Paid Media',
    ampUrl: '/web-stories/amp/google-ads-best-practices'
  },
  {
    id: '4',
    title: 'Social Media Algorithm Updates',
    description: 'How recent platform changes affect your social strategy',
    thumbnailUrl: '/api/placeholder/300/400',
    duration: '2 min',
    views: '9.8K',
    publishDate: 'Dec 12, 2024',
    category: 'Social Media',
    ampUrl: '/web-stories/amp/social-media-algorithms'
  },
  {
    id: '5',
    title: 'Email Marketing Automation Workflow',
    description: 'Step-by-step guide to setting up automated email campaigns',
    thumbnailUrl: '/api/placeholder/300/400',
    duration: '3 min',
    views: '6.4K',
    publishDate: 'Dec 11, 2024',
    category: 'Content Marketing',
    ampUrl: '/web-stories/amp/email-automation'
  },
  {
    id: '6',
    title: 'Local SEO Checklist for Small Business',
    description: 'Essential local SEO tactics for improving local search visibility',
    thumbnailUrl: '/api/placeholder/300/400',
    duration: '2.5 min',
    views: '11.3K',
    publishDate: 'Dec 10, 2024',
    category: 'SEO',
    ampUrl: '/web-stories/amp/local-seo-checklist'
  }
]

export default function WebStoriesPage() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <section className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Web Stories
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Quick, visual stories covering the latest digital marketing insights, tips, and trends. 
                Perfect for on-the-go learning.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <PlayIcon className="h-5 w-5 mr-2 text-blue-600" />
                  <span>Interactive Stories</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2 text-green-600" />
                  <span>Quick 2-3 min reads</span>
                </div>
                <div className="flex items-center">
                  <EyeIcon className="h-5 w-5 mr-2 text-purple-600" />
                  <span>Mobile Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Stories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {webStories.map((story) => (
                <a
                  key={story.id}
                  href={story.ampUrl}
                  className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  {/* Story Thumbnail */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={story.thumbnailUrl}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <PlayIcon className="h-8 w-8 text-gray-900" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        {story.category}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {story.duration}
                    </div>
                  </div>

                  {/* Story Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {story.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{story.publishDate}</span>
                      <span>{story.views} views</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Load More Stories
              </button>
            </div>
          </div>
        </section>

        {/* Featured Story Spotlight */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Featured Story
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="mb-4">
                    <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    The Complete Guide to Google Core Web Vitals
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    Everything you need to know about Core Web Vitals, from understanding the metrics 
                    to implementing optimizations that will improve your search rankings.
                  </p>
                  
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>3 min read</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <EyeIcon className="h-4 w-4 mr-1" />
                      <span>23.5K views</span>
                    </div>
                  </div>
                  
                  <a
                    href="/web-stories/amp/core-web-vitals-guide"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    <PlayIcon className="h-5 w-5 mr-2" />
                    Watch Story
                  </a>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="relative aspect-[3/4] max-w-sm mx-auto">
                    <Image
                      src="/api/placeholder/400/533"
                      alt="Core Web Vitals Guide"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-4">
                        <PlayIcon className="h-12 w-12 text-gray-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Never Miss a Story
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new Web Stories covering the latest digital marketing trends and insights.
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
          </div>
        </section>
      </div>

      {/* Structured Data for Web Stories */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Digital Marketing Web Stories",
            "description": "Interactive web stories covering digital marketing insights, SEO tips, and industry trends.",
            "url": "https://searchenginejournal.com/web-stories",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": webStories.length,
              "itemListElement": webStories.map((story, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "WebPageElement",
                  "name": story.title,
                  "description": story.description,
                  "url": `https://searchenginejournal.com${story.ampUrl}`,
                  "image": story.thumbnailUrl,
                  "datePublished": story.publishDate
                }
              }))
            }
          }),
        }}
      />
    </Layout>
  )
}

export const metadata = {
  title: 'Web Stories - Digital Marketing Insights | Search Engine Journal',
  description: 'Interactive web stories covering the latest digital marketing insights, SEO tips, and industry trends. Quick, visual content optimized for mobile.',
  keywords: 'web stories, digital marketing, SEO, content marketing, visual content, mobile marketing',
  openGraph: {
    title: 'Web Stories - Digital Marketing Insights',
    description: 'Interactive web stories covering digital marketing insights and trends',
    images: ['/api/placeholder/1200/630'],
    type: 'website',
  }
}
