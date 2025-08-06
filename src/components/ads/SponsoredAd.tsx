'use client'

import { ExternalLinkIcon } from 'lucide-react'

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
}

interface SponsoredAdProps {
  position: string
  className?: string
}

const SponsoredAd = ({ position, className = '' }: SponsoredAdProps) => {
  // Mock data - in production this would come from API based on position
  const ads: SponsoredAd[] = [
    {
      id: '1',
      title: 'SEO Tool - Special Offer',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
      targetUrl: 'https://example.com/seo-tool',
      position: 'homepage-sidebar',
      enabled: true,
      clickCount: 245,
      impressions: 1250
    },
    {
      id: '2',
      title: 'Marketing Conference 2024',
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=800',
      targetUrl: 'https://example.com/conference',
      position: 'under-navbar',
      enabled: true,
      clickCount: 180,
      impressions: 950
    },
    {
      id: '3',
      title: 'Content Marketing Course',
      embedCode: '<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; color: white; text-align: center;"><h3 style="margin: 0 0 10px 0;">Master Content Marketing</h3><p style="margin: 0 0 15px 0;">Join our comprehensive course and boost your skills</p><a href="#" style="background: white; color: #667eea; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">Learn More</a></div>',
      targetUrl: 'https://example.com/course',
      position: 'inside-article',
      enabled: true,
      clickCount: 95,
      impressions: 520
    }
  ]

  // Filter ads for the specific position
  const relevantAds = ads.filter(ad => ad.position === position && ad.enabled)
  
  if (relevantAds.length === 0) {
    return null
  }

  // For now, just show the first relevant ad
  const ad = relevantAds[0]

  const handleAdClick = () => {
    // Track click (in production, this would make an API call)
    console.log(`Ad clicked: ${ad.id}`)
    
    // Open external URL
    if (ad.targetUrl) {
      window.open(ad.targetUrl, '_blank', 'noopener,noreferrer')
    }
  }

  const getPositionStyles = () => {
    switch (position) {
      case 'homepage-sidebar':
        return 'w-full max-w-sm'
      case 'under-navbar':
        return 'w-full max-w-4xl mx-auto'
      case 'inside-article':
        return 'w-full max-w-lg mx-auto my-8'
      case 'footer':
        return 'w-full max-w-xs'
      default:
        return 'w-full'
    }
  }

  return (
    <div className={`${getPositionStyles()} ${className}`}>
      <div className="relative group">
        {/* Sponsored label */}
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-gray-900 bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            Sponsored
          </span>
        </div>

        {/* Ad content */}
        {ad.imageUrl ? (
          // Image-based ad
          <div 
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            onClick={handleAdClick}
          >
            <img
              src={ad.imageUrl}
              alt={ad.title}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Overlay with external link icon */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity flex items-center justify-center">
              <ExternalLinkIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ) : ad.embedCode ? (
          // Embedded code ad
          <div 
            className="cursor-pointer"
            onClick={handleAdClick}
            dangerouslySetInnerHTML={{ __html: ad.embedCode }}
          />
        ) : (
          // Fallback text ad
          <div 
            className="bg-gray-100 border border-gray-200 rounded-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={handleAdClick}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{ad.title}</h3>
            <div className="flex items-center text-blue-600 hover:text-blue-700">
              <span className="text-sm">Learn More</span>
              <ExternalLinkIcon className="h-4 w-4 ml-1" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SponsoredAd
