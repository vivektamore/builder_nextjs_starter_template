export interface Article {
  id: string
  title: string
  excerpt: string
  content?: string
  author: string
  publishDate: string
  readTime: string
  imageUrl: string
  slug: string
  category: string
  tags: string[]
  featured: boolean
  trending: boolean
}

export interface Category {
  id: string
  name: string
  description: string
  articleCount: number
  imageUrl: string
  href: string
  color: string
  slug: string
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'SEO',
    description: 'Search engine optimization strategies, tips, and industry updates',
    articleCount: 156,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=400',
    href: '/category/seo',
    color: 'from-blue-500 to-blue-700',
    slug: 'seo'
  },
  {
    id: '2',
    name: 'Content Marketing',
    description: 'Content strategy, creation, and distribution best practices',
    articleCount: 124,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=400',
    href: '/category/content-marketing',
    color: 'from-green-500 to-green-700',
    slug: 'content-marketing'
  },
  {
    id: '3',
    name: 'Paid Media',
    description: 'PPC, social ads, and paid advertising strategies',
    articleCount: 89,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2Fed8ddc195d9d48969e0292b9e62d317b?format=webp&width=400',
    href: '/category/paid-media',
    color: 'from-purple-500 to-purple-700',
    slug: 'paid-media'
  },
  {
    id: '4',
    name: 'Social Media',
    description: 'Social media marketing trends and platform updates',
    articleCount: 112,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F52115549de9143c591653b13b2c69927?format=webp&width=400',
    href: '/category/social-media',
    color: 'from-pink-500 to-pink-700',
    slug: 'social-media'
  },
  {
    id: '5',
    name: 'News',
    description: 'Latest digital marketing industry news and updates',
    articleCount: 234,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=400',
    href: '/category/news',
    color: 'from-red-500 to-red-700',
    slug: 'news'
  },
  {
    id: '6',
    name: 'Tools',
    description: 'Marketing tools, software reviews, and recommendations',
    articleCount: 67,
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=400',
    href: '/category/tools',
    color: 'from-yellow-500 to-yellow-700',
    slug: 'tools'
  }
]

export const articles: Article[] = [
  {
    id: '1',
    title: 'Google Core Web Vitals Update: What You Need to Know for 2024',
    excerpt: 'Learn about the latest changes to Core Web Vitals and how they impact your SEO strategy. Essential updates every website owner should understand.',
    author: 'Sarah Johnson',
    publishDate: 'Dec 15, 2024',
    readTime: '8 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
    slug: 'google-core-web-vitals-update-2024',
    category: 'SEO',
    tags: ['Core Web Vitals', 'Google', 'Page Speed', 'SEO'],
    featured: true,
    trending: true
  },
  {
    id: '2',
    title: 'Content Marketing ROI: How to Measure Success in 2024',
    excerpt: 'Discover proven methods to track and measure your content marketing ROI. Learn which metrics matter most and how to optimize your strategy.',
    author: 'Mike Chen',
    publishDate: 'Dec 14, 2024',
    readTime: '6 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=800',
    slug: 'content-marketing-roi-measurement-2024',
    category: 'Content Marketing',
    tags: ['ROI', 'Analytics', 'Content Strategy'],
    featured: true,
    trending: false
  },
  {
    id: '3',
    title: 'Meta Ads Manager Updates: New Features for Better Campaign Performance',
    excerpt: 'Explore the latest Meta Ads Manager features and how they can improve your advertising campaigns. Tips for maximizing your ad spend efficiency.',
    author: 'Lisa Rodriguez',
    publishDate: 'Dec 13, 2024',
    readTime: '5 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2Fed8ddc195d9d48969e0292b9e62d317b?format=webp&width=800',
    slug: 'meta-ads-manager-updates-2024',
    category: 'Paid Media',
    tags: ['Meta Ads', 'Facebook Ads', 'PPC'],
    featured: false,
    trending: true
  },
  {
    id: '4',
    title: 'LinkedIn Algorithm Changes: How to Boost Your Organic Reach',
    excerpt: 'Understanding the latest LinkedIn algorithm updates and proven strategies to increase your organic reach and engagement on the platform.',
    author: 'David Park',
    publishDate: 'Dec 12, 2024',
    readTime: '7 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F52115549de9143c591653b13b2c69927?format=webp&width=800',
    slug: 'linkedin-algorithm-organic-reach-2024',
    category: 'Social Media',
    tags: ['LinkedIn', 'Organic Reach', 'Algorithm'],
    featured: false,
    trending: true
  },
  {
    id: '5',
    title: 'SEMrush vs Ahrefs: Comprehensive Tool Comparison 2024',
    excerpt: 'An in-depth comparison of two leading SEO tools. Find out which platform offers the best value for your marketing needs and budget.',
    author: 'Emma Wilson',
    publishDate: 'Dec 11, 2024',
    readTime: '12 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=800',
    slug: 'semrush-vs-ahrefs-comparison-2024',
    category: 'Tools',
    tags: ['SEMrush', 'Ahrefs', 'SEO Tools', 'Comparison'],
    featured: false,
    trending: false
  },
  {
    id: '6',
    title: 'Google Analytics 4 vs Universal Analytics: Migration Guide',
    excerpt: 'Complete guide to migrating from Universal Analytics to GA4. Learn about key differences and how to set up your new analytics tracking.',
    author: 'James Taylor',
    publishDate: 'Dec 10, 2024',
    readTime: '10 min read',
    imageUrl: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=800',
    slug: 'google-analytics-4-migration-guide',
    category: 'News',
    tags: ['Google Analytics', 'GA4', 'Migration', 'Analytics'],
    featured: false,
    trending: false
  }
]

export const getFeaturedArticles = (): Article[] => {
  return articles.filter(article => article.featured)
}

export const getTrendingArticles = (): Article[] => {
  return articles.filter(article => article.trending)
}

export const getLatestArticles = (limit: number = 6): Article[] => {
  return articles.slice(0, limit)
}

export const getArticlesByCategory = (categorySlug: string): Article[] => {
  return articles.filter(article => 
    article.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  )
}

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug)
}
