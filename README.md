# Search Engine Journal - Content-Driven Website

A professional, content-driven website similar to SearchEngineJournal.com, built with Next.js 15, React 19, and Tailwind CSS.

## ✅ Features Implemented

### 🌐 Frontend Website (Public)
- **Homepage** with trending articles, featured categories, and latest posts
- **Article detail pages** with:
  - Author information and bio
  - Social share buttons (Twitter, Facebook, LinkedIn)
  - Related articles sidebar
  - Structured content with proper typography
- **Category pages** for different content types:
  - SEO
  - Content Marketing
  - Paid Media
  - Social Media
  - News
  - Tools
- **Sticky navigation bar** with search functionality
- **Newsletter signup** sections throughout the site
- **Google Ads placement** support (sidebar + inline)
- **Fully responsive** design for all devices

### 🚀 AMP Web Stories Support
- **Web Stories section** to embed AMP-based content
- **SEO-optimized** story pages
- **Interactive story grid** with thumbnails and metadata
- **Featured story spotlight** section
- **Mobile-optimized** viewing experience

### 🔧 Admin Dashboard
- **Secure admin login** (demo credentials: admin/demo123)
- **Article management** - add/edit/delete articles
- **Web Stories management** - upload or embed AMP stories
- **Analytics dashboard** with basic metrics:
  - Total articles
  - Monthly views
  - Web Stories count
  - Subscriber count
- **Content scheduling** capabilities
- **Category management**

### 🎯 SEO & Technical Features
- **SEO-optimized structure** with proper schema markup
- **Open Graph** and Twitter Card metadata
- **Structured data** for articles and categories
- **Fast loading** optimized for Core Web Vitals
- **Google Analytics** ready integration
- **Search Console** optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd builder_nextjs_starter_template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   ├── article/[slug]/    # Article detail pages
│   ├── category/[slug]/   # Category pages
│   ├── newsletter/        # Newsletter signup
│   ├── web-stories/       # Web Stories section
│   └── layout.tsx         # Root layout with SEO
├── components/
│   ├── layout/           # Header, Footer, Layout components
│   ├── ui/               # Article cards, Category cards
│   └── ads/              # Google Ads components
└── lib/
    └── data.ts           # Sample data for articles and categories
```

## 🎨 Design Features

- **Professional, clean editorial style**
- **Visual hierarchy** similar to SearchEngineJournal.com
- **Consistent typography** and spacing
- **Accessible design** with proper contrast and focus states
- **Mobile-first responsive** design
- **Loading states** and smooth transitions

## 🔧 Customization

### Adding Real Content
1. Update `src/lib/data.ts` with your actual articles and categories
2. Connect to your preferred CMS or database
3. Replace placeholder images with real content

### Google Ads Integration
1. Update `adClient` in `src/components/ads/GoogleAds.tsx`
2. Replace ad slot IDs with your actual AdSense slots
3. Configure ad placements as needed

### Admin Dashboard
1. Implement proper authentication
2. Connect to your content management system
3. Add real analytics integration

## 🌟 Key Pages

- **Homepage** - `/` - Features trending articles and categories
- **Article Detail** - `/article/[slug]` - Full article with related content
- **Categories** - `/category/[slug]` - Category-specific article listings
- **Web Stories** - `/web-stories` - Interactive AMP stories
- **Newsletter** - `/newsletter` - Email subscription with topic selection
- **Admin Dashboard** - `/admin` - Content management (demo: admin/demo123)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🚀 Performance

- **Core Web Vitals** optimized
- **Image optimization** with Next.js Image component
- **Code splitting** and lazy loading
- **SEO-friendly** URLs and metadata
- **Fast loading** with optimized assets

## 🔗 Integration Ready

The website is ready for integration with:
- **Builder.io** for visual content editing
- **Google Analytics** for tracking
- **Google Search Console** for SEO monitoring
- **Email marketing** services for newsletter
- **CMS platforms** for content management

## 📄 License

This project is built for demonstration purposes. Replace with your actual license.
