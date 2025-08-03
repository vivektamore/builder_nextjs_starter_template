'use client'

import { useEffect } from 'react'

interface GoogleAdsProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  adStyle?: React.CSSProperties
  className?: string
  adClient?: string
}

const GoogleAds = ({
  adSlot,
  adFormat = 'auto',
  adStyle = { display: 'block' },
  className = '',
  adClient = 'ca-pub-XXXXXXXXXXXXXXXXX' // Replace with your actual AdSense client ID
}: GoogleAdsProps) => {

  useEffect(() => {
    // Only load AdSense in production environment
    if (process.env.NODE_ENV !== 'production') {
      return
    }

    // Load Google AdSense script if not already loaded
    if (typeof window !== 'undefined' && !window.adsbygoogle) {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      script.crossOrigin = 'anonymous'
      script.onload = () => {
        // Initialize ads after script loads
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({})
        } catch (error) {
          console.error('AdSense error:', error)
        }
      }
      document.head.appendChild(script)
    } else if (typeof window !== 'undefined' && window.adsbygoogle) {
      // Script already loaded, push ads
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error('AdSense error:', error)
      }
    }
  }, [])

  // Development/Demo placeholder - always show in development
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center ${className}`}>
        <div className="text-gray-500">
          <div className="text-sm font-medium mb-2">Google Ads Placeholder</div>
          <div className="text-xs">Slot: {adSlot}</div>
          <div className="text-xs">Format: {adFormat}</div>
          <div className="text-xs mt-2 text-gray-400">
            This ad space will show Google Ads in production
          </div>
        </div>
      </div>
    )
  }

  // Production AdSense component
  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  )
}

// Sidebar Ad Component
export const SidebarAd = ({ className = '' }: { className?: string }) => (
  <GoogleAds
    adSlot="1234567890"
    adFormat="vertical"
    className={`w-full ${className}`}
    adStyle={{ display: 'block', width: '300px', height: '600px' }}
  />
)

// Banner Ad Component
export const BannerAd = ({ className = '' }: { className?: string }) => (
  <GoogleAds
    adSlot="0987654321"
    adFormat="horizontal"
    className={`w-full ${className}`}
    adStyle={{ display: 'block', width: '728px', height: '90px' }}
  />
)

// Mobile Banner Ad Component
export const MobileBannerAd = ({ className = '' }: { className?: string }) => (
  <GoogleAds
    adSlot="1122334455"
    adFormat="horizontal"
    className={`w-full lg:hidden ${className}`}
    adStyle={{ display: 'block', width: '320px', height: '50px' }}
  />
)

// In-Article Ad Component
export const InArticleAd = ({ className = '' }: { className?: string }) => (
  <GoogleAds
    adSlot="5566778899"
    adFormat="auto"
    className={`w-full my-8 ${className}`}
    adStyle={{ display: 'block' }}
  />
)

// Square Ad Component
export const SquareAd = ({ className = '' }: { className?: string }) => (
  <GoogleAds
    adSlot="9988776655"
    adFormat="rectangle"
    className={`w-full ${className}`}
    adStyle={{ display: 'block', width: '300px', height: '250px' }}
  />
)

export default GoogleAds

// TypeScript declarations for AdSense
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}
