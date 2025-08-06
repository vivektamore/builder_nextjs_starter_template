import Layout from '@/components/layout/Layout'
import ArticleCard from '@/components/ui/ArticleCard'
import CategoryCard from '@/components/ui/CategoryCard'
import { BannerAd, MobileBannerAd, SquareAd } from '@/components/ads/GoogleAds'
import { getFeaturedArticles, getTrendingArticles, getLatestArticles, categories } from '@/lib/data'
import { TrendingUpIcon, FireIcon, ClockIcon, BookOpenIcon, PlayIcon, MailIcon, UserIcon, EyeIcon } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const featuredArticles = getFeaturedArticles()
  const trendingArticles = getTrendingArticles()
  const latestArticles = getLatestArticles(9)
  const heroArticle = featuredArticles[0] // Main hero article
  const sidebarArticles = latestArticles.slice(0, 5) // Latest articles for sidebar

  // Mock data for popular guides and resources
  const popularGuides = [
    {
      title: 'Complete SEO Guide 2024',
      type: 'eBook',
      downloads: '25.3K',
      href: '/ebooks/complete-seo-guide-2024'
    },
    {
      title: 'PPC Campaign Checklist',
      type: 'Template',
      downloads: '18.7K',
      href: '/library/ppc-campaign-checklist'
    },
    {
      title: 'Content Marketing Strategy',
      type: 'Guide',
      downloads: '32.1K',
      href: '/library/content-marketing-strategy'
    }
  ]

  const webStoriesPreview = [
    {
      title: 'SEO Trends 2024',
      thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=400',
      duration: '2:30',
      views: '45.2K'
    },
    {
      title: 'Google Ads Tips',
      thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=400',
      duration: '3:15',
      views: '38.7K'
    }
  ]

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Hero Article */}
              <div className="lg:col-span-2">
                {heroArticle && (
                  <Link href={`/article/${heroArticle.slug}`} className="block">
                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                      <div className="relative h-80 lg:h-96 overflow-hidden">
                        <img
                          src={heroArticle.imageUrl}
                          alt={heroArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                        {/* Hero Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                          <div className="flex items-center mb-4">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                              {heroArticle.category}
                            </span>
                            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              FEATURED
                            </span>
                          </div>

                          <h1 className="text-xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-tight">
                            {heroArticle.title}
                          </h1>

                          <p className="text-base lg:text-lg text-gray-200 mb-4 line-clamp-2">
                            {heroArticle.excerpt}
                          </p>

                          <div className="flex items-center text-sm text-gray-300">
                            <UserIcon className="h-4 w-4 mr-1" />
                            <span className="mr-4">By {heroArticle.author}</span>
                            <ClockIcon className="h-4 w-4 mr-1" />
                            <span className="mr-4">{heroArticle.readTime}</span>
                            <span>{heroArticle.publishDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Latest Articles */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <ClockIcon className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Latest Articles</h3>
                  </div>
                  <div className="space-y-4">
                    {sidebarArticles.map((article, index) => (
                      <div key={article.id} className="flex space-x-3 group">
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            <Link href={`/article/${article.slug}`}>
                              {article.title}
                            </Link>
                          </h4>
                          <div className="flex items-center mt-1 text-xs text-gray-500">
                            <span>{article.readTime}</span>
                            <span className="mx-1">•</span>
                            <span>{article.publishDate}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href="/articles" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View all articles →
                    </Link>
                  </div>
                </div>

                {/* Ad Space */}
                <div className="bg-gray-100 rounded-lg p-6 text-center min-h-[250px] flex items-center justify-center">
                  <SquareAd />
                </div>

                {/* Popular Resources */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <BookOpenIcon className="h-5 w-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Popular Resources</h3>
                  </div>
                  <div className="space-y-3">
                    {popularGuides.map((guide, index) => (
                      <div key={index} className="group">
                        <Link href={guide.href} className="block">
                          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {guide.title}
                              </h4>
                              <div className="flex items-center mt-1 text-xs text-gray-500">
                                <span className="bg-gray-100 px-2 py-0.5 rounded text-xs mr-2">
                                  {guide.type}
                                </span>
                                <span>{guide.downloads} downloads</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Stories Preview */}
        <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center text-white">
                <PlayIcon className="h-8 w-8 mr-3" />
                <div>
                  <h2 className="text-3xl font-bold">Web Stories</h2>
                  <p className="text-purple-200">Quick, visual marketing insights</p>
                </div>
              </div>
              <Link href="/web-stories" className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View All Stories
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {webStoriesPreview.map((story, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={story.thumbnail}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white bg-opacity-80 rounded-full p-2 group-hover:bg-opacity-100 transition-all">
                          <PlayIcon className="h-4 w-4 text-purple-600" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                        <h3 className="text-xs font-semibold line-clamp-2 mb-1">{story.title}</h3>
                        <div className="flex items-center justify-between text-xs">
                          <span>{story.duration}</span>
                          <div className="flex items-center">
                            <EyeIcon className="h-2 w-2 mr-1" />
                            {story.views}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Dive deep into specific areas of digital marketing with our comprehensive category guides
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  name={category.name}
                  description={category.description}
                  articleCount={category.articleCount}
                  imageUrl={category.imageUrl}
                  href={category.href}
                  color={category.color}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Trending Articles Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-8">
              <TrendingUpIcon className="h-8 w-8 text-red-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingArticles.slice(0, 6).map((article) => (
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
        </section>

        {/* Latest Articles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <ClockIcon className="h-8 w-8 text-blue-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
              </div>
              <Link 
                href="/articles" 
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
              >
                View All Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.slice(0, 9).map((article) => (
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
        </section>

        {/* Newsletter CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="flex justify-center mb-6">
                <MailIcon className="h-16 w-16 text-blue-200" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Ahead of Digital Marketing Trends
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get the latest SEO insights, content marketing strategies, and digital marketing news 
                delivered to your inbox every week.
              </p>
              
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none text-lg"
                />
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
                  Subscribe Free
                </button>
              </div>
              
              <p className="text-sm text-blue-200">
                Join 50,000+ marketers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Ad Placement Areas */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Desktop Banner Ad */}
            <div className="hidden lg:flex justify-center mb-4">
              <BannerAd />
            </div>

            {/* Mobile Banner Ad */}
            <div className="lg:hidden mb-4">
              <MobileBannerAd />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
