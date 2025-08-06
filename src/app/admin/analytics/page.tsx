'use client'

import { useState } from 'react'
import { BarChart3Icon, TrendingUpIcon, EyeIcon, MousePointerClickIcon, ShareIcon, CalendarIcon, FilterIcon, DownloadIcon, RefreshCwIcon, ExternalLinkIcon } from 'lucide-react'

interface AnalyticsItem {
  id: string
  title: string
  type: 'blog-post' | 'web-story' | 'ebook'
  author: string
  category: string
  publishDate: string
  views: number
  clicks: number
  shares: number
  avgTimeOnPage: string
  bounceRate: number
}

const AnalyticsDashboard = () => {
  const [dateRange, setDateRange] = useState('30')
  const [contentType, setContentType] = useState('all')
  const [authorFilter, setAuthorFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  // Mock analytics data
  const analyticsData: AnalyticsItem[] = [
    {
      id: '1',
      title: 'Google Core Web Vitals Update: What You Need to Know for 2024',
      type: 'blog-post',
      author: 'Sarah Johnson',
      category: 'SEO',
      publishDate: '2024-01-15',
      views: 15420,
      clicks: 1842,
      shares: 234,
      avgTimeOnPage: '4:32',
      bounceRate: 32
    },
    {
      id: '2',
      title: 'SEO Trends 2024',
      type: 'web-story',
      author: 'Mike Chen',
      category: 'SEO',
      publishDate: '2024-01-12',
      views: 8935,
      clicks: 567,
      shares: 145,
      avgTimeOnPage: '2:15',
      bounceRate: 28
    },
    {
      id: '3',
      title: 'The Complete SEO Guide 2024',
      type: 'ebook',
      author: 'SEJ Editorial Team',
      category: 'SEO',
      publishDate: '2024-01-10',
      views: 12680,
      clicks: 2156,
      shares: 89,
      avgTimeOnPage: '12:45',
      bounceRate: 15
    },
    {
      id: '4',
      title: 'Content Marketing ROI: How to Measure Success',
      type: 'blog-post',
      author: 'Lisa Rodriguez',
      category: 'Content Marketing',
      publishDate: '2024-01-08',
      views: 9874,
      clicks: 1234,
      shares: 167,
      avgTimeOnPage: '5:21',
      bounceRate: 38
    },
    {
      id: '5',
      title: 'Google Ads Best Practices',
      type: 'web-story',
      author: 'David Park',
      category: 'Paid Media',
      publishDate: '2024-01-05',
      views: 6542,
      clicks: 423,
      shares: 92,
      avgTimeOnPage: '1:58',
      bounceRate: 42
    }
  ]

  const filteredData = analyticsData.filter(item => {
    if (contentType !== 'all' && item.type !== contentType) return false
    if (authorFilter !== 'all' && item.author !== authorFilter) return false
    if (categoryFilter !== 'all' && item.category !== categoryFilter) return false
    return true
  })

  const totalViews = filteredData.reduce((sum, item) => sum + item.views, 0)
  const totalClicks = filteredData.reduce((sum, item) => sum + item.clicks, 0)
  const totalShares = filteredData.reduce((sum, item) => sum + item.shares, 0)
  const avgBounceRate = filteredData.length > 0 
    ? filteredData.reduce((sum, item) => sum + item.bounceRate, 0) / filteredData.length
    : 0

  const authors = Array.from(new Set(analyticsData.map(item => item.author)))
  const categories = Array.from(new Set(analyticsData.map(item => item.category)))

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'blog-post':
        return '📝'
      case 'web-story':
        return '📱'
      case 'ebook':
        return '📚'
      default:
        return '📄'
    }
  }

  const exportData = () => {
    // In a real app, this would generate a CSV/Excel file
    alert('Analytics data export feature would be implemented here')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
              <p className="text-gray-600 mt-1">Track performance across blog posts, web stories, and ebooks</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={exportData}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                <DownloadIcon className="h-4 w-4" />
                <span>Export</span>
              </button>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <RefreshCwIcon className="h-4 w-4" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-4">
            <FilterIcon className="h-5 w-5 text-gray-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
                <option value="365">Last year</option>
                <option value="custom">Custom range</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="blog-post">Blog Posts</option>
                <option value="web-story">Web Stories</option>
                <option value="ebook">Ebooks</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
              <select
                value={authorFilter}
                onChange={(e) => setAuthorFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Authors</option>
                {authors.map((author) => (
                  <option key={author} value={author}>{author}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Total Views</div>
              <EyeIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{totalViews.toLocaleString()}</div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">+12.5% from last period</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Total Clicks</div>
              <MousePointerClickIcon className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{totalClicks.toLocaleString()}</div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">+8.3% from last period</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Total Shares</div>
              <ShareIcon className="h-5 w-5 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{totalShares.toLocaleString()}</div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600">+15.7% from last period</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Avg Bounce Rate</div>
              <BarChart3Icon className="h-5 w-5 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{avgBounceRate.toFixed(1)}%</div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingUpIcon className="h-4 w-4 text-red-500 mr-1 rotate-180" />
              <span className="text-red-600">-2.1% from last period</span>
            </div>
          </div>
        </div>

        {/* Content Performance Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Content Performance</h3>
            <p className="text-sm text-gray-600 mt-1">
              Showing {filteredData.length} of {analyticsData.length} items
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Content</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Views</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Clicks</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Shares</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Avg Time</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Bounce Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900 line-clamp-2">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {item.author} • {item.category} • {item.publishDate}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getContentTypeIcon(item.type)}</span>
                        <span className="text-sm text-gray-600 capitalize">
                          {item.type.replace('-', ' ')}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1">
                        <EyeIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{item.views.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1">
                        <MousePointerClickIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{item.clicks.toLocaleString()}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1">
                        <ShareIcon className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-900">{item.shares}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">{item.avgTimeOnPage}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-medium ${
                        item.bounceRate < 30 ? 'text-green-600' :
                        item.bounceRate < 50 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {item.bounceRate}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Google Analytics Integration */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">External Integrations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <BarChart3Icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-900">Google Analytics</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600">Connected</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Track detailed website analytics and user behavior
              </p>
              <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
                <ExternalLinkIcon className="h-4 w-4" />
                <span>View in GA4</span>
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <MousePointerClickIcon className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-gray-900">Google Ads</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600">Connected</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Monitor advertising performance and conversion tracking
              </p>
              <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
                <ExternalLinkIcon className="h-4 w-4" />
                <span>View Ads Dashboard</span>
              </button>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Integration Setup</h4>
            <p className="text-sm text-blue-800 mb-3">
              Configure tracking IDs and API keys in the settings to enable real-time data sync.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
              Configure Integrations
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsDashboard
