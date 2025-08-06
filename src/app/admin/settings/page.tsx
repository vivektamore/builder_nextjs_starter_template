'use client'

import { useState } from 'react'
import { SaveIcon, UploadIcon, ToggleLeftIcon, ToggleRightIcon, KeyIcon, TrashIcon, UserIcon, MailIcon, GlobeIcon, ImageIcon, SettingsIcon, ShieldIcon } from 'lucide-react'

interface SiteSettings {
  siteName: string
  siteDescription: string
  contactEmail: string
  siteUrl: string
  logoUrl: string
  faviconUrl: string
  googleAnalyticsId: string
  googleAdsId: string
  facebookPixelId: string
  modules: {
    testimonials: boolean
    sponsoredAds: boolean
    newsletter: boolean
    comments: boolean
    webStories: boolean
    ebooks: boolean
  }
  seo: {
    metaTitle: string
    metaDescription: string
    ogImage: string
    twitterHandle: string
  }
  social: {
    facebook: string
    twitter: string
    linkedin: string
    instagram: string
    youtube: string
  }
}

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general')
  const [isSaving, setIsSaving] = useState(false)
  const [currentUser] = useState({
    id: '1',
    role: 'super-admin' // Mock current user role
  })

  const [settings, setSettings] = useState<SiteSettings>({
    siteName: 'Search Engine Journal',
    siteDescription: 'Your trusted source for digital marketing insights and SEO expertise',
    contactEmail: 'admin@searchenginejournal.com',
    siteUrl: 'https://searchenginejournal.com',
    logoUrl: '/logo.png',
    faviconUrl: '/favicon.ico',
    googleAnalyticsId: 'GA-XXXX-XXXX',
    googleAdsId: 'AW-XXXX-XXXX',
    facebookPixelId: '',
    modules: {
      testimonials: true,
      sponsoredAds: true,
      newsletter: true,
      comments: true,
      webStories: true,
      ebooks: true
    },
    seo: {
      metaTitle: 'Search Engine Journal - Digital Marketing News & Insights',
      metaDescription: 'Get the latest SEO strategies, content marketing tips, and digital marketing news from industry experts.',
      ogImage: '/og-image.jpg',
      twitterHandle: '@sejournal'
    },
    social: {
      facebook: 'https://facebook.com/searchenginejournal',
      twitter: 'https://twitter.com/sejournal',
      linkedin: 'https://linkedin.com/company/search-engine-journal',
      instagram: 'https://instagram.com/searchenginejournal',
      youtube: 'https://youtube.com/c/searchenginejournal'
    }
  })

  // Only super-admin can access this page
  if (currentUser.role !== 'super-admin') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg border border-red-200 p-8 max-w-md w-full text-center">
          <ShieldIcon className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">
            Only super-administrators can access the settings page.
          </p>
        </div>
      </div>
    )
  }

  const handleInputChange = (section: keyof SiteSettings, field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: typeof prev[section] === 'object' 
        ? { ...prev[section], [field]: value }
        : value
    }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In production, this would make an API call to save settings
      console.log('Saving settings:', settings)
      
      alert('Settings saved successfully!')
    } catch (error) {
      alert('Error saving settings. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'tracking', label: 'Tracking & Analytics', icon: KeyIcon },
    { id: 'modules', label: 'Modules', icon: ToggleRightIcon },
    { id: 'seo', label: 'SEO & Meta', icon: GlobeIcon },
    { id: 'social', label: 'Social Media', icon: UserIcon }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>
              <p className="text-gray-600 mt-1">Configure your website settings and integrations</p>
            </div>
            
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2 disabled:opacity-50"
            >
              <SaveIcon className={`h-5 w-5 ${isSaving ? 'animate-spin' : ''}`} />
              <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-gray-200">
              {/* General Settings */}
              {activeTab === 'general' && (
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">General Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Site Name
                        </label>
                        <input
                          type="text"
                          value={settings.siteName}
                          onChange={(e) => handleInputChange('siteName', '', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Contact Email
                        </label>
                        <input
                          type="email"
                          value={settings.contactEmail}
                          onChange={(e) => handleInputChange('contactEmail', '', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Site Description
                      </label>
                      <textarea
                        rows={3}
                        value={settings.siteDescription}
                        onChange={(e) => handleInputChange('siteDescription', '', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Site URL
                      </label>
                      <input
                        type="url"
                        value={settings.siteUrl}
                        onChange={(e) => handleInputChange('siteUrl', '', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Logo URL
                        </label>
                        <div className="flex items-center space-x-3">
                          <input
                            type="url"
                            value={settings.logoUrl}
                            onChange={(e) => handleInputChange('logoUrl', '', e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <UploadIcon className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Favicon URL
                        </label>
                        <div className="flex items-center space-x-3">
                          <input
                            type="url"
                            value={settings.faviconUrl}
                            onChange={(e) => handleInputChange('faviconUrl', '', e.target.value)}
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <UploadIcon className="h-5 w-5 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tracking & Analytics */}
              {activeTab === 'tracking' && (
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Tracking & Analytics</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Google Analytics ID
                      </label>
                      <input
                        type="text"
                        value={settings.googleAnalyticsId}
                        onChange={(e) => handleInputChange('googleAnalyticsId', '', e.target.value)}
                        placeholder="GA-XXXX-XXXX or G-XXXXXXXXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Enter your Google Analytics tracking ID for website analytics
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Google Ads ID
                      </label>
                      <input
                        type="text"
                        value={settings.googleAdsId}
                        onChange={(e) => handleInputChange('googleAdsId', '', e.target.value)}
                        placeholder="AW-XXXXXXXXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Enter your Google Ads conversion tracking ID
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Facebook Pixel ID
                      </label>
                      <input
                        type="text"
                        value={settings.facebookPixelId}
                        onChange={(e) => handleInputChange('facebookPixelId', '', e.target.value)}
                        placeholder="XXXXXXXXXXXXXXX"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Enter your Facebook Pixel ID for social media tracking
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-medium text-yellow-900 mb-2">⚠️ Important</h4>
                      <p className="text-sm text-yellow-800">
                        Only enter tracking IDs if you have permission to use them. 
                        Ensure compliance with privacy laws and cookie policies.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Modules */}
              {activeTab === 'modules' && (
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Site Modules</h3>
                  
                  <div className="space-y-4">
                    {Object.entries(settings.modules).map(([module, enabled]) => (
                      <div key={module} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900 capitalize">
                            {module.replace(/([A-Z])/g, ' $1')}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {module === 'testimonials' && 'Customer testimonials and reviews section'}
                            {module === 'sponsoredAds' && 'Sponsored advertisements and banners'}
                            {module === 'newsletter' && 'Newsletter signup forms and campaigns'}
                            {module === 'comments' && 'Article comments and user engagement'}
                            {module === 'webStories' && 'AMP web stories functionality'}
                            {module === 'ebooks' && 'Downloadable eBooks and resources'}
                          </p>
                        </div>
                        <button
                          onClick={() => handleInputChange('modules', module, !enabled)}
                          className={`p-1 rounded-full transition-colors ${
                            enabled ? 'text-green-600' : 'text-gray-400'
                          }`}
                        >
                          {enabled ? (
                            <ToggleRightIcon className="h-6 w-6" />
                          ) : (
                            <ToggleLeftIcon className="h-6 w-6" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SEO & Meta */}
              {activeTab === 'seo' && (
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">SEO & Meta Tags</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Title
                      </label>
                      <input
                        type="text"
                        value={settings.seo.metaTitle}
                        onChange={(e) => handleInputChange('seo', 'metaTitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        maxLength={60}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {settings.seo.metaTitle.length}/60 characters
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Description
                      </label>
                      <textarea
                        rows={3}
                        value={settings.seo.metaDescription}
                        onChange={(e) => handleInputChange('seo', 'metaDescription', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        maxLength={160}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {settings.seo.metaDescription.length}/160 characters
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Open Graph Image
                        </label>
                        <input
                          type="url"
                          value={settings.seo.ogImage}
                          onChange={(e) => handleInputChange('seo', 'ogImage', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Twitter Handle
                        </label>
                        <input
                          type="text"
                          value={settings.seo.twitterHandle}
                          onChange={(e) => handleInputChange('seo', 'twitterHandle', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="@yourusername"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Social Media */}
              {activeTab === 'social' && (
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Social Media Links</h3>
                  
                  <div className="space-y-6">
                    {Object.entries(settings.social).map(([platform, url]) => (
                      <div key={platform}>
                        <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                          {platform}
                        </label>
                        <input
                          type="url"
                          value={url}
                          onChange={(e) => handleInputChange('social', platform, e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder={`https://${platform}.com/yourusername`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
