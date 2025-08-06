import Layout from '@/components/layout/Layout'
import ArticleCard from '@/components/ui/ArticleCard'
import { FilterIcon, GridIcon, ListIcon, TrendingUpIcon } from 'lucide-react'
import Link from 'next/link'

// Mock data for SEO articles
const seoArticles = [
  {
    id: '1',
    title: 'Complete Guide to Technical SEO in 2024',
    excerpt: 'Master the fundamentals of technical SEO with this comprehensive guide covering Core Web Vitals, site architecture, and more.',
    author: 'John Smith',
    publishDate: '2024-01-15',
    readTime: '12 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
    slug: 'technical-seo-guide-2024',
    category: 'Technical SEO',
    subcategory: 'technical',
    views: '15.2K',
    featured: true
  },
  {
    id: '2',
    title: 'Google Core Algorithm Update: What Changed?',
    excerpt: 'Analysis of the latest Google algorithm update and its impact on search rankings across different industries.',
    author: 'Sarah Johnson',
    publishDate: '2024-01-12',
    readTime: '8 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=800',
    slug: 'google-algorithm-update-january-2024',
    category: 'Google Updates',
    subcategory: 'google-updates',
    views: '8.7K',
    featured: false
  },
  {
    id: '3',
    title: 'Ask An SEO: How to Optimize for Voice Search',
    excerpt: 'Expert answers to common voice search optimization questions and best practices for 2024.',
    author: 'Mike Chen',
    publishDate: '2024-01-10',
    readTime: '6 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2Fed8ddc195d9d48969e0292b9e62d317b?format=webp&width=800',
    slug: 'voice-search-optimization-guide',
    category: 'Ask An SEO',
    subcategory: 'ask-an-seo',
    views: '12.1K',
    featured: true
  },
  {
    id: '4',
    title: 'Local SEO Basics: Complete Beginner Guide',
    excerpt: 'Everything you need to know about local SEO, from Google My Business optimization to local keyword research.',
    author: 'Emily Rodriguez',
    publishDate: '2024-01-08',
    readTime: '10 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F52115549de9143c591653b13b2c69927?format=webp&width=800',
    slug: 'local-seo-beginner-guide',
    category: 'Local SEO',
    subcategory: 'local',
    views: '9.3K',
    featured: false
  },
  {
    id: '5',
    title: 'SEO Basics: Understanding Search Intent',
    excerpt: 'Learn how to identify and optimize for different types of search intent to improve your rankings.',
    author: 'David Wilson',
    publishDate: '2024-01-05',
    readTime: '7 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
    slug: 'understanding-search-intent',
    category: 'SEO Basics',
    subcategory: 'basics',
    views: '11.8K',
    featured: false
  },
  {
    id: '6',
    title: 'International SEO: Multi-Country Website Strategy',
    excerpt: 'Best practices for optimizing websites that target multiple countries and languages.',
    author: 'Lisa Park',
    publishDate: '2024-01-03',
    readTime: '14 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=800',
    slug: 'international-seo-strategy',
    category: 'International SEO',
    subcategory: 'international',
    views: '6.9K',
    featured: false
  }
]

const subcategories = [
  { name: 'All SEO', href: '/category/seo', count: seoArticles.length },
  { name: 'Ask An SEO', href: '/category/seo/ask-an-seo', count: seoArticles.filter(a => a.subcategory === 'ask-an-seo').length },
  { name: 'Google Updates', href: '/category/seo/google-updates', count: seoArticles.filter(a => a.subcategory === 'google-updates').length },
  { name: 'SEO Basics', href: '/category/seo/basics', count: seoArticles.filter(a => a.subcategory === 'basics').length },
  { name: 'Technical SEO', href: '/category/seo/technical', count: seoArticles.filter(a => a.subcategory === 'technical').length },
  { name: 'Local SEO', href: '/category/seo/local', count: seoArticles.filter(a => a.subcategory === 'local').length },
  { name: 'International SEO', href: '/category/seo/international', count: seoArticles.filter(a => a.subcategory === 'international').length }
]

const popularSeoArticles = [
  { title: 'How to Do Keyword Research for SEO', views: '25.3K', href: '/article/keyword-research-guide' },
  { title: 'Google Page Experience Update Guide', views: '18.7K', href: '/article/page-experience-update' },
  { title: 'Link Building Strategies That Work', views: '16.2K', href: '/article/link-building-strategies' },
  { title: 'SEO Content Writing Best Practices', views: '14.9K', href: '/article/seo-content-writing' }
]

export default function SEOCategoryPage() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">SEO</span>
            </nav>
          </div>
        </div>

        {/* Category Header */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">SEO</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Stay ahead of search engine algorithm changes and master the art of SEO with our comprehensive guides, 
                tutorials, and expert insights. From technical SEO to content optimization, we cover everything you need 
                to improve your search rankings and drive organic traffic.
              </p>
              
              <div className="flex items-center mt-8 space-x-6 text-sm text-gray-500">
                <span className="flex items-center">
                  <TrendingUpIcon className="h-4 w-4 mr-1" />
                  {seoArticles.length} Articles
                </span>
                <span>Updated Daily</span>
                <span>Expert Contributors</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Filter Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex flex-wrap items-center space-x-4 mb-4 sm:mb-0">
                  <h2 className="text-lg font-semibold text-gray-900">SEO Articles</h2>
                  <span className="text-sm text-gray-500">({seoArticles.length} articles)</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Latest First</option>
                    <option>Most Popular</option>
                    <option>Most Viewed</option>
                    <option>Oldest First</option>
                  </select>
                  
                  <div className="flex border border-gray-300 rounded-md">
                    <button className="p-2 bg-blue-50 text-blue-600 border-r border-gray-300">
                      <GridIcon className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <ListIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Subcategory Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {subcategories.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors"
                  >
                    {sub.name}
                    <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                      {sub.count}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Featured Articles */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured SEO Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {seoArticles.filter(article => article.featured).map((article) => (
                    <ArticleCard
                      key={article.id}
                      title={article.title}
                      excerpt={article.excerpt}
                      author={article.author}
                      publishDate={article.publishDate}
                      readTime={article.readTime}
                      imageUrl={article.imageUrl}
                      slug={article.slug}
                      category={article.category}
                      featured={true}
                    />
                  ))}
                </div>
              </div>

              {/* All Articles Grid */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">All SEO Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {seoArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      title={article.title}
                      excerpt={article.excerpt}
                      author={article.author}
                      publishDate={article.publishDate}
                      readTime={article.readTime}
                      imageUrl={article.imageUrl}
                      slug={article.slug}
                      category={article.category}
                    />
                  ))}
                </div>
              </div>

              {/* Load More Button */}
              <div className="text-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Popular SEO Articles */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular SEO Articles</h3>
                  <div className="space-y-4">
                    {popularSeoArticles.map((article, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                        <Link href={article.href} className="block group">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                            {article.title}
                          </h4>
                          <p className="text-sm text-gray-500">{article.views} views</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SEO Tools & Resources */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Tools & Resources</h3>
                  <div className="space-y-3">
                    <Link href="/tools/keyword-research" className="block text-blue-700 hover:text-blue-900 font-medium">
                      → Free Keyword Research Tool
                    </Link>
                    <Link href="/tools/seo-audit" className="block text-blue-700 hover:text-blue-900 font-medium">
                      → SEO Site Audit Checklist
                    </Link>
                    <Link href="/ebooks/seo-guide" className="block text-blue-700 hover:text-blue-900 font-medium">
                      → Complete SEO Guide (Free PDF)
                    </Link>
                    <Link href="/webinars/seo" className="block text-blue-700 hover:text-blue-900 font-medium">
                      → Upcoming SEO Webinars
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">SEO Newsletter</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Get weekly SEO insights and updates delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
