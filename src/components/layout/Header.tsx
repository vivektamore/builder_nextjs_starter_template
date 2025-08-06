'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { SearchIcon, MenuIcon, XIcon, ChevronDownIcon, BellIcon, MailIcon, UserIcon } from 'lucide-react'

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
        { name: 'Ask An SEO', href: '/category/seo/ask-an-seo', description: 'Expert SEO Q&A' },
        { name: 'Google Updates', href: '/category/seo/google-updates', description: 'Latest algorithm changes' },
        { name: 'SEO Basics', href: '/category/seo/basics', description: 'SEO fundamentals' },
        { name: 'Technical SEO', href: '/category/seo/technical', description: 'Advanced technical optimization' },
        { name: 'Local SEO', href: '/category/seo/local', description: 'Local search optimization' },
        { name: 'International SEO', href: '/category/seo/international', description: 'Global SEO strategies' },
        { name: 'SEO Tools', href: '/category/seo/tools', description: 'Best SEO software' },
        { name: 'Link Building', href: '/category/seo/link-building', description: 'Link acquisition strategies' }
      ]
    },
    'Social': {
      href: '/category/social',
      subcategories: [
        { name: 'Social Media Marketing', href: '/category/social/marketing', description: 'Platform strategies' },
        { name: 'Instagram', href: '/category/social/instagram', description: 'Instagram marketing tips' },
        { name: 'TikTok', href: '/category/social/tiktok', description: 'TikTok marketing guide' },
        { name: 'LinkedIn', href: '/category/social/linkedin', description: 'Professional networking' },
        { name: 'Twitter/X', href: '/category/social/twitter', description: 'Twitter marketing' },
        { name: 'Facebook', href: '/category/social/facebook', description: 'Facebook advertising' },
        { name: 'YouTube', href: '/category/social/youtube', description: 'Video marketing' },
        { name: 'Social Commerce', href: '/category/social/commerce', description: 'Social selling strategies' }
      ]
    },
    'Content': {
      href: '/category/content',
      subcategories: [
        { name: 'Content Strategy', href: '/category/content/strategy', description: 'Strategic content planning' },
        { name: 'Content Creation', href: '/category/content/creation', description: 'Content production tips' },
        { name: 'Video Marketing', href: '/category/content/video', description: 'Video content strategies' },
        { name: 'Email Marketing', href: '/category/content/email', description: 'Email campaigns' },
        { name: 'Copywriting', href: '/category/content/copywriting', description: 'Persuasive writing' },
        { name: 'Content Tools', href: '/category/content/tools', description: 'Content creation software' }
      ]
    },
    'Paid Media': {
      href: '/category/paid-media',
      subcategories: [
        { name: 'Google Ads', href: '/category/paid-media/google-ads', description: 'PPC advertising' },
        { name: 'Facebook Ads', href: '/category/paid-media/facebook-ads', description: 'Social media ads' },
        { name: 'PPC Strategy', href: '/category/paid-media/ppc-strategy', description: 'Paid search tactics' },
        { name: 'Display Advertising', href: '/category/paid-media/display', description: 'Banner advertising' },
        { name: 'Shopping Ads', href: '/category/paid-media/shopping', description: 'E-commerce advertising' },
        { name: 'Video Ads', href: '/category/paid-media/video', description: 'YouTube advertising' }
      ]
    },
    'Webinars': {
      href: '/webinars',
      prefetch: false,
      subcategories: [
        { name: 'Upcoming Events', href: '/webinars/upcoming', description: 'Live sessions' },
        { name: 'Past Recordings', href: '/webinars/recordings', description: 'Watch replays' },
        { name: 'Host a Webinar', href: '/webinars/host', description: 'Partner with us' }
      ]
    },
    'Library': {
      href: '/library',
      prefetch: false,
      subcategories: [
        { name: 'All Resources', href: '/library', description: 'Complete library' },
        { name: 'Guides & Whitepapers', href: '/library/guides', description: 'In-depth guides' },
        { name: 'Case Studies', href: '/library/case-studies', description: 'Success stories' },
        { name: 'Templates', href: '/library/templates', description: 'Ready-to-use templates' },
        { name: 'Checklists', href: '/library/checklists', description: 'Action checklists' }
      ]
    },
    'Ebooks': {
      href: '/ebooks',
      subcategories: [
        { name: 'SEO Ebooks', href: '/ebooks?category=seo', description: 'SEO guides' },
        { name: 'Marketing Ebooks', href: '/ebooks?category=marketing', description: 'Marketing strategies' },
        { name: 'Analytics Ebooks', href: '/ebooks?category=analytics', description: 'Data-driven guides' }
      ]
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
            <Link href="/newsletter" className="hover:text-blue-200 transition-colors">Newsletter</Link>
            <Link href="/contact" prefetch={false} className="hover:text-blue-200 transition-colors">Contact</Link>
            <Link href="/advertise" prefetch={false} className="hover:text-blue-200 transition-colors">Advertise</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="bg-blue-600 text-white px-3 py-1 rounded font-bold text-xl">
                SEJ
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:block">
                Search Engine Journal
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
              {Object.entries(navigationData).map(([category, data]) => (
                <div key={category} className="relative group">
                  <button
                    onClick={() => handleDropdownToggle(category)}
                    onMouseEnter={() => setActiveDropdown(category)}
                    className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-md hover:bg-gray-50"
                  >
                    <span>{category}</span>
                    {data.subcategories.length > 0 && (
                      <ChevronDownIcon className={`h-4 w-4 transition-transform ${
                        activeDropdown === category ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Multi-column Dropdown Menu */}
                  {data.subcategories.length > 0 && activeDropdown === category && (
                    <div 
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-[600px]"
                      onMouseLeave={closeDropdowns}
                      style={{ zIndex: 9999 }}
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <Link
                            href={data.href}
                            prefetch={data.prefetch !== false ? true : false}
                            className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                            onClick={closeDropdowns}
                          >
                            All {category} →
                          </Link>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                          {data.subcategories.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              prefetch={false}
                              className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                              onClick={closeDropdowns}
                            >
                              <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {sub.name}
                              </div>
                              <div className="text-sm text-gray-500 mt-1">
                                {sub.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              {/* Search */}
              <div className="relative hidden md:block">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                  <SearchIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Newsletter */}
              <Link href="/newsletter" className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors hidden md:block">
                <MailIcon className="h-5 w-5" />
              </Link>

              {/* Contact/User */}
              <Link href="/contact" prefetch={false} className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors hidden md:block">
                <UserIcon className="h-5 w-5" />
              </Link>

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
            <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
              <div className="flex flex-col space-y-2">
                {/* Mobile search */}
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <SearchIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>

                {/* Mobile navigation */}
                {Object.entries(navigationData).map(([category, data]) => (
                  <div key={category} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={data.href}
                        className="text-gray-700 hover:text-blue-600 font-medium py-3 block flex-1"
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
                      <div className="ml-4 space-y-1 border-l border-gray-200 pl-4 pb-4">
                        {data.subcategories.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block text-sm text-gray-600 hover:text-blue-600 py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="font-medium">{sub.name}</div>
                            <div className="text-xs text-gray-500">{sub.description}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Mobile actions */}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Link
                    href="/newsletter"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MailIcon className="h-5 w-5" />
                    <span>Newsletter</span>
                  </Link>
                  <Link
                    href="/contact"
                    prefetch={false}
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <UserIcon className="h-5 w-5" />
                    <span>Contact</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
