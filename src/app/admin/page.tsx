'use client'

import { useState } from 'react'
import { PlusIcon, EditIcon, TrashIcon, EyeIcon, BarChart3Icon, UsersIcon, FileTextIcon, ImageIcon, BookOpenIcon, MessageSquareIcon, DollarSignIcon, SettingsIcon, TrendingUpIcon, TrendingDownIcon, StarIcon, DownloadIcon, MoreHorizontalIcon, CalendarIcon, UploadIcon, XIcon, SaveIcon } from 'lucide-react'

interface Article {
  id: string
  title: string
  status: 'published' | 'draft' | 'scheduled'
  author: string
  publishDate: string
  views: number
  category: string
}

interface WebStory {
  id: string
  icon: string
  iconBg: string
  label: string
  title: string
  subtitle: string
  status: 'published' | 'draft'
  slides: number
  views: string
  duration: string
  dateCreated: string
}

interface Ebook {
  id: string
  title: string
  subtitle: string
  author: string
  authorBio: string
  category: string
  description: string
  tags: string[]
  pages: number
  publishDate: string
  status: 'published' | 'draft'
  downloads: string
  rating: number
  featured: boolean
  thumbnail: string
  pdfUrl?: string
  coverImage?: string
}

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('overview')

  // Sample web stories data
  const webStories: WebStory[] = [
    {
      id: '1',
      icon: 'SEO',
      iconBg: 'bg-blue-600',
      label: 'SEO',
      title: 'Technical SEO in 60s',
      subtitle: 'Core Web Vitals Guide',
      status: 'published',
      slides: 5,
      views: '12.5K',
      duration: '60s',
      dateCreated: '1/18/2024'
    },
    {
      id: '2',
      icon: 'KW',
      iconBg: 'bg-green-600',
      label: 'KW',
      title: 'Keyword Research Secrets',
      subtitle: 'Find Gold Keywords',
      status: 'draft',
      slides: 7,
      views: '-',
      duration: '2:30',
      dateCreated: '1/12/2024'
    },
    {
      id: '3',
      icon: 'LS',
      iconBg: 'bg-orange-600',
      label: 'LS',
      title: 'Local SEO Quick Tips',
      subtitle: 'Dominate Local Search',
      status: 'published',
      slides: 6,
      views: '8.2K',
      duration: '45s',
      dateCreated: '1/10/2024'
    }
  ]

  // Sample admin data
  const adminArticles: Article[] = [
    {
      id: '1',
      title: 'The Complete Guide to Technical SEO for 2024',
      status: 'published',
      author: 'Sarah Johnson',
      publishDate: 'Dec 15, 2024',
      views: 2300,
      category: 'Technical SEO'
    },
    {
      id: '2',
      title: 'Local SEO for Small Businesses',
      status: 'published',
      author: 'Mike Chen',
      publishDate: 'Dec 14, 2024',
      views: 1850,
      category: 'Local SEO'
    },
    {
      id: '3',
      title: 'The Complete Guide to Technical SEO for 2024',
      status: 'published',
      author: 'Lisa Rodriguez',
      publishDate: 'Dec 13, 2024',
      views: 2300,
      category: 'Technical SEO'
    }
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple demo login - in production, use proper authentication
    if (username === 'admin' && password === 'demo123') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid credentials. Use admin/demo123 for demo.')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="text-center mb-8">
            <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold text-xl inline-block mb-4">
              SEJ
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-600 mt-2">Access your dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Demo Credentials:</strong><br />
              Username: admin<br />
              Password: demo123
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-gray-600 mt-1">Manage your SEO blog content and track performance metrics.</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, Admin</span>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'overview' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BarChart3Icon className="h-4 w-4" />
              <span>Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'articles' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <FileTextIcon className="h-4 w-4" />
              <span>Articles</span>
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'stories' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <ImageIcon className="h-4 w-4" />
              <span>Stories</span>
            </button>
            <button
              onClick={() => setActiveTab('ebooks')}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'ebooks' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BookOpenIcon className="h-4 w-4" />
              <span>eBooks</span>
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'testimonials' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <MessageSquareIcon className="h-4 w-4" />
              <span>Testimonials</span>
            </button>
            <button
              onClick={() => setActiveTab('sponsored')}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'sponsored' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <DollarSignIcon className="h-4 w-4" />
              <span>Sponsored</span>
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'users' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <UsersIcon className="h-4 w-4" />
              <span>Users</span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'analytics' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <BarChart3Icon className="h-4 w-4" />
              <span>Analytics</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'settings' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <SettingsIcon className="h-4 w-4" />
              <span>Settings</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <FileTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-600">Total Articles</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">24</div>
                <div className="flex items-center text-sm">
                  <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+5 from last month</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <EyeIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-600">Monthly Views</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">45.2K</div>
                <div className="flex items-center text-sm">
                  <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+12% from last month</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <UsersIcon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-600">Active Users</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">1,234</div>
                <div className="flex items-center text-sm">
                  <TrendingUpIcon className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+3% from last month</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <BarChart3Icon className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm font-medium text-gray-600">Engagement Rate</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">8.4%</div>
                <div className="flex items-center text-sm">
                  <TrendingDownIcon className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-red-600">-2% from last month</span>
                </div>
              </div>
            </div>

            {/* Recent Articles and Top Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Articles */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recent Articles</h3>
                <p className="text-sm text-gray-600 mb-6">Latest articles and their performance</p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">The Complete Guide to Technical SEO for 2024</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Published</span>
                        <span>2.3K views</span>
                      </div>
                    </div>
                    <EditIcon className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Top Performance */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Top Performance</h3>
                <p className="text-sm text-gray-600 mb-6">Most viewed articles this month</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">Local SEO for Small Businesses</h4>
                      <p className="text-sm text-gray-500">1.8K views</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-medium">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">The Complete Guide to Technical SEO for 2024</h4>
                      <p className="text-sm text-gray-500">Technical SEO • 2.3K views</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Articles</h2>
              <a 
                href="/admin/editor" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <PlusIcon className="h-5 w-5" />
                <span>New Article</span>
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Author</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Views</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {adminArticles.map((article) => (
                    <tr key={article.id}>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">{article.title}</p>
                          <p className="text-sm text-gray-600">{article.category}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          article.status === 'published' ? 'bg-green-100 text-green-800' :
                          article.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {article.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-900">{article.author}</td>
                      <td className="px-6 py-4 text-gray-900">{article.views.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-700">
                            <EyeIcon className="h-4 w-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-700">
                            <EditIcon className="h-4 w-4" />
                          </button>
                          <button className="text-red-600 hover:text-red-700">
                            <TrashIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Stories Tab - Web Stories Management */}
        {activeTab === 'stories' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Web Stories Management</h2>
                <p className="text-gray-600 mt-1">Create and manage visual web stories for social media and engagement</p>
              </div>
              <a
                href="/admin/story-editor"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-lg"
              >
                <PlusIcon className="h-5 w-5" />
                <span>Create Story</span>
              </a>
            </div>

            {/* Web Stories Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="grid grid-cols-8 gap-4 text-sm font-medium text-gray-700">
                  <div>Story</div>
                  <div>Status</div>
                  <div>Slides</div>
                  <div>Views</div>
                  <div>Duration</div>
                  <div>Created</div>
                  <div>Actions</div>
                  <div></div>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {webStories.map((story) => (
                  <div key={story.id} className="px-6 py-4 hover:bg-gray-50">
                    <div className="grid grid-cols-8 gap-4 items-center">
                      {/* Story Info */}
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 ${story.iconBg} rounded text-white text-xs font-bold flex items-center justify-center`}>
                          {story.icon}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{story.title}</p>
                          <p className="text-sm text-gray-600">{story.subtitle}</p>
                        </div>
                      </div>

                      {/* Status */}
                      <div>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          story.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {story.status === 'published' ? 'Published' : 'Draft'}
                        </span>
                      </div>

                      {/* Slides */}
                      <div className="text-sm text-gray-900">
                        {story.slides} slides
                      </div>

                      {/* Views */}
                      <div className="text-sm text-gray-900">
                        {story.views === '-' ? (
                          <span className="text-gray-400">-</span>
                        ) : (
                          <div className="flex items-center">
                            <EyeIcon className="h-4 w-4 text-gray-400 mr-1" />
                            {story.views}
                          </div>
                        )}
                      </div>

                      {/* Duration */}
                      <div className="text-sm text-gray-900">
                        {story.duration}
                      </div>

                      {/* Created */}
                      <div className="text-sm text-gray-600">
                        {story.dateCreated}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-700">
                          <EditIcon className="h-4 w-4" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600">
                          <div className="flex space-x-0.5">
                            <div className="w-1 h-1 bg-current rounded-full"></div>
                            <div className="w-1 h-1 bg-current rounded-full"></div>
                            <div className="w-1 h-1 bg-current rounded-full"></div>
                          </div>
                        </button>
                      </div>

                      <div></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-600">Total Stories</div>
                  <ImageIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
                <div className="text-sm text-gray-500">Published 1 draft</div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-600">Total Views</div>
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">20.7K</div>
                <div className="text-sm text-gray-500">Across all stories</div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-600">Avg. Duration</div>
                  <BarChart3Icon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">1:11</div>
                <div className="text-sm text-gray-500">Story completion time</div>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs with placeholder content */}
        {(activeTab !== 'overview' && activeTab !== 'articles' && activeTab !== 'stories') && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
            </h2>
            <p className="text-gray-600">
              This section is under development. Content will be available soon.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

export default AdminDashboard
