'use client'

import { useState, useEffect } from 'react'
import { 
  BoldIcon, 
  ItalicIcon, 
  LinkIcon, 
  ListIcon, 
  ImageIcon, 
  EyeIcon, 
  SaveIcon,
  CalendarIcon,
  TagIcon,
  UserIcon,
  SettingsIcon,
  FileTextIcon,
  ExternalLinkIcon,
  CheckCircleIcon,
  XCircleIcon,
  UploadIcon,
  PlusIcon,
  XIcon
} from 'lucide-react'

interface ArticleData {
  title: string
  subtitle: string
  content: string
  status: 'draft' | 'published' | 'scheduled'
  category: string
  readTime: number
  publishDate: string
  tags: string[]
  author: string
  featuredImage: string | null
  seoTitle: string
  metaDescription: string
  urlSlug: string
  ampStoryUrl: string
}

const ContentEditor = () => {
  const [articleData, setArticleData] = useState<ArticleData>({
    title: '',
    subtitle: '',
    content: '',
    status: 'draft',
    category: '',
    readTime: 0,
    publishDate: new Date().toISOString().split('T')[0],
    tags: [],
    author: '',
    featuredImage: null,
    seoTitle: '',
    metaDescription: '',
    urlSlug: '',
    ampStoryUrl: ''
  })

  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [newTag, setNewTag] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)
  const [ampUrlValid, setAmpUrlValid] = useState<boolean | null>(null)

  // Calculate word and character count
  useEffect(() => {
    const words = articleData.content.trim().split(/\s+/).filter(word => word.length > 0).length
    const chars = articleData.content.length
    setWordCount(words)
    setCharCount(chars)
  }, [articleData.content])

  // Auto-generate URL slug from title
  useEffect(() => {
    if (articleData.title && !articleData.urlSlug) {
      const slug = articleData.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()
      setArticleData(prev => ({ ...prev, urlSlug: slug }))
    }
  }, [articleData.title])

  // Auto-generate SEO title from title
  useEffect(() => {
    if (articleData.title && !articleData.seoTitle) {
      setArticleData(prev => ({ ...prev, seoTitle: articleData.title }))
    }
  }, [articleData.title])

  // Auto-save functionality
  useEffect(() => {
    const autoSave = setTimeout(() => {
      if (articleData.title || articleData.content) {
        handleAutoSave()
      }
    }, 3000)

    return () => clearTimeout(autoSave)
  }, [articleData])

  const handleAutoSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLastSaved(new Date())
    setIsSaving(false)
  }

  const handleInputChange = (field: keyof ArticleData, value: any) => {
    setArticleData(prev => ({ ...prev, [field]: value }))
  }

  const handleAddTag = () => {
    if (newTag.trim() && !articleData.tags.includes(newTag.trim())) {
      setArticleData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setArticleData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // In a real app, you'd upload to a server
      const imageUrl = URL.createObjectURL(file)
      setArticleData(prev => ({ ...prev, featuredImage: imageUrl }))
    }
  }

  const validateAmpUrl = (url: string) => {
    // Simple validation - in production, you'd make an API call
    const isValid = url.includes('amp') || url.includes('stories')
    setAmpUrlValid(isValid)
  }

  const insertFormatting = (format: string) => {
    // Simple formatting insertion - in production, use a rich text editor library
    const textarea = document.querySelector('textarea[name="content"]') as HTMLTextAreaElement
    if (textarea) {
      const start = textarea.selectionStart
      const end = textarea.selectionEnd
      const selectedText = textarea.value.substring(start, end)
      
      let formatText = ''
      switch (format) {
        case 'bold':
          formatText = `**${selectedText || 'bold text'}**`
          break
        case 'italic':
          formatText = `*${selectedText || 'italic text'}*`
          break
        case 'link':
          formatText = `[${selectedText || 'link text'}](url)`
          break
        case 'heading':
          formatText = `## ${selectedText || 'Heading'}`
          break
        case 'list':
          formatText = `- ${selectedText || 'List item'}`
          break
      }
      
      const newContent = textarea.value.substring(0, start) + formatText + textarea.value.substring(end)
      handleInputChange('content', newContent)
    }
  }

  const handlePublish = async () => {
    setIsSaving(true)
    // Simulate publish API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setArticleData(prev => ({ ...prev, status: 'published' }))
    setIsSaving(false)
    alert('Article published successfully!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">Content Editor</h1>
              {isSaving && (
                <div className="flex items-center text-sm text-gray-500">
                  <SaveIcon className="h-4 w-4 mr-1 animate-spin" />
                  Saving...
                </div>
              )}
              {lastSaved && !isSaving && (
                <div className="text-sm text-gray-500">
                  Last saved: {lastSaved.toLocaleTimeString()}
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPreviewMode(!isPreviewMode)}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <EyeIcon className="h-4 w-4 mr-2" />
                {isPreviewMode ? 'Edit' : 'Preview'}
              </button>
              
              <button
                onClick={handleAutoSave}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <SaveIcon className="h-4 w-4 mr-2" />
                Save Draft
              </button>
              
              <button
                onClick={handlePublish}
                disabled={isSaving}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {isSaving ? (
                  <SaveIcon className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <FileTextIcon className="h-4 w-4 mr-2" />
                )}
                Publish
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Article Content Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6">
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <input
                      type="text"
                      placeholder="Article Title"
                      value={articleData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="w-full text-3xl font-bold placeholder-gray-400 border-none outline-none resize-none"
                    />
                  </div>

                  {/* Subtitle */}
                  <div>
                    <input
                      type="text"
                      placeholder="Subtitle (optional)"
                      value={articleData.subtitle}
                      onChange={(e) => handleInputChange('subtitle', e.target.value)}
                      className="w-full text-xl text-gray-600 placeholder-gray-400 border-none outline-none"
                    />
                  </div>

                  {/* Rich Text Editor Toolbar */}
                  <div className="border-t border-b border-gray-200 py-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => insertFormatting('bold')}
                        className="p-2 rounded hover:bg-gray-100"
                        title="Bold"
                      >
                        <BoldIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => insertFormatting('italic')}
                        className="p-2 rounded hover:bg-gray-100"
                        title="Italic"
                      >
                        <ItalicIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => insertFormatting('link')}
                        className="p-2 rounded hover:bg-gray-100"
                        title="Link"
                      >
                        <LinkIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => insertFormatting('heading')}
                        className="p-2 rounded hover:bg-gray-100"
                        title="Heading"
                      >
                        <span className="font-bold text-sm">H</span>
                      </button>
                      <button
                        onClick={() => insertFormatting('list')}
                        className="p-2 rounded hover:bg-gray-100"
                        title="List"
                      >
                        <ListIcon className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded hover:bg-gray-100" title="Image">
                        <ImageIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Content Editor */}
                  {isPreviewMode ? (
                    <div className="min-h-96 prose max-w-none">
                      <div dangerouslySetInnerHTML={{ 
                        __html: articleData.content.replace(/\n/g, '<br>') 
                      }} />
                    </div>
                  ) : (
                    <textarea
                      name="content"
                      placeholder="Start writing your article..."
                      value={articleData.content}
                      onChange={(e) => handleInputChange('content', e.target.value)}
                      className="w-full min-h-96 placeholder-gray-400 border-none outline-none resize-none text-lg leading-relaxed"
                    />
                  )}

                  {/* Word Count */}
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                    <div>
                      {wordCount} words, {charCount} characters
                    </div>
                    <div>
                      Estimated read time: {Math.max(1, Math.ceil(wordCount / 200))} min
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Image</h3>
                
                {articleData.featuredImage ? (
                  <div className="relative">
                    <img
                      src={articleData.featuredImage}
                      alt="Featured"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => handleInputChange('featuredImage', null)}
                      className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                    >
                      <XIcon className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <UploadIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Upload featured image</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="featured-image"
                    />
                    <label
                      htmlFor="featured-image"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
                    >
                      Choose Image
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* SEO & Meta Data */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO & Meta Data</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      SEO Title ({articleData.seoTitle.length}/60)
                    </label>
                    <input
                      type="text"
                      value={articleData.seoTitle}
                      onChange={(e) => handleInputChange('seoTitle', e.target.value)}
                      maxLength={60}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Meta Description ({articleData.metaDescription.length}/160)
                    </label>
                    <textarea
                      value={articleData.metaDescription}
                      onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                      maxLength={160}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      URL Slug
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                        /article/
                      </span>
                      <input
                        type="text"
                        value={articleData.urlSlug}
                        onChange={(e) => handleInputChange('urlSlug', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AMP Web Story Integration */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AMP Web Story (Optional)</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      AMP Story URL
                    </label>
                    <div className="flex">
                      <input
                        type="url"
                        value={articleData.ampStoryUrl}
                        onChange={(e) => {
                          handleInputChange('ampStoryUrl', e.target.value)
                          if (e.target.value) validateAmpUrl(e.target.value)
                        }}
                        placeholder="https://example.com/amp-story"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <div className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 bg-gray-50 rounded-r-md">
                        {ampUrlValid === true && (
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                        )}
                        {ampUrlValid === false && (
                          <XCircleIcon className="h-5 w-5 text-red-500" />
                        )}
                        {ampUrlValid === null && articleData.ampStoryUrl && (
                          <ExternalLinkIcon className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                    {ampUrlValid === false && (
                      <p className="text-sm text-red-600 mt-1">Invalid AMP Story URL</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Settings Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Article Settings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <SettingsIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
                </div>
                
                <div className="space-y-4">
                  {/* Status */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      value={articleData.status}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="scheduled">Scheduled</option>
                    </select>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select
                      value={articleData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Category</option>
                      <option value="SEO">SEO</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Paid Media">Paid Media</option>
                      <option value="Social Media">Social Media</option>
                      <option value="News">News</option>
                      <option value="Tools">Tools</option>
                    </select>
                  </div>

                  {/* Read Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Estimated Read Time (minutes)
                    </label>
                    <input
                      type="number"
                      value={articleData.readTime || Math.max(1, Math.ceil(wordCount / 200))}
                      onChange={(e) => handleInputChange('readTime', parseInt(e.target.value))}
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Publish Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <CalendarIcon className="h-4 w-4 inline mr-1" />
                      Publish Date
                    </label>
                    <input
                      type="date"
                      value={articleData.publishDate}
                      onChange={(e) => handleInputChange('publishDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Author */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <UserIcon className="h-4 w-4 inline mr-1" />
                      Author
                    </label>
                    <select
                      value={articleData.author}
                      onChange={(e) => handleInputChange('author', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Author</option>
                      <option value="Sarah Johnson">Sarah Johnson</option>
                      <option value="Mike Chen">Mike Chen</option>
                      <option value="Lisa Rodriguez">Lisa Rodriguez</option>
                      <option value="David Park">David Park</option>
                      <option value="Emma Wilson">Emma Wilson</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <TagIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">Tags</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                      placeholder="Add tag"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleAddTag}
                      className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {articleData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                        <button
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-1 hover:text-blue-600"
                        >
                          <XIcon className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentEditor

export const metadata = {
  title: 'Content Editor - Search Engine Journal Admin',
  description: 'Create and manage articles',
  robots: {
    index: false,
    follow: false,
  }
}
