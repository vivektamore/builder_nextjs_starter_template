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
  const [showSlideTypeMenu, setShowSlideTypeMenu] = useState(false)
  
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

  const slideTypes = [
    { value: 'cover', label: 'Cover', description: 'Large headline, subtitle, full-screen media' },
    { value: 'text', label: 'Text', description: 'Centered or vertical text content' },
    { value: 'media', label: 'Media', description: 'Media-dominant with text overlay' },
    { value: 'cta', label: 'CTA', description: 'Call-to-action with button' }
  ]

  const animations = [
    { value: 'fade-in', label: 'Fade In' },
    { value: 'fly-in-left', label: 'Fly In Left' },
    { value: 'fly-in-right', label: 'Fly In Right' },
    { value: 'fly-in-top', label: 'Fly In Top' },
    { value: 'fly-in-bottom', label: 'Fly In Bottom' },
    { value: 'rotate-in-left', label: 'Rotate In Left' },
    { value: 'rotate-in-right', label: 'Rotate In Right' },
    { value: 'zoom-in', label: 'Zoom In' },
    { value: 'zoom-out', label: 'Zoom Out' }
  ]

  const fontFamilies = [
    { value: 'Roboto', label: 'Roboto' },
    { value: 'Oswald', label: 'Oswald' },
    { value: 'Poppins', label: 'Poppins' },
    { value: 'Playfair Display', label: 'Playfair Display' },
    { value: 'Montserrat', label: 'Montserrat' }
  ]

  const textPositions = [
    { value: 'top', label: 'Top' },
    { value: 'center', label: 'Center' },
    { value: 'bottom', label: 'Bottom' }
  ]

  const textAlignments = [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' }
  ]

  const currentSlide = storyData.slides[currentSlideIndex] || storyData.slides[0]

  const updateSlide = (field: string, value: any) => {
    const updatedSlides = storyData.slides.map((slide, index) => 
      index === currentSlideIndex ? { ...slide, [field]: value } : slide
    )
    setStoryData({ ...storyData, slides: updatedSlides })
  }

  const createSlideTemplate = (type: 'cover' | 'text' | 'media' | 'cta'): Slide => {
    const baseSlide = {
      id: `slide-${Date.now()}`,
      type,
      backgroundColor: '#6366f1',
      textPosition: 'center' as const,
      textAlign: 'center' as const,
      textColor: '#ffffff',
      fontFamily: 'Roboto',
      fontSize: 24,
      fontWeight: 'bold',
      animation: 'fade-in',
      duration: 4000,
      muteAudio: false,
      pushNotification: false,
      autoPlay: true,
      ctaOpenNewTab: true
    }

    switch (type) {
      case 'cover':
        return {
          ...baseSlide,
          title: 'Cover Title',
          subtitle: 'Engaging subtitle',
          description: 'Cover description',
          showCta: false,
          fontSize: 32
        }
      case 'text':
        return {
          ...baseSlide,
          title: 'Text Slide',
          description: 'Add your main text content here...',
          showCta: false,
          fontSize: 20
        }
      case 'media':
        return {
          ...baseSlide,
          title: 'Media Title',
          description: 'Media description',
          showCta: false,
          textPosition: 'bottom',
          fontSize: 18
        }
      case 'cta':
        return {
          ...baseSlide,
          title: 'Call to Action',
          description: 'Compelling CTA description',
          showCta: true,
          ctaLabel: 'Take Action',
          ctaUrl: 'https://example.com',
          fontSize: 20
        }
      default:
        return { ...baseSlide, title: 'New Slide', description: 'Slide description', showCta: false }
    }
  }

  const addSlide = (type: 'cover' | 'text' | 'media' | 'cta' = 'text') => {
    const newSlide = createSlideTemplate(type)
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

  const generateAmpHtml = () => {
    const ampHtml = `<!doctype html>
<html ⚡>
<head>
  <meta charset="utf-8">
  <title>${storyData.title}</title>
  <link rel="canonical" href="self.html">
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
  <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
  ${storyData.ampAutoAds.enabled ? '<script async custom-element="amp-story-auto-ads" src="https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js"></script>' : ''}
</head>
<body>
  <amp-story standalone
    title="${storyData.title}"
    publisher="${storyData.publisherName}"
    publisher-logo-src="${storyData.publisherLogoSrc || 'https://example.com/logo.png'}"
    poster-portrait-src="${storyData.poster || 'https://example.com/poster.png'}">

    ${storyData.ampAutoAds.enabled && storyData.slides.length >= 8 ? `
    <amp-story-auto-ads>
      <script type="application/json">
      {
        "ad-attributes": {
          "type": "${storyData.ampAutoAds.adAttributes.type}",
          "data-ad-client": "${storyData.ampAutoAds.adAttributes.dataAdClient}",
          "data-ad-slot": "${storyData.ampAutoAds.adAttributes.dataAdSlot}"
        }
      }
      </script>
    </amp-story-auto-ads>` : ''}

    ${storyData.slides.map((slide, index) => `
    <amp-story-page id="slide-${index}">
      <amp-story-grid-layer template="fill">
        ${slide.backgroundImage ?
          `<amp-img src="${slide.backgroundImage}" width="720" height="1280" layout="responsive"></amp-img>` :
          `<div style="background-color: ${slide.backgroundColor}; width: 100%; height: 100%;"></div>`
        }
      </amp-story-grid-layer>

      <amp-story-grid-layer template="vertical" style="align-content: ${slide.textPosition};">
        <div style="text-align: ${slide.textAlign}; color: ${slide.textColor}; font-family: ${slide.fontFamily};">
          ${slide.type === 'cover' && slide.subtitle ? `<h2 style="font-size: ${slide.fontSize - 8}px; font-weight: normal; margin: 0;">${slide.subtitle}</h2>` : ''}
          <h1 style="font-size: ${slide.fontSize}px; font-weight: ${slide.fontWeight}; margin: 0;">${slide.title}</h1>
          ${slide.description ? `<p style="font-size: ${slide.fontSize - 6}px; margin: 16px 0;">${slide.description}</p>` : ''}
        </div>
      </amp-story-grid-layer>

      ${slide.showCta && slide.ctaLabel ? `
      <amp-story-cta-layer>
        <a href="${slide.ctaUrl}" ${slide.ctaOpenNewTab ? 'target="_blank"' : ''}
           style="background: #ffffff; color: #000; padding: 12px 24px; border-radius: 25px; text-decoration: none; font-weight: bold;">
          ${slide.ctaLabel}
        </a>
      </amp-story-cta-layer>` : ''}
    </amp-story-page>`).join('')}
  </amp-story>
</body>
</html>`
    return ampHtml
  }

  const validateAmp = async () => {
    // In a real implementation, you would call the AMP validator API
    // For now, we'll just simulate validation
    return storyData.rawAmpPublication && storyData.slides.length > 0
  }

  const publishToAmp = () => {
    const ampHtml = generateAmpHtml()
    const blob = new Blob([ampHtml], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${storyData.title.replace(/\s+/g, '-').toLowerCase()}.html`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const previewAmp = () => {
    const ampHtml = generateAmpHtml()
    const newWindow = window.open()
    if (newWindow) {
      newWindow.document.write(ampHtml)
      newWindow.document.close()
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
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <EyeIcon className="h-4 w-4" />
                <span>Preview</span>
              </button>
              <button
                onClick={previewAmp}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-blue-700 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                <span>View AMP</span>
              </button>
              <button
                onClick={publishToAmp}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-white bg-green-600 rounded-md hover:bg-green-700"
              >
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

              {/* AMP Auto Ads */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-gray-900">AMP Auto Ads</h4>
                  <input
                    type="checkbox"
                    checked={storyData.ampAutoAds.enabled}
                    onChange={(e) => setStoryData({
                      ...storyData,
                      ampAutoAds: { ...storyData.ampAutoAds, enabled: e.target.checked }
                    })}
                    disabled={storyData.slides.length < 8}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded disabled:opacity-50"
                  />
                </div>

                {storyData.slides.length < 8 && (
                  <p className="text-xs text-yellow-600 mb-3">
                    Auto ads require 8 or more slides. Current: {storyData.slides.length}
                  </p>
                )}

                {storyData.ampAutoAds.enabled && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Network Type
                      </label>
                      <select
                        value={storyData.ampAutoAds.networkType}
                        onChange={(e) => setStoryData({
                          ...storyData,
                          ampAutoAds: { ...storyData.ampAutoAds, networkType: e.target.value }
                        })}
                        className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="adsense">AdSense</option>
                        <option value="doubleclick">DoubleClick</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Ad Client ID
                      </label>
                      <input
                        type="text"
                        value={storyData.ampAutoAds.adAttributes.dataAdClient}
                        onChange={(e) => setStoryData({
                          ...storyData,
                          ampAutoAds: {
                            ...storyData.ampAutoAds,
                            adAttributes: { ...storyData.ampAutoAds.adAttributes, dataAdClient: e.target.value }
                          }
                        })}
                        placeholder="ca-pub-XXXXXXX"
                        className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Ad Slot ID
                      </label>
                      <input
                        type="text"
                        value={storyData.ampAutoAds.adAttributes.dataAdSlot}
                        onChange={(e) => setStoryData({
                          ...storyData,
                          ampAutoAds: {
                            ...storyData.ampAutoAds,
                            adAttributes: { ...storyData.ampAutoAds.adAttributes, dataAdSlot: e.target.value }
                          }
                        })}
                        placeholder="1234567890"
                        className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Slides List */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-900">Slides ({storyData.slides.length})</h3>
              <div className="relative">
                <button
                  onClick={() => setShowSlideTypeMenu(!showSlideTypeMenu)}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700"
                >
                  <PlusIcon className="h-4 w-4" />
                  <span className="text-xs">Add</span>
                </button>

                {showSlideTypeMenu && (
                  <div className="absolute right-0 top-8 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                    <div className="p-2">
                      {slideTypes.map((type) => (
                        <button
                          key={type.value}
                          onClick={() => {
                            addSlide(type.value as any)
                            setShowSlideTypeMenu(false)
                          }}
                          className="w-full text-left p-3 rounded-md hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                        >
                          <div className="font-medium text-sm text-gray-900">{type.label}</div>
                          <div className="text-xs text-gray-500 mt-1">{type.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              {storyData.slides.map((slide, index) => (
                <div
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    index === currentSlideIndex ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-12 rounded border border-gray-300 relative overflow-hidden"
                      style={{ backgroundColor: slide.backgroundColor }}
                    >
                      {slide.backgroundImage && (
                        <img
                          src={slide.backgroundImage}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <span className="text-xs text-gray-500 mt-1 uppercase">
                      {slide.type}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {slide.title}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {slide.duration / 1000}s • {slide.type}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <button className="text-gray-400 hover:text-gray-600 p-1">
                      <MoveIcon className="h-3 w-3" />
                    </button>
                    {storyData.slides.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          removeSlide(index)
                        }}
                        className="text-red-400 hover:text-red-600 p-1"
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
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900">Edit Slide {currentSlideIndex + 1}</h2>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full uppercase">
                {currentSlide.type}
              </span>
            </div>

            <div className="space-y-6">
              {/* Slide Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Slide Type
                </label>
                <select
                  value={currentSlide.type}
                  onChange={(e) => updateSlide('type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  {slideTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label} - {type.description}
                    </option>
                  ))}
                </select>
              </div>
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
                  {currentSlide.type === 'cover' ? 'Headline' : 'Title'}
                </label>
                <input
                  type="text"
                  value={currentSlide.title}
                  onChange={(e) => updateSlide('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Subtitle (Cover and CTA only) */}
              {(currentSlide.type === 'cover' || currentSlide.type === 'cta') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={currentSlide.subtitle || ''}
                    onChange={(e) => updateSlide('subtitle', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {currentSlide.type === 'text' ? 'Content' : 'Description'}
                </label>
                <textarea
                  value={currentSlide.description}
                  onChange={(e) => updateSlide('description', e.target.value)}
                  rows={currentSlide.type === 'text' ? 5 : 3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* CTA Button - Show for CTA type or optional for others */}
              {currentSlide.type === 'cta' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Call to Action Button (Required)
                  </label>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Button Label"
                      value={currentSlide.ctaLabel || ''}
                      onChange={(e) => updateSlide('ctaLabel', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                    <input
                      type="url"
                      placeholder="Button URL"
                      value={currentSlide.ctaUrl || ''}
                      onChange={(e) => updateSlide('ctaUrl', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      required
                    />
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="cta-new-tab"
                        checked={currentSlide.ctaOpenNewTab}
                        onChange={(e) => updateSlide('ctaOpenNewTab', e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="cta-new-tab" className="ml-2 block text-sm text-gray-700">
                        Open in new tab
                      </label>
                    </div>
                  </div>
                </div>
              ) : currentSlide.type !== 'cover' && currentSlide.type !== 'text' && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Optional CTA Button
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
              )}

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
