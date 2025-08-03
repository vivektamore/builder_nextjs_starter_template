import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import ArticleCard from '@/components/ui/ArticleCard'
import { SidebarAd, InArticleAd, BannerAd } from '@/components/ads/GoogleAds'
import { getArticleBySlug, getLatestArticles } from '@/lib/data'
import { CalendarIcon, UserIcon, ClockIcon, ShareIcon, TwitterIcon, FacebookIcon, LinkedinIcon } from 'lucide-react'
import type { Metadata } from 'next'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found - Search Engine Journal'
    }
  }

  return {
    title: `${article.title} - Search Engine Journal`,
    description: article.excerpt,
    keywords: article.tags.join(', '),
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author],
      section: article.category,
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    }
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)
  const relatedArticles = getLatestArticles(3)

  if (!article) {
    notFound()
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://searchenginejournal.com/article/${params.slug}`
  const shareText = encodeURIComponent(article.title)

  return (
    <Layout>
      <article className="bg-white">
        {/* Article Header */}
        <header className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-6">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                  <li>
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                  </li>
                  <li className="before:content-['/'] before:mx-2">
                    <Link 
                      href={`/category/${article.category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-blue-600"
                    >
                      {article.category}
                    </Link>
                  </li>
                  <li className="before:content-['/'] before:mx-2 text-gray-400">
                    {article.title}
                  </li>
                </ol>
              </nav>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center">
                  <UserIcon className="h-4 w-4 mr-2" />
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span>{article.publishDate}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-sm font-medium text-gray-700">Share:</span>
                <div className="flex space-x-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800 transition-colors"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-800 text-white p-2 rounded hover:bg-blue-900 transition-colors"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Featured Image */}
                <div className="mb-8">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    width={800}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>

                {/* Article Body */}
                <div className="article-content prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Sample content - in a real app, this would come from a CMS */}
                  <h2>Understanding the Impact</h2>
                  <p>
                    In the rapidly evolving landscape of digital marketing, staying informed about the latest trends and algorithm updates is crucial for success. This comprehensive guide breaks down the key elements you need to understand to maintain your competitive edge.
                  </p>

                  <h3>Key Takeaways</h3>
                  <ul>
                    <li>Monitor performance metrics regularly</li>
                    <li>Adapt strategies based on data insights</li>
                    <li>Stay updated with platform changes</li>
                    <li>Focus on user experience optimization</li>
                  </ul>

                  <blockquote>
                    "Success in digital marketing requires continuous learning and adaptation to new technologies and user behaviors."
                  </blockquote>

                  <h2>Implementation Strategy</h2>
                  <p>
                    When implementing these changes, it's important to take a systematic approach. Start by auditing your current setup, identifying areas for improvement, and creating a roadmap for implementation.
                  </p>

                  <h3>Next Steps</h3>
                  <ol>
                    <li>Conduct a comprehensive audit</li>
                    <li>Prioritize high-impact changes</li>
                    <li>Create an implementation timeline</li>
                    <li>Monitor results and adjust accordingly</li>
                  </ol>

                  <p>
                    By following these guidelines and staying informed about industry developments, you'll be well-positioned to achieve your digital marketing objectives and drive meaningful results for your organization.
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{article.author}</h4>
                      <p className="text-gray-600 mb-3">
                        Senior Digital Marketing Specialist with over 8 years of experience in SEO, content marketing, and digital strategy. 
                        Passionate about helping businesses grow through effective online marketing techniques.
                      </p>
                      <div className="flex space-x-3">
                        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">Twitter</a>
                        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">LinkedIn</a>
                        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">Email</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Ad Space */}
                <div className="bg-gray-100 p-6 rounded-lg mb-8 text-center">
                  <p className="text-gray-600 text-sm">Advertisement</p>
                  <div className="h-64 bg-gray-200 rounded mt-2 flex items-center justify-center">
                    <span className="text-gray-500">Google Ads</span>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedArticles.map((relatedArticle) => (
                      <div key={relatedArticle.id} className="group">
                        <Link href={`/article/${relatedArticle.slug}`}>
                          <div className="flex space-x-3">
                            <Image
                              src={relatedArticle.imageUrl}
                              alt={relatedArticle.title}
                              width={80}
                              height={60}
                              className="w-20 h-15 object-cover rounded flex-shrink-0"
                            />
                            <div>
                              <h4 className="font-medium text-gray-900 group-hover:text-blue-600 text-sm leading-tight mb-1">
                                {relatedArticle.title}
                              </h4>
                              <p className="text-xs text-gray-500">{relatedArticle.publishDate}</p>
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
        </div>
      </article>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.excerpt,
            "image": article.imageUrl,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Search Engine Journal",
              "logo": {
                "@type": "ImageObject",
                "url": "https://searchenginejournal.com/logo.png"
              }
            },
            "datePublished": article.publishDate,
            "dateModified": article.publishDate,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://searchenginejournal.com/article/${params.slug}`
            },
            "keywords": article.tags.join(", ")
          }),
        }}
      />
    </Layout>
  )
}
