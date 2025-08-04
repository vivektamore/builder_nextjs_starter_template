'use client'

import { useState } from 'react'
import { 
  ArrowLeftIcon, 
  PlayIcon, 
  PauseIcon, 
  EyeIcon, 
  SaveIcon, 
  CheckCircleIcon,
  PlusIcon,
  TrashIcon,
  MoveIcon,
  UploadIcon,
  PaletteIcon,
  TypeIcon,
  ClockIcon,
  ExternalLinkIcon,
  SettingsIcon,
  UserIcon,
  TagIcon,
  MonitorIcon,
  SmartphoneIcon
} from 'lucide-react'

interface Slide {
  id: string
  type: 'cover' | 'text' | 'media' | 'cta'
  title: string
  subtitle?: string
  description: string
  backgroundColor: string
  backgroundImage?: string
  backgroundVideo?: string
  ctaLabel?: string
  ctaUrl?: string
  ctaOpenNewTab: boolean
  showCta: boolean
  textPosition: 'top' | 'center' | 'bottom'
  textAlign: 'left' | 'center' | 'right'
  textColor: string
  fontFamily: string
  fontSize: number
  fontWeight: string
  animation: string
  duration: number
  muteAudio: boolean
  pushNotification: boolean
  autoPlay: boolean
}

interface AmpAutoAds {
  enabled: boolean
  adAttributes: {
    type: string
    dataAdClient: string
    dataAdSlot: string
  }
  networkType: string
}

interface StoryData {
  title: string
  description: string
  category: string
  author: string
  poster: string
  publisherName: string
  publisherLogoSrc: string
  enableAutoAds: boolean
  rawAmpPublication: boolean
  ampAutoAds: AmpAutoAds
  slides: Slide[]
}

const StoryEditor = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [previewMode, setPreviewMode] = useState('mobile') // mobile or desktop
  
  const [storyData, setStoryData] = useState<StoryData>({
    title: 'Your Story Title',
    description: 'A compelling story about...',
    category: 'SEO',
    author: 'Alex Chen',
    poster: '',
    publisherName: 'Search Engine Journal',
    publisherLogoSrc: '',
    enableAutoAds: false,
    rawAmpPublication: true,
    ampAutoAds: {
      enabled: false,
      adAttributes: {
        type: 'adsense',
        dataAdClient: 'ca-pub-XXXXXXX',
        dataAdSlot: '1234567890'
      },
      networkType: 'adsense'
    },
    slides: [
      {
        id: '1',
        type: 'cover',
        title: 'Your Story Title',
        subtitle: 'Engaging subtitle',
        description: 'Start your story here...',
        backgroundColor: '#6366f1',
        showCta: false,
        ctaLabel: 'Get Started',
        ctaUrl: '#',
        ctaOpenNewTab: true,
        textPosition: 'center',
        textAlign: 'center',
        textColor: '#ffffff',
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: 'bold',
        animation: 'fade',
        duration: 3000,
        muteAudio: false,
        pushNotification: false,
        autoPlay: true
      }
    ]
  })

  const backgroundColors = [
    '#6366f1', '#ec4899', '#10b981', '#f59e0b',
    '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16'
  ]

  const animations = [
    { value: 'fade', label: 'Fade' },
    { value: 'slide-in', label: 'Slide In' },
    { value: 'zoom', label: 'Zoom' },
    { value: 'bounce', label: 'Bounce' }
  ]

  const fontFamilies = [
    { value: 'Inter', label: 'Inter' },
    { value: 'Roboto', label: 'Roboto' },
    { value: 'Poppins', label: 'Poppins' },
    { value: 'Oswald', label: 'Oswald' }
  ]

  const currentSlide = storyData.slides[currentSlideIndex] || storyData.slides[0]

  const updateSlide = (field: string, value: any) => {
    const updatedSlides = storyData.slides.map((slide, index) => 
      index === currentSlideIndex ? { ...slide, [field]: value } : slide
    )
    setStoryData({ ...storyData, slides: updatedSlides })
  }

  const addSlide = () => {
    const newSlide: Slide = {
      id: `slide-${Date.now()}`,
      title: 'New Slide',
      description: 'Slide description',
      backgroundColor: '#6366f1',
      showCta: false,
      ctaLabel: '',
      ctaUrl: '',
      fontFamily: 'Inter',
      fontSize: 24,
      fontWeight: 'bold',
      animation: 'fade',
      duration: 3000
    }
    setStoryData({ 
      ...storyData, 
      slides: [...storyData.slides, newSlide] 
    })
    setCurrentSlideIndex(storyData.slides.length)
  }

  const removeSlide = (index: number) => {
    if (storyData.slides.length > 1) {
      const updatedSlides = storyData.slides.filter((_, i) => i !== index)
      setStoryData({ ...storyData, slides: updatedSlides })
      if (currentSlideIndex >= updatedSlides.length) {
        setCurrentSlideIndex(updatedSlides.length - 1)
      }
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      updateSlide('backgroundImage', imageUrl)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a 
                href="/admin"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Back to Admin</span>
              </a>
              <div className="text-gray-300">|</div>
              <h1 className="text-xl font-semibold text-gray-900">SEO Insights</h1>
              <span className="text-sm text-gray-500">Story Editor</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                <EyeIcon className="h-4 w-4" />
                <span>Preview</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 text-sm text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100">
                <ExternalLinkIcon className="h-4 w-4" />
                <span>View AMP</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 text-sm text-white bg-green-600 rounded-md hover:bg-green-700">
                <CheckCircleIcon className="h-4 w-4" />
                <span>Publish to AMP</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                <SaveIcon className="h-4 w-4" />
                <span>Save Draft</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel - Story Settings */}
        <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <SettingsIcon className="h-5 w-5 text-gray-400 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Story Settings</h2>
            </div>

            <div className="space-y-6">
              {/* Story Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Story Title
                </label>
                <input
                  type="text"
                  value={storyData.title}
                  onChange={(e) => setStoryData({ ...storyData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={storyData.description}
                  onChange={(e) => setStoryData({ ...storyData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <TagIcon className="h-4 w-4 inline mr-1" />
                  Category
                </label>
                <select
                  value={storyData.category}
                  onChange={(e) => setStoryData({ ...storyData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="SEO">SEO</option>
                  <option value="Content Marketing">Content Marketing</option>
                  <option value="Social Media">Social Media</option>
                  <option value="PPC">PPC</option>
                </select>
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <UserIcon className="h-4 w-4 inline mr-1" />
                  Author
                </label>
                <select
                  value={storyData.author}
                  onChange={(e) => setStoryData({ ...storyData, author: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="Alex Chen">Alex Chen</option>
                  <option value="Sarah Johnson">Sarah Johnson</option>
                  <option value="Mike Rodriguez">Mike Rodriguez</option>
                </select>
              </div>

              {/* AMP Settings */}
              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Enable AMP Auto Ads</span>
                    <input
                      type="checkbox"
                      checked={storyData.enableAutoAds}
                      onChange={(e) => setStoryData({ ...storyData, enableAutoAds: e.target.checked })}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Raw AMP Publication</span>
                    <input
                      type="checkbox"
                      checked={storyData.rawAmpPublication}
                      onChange={(e) => setStoryData({ ...storyData, rawAmpPublication: e.target.checked })}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                </div>

                {/* AMP Status */}
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-green-700">
                      <CheckCircleIcon className="h-4 w-4 mr-2" />
                      <span>Google AMP Cache compatible</span>
                    </div>
                    <div className="flex items-center text-sm text-green-700">
                      <CheckCircleIcon className="h-4 w-4 mr-2" />
                      <span>Valid AMP HTML</span>
                    </div>
                    <div className="flex items-center text-sm text-green-700">
                      <CheckCircleIcon className="h-4 w-4 mr-2" />
                      <span>AMP Rating & SEO Optimized</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slides List */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-900">Slides</h3>
              <button
                onClick={addSlide}
                className="text-blue-600 hover:text-blue-700"
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              {storyData.slides.map((slide, index) => (
                <div
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                    index === currentSlideIndex ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div 
                    className="w-8 h-8 rounded border-2 border-gray-200"
                    style={{ backgroundColor: slide.backgroundColor }}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Slide {index + 1}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {slide.title}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoveIcon className="h-3 w-3" />
                    </button>
                    {storyData.slides.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          removeSlide(index)
                        }}
                        className="text-red-400 hover:text-red-600"
                      >
                        <TrashIcon className="h-3 w-3" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Panel - Story Preview */}
        <div className="flex-1 flex flex-col">
          <div className="p-6 border-b border-gray-200 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Story Preview</h2>
              <div className="flex items-center space-x-2">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setPreviewMode('mobile')}
                    className={`px-3 py-1 text-sm rounded-md flex items-center space-x-1 ${
                      previewMode === 'mobile' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                    }`}
                  >
                    <SmartphoneIcon className="h-4 w-4" />
                    <span>Mobile</span>
                  </button>
                  <button
                    onClick={() => setPreviewMode('desktop')}
                    className={`px-3 py-1 text-sm rounded-md flex items-center space-x-1 ${
                      previewMode === 'desktop' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
                    }`}
                  >
                    <MonitorIcon className="h-4 w-4" />
                    <span>Desktop</span>
                  </button>
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {isPlaying ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
                  <span>{isPlaying ? 'Stop' : 'Play'}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center bg-gray-100 p-8">
            {/* Mobile Preview */}
            <div className={`${previewMode === 'mobile' ? 'w-80 h-[600px]' : 'w-96 h-[700px]'} bg-black rounded-2xl p-2 shadow-2xl`}>
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <div
                  className="w-full h-full flex items-center justify-center text-white relative"
                  style={{
                    backgroundColor: currentSlide.backgroundColor,
                    backgroundImage: currentSlide.backgroundImage ? `url(${currentSlide.backgroundImage})` : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="text-center px-6">
                    <h1 
                      className="mb-4"
                      style={{
                        fontFamily: currentSlide.fontFamily,
                        fontSize: `${currentSlide.fontSize}px`,
                        fontWeight: currentSlide.fontWeight
                      }}
                    >
                      {currentSlide.title}
                    </h1>
                    <p className="text-lg opacity-90 mb-8">
                      {currentSlide.description}
                    </p>
                    {currentSlide.showCta && currentSlide.ctaLabel && (
                      <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                        {currentSlide.ctaLabel}
                      </button>
                    )}
                  </div>

                  {/* Slide indicators */}
                  <div className="absolute top-4 left-4 right-4 flex space-x-1">
                    {storyData.slides.map((_, index) => (
                      <div
                        key={index}
                        className={`h-0.5 flex-1 rounded-full ${
                          index <= currentSlideIndex ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Navigation */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setCurrentSlideIndex(Math.max(0, currentSlideIndex - 1))}
                disabled={currentSlideIndex === 0}
                className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-600">
                Slide {currentSlideIndex + 1} of {storyData.slides.length}
              </span>
              <button
                onClick={() => setCurrentSlideIndex(Math.min(storyData.slides.length - 1, currentSlideIndex + 1))}
                disabled={currentSlideIndex === storyData.slides.length - 1}
                className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Slide Editor */}
        <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Edit Slide {currentSlideIndex + 1}</h2>

            <div className="space-y-6">
              {/* Background */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Background</label>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {backgroundColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => updateSlide('backgroundColor', color)}
                      className={`w-12 h-12 rounded border-2 ${
                        currentSlide.backgroundColor === color ? 'border-gray-900' : 'border-gray-200'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="background-image"
                  />
                  <label
                    htmlFor="background-image"
                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                  >
                    <UploadIcon className="h-4 w-4 mr-2" />
                    Upload Image
                  </label>
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    <UploadIcon className="h-4 w-4 mr-2" />
                    Upload Video
                  </button>
                </div>
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Story Slide Title
                </label>
                <input
                  type="text"
                  value={currentSlide.title}
                  onChange={(e) => updateSlide('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={currentSlide.description}
                  onChange={(e) => updateSlide('description', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* CTA Button */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Call to Action Button
                  </label>
                  <input
                    type="checkbox"
                    checked={currentSlide.showCta}
                    onChange={(e) => updateSlide('showCta', e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                
                {currentSlide.showCta && (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Button Label"
                      value={currentSlide.ctaLabel || ''}
                      onChange={(e) => updateSlide('ctaLabel', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <input
                      type="url"
                      placeholder="Button URL"
                      value={currentSlide.ctaUrl || ''}
                      onChange={(e) => updateSlide('ctaUrl', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                )}
              </div>

              {/* Typography & Animation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Typography & Animation
                </label>
                <div className="space-y-3">
                  <select
                    value={currentSlide.fontFamily}
                    onChange={(e) => updateSlide('fontFamily', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    {fontFamilies.map((font) => (
                      <option key={font.value} value={font.value}>
                        {font.label}
                      </option>
                    ))}
                  </select>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="number"
                      placeholder="Size"
                      value={currentSlide.fontSize}
                      onChange={(e) => updateSlide('fontSize', parseInt(e.target.value))}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <select
                      value={currentSlide.fontWeight}
                      onChange={(e) => updateSlide('fontWeight', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    >
                      <option value="normal">Normal</option>
                      <option value="bold">Bold</option>
                      <option value="600">Semibold</option>
                    </select>
                  </div>
                  
                  <select
                    value={currentSlide.animation}
                    onChange={(e) => updateSlide('animation', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    {animations.map((anim) => (
                      <option key={anim.value} value={anim.value}>
                        {anim.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Slide Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <ClockIcon className="h-4 w-4 inline mr-1" />
                  Slide Duration (ms)
                </label>
                <input
                  type="number"
                  value={currentSlide.duration}
                  onChange={(e) => updateSlide('duration', parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  min="1000"
                  step="500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  {currentSlide.duration / 1000}s ({currentSlide.duration}ms)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryEditor
