'use client'

import { useState } from 'react'
import Layout from '@/components/layout/Layout'
import { CheckCircleIcon, MailIcon, TrendingUpIcon, BookOpenIcon, BellIcon } from 'lucide-react'

const NewsletterPage = () => {
  const [email, setEmail] = useState('')
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const newsletterTopics = [
    { id: 'seo', name: 'SEO & Search Marketing', description: 'Latest algorithm updates and optimization strategies' },
    { id: 'content', name: 'Content Marketing', description: 'Content strategy, creation, and distribution tips' },
    { id: 'paid', name: 'Paid Media & PPC', description: 'Google Ads, Facebook Ads, and paid advertising insights' },
    { id: 'social', name: 'Social Media Marketing', description: 'Platform updates and social media strategies' },
    { id: 'analytics', name: 'Analytics & Data', description: 'Data analysis, reporting, and performance tracking' },
    { id: 'news', name: 'Industry News', description: 'Breaking news and important industry developments' }
  ]

  const handleTopicToggle = (topicId: string) => {
    setSelectedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically integrate with your email service
    console.log('Newsletter signup:', { email, topics: selectedTopics })
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Layout>
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="bg-green-100 rounded-full p-4 inline-block mb-6">
              <CheckCircleIcon className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to SEJ Newsletter!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for subscribing. You'll receive your first newsletter within the next few days.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-block bg-white bg-opacity-20 rounded-full p-4 mb-6">
                <MailIcon className="h-12 w-12" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Ahead in Digital Marketing
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Join 150,000+ marketing professionals who trust Search Engine Journal 
                for the latest industry insights, strategies, and news delivered weekly.
              </p>

              <div className="flex items-center justify-center space-x-8 text-sm text-blue-100">
                <div className="flex items-center">
                  <TrendingUpIcon className="h-5 w-5 mr-2" />
                  <span>Weekly Insights</span>
                </div>
                <div className="flex items-center">
                  <BookOpenIcon className="h-5 w-5 mr-2" />
                  <span>Expert Analysis</span>
                </div>
                <div className="flex items-center">
                  <BellIcon className="h-5 w-5 mr-2" />
                  <span>Breaking News</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Customize Your Newsletter
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Topic Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Choose Your Interests (Optional)
                    </label>
                    <div className="space-y-3">
                      {newsletterTopics.map((topic) => (
                        <div key={topic.id} className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={topic.id}
                              type="checkbox"
                              checked={selectedTopics.includes(topic.id)}
                              onChange={() => handleTopicToggle(topic.id)}
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            />
                          </div>
                          <div className="ml-3">
                            <label htmlFor={topic.id} className="text-sm font-medium text-gray-900 cursor-pointer">
                              {topic.name}
                            </label>
                            <p className="text-sm text-gray-600">{topic.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Subscribe to Newsletter
                  </button>

                  {/* Privacy Note */}
                  <p className="text-xs text-gray-500 text-center">
                    By subscribing, you agree to our privacy policy. You can unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Benefits */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                What You'll Get
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                    <TrendingUpIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Weekly Industry Insights
                  </h3>
                  <p className="text-gray-600">
                    Curated analysis of the latest trends, algorithm updates, and market changes affecting digital marketing.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                    <BookOpenIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Expert Strategies
                  </h3>
                  <p className="text-gray-600">
                    Actionable tactics and proven strategies from industry experts and thought leaders in digital marketing.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
                    <BellIcon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Breaking News Alerts
                  </h3>
                  <p className="text-gray-600">
                    Be the first to know about major platform updates, policy changes, and industry-shaping announcements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                What Our Subscribers Say
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600 mb-4">
                    "SEJ's newsletter is my go-to source for staying updated on SEO changes. 
                    The insights are always actionable and relevant to my work."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">SEO Manager at TechCorp</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600 mb-4">
                    "The weekly roundup saves me hours of research. I know I can trust SEJ 
                    to deliver the most important digital marketing news."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Mike Chen</p>
                      <p className="text-sm text-gray-600">Digital Marketing Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default NewsletterPage

export const metadata = {
  title: 'Newsletter Signup - Stay Updated | Search Engine Journal',
  description: 'Join 150,000+ marketing professionals who get weekly digital marketing insights, SEO news, and expert strategies delivered to their inbox.',
  keywords: 'newsletter, digital marketing news, SEO updates, content marketing, email subscription',
  openGraph: {
    title: 'Newsletter Signup - Digital Marketing Insights',
    description: 'Weekly digital marketing insights and SEO news delivered to your inbox',
    images: ['/api/placeholder/1200/630'],
    type: 'website',
  }
}
