import Layout from '@/components/layout/Layout'
import ArticleCard from '@/components/ui/ArticleCard'
import { MessageCircleIcon, UserIcon, TrendingUpIcon, ClockIcon } from 'lucide-react'
import Link from 'next/link'

// Mock data for Ask An SEO articles
const askAnSeoArticles = [
  {
    id: '1',
    title: 'Ask An SEO: How to Optimize for Voice Search in 2024',
    excerpt: 'Expert answers to voice search optimization questions, including best practices for structured data and conversational keywords.',
    author: 'John Mueller',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
    slug: 'voice-search-optimization-2024',
    category: 'Ask An SEO',
    views: '12.3K',
    answers: 8,
    featured: true
  },
  {
    id: '2',
    title: 'Ask An SEO: Should I Use AI-Generated Content?',
    excerpt: 'Addressing concerns about AI content, Google guidelines, and best practices for using AI tools in content creation.',
    author: 'Lily Ray',
    publishDate: '2024-01-12',
    readTime: '6 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=800',
    slug: 'ai-generated-content-seo',
    category: 'Ask An SEO',
    views: '18.7K',
    answers: 12,
    featured: true
  },
  {
    id: '3',
    title: 'Ask An SEO: How Often Should I Update Old Content?',
    excerpt: 'Guidelines for content refresh strategies, determining when to update vs. rewrite, and measuring the impact of content updates.',
    author: 'Barry Schwartz',
    publishDate: '2024-01-10',
    readTime: '7 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2Fed8ddc195d9d48969e0292b9e62d317b?format=webp&width=800',
    slug: 'content-update-frequency',
    category: 'Ask An SEO',
    views: '9.8K',
    answers: 6,
    featured: false
  },
  {
    id: '4',
    title: 'Ask An SEO: Can Too Many Internal Links Hurt SEO?',
    excerpt: 'Exploring internal linking best practices, avoiding over-optimization, and finding the right balance for user experience.',
    author: 'Marie Haynes',
    publishDate: '2024-01-08',
    readTime: '5 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F52115549de9143c591653b13b2c69927?format=webp&width=800',
    slug: 'internal-links-seo-impact',
    category: 'Ask An SEO',
    views: '11.2K',
    answers: 9,
    featured: false
  },
  {
    id: '5',
    title: 'Ask An SEO: How to Handle Duplicate Content Issues',
    excerpt: 'Strategies for identifying and resolving duplicate content problems, including canonical tags and content consolidation.',
    author: 'Glenn Gabe',
    publishDate: '2024-01-05',
    readTime: '9 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
    slug: 'duplicate-content-solutions',
    category: 'Ask An SEO',
    views: '14.6K',
    answers: 11,
    featured: false
  },
  {
    id: '6',
    title: 'Ask An SEO: What is E-A-T and How Do I Improve It?',
    excerpt: 'Understanding Expertise, Authoritativeness, and Trustworthiness signals and practical ways to enhance them on your site.',
    author: 'Roger Montti',
    publishDate: '2024-01-03',
    readTime: '10 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=800',
    slug: 'eat-signals-improvement',
    category: 'Ask An SEO',
    views: '16.4K',
    answers: 15,
    featured: false
  }
]

const relatedSeoTopics = [
  { name: 'Technical SEO', href: '/category/seo/technical', count: 24 },
  { name: 'SEO Basics', href: '/category/seo/basics', count: 18 },
  { name: 'Google Updates', href: '/category/seo/google-updates', count: 31 },
  { name: 'Local SEO', href: '/category/seo/local', count: 15 },
  { name: 'International SEO', href: '/category/seo/international', count: 12 }
]

const topSeoExperts = [
  { name: 'John Mueller', title: 'Google Search Advocate', articles: 23 },
  { name: 'Lily Ray', title: 'SEO Director', articles: 18 },
  { name: 'Barry Schwartz', title: 'Senior Editor', articles: 45 },
  { name: 'Marie Haynes', title: 'SEO Consultant', articles: 31 }
]

export default function AskAnSeoPage() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex text-sm text-gray-500">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/category/seo" className="hover:text-blue-600">SEO</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Ask An SEO</span>
            </nav>
          </div>
        </div>

        {/* Category Header */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                <MessageCircleIcon className="h-10 w-10 text-blue-600 mr-4" />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Ask An SEO</h1>
                  <p className="text-lg text-blue-600 font-medium">Expert Answers to Your SEO Questions</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Get answers to your most pressing SEO questions from industry experts and Google representatives. 
                Our Ask An SEO series addresses real-world SEO challenges with practical, actionable advice you can 
                implement immediately.
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span className="flex items-center">
                  <TrendingUpIcon className="h-4 w-4 mr-1" />
                  {askAnSeoArticles.length} Expert Answers
                </span>
                <span className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-1" />
                  Industry Experts
                </span>
                <span className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  Updated Weekly
                </span>
              </div>

              {/* Submit Question CTA */}
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Have an SEO Question?</h3>
                    <p className="text-sm text-gray-600">Submit your question to our panel of SEO experts</p>
                  </div>
                  <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Submit Question
                  </button>
                </div>
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
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <h2 className="text-lg font-semibold text-gray-900">Ask An SEO Articles</h2>
                  <span className="text-sm text-gray-500">({askAnSeoArticles.length} articles)</span>
                </div>
                
                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Latest Questions</option>
                  <option>Most Popular</option>
                  <option>Most Answered</option>
                  <option>By Expert</option>
                </select>
              </div>

              {/* Featured Questions */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Questions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {askAnSeoArticles.filter(article => article.featured).map((article) => (
                    <div key={article.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                            {article.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <MessageCircleIcon className="h-4 w-4 mr-1" />
                            {article.answers} answers
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
                          <Link href={`/article/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-gray-500">
                            <UserIcon className="h-4 w-4 mr-1" />
                            <span>by {article.author}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-gray-500">
                            <span>{article.readTime}</span>
                            <span>{article.views} views</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* All Questions */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">All Questions & Answers</h3>
                <div className="space-y-6">
                  {askAnSeoArticles.map((article) => (
                    <div key={article.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row gap-6">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full md:w-48 h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                              {article.category}
                            </span>
                            <div className="flex items-center text-sm text-gray-500">
                              <MessageCircleIcon className="h-4 w-4 mr-1" />
                              {article.answers} expert answers
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                            <Link href={`/article/${article.slug}`}>
                              {article.title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-gray-500">
                              <UserIcon className="h-4 w-4 mr-1" />
                              <span>Answered by {article.author}</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-500">
                              <span>{article.publishDate}</span>
                              <span>{article.readTime}</span>
                              <span>{article.views} views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Load More Button */}
              <div className="text-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Load More Questions
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Submit Question */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                  <MessageCircleIcon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ask Your SEO Question</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get expert answers from industry professionals and Google representatives.
                  </p>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Submit Question
                  </button>
                </div>

                {/* Top SEO Experts */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Experts</h3>
                  <div className="space-y-4">
                    {topSeoExperts.map((expert, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <UserIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 truncate">{expert.name}</h4>
                          <p className="text-sm text-gray-500 truncate">{expert.title}</p>
                          <p className="text-xs text-gray-400">{expert.articles} articles</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related SEO Topics */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Related SEO Topics</h3>
                  <div className="space-y-3">
                    {relatedSeoTopics.map((topic) => (
                      <Link
                        key={topic.name}
                        href={topic.href}
                        className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-gray-700 hover:text-blue-600">{topic.name}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {topic.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">SEO Q&A Newsletter</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Get the latest SEO questions and expert answers delivered weekly.
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
