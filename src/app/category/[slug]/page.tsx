import { notFound } from 'next/navigation'
import Layout from '@/components/layout/Layout'
import ArticleCard from '@/components/ui/ArticleCard'
import { getArticlesByCategory, categories } from '@/lib/data'
import type { Metadata } from 'next'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories.find(cat => cat.slug === params.slug)
  
  if (!category) {
    return {
      title: 'Category Not Found - Search Engine Journal'
    }
  }

  return {
    title: `${category.name} Articles - Search Engine Journal`,
    description: `Latest ${category.name.toLowerCase()} news, tips, and insights. ${category.description}`,
    keywords: `${category.name}, digital marketing, SEO, content marketing`,
    openGraph: {
      title: `${category.name} Articles - Search Engine Journal`,
      description: category.description,
      images: [category.imageUrl],
      type: 'website',
    }
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.slug === params.slug)
  const articles = getArticlesByCategory(params.slug)

  if (!category) {
    notFound()
  }

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Category Header */}
        <section className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <ol className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <li>
                    <a href="/" className="hover:text-blue-600">Home</a>
                  </li>
                  <li className="before:content-['/'] before:mx-2">
                    <span className="text-gray-400">Categories</span>
                  </li>
                  <li className="before:content-['/'] before:mx-2 text-gray-400">
                    {category.name}
                  </li>
                </ol>
              </nav>

              <div className={`inline-block p-4 rounded-full bg-gradient-to-r ${category.color} mb-6`}>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">
                    {category.name.charAt(0)}
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {category.name}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                {category.description}
              </p>

              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">{category.articleCount}</span>
                  <span className="ml-1">Articles</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold text-gray-900">{articles.length}</span>
                  <span className="ml-1">Latest Posts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {articles.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {articles.map((article) => (
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

                {/* Load More Button */}
                <div className="text-center">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Load More Articles
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No articles found in this category
                </h3>
                <p className="text-gray-600 mb-8">
                  Check back soon for new content in {category.name}.
                </p>
                <a 
                  href="/" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  Browse All Articles
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-blue-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with {category.name} News
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest {category.name.toLowerCase()} insights and strategies delivered to your inbox.
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

        {/* Ad Space */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-gray-200 rounded-lg p-8 text-center">
              <p className="text-gray-600">Advertisement Placement Area</p>
              <p className="text-sm text-gray-500 mt-2">Category-specific ads will be displayed here</p>
            </div>
          </div>
        </section>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${category.name} Articles`,
            "description": category.description,
            "url": `https://searchenginejournal.com/category/${params.slug}`,
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": articles.length,
              "itemListElement": articles.map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Article",
                  "headline": article.title,
                  "description": article.excerpt,
                  "url": `https://searchenginejournal.com/article/${article.slug}`,
                  "image": article.imageUrl,
                  "author": {
                    "@type": "Person",
                    "name": article.author
                  },
                  "datePublished": article.publishDate
                }
              }))
            }
          }),
        }}
      />
    </Layout>
  )
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}
