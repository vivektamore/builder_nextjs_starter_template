'use client'

import { useState } from 'react'
import { PlusIcon, EditIcon, TrashIcon, EyeIcon, BarChart3Icon, UsersIcon, FileTextIcon, ImageIcon, BookOpenIcon, MessageSquareIcon, DollarSignIcon, SettingsIcon, TrendingUpIcon, TrendingDownIcon } from 'lucide-react'

interface Article {
  id: string
  title: string
  status: 'published' | 'draft' | 'scheduled'
  author: string
  publishDate: string
  views: number
  category: string
}

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [activeTab, setActiveTab] = useState('overview')

  // Sample admin data
  const adminArticles: Article[] = [
    {
      id: '1',
      title: 'Google Core Web Vitals Update: What You Need to Know for 2024',
      status: 'published',
      author: 'Sarah Johnson',
      publishDate: 'Dec 15, 2024',
      views: 15200,
      category: 'SEO'
    },
    {
      id: '2',
      title: 'Content Marketing ROI: How to Measure Success in 2024',
      status: 'published',
      author: 'Mike Chen',
      publishDate: 'Dec 14, 2024',
      views: 8700,
      category: 'Content Marketing'
    },
    {
      id: '3',
      title: 'Upcoming Social Media Trends for 2025',
      status: 'draft',
      author: 'Lisa Rodriguez',
      publishDate: '',
      views: 0,
      category: 'Social Media'
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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-xl">
                SEJ
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, Admin</span>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-6">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-4 py-2 rounded flex items-center space-x-3 ${
                    activeTab === 'overview' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <BarChart3Icon className="h-5 w-5" />
                  <span>Overview</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('articles')}
                  className={`w-full text-left px-4 py-2 rounded flex items-center space-x-3 ${
                    activeTab === 'articles' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileTextIcon className="h-5 w-5" />
                  <span>Articles</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('webstories')}
                  className={`w-full text-left px-4 py-2 rounded flex items-center space-x-3 ${
                    activeTab === 'webstories' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ImageIcon className="h-5 w-5" />
                  <span>Web Stories</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`w-full text-left px-4 py-2 rounded flex items-center space-x-3 ${
                    activeTab === 'analytics' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <UsersIcon className="h-5 w-5" />
                  <span>Analytics</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h2>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Articles</p>
                      <p className="text-3xl font-bold text-gray-900">234</p>
                    </div>
                    <FileTextIcon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Monthly Views</p>
                      <p className="text-3xl font-bold text-gray-900">1.2M</p>
                    </div>
                    <EyeIcon className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Web Stories</p>
                      <p className="text-3xl font-bold text-gray-900">47</p>
                    </div>
                    <ImageIcon className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Subscribers</p>
                      <p className="text-3xl font-bold text-gray-900">152K</p>
                    </div>
                    <UsersIcon className="h-8 w-8 text-red-600" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-gray-900">New article published: "Google Core Web Vitals Update"</p>
                      <p className="text-sm text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-gray-900">Web story uploaded: "SEO Trends 2024"</p>
                      <p className="text-sm text-gray-600">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="text-gray-900">Article scheduled for publication</p>
                      <p className="text-sm text-gray-600">1 day ago</p>
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
                <h2 className="text-3xl font-bold text-gray-900">Manage Articles</h2>
                <a 
                  href="/admin/editor" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <PlusIcon className="h-5 w-5" />
                  <span>New Article</span>
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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

          {/* Web Stories Tab */}
          {activeTab === 'webstories' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Web Stories</h2>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center space-x-2">
                  <PlusIcon className="h-5 w-5" />
                  <span>Add Story</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-600 mb-4">Upload AMP Web Stories or embed existing ones</p>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Drag and drop AMP files or paste embed codes</p>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                    Select Files
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Analytics Dashboard</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Top Performing Articles</h3>
                  <div className="space-y-4">
                    {adminArticles.filter(a => a.status === 'published').map((article) => (
                      <div key={article.id} className="flex items-center justify-between p-4 bg-gray-50 rounded">
                        <div>
                          <p className="font-medium text-gray-900">{article.title}</p>
                          <p className="text-sm text-gray-600">{article.category}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">{article.views.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">views</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Traffic Sources</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Organic Search</span>
                      <span className="font-semibold">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Direct</span>
                      <span className="font-semibold">18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Social Media</span>
                      <span className="font-semibold">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard
