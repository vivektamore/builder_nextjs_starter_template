'use client'

import { useState } from 'react'
import { QuoteIcon, StarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  photo: string
  quote: string
  jobTitle: string
  company: string
  rating: number
}

interface TestimonialsSectionProps {
  enabled?: boolean
}

const TestimonialsSection = ({ enabled = true }: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Mock testimonials data - in production this would come from API
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      photo: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=400',
      quote: 'Search Engine Journal has been my go-to resource for staying updated with the latest SEO trends. Their insights have helped me improve my website rankings significantly.',
      jobTitle: 'Digital Marketing Manager',
      company: 'TechCorp Inc.',
      rating: 5
    },
    {
      id: '2',
      name: 'Mike Chen',
      photo: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=400',
      quote: 'The quality of content on SEJ is exceptional. Every article is well-researched and provides actionable insights that I can implement immediately.',
      jobTitle: 'SEO Specialist',
      company: 'Growth Marketing Agency',
      rating: 5
    },
    {
      id: '3',
      name: 'Lisa Rodriguez',
      photo: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2Fed8ddc195d9d48969e0292b9e62d317b?format=webp&width=400',
      quote: 'As a content marketer, I rely on SEJ to keep me informed about industry changes. Their expert analysis and practical tips have been invaluable for my career growth.',
      jobTitle: 'Content Marketing Lead',
      company: 'Digital Solutions Co.',
      rating: 5
    },
    {
      id: '4',
      name: 'David Park',
      photo: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F52115549de9143c591653b13b2c69927?format=webp&width=400',
      quote: 'The webinars and guides from Search Engine Journal have transformed how I approach digital marketing. Highly recommended for any marketing professional.',
      jobTitle: 'Marketing Director',
      company: 'E-commerce Plus',
      rating: 5
    }
  ]

  if (!enabled || testimonials.length === 0) {
    return null
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Readers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of marketing professionals who trust Search Engine Journal 
            for the latest industry insights and expert guidance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <QuoteIcon className="h-12 w-12 text-blue-600 mb-6" />
            
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentIndex].photo}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].jobTitle}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              {/* Rating stars */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[currentIndex].rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-blue-600"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow text-gray-600 hover:text-blue-600"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Multiple testimonials grid (desktop) */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mt-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => goToTestimonial(index)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs text-gray-600">
                      {testimonial.jobTitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 line-clamp-3 italic">
                  "{testimonial.quote.substring(0, 120)}..."
                </p>
                
                <div className="flex items-center mt-3">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-3 w-3 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
