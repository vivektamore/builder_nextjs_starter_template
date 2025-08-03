import Layout from '@/components/layout/Layout'
import ArticleCard from '@/components/ui/ArticleCard'
import CategoryCard from '@/components/ui/CategoryCard'
import { BannerAd, MobileBannerAd, SquareAd } from '@/components/ads/GoogleAds'
import { getFeaturedArticles, getTrendingArticles, getLatestArticles, categories } from '@/lib/data'
import { TrendingUpIcon, FireIcon, ClockIcon } from 'lucide-react'

export default function Home() {
  const featuredArticles = getFeaturedArticles()
  const trendingArticles = getTrendingArticles()
  const latestArticles = getLatestArticles(6)

  return (
    <Layout>
      <div className="bg-gray-50">
        {/* Hero Section with Featured Articles */}
        <section className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-12">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Digital Marketing News & Insights
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Stay ahead of the curve with the latest SEO strategies, content marketing tips, 
                and digital marketing news from industry experts.
              </p>
            </div>

            {/* Featured Articles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
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
              {trendingArticles.map((article) => (
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
              <a 
                href="/articles" 
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
              >
                View All Articles →
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestArticles.map((article) => (
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

            {/* Additional Square Ads */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <SquareAd />
              <SquareAd />
              <SquareAd className="hidden lg:block" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
