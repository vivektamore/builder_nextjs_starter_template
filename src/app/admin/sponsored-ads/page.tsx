'use client'

import { useState } from 'react'
import { PlusIcon, EditIcon, TrashIcon, ExternalLinkIcon, EyeIcon, BarChart3Icon, ToggleLeftIcon, ToggleRightIcon, ImageIcon, CodeIcon } from 'lucide-react'

interface SponsoredAd {
  id: string
  title: string
  imageUrl?: string
  embedCode?: string
  targetUrl: string
  position: 'homepage-sidebar' | 'under-navbar' | 'inside-article' | 'footer'
  enabled: boolean
  clickCount: number
  impressions: number
  createdAt: string
  updatedAt: string
}

const SponsoredAdsAdmin = () => {
  const [ads, setAds] = useState<SponsoredAd[]>([
    {
      id: '1',
      title: 'SEO Tool - Special Offer',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
      targetUrl: 'https://example.com/seo-tool',
      position: 'homepage-sidebar',
      enabled: true,
      clickCount: 245,
      impressions: 1250,
      createdAt: '2024-01-15',
      updatedAt: '2024-01-15'
    },
    {
      id: '2',
      title: 'Marketing Conference 2024',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=800',
      targetUrl: 'https://example.com/conference',
      position: 'under-navbar',
      enabled: true,
      clickCount: 180,
      impressions: 950,
      createdAt: '2024-01-12',
      updatedAt: '2024-01-14'
    },
    {
      id: '3',
      title: 'Content Marketing Course',
      embedCode: '<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; color: white; text-align: center;"><h3 style="margin: 0 0 10px 0;">Master Content Marketing</h3><p style="margin: 0 0 15px 0;">Join our comprehensive course</p><a href="#" style="background: white; color: #667eea; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">Learn More</a></div>',
      targetUrl: 'https://example.com/course',
      position: 'inside-article',
      enabled: true,
      clickCount: 95,
      impressions: 520,
      createdAt: '2024-01-10',
      updatedAt: '2024-01-13'
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingAd, setEditingAd] = useState<SponsoredAd | null>(null)
  const [adType, setAdType] = useState<'image' | 'embed'>('image')
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    embedCode: '',
    targetUrl: '',
    position: 'homepage-sidebar' as const
  })

  const positions = [
    { value: 'homepage-sidebar', label: 'Homepage Sidebar' },
    { value: 'under-navbar', label: 'Under Navigation' },
    { value: 'inside-article', label: 'Inside Articles' },
    { value: 'footer', label: 'Footer Area' }
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const adData = {
      title: formData.title,
      targetUrl: formData.targetUrl,
      position: formData.position,
      ...(adType === 'image' ? { imageUrl: formData.imageUrl } : { embedCode: formData.embedCode })
    }

    if (editingAd) {
      // Update existing ad
      setAds(prev => prev.map(ad => 
        ad.id === editingAd.id 
          ? { 
              ...ad, 
              ...adData,
              updatedAt: new Date().toISOString().split('T')[0]
            }
          : ad
      ))
    } else {
      // Add new ad
      const newAd: SponsoredAd = {
        id: Date.now().toString(),
        ...adData,
        enabled: true,
        clickCount: 0,
        impressions: 0,
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0]
      }
      setAds(prev => [newAd, ...prev])
    }

    // Reset form
    resetForm()
  }

  const resetForm = () => {
    setFormData({
      title: '',
      imageUrl: '',
      embedCode: '',
      targetUrl: '',
      position: 'homepage-sidebar'
    })
    setShowForm(false)
    setEditingAd(null)
    setAdType('image')
  }

  const handleEdit = (ad: SponsoredAd) => {
    setFormData({
      title: ad.title,
      imageUrl: ad.imageUrl || '',
      embedCode: ad.embedCode || '',
      targetUrl: ad.targetUrl,
      position: ad.position
    })
    setAdType(ad.imageUrl ? 'image' : 'embed')
    setEditingAd(ad)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this sponsored ad?')) {
      setAds(prev => prev.filter(ad => ad.id !== id))
    }
  }

  const toggleAd = (id: string) => {
    setAds(prev => prev.map(ad =>
      ad.id === id 
        ? { ...ad, enabled: !ad.enabled }
        : ad
    ))
  }

  const calculateCTR = (clicks: number, impressions: number) => {
    return impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : '0.00'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Sponsored Ads Management</h1>
              <p className="text-gray-600 mt-1">Manage and track sponsored advertisements</p>
            </div>
            
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <PlusIcon className="h-5 w-5" />
              <span>Create Ad</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Total Ads</div>
              <ImageIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{ads.length}</div>
            <div className="text-sm text-gray-500">
              {ads.filter(ad => ad.enabled).length} active
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Total Clicks</div>
              <ExternalLinkIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {ads.reduce((sum, ad) => sum + ad.clickCount, 0)}
            </div>
            <div className="text-sm text-gray-500">All time</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Total Impressions</div>
              <EyeIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {ads.reduce((sum, ad) => sum + ad.impressions, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">All time</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Average CTR</div>
              <BarChart3Icon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {calculateCTR(
                ads.reduce((sum, ad) => sum + ad.clickCount, 0),
                ads.reduce((sum, ad) => sum + ad.impressions, 0)
              )}%
            </div>
            <div className="text-sm text-gray-500">Click-through rate</div>
          </div>
        </div>

        {/* Ads Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Ad</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Position</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Performance</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {ads.map((ad) => (
                <tr key={ad.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {ad.imageUrl ? (
                        <img
                          src={ad.imageUrl}
                          alt={ad.title}
                          className="w-16 h-12 object-cover rounded border"
                        />
                      ) : (
                        <div className="w-16 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
                          <CodeIcon className="h-6 w-6 text-white" />
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-gray-900">{ad.title}</div>
                        <div className="text-sm text-gray-600">
                          {ad.imageUrl ? 'Image Ad' : 'Embed Code'}
                        </div>
                        <a
                          href={ad.targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          <ExternalLinkIcon className="h-3 w-3 mr-1" />
                          {ad.targetUrl.substring(0, 30)}...
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                      {positions.find(p => p.value === ad.position)?.label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="text-sm text-gray-900">
                        {ad.clickCount} clicks • {ad.impressions.toLocaleString()} views
                      </div>
                      <div className="text-xs text-gray-500">
                        CTR: {calculateCTR(ad.clickCount, ad.impressions)}%
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleAd(ad.id)}
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        ad.enabled
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {ad.enabled ? 'Active' : 'Inactive'}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(ad)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <EditIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(ad.id)}
                        className="text-red-600 hover:text-red-700"
                      >
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

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                {editingAd ? 'Edit Sponsored Ad' : 'Create New Sponsored Ad'}
              </h3>
              <button
                onClick={resetForm}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="SEO Tool - Special Offer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target URL *
                </label>
                <input
                  type="url"
                  required
                  value={formData.targetUrl}
                  onChange={(e) => handleInputChange('targetUrl', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/landing-page"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position *
                </label>
                <select
                  required
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {positions.map((position) => (
                    <option key={position.value} value={position.value}>
                      {position.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Ad Type *
                </label>
                <div className="flex space-x-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setAdType('image')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                      adType === 'image'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    <ImageIcon className="h-5 w-5" />
                    <span>Image/Banner</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdType('embed')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                      adType === 'embed'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 text-gray-700'
                    }`}
                  >
                    <CodeIcon className="h-5 w-5" />
                    <span>Embed Code</span>
                  </button>
                </div>

                {adType === 'image' ? (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image URL *
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.imageUrl}
                      onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://example.com/ad-banner.jpg"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Embed Code *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.embedCode}
                      onChange={(e) => handleInputChange('embedCode', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                      placeholder="<div>Your HTML/JavaScript code here...</div>"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Paste HTML or JavaScript embed code from ad networks
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {editingAd ? 'Update Ad' : 'Create Ad'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default SponsoredAdsAdmin
