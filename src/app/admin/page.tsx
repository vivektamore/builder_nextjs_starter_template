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
  const [showCreateEbookForm, setShowCreateEbookForm] = useState(false)
  const [activeFormTab, setActiveFormTab] = useState('basic')
  const [ebookForm, setEbookForm] = useState<Partial<Ebook>>({
    title: '',
    subtitle: '',
    author: '',
    authorBio: '',
    category: '',
    description: '',
    tags: [],
    pages: 0,
    publishDate: '',
    featured: false,
    status: 'draft'
  })
  const [ebooks, setEbooks] = useState<Ebook[]>([])
  const [tagInput, setTagInput] = useState('')

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

  // Sample ebook data
  const sampleEbooks: Ebook[] = [
    {
      id: '1',
      title: 'The Complete SEO Guide 2024',
      subtitle: 'Master SEO from beginner to advanced',
      author: 'Alex Chen',
      authorBio: 'SEO Expert with 10+ years of experience',
      category: 'SEO Fundamentals',
      description: 'A comprehensive guide covering all aspects of SEO including technical optimization, content strategy, and link building.',
      tags: ['SEO', 'Digital Marketing', 'Technical SEO'],
      pages: 250,
      publishDate: '1/15/2024',
      status: 'published',
      downloads: '12.5K',
      rating: 4.9,
      featured: true,
      thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2Fa3cc58c1140342b8beed150e84750f87?format=webp&width=800'
    },
    {
      id: '2',
      title: 'Local SEO Mastery',
      subtitle: 'Dominate local search results',
      author: 'Sarah Rodriguez',
      authorBio: 'Local SEO specialist and consultant',
      category: 'Local SEO',
      description: 'Learn how to optimize your business for local search and attract more customers from your area.',
      tags: ['Local SEO', 'Google My Business', 'Local Marketing'],
      pages: 180,
      publishDate: '1/10/2024',
      status: 'published',
      downloads: '8.7K',
      rating: 4.8,
      featured: false,
      thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2Fddea1a1d892844f48dc773c293f72ce0?format=webp&width=800'
    },
    {
      id: '3',
      title: 'Content SEO Blueprint',
      subtitle: 'Create content that ranks',
      author: 'David Kim',
      authorBio: 'Content strategist and SEO consultant',
      category: 'Content Marketing',
      description: 'Discover the secrets to creating SEO-optimized content that drives traffic and converts visitors.',
      tags: ['Content Marketing', 'SEO Writing', 'Keyword Research'],
      pages: 200,
      publishDate: '1/3/2024',
      status: 'published',
      downloads: '15.2K',
      rating: 4.7,
      featured: true,
      thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F3f60455e8cbd4d92b866b72755f365c0?format=webp&width=800'
    },
    {
      id: '4',
      title: 'Technical SEO Handbook',
      subtitle: 'Advanced technical optimization',
      author: 'Emily Zhang',
      authorBio: 'Technical SEO expert and web developer',
      category: 'Technical SEO',
      description: 'Master technical SEO concepts including site speed, crawlability, and structured data.',
      tags: ['Technical SEO', 'Core Web Vitals', 'Site Speed'],
      pages: 300,
      publishDate: '12/20/2023',
      status: 'published',
      downloads: '9.8K',
      rating: 4.9,
      featured: false,
      thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F08de6c12b1124418966bd4c1da669674?format=webp&width=800'
    },
    {
      id: '5',
      title: 'E-commerce SEO Guide',
      subtitle: 'Optimize your online store',
      author: 'Marcus Johnson',
      authorBio: 'E-commerce SEO specialist',
      category: 'E-commerce SEO',
      description: 'Complete guide to optimizing e-commerce websites for search engines and increasing online sales.',
      tags: ['E-commerce', 'Product SEO', 'Online Sales'],
      pages: 220,
      publishDate: '2/1/2024',
      status: 'draft',
      downloads: '0',
      rating: 0,
      featured: false,
      thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F2fec193be2c64e87a751513836490d05?format=webp&width=800'
    }
  ]

  // Initialize ebooks state with sample data
  if (ebooks.length === 0 && isLoggedIn) {
    setEbooks(sampleEbooks)
  }

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

  const handleEbookFormChange = (field: keyof Ebook, value: any) => {
    setEbookForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !ebookForm.tags?.includes(tagInput.trim())) {
      setEbookForm(prev => ({
        ...prev,
        tags: [...(prev.tags || []), tagInput.trim()]
      }))
      setTagInput('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setEbookForm(prev => ({
      ...prev,
      tags: prev.tags?.filter(tag => tag !== tagToRemove) || []
    }))
  }

  const handleCreateEbook = () => {
    if (!ebookForm.title || !ebookForm.author || !ebookForm.category) {
      alert('Please fill in required fields: Title, Author, and Category')
      return
    }

    const newEbook: Ebook = {
      id: Date.now().toString(),
      title: ebookForm.title || '',
      subtitle: ebookForm.subtitle || '',
      author: ebookForm.author || '',
      authorBio: ebookForm.authorBio || '',
      category: ebookForm.category || '',
      description: ebookForm.description || '',
      tags: ebookForm.tags || [],
      pages: ebookForm.pages || 0,
      publishDate: ebookForm.publishDate || new Date().toLocaleDateString(),
      status: ebookForm.status || 'draft',
      downloads: '0',
      rating: 0,
      featured: ebookForm.featured || false,
      thumbnail: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F2f1c036881704ddfa1b4c84559792c05?format=webp&width=800'
    }

    setEbooks(prev => [newEbook, ...prev])
    setShowCreateEbookForm(false)
    setEbookForm({
      title: '',
      subtitle: '',
      author: '',
      authorBio: '',
      category: '',
      description: '',
      tags: [],
      pages: 0,
      publishDate: '',
      featured: false,
      status: 'draft'
    })
    setActiveFormTab('basic')
  }

  const handleDeleteEbook = (id: string) => {
    if (confirm('Are you sure you want to delete this eBook?')) {
      setEbooks(prev => prev.filter(ebook => ebook.id !== id))
    }
  }

  const categories = [
    'SEO Fundamentals',
    'Technical SEO',
    'Local SEO',
    'Content Marketing',
    'E-commerce SEO',
    'Link Building',
    'Analytics',
    'Mobile SEO',
    'International SEO'
  ]

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

        {/* eBooks Tab */}
        {activeTab === 'ebooks' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">eBook Management</h2>
                <p className="text-gray-600 mt-1">Create, edit, and manage your downloadable eBooks</p>
              </div>
              <button
                onClick={() => setShowCreateEbookForm(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-lg"
              >
                <PlusIcon className="h-5 w-5" />
                <span>Create eBook</span>
              </button>
            </div>

            {/* eBooks Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Title</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Author</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Downloads</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Rating</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Pages</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Published</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {ebooks.map((ebook) => (
                    <tr key={ebook.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={ebook.thumbnail}
                            alt={ebook.title}
                            className="w-12 h-16 object-cover rounded border"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <p className="font-medium text-gray-900">{ebook.title}</p>
                              {ebook.featured && (
                                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                                  Featured
                                </span>
                              )}
                            </div>
                            {ebook.subtitle && (
                              <p className="text-sm text-gray-600">{ebook.subtitle}</p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">{ebook.author}</td>
                      <td className="px-6 py-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                          {ebook.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          ebook.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {ebook.status === 'published' ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-1">
                          <DownloadIcon className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-900">{ebook.downloads}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {ebook.rating > 0 ? (
                          <div className="flex items-center space-x-1">
                            <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-gray-900">{ebook.rating}</span>
                          </div>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-900">{ebook.pages} pages</td>
                      <td className="px-6 py-4 text-gray-600">{ebook.publishDate}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-700">
                            <EditIcon className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteEbook(ebook.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontalIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-600">Total eBooks</div>
                  <BookOpenIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{ebooks.length}</div>
                <div className="text-sm text-gray-500">
                  {ebooks.filter(e => e.status === 'published').length} published
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-600">Total Downloads</div>
                  <DownloadIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {ebooks.reduce((total, ebook) => {
                    const downloads = ebook.downloads.replace('K', '000').replace('.', '')
                    return total + (parseInt(downloads) || 0)
                  }, 0) / 1000}K
                </div>
                <div className="text-sm text-gray-500">Across all eBooks</div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-600">Average Rating</div>
                  <StarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {(ebooks.reduce((sum, ebook) => sum + ebook.rating, 0) / ebooks.filter(e => e.rating > 0).length || 0).toFixed(1)}
                </div>
                <div className="text-sm text-gray-500">
                  {ebooks.filter(e => e.rating > 0).length} star ratings
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Create eBook Form Modal */}
        {showCreateEbookForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden">
              {/* Form Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-semibold text-gray-900">Create New eBook</h3>
                <button
                  onClick={() => setShowCreateEbookForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Form Tabs */}
              <div className="border-b">
                <div className="flex space-x-8 px-6">
                  <button
                    onClick={() => setActiveFormTab('basic')}
                    className={`py-4 px-2 border-b-2 font-medium text-sm ${
                      activeFormTab === 'basic'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Basic Info
                  </button>
                  <button
                    onClick={() => setActiveFormTab('content')}
                    className={`py-4 px-2 border-b-2 font-medium text-sm ${
                      activeFormTab === 'content'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Content
                  </button>
                  <button
                    onClick={() => setActiveFormTab('files')}
                    className={`py-4 px-2 border-b-2 font-medium text-sm ${
                      activeFormTab === 'files'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Files
                  </button>
                  <button
                    onClick={() => setActiveFormTab('preview')}
                    className={`py-4 px-2 border-b-2 font-medium text-sm ${
                      activeFormTab === 'preview'
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Preview
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {/* Basic Info Tab */}
                {activeFormTab === 'basic' && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h4>
                    <p className="text-sm text-gray-600 mb-6">Enter the basic details for your eBook</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          eBook Title <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={ebookForm.title || ''}
                          onChange={(e) => handleEbookFormChange('title', e.target.value)}
                          placeholder="Enter eBook title"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Pages
                        </label>
                        <input
                          type="number"
                          value={ebookForm.pages || ''}
                          onChange={(e) => handleEbookFormChange('pages', parseInt(e.target.value) || 0)}
                          placeholder="e.g. 250"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subtitle
                        </label>
                        <input
                          type="text"
                          value={ebookForm.subtitle || ''}
                          onChange={(e) => handleEbookFormChange('subtitle', e.target.value)}
                          placeholder="Enter subtitle"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Publish Date
                        </label>
                        <input
                          type="date"
                          value={ebookForm.publishDate || ''}
                          onChange={(e) => handleEbookFormChange('publishDate', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Author <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={ebookForm.author || ''}
                          onChange={(e) => handleEbookFormChange('author', e.target.value)}
                          placeholder="Alex Chen"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={ebookForm.category || ''}
                          onChange={(e) => handleEbookFormChange('category', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select category</option>
                          {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Author Bio
                      </label>
                      <textarea
                        rows={3}
                        value={ebookForm.authorBio || ''}
                        onChange={(e) => handleEbookFormChange('authorBio', e.target.value)}
                        placeholder="Brief author biography"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        rows={4}
                        value={ebookForm.description || ''}
                        onChange={(e) => handleEbookFormChange('description', e.target.value)}
                        placeholder="Detailed description of the eBook content"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tags
                      </label>
                      <div className="flex items-center space-x-2 mb-3">
                        <input
                          type="text"
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                          placeholder="Add a tag"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                          type="button"
                          onClick={handleAddTag}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {ebookForm.tags?.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
                          >
                            <span>{tag}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveTag(tag)}
                              className="text-gray-400 hover:text-gray-600"
                            >
                              <XIcon className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={ebookForm.featured || false}
                        onChange={(e) => handleEbookFormChange('featured', e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
                        Featured eBook
                      </label>
                    </div>
                  </div>
                )}

                {/* Content Tab */}
                {activeFormTab === 'content' && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">eBook Content</h4>
                    <p className="text-sm text-gray-600 mb-6">
                      Add your eBook content using Markdown syntax. Use AMP integration to create formatted elements.
                    </p>

                    <div className="mb-6">
                      <div className="flex items-center space-x-4 mb-4 p-3 bg-gray-50 rounded-lg">
                        <select className="px-3 py-1 border border-gray-300 rounded text-sm">
                          <option>Sans Serif</option>
                          <option>Serif</option>
                          <option>Monospace</option>
                        </select>
                        <div className="flex items-center space-x-2">
                          <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-50">
                            <span className="font-bold text-sm">B</span>
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-50">
                            <span className="italic text-sm">I</span>
                          </button>
                          <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-50">
                            <span className="underline text-sm">U</span>
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                            Preview
                          </button>
                          <button className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50">
                            Markdown
                          </button>
                          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                            AMP
                          </button>
                        </div>
                      </div>

                      <textarea
                        rows={8}
                        placeholder="Start writing your eBook content... Use the format description above to add headings, lists, images, and more!"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                      />

                      <div className="mt-4 text-sm text-gray-500">
                        <p className="mb-2"><strong>Quick Tips:</strong></p>
                        <ul className="space-y-1 text-xs">
                          <li>• Use # for headings</li>
                          <li>• Use **text** for bold</li>
                          <li>• Use *text* for italic</li>
                          <li>• Use [text](url) for links</li>
                          <li>• Use ![alt](url) for images</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-3">Preview Content</h5>
                        <p className="text-sm text-gray-600 mb-4">Preview how your eBook content will look to your readers</p>

                        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 min-h-[200px]">
                          <p className="text-sm text-gray-500 italic">
                            A compelling excerpt from your eBook
                          </p>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-900 mb-3">Table of Contents</h5>
                        <div className="space-y-2">
                          <input
                            type="text"
                            placeholder="Add chapter title..."
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <button className="w-full text-left px-3 py-2 text-blue-600 hover:bg-blue-50 rounded text-sm flex items-center">
                            <PlusIcon className="h-4 w-4 mr-2" />
                            Add Chapter
                          </button>
                        </div>

                        <div className="mt-6">
                          <h5 className="font-medium text-gray-900 mb-3">Key Takeaways</h5>
                          <textarea
                            rows={3}
                            placeholder="Add key takeaways..."
                            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 flex items-center">
                            <PlusIcon className="h-4 w-4 mr-1" />
                            Add takeaway
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h6 className="font-medium text-blue-900 mb-2">AMP Web Stories Integration</h6>
                      <p className="text-sm text-blue-800 mb-3">
                        Convert sections of your eBook into AMP Web Stories for better engagement
                      </p>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                        Configure Web Stories
                      </button>
                    </div>
                  </div>
                )}

                {/* Files Tab */}
                {activeFormTab === 'files' && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Files</h4>
                    <p className="text-sm text-gray-600 mb-6">Upload the PDF file and cover image for your eBook</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-3">PDF File</h5>
                        <p className="text-sm text-gray-600 mb-4">Upload the PDF file for your eBook</p>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                          <UploadIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-sm text-gray-600 mb-2">Click to upload PDF file</p>
                          <p className="text-xs text-gray-500">PDF, Max 50MB</p>
                          <input type="file" accept=".pdf" className="hidden" />
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-900 mb-3">Cover Image</h5>
                        <p className="text-sm text-gray-600 mb-4">Upload a cover image for your eBook</p>

                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                          <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-sm text-gray-600 mb-2">Click to upload cover image</p>
                          <p className="text-xs text-gray-500">PNG, JPG or WEBP, Max 10MB</p>
                          <input type="file" accept="image/*" className="hidden" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Preview Tab */}
                {activeFormTab === 'preview' && (
                  <div className="space-y-6">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">eBook Preview</h4>
                    <p className="text-sm text-gray-600 mb-6">Preview how your eBook will appear to users</p>

                    <div className="max-w-md mx-auto">
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-32 h-40 bg-gray-200 rounded border flex items-center justify-center">
                            <BookOpenIcon className="h-12 w-12 text-gray-400" />
                          </div>
                        </div>

                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {ebookForm.title || 'eBook Title'}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            by {ebookForm.author || 'Alex Chen'}
                          </p>
                          {ebookForm.category && (
                            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mb-4">
                              {ebookForm.category}
                            </span>
                          )}
                          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Download free eBook
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-between p-6 border-t bg-gray-50">
                <button
                  onClick={() => setShowCreateEbookForm(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => {
                      handleEbookFormChange('status', 'draft')
                      handleCreateEbook()
                    }}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Save as Draft
                  </button>
                  <button
                    onClick={() => {
                      handleEbookFormChange('status', 'published')
                      handleCreateEbook()
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <SaveIcon className="h-4 w-4" />
                    <span>Publish eBook</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs with placeholder content */}
        {(activeTab !== 'overview' && activeTab !== 'articles' && activeTab !== 'stories' && activeTab !== 'ebooks') && (
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
