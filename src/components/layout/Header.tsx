'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { SearchIcon, MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationData = {
    'SEO': {
      href: '/category/seo',
      subcategories: [
        { name: 'Ask An SEO', href: '/category/seo/ask-an-seo' },
        { name: 'Google Updates', href: '/category/seo/google-updates' },
        { name: 'SEO Basics', href: '/category/seo/basics' },
        { name: 'Technical SEO', href: '/category/seo/technical' },
        { name: 'Local SEO', href: '/category/seo/local' },
        { name: 'International SEO', href: '/category/seo/international' }
      ]
    },
    'Paid Media': {
      href: '/category/paid-media',
      subcategories: [
        { name: 'Google Ads', href: '/category/paid-media/google-ads' },
        { name: 'Facebook Ads', href: '/category/paid-media/facebook-ads' },
        { name: 'PPC Strategy', href: '/category/paid-media/ppc-strategy' },
        { name: 'Display Advertising', href: '/category/paid-media/display' },
        { name: 'Shopping Ads', href: '/category/paid-media/shopping' }
      ]
    },
    'Social': {
      href: '/category/social',
      subcategories: [
        { name: 'Social Media Marketing', href: '/category/social/marketing' },
        { name: 'Instagram', href: '/category/social/instagram' },
        { name: 'TikTok', href: '/category/social/tiktok' },
        { name: 'LinkedIn', href: '/category/social/linkedin' },
        { name: 'Twitter/X', href: '/category/social/twitter' }
      ]
    },
    'Content': {
      href: '/category/content',
      subcategories: [
        { name: 'Content Strategy', href: '/category/content/strategy' },
        { name: 'Content Creation', href: '/category/content/creation' },
        { name: 'Video Marketing', href: '/category/content/video' },
        { name: 'Email Marketing', href: '/category/content/email' },
        { name: 'Copywriting', href: '/category/content/copywriting' }
      ]
    },
    'Digital': {
      href: '/category/digital',
      subcategories: [
        { name: 'Digital Strategy', href: '/category/digital/strategy' },
        { name: 'Analytics', href: '/category/digital/analytics' },
        { name: 'Conversion Optimization', href: '/category/digital/conversion' },
        { name: 'E-commerce', href: '/category/digital/ecommerce' },
        { name: 'Mobile Marketing', href: '/category/digital/mobile' }
      ]
    },
    'Webinars': {
      href: '/webinars',
      subcategories: []
    },
    'Library': {
      href: '/library',
      subcategories: [
        { name: 'All Resources', href: '/library' },
        { name: 'Guides & Whitepapers', href: '/library/guides' },
        { name: 'Case Studies', href: '/library/case-studies' },
        { name: 'Templates', href: '/library/templates' }
      ]
    },
    'Ebooks': {
      href: '/ebooks',
      subcategories: []
    },
    'Web Stories': {
      href: '/web-stories',
      subcategories: []
    }
  }

  const handleDropdownToggle = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category)
  }

  const closeDropdowns = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      {/* Top bar */}
      <div className="bg-blue-900 text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>Digital Marketing News & Insights</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/newsletter" className="hover:text-blue-200">Newsletter</Link>
            <Link href="/contact" className="hover:text-blue-200">Contact</Link>
            <Link href="/advertise" className="hover:text-blue-200">Advertise</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-xl">
                SEJ
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:block">
                Search Engine Journal
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {Object.entries(navigationData).map(([category, data]) => (
                <div key={category} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(category)}
                    onMouseEnter={() => setActiveDropdown(category)}
                    className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-md hover:bg-gray-50"
                  >
                    <span>{category}</span>
                    {data.subcategories.length > 0 && (
                      <ChevronDownIcon className={`h-4 w-4 transition-transform ${
                        activeDropdown === category ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {data.subcategories.length > 0 && activeDropdown === category && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                      onMouseLeave={closeDropdowns}
                    >
                      <div className="p-2">
                        <Link
                          href={data.href}
                          className="block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                          onClick={closeDropdowns}
                        >
                          All {category}
                        </Link>
                        <div className="border-t border-gray-100 my-2"></div>
                        {data.subcategories.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                            onClick={closeDropdowns}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Menu */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                {/* Mobile search */}
                <div className="relative sm:hidden mb-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Mobile navigation */}
                {Object.entries(navigationData).map(([category, data]) => (
                  <div key={category} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={data.href}
                        className="text-gray-700 hover:text-blue-600 font-medium py-2 block flex-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category}
                      </Link>
                      {data.subcategories.length > 0 && (
                        <button
                          onClick={() => handleDropdownToggle(category)}
                          className="p-2 text-gray-500"
                        >
                          <ChevronDownIcon className={`h-4 w-4 transition-transform ${
                            activeDropdown === category ? 'rotate-180' : ''
                          }`} />
                        </button>
                      )}
                    </div>
                    
                    {data.subcategories.length > 0 && activeDropdown === category && (
                      <div className="ml-4 space-y-1 border-l border-gray-200 pl-4">
                        {data.subcategories.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
