'use client'

import { useState } from 'react'
import { PlusIcon, EditIcon, TrashIcon, ImageIcon, StarIcon, EyeIcon, ToggleLeftIcon, ToggleRightIcon } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  photo: string
  quote: string
  jobTitle: string
  company: string
  rating: number
  enabled: boolean
  createdAt: string
}

const TestimonialsAdmin = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      photo: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=400',
      quote: 'Search Engine Journal has been my go-to resource for staying updated with the latest SEO trends.',
      jobTitle: 'Digital Marketing Manager',
      company: 'TechCorp Inc.',
      rating: 5,
      enabled: true,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Mike Chen',
      photo: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=400',
      quote: 'The quality of content on SEJ is exceptional. Every article provides actionable insights.',
      jobTitle: 'SEO Specialist',
      company: 'Growth Marketing Agency',
      rating: 5,
      enabled: true,
      createdAt: '2024-01-12'
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null)
  const [sectionEnabled, setSectionEnabled] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    quote: '',
    jobTitle: '',
    company: '',
    rating: 5
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingTestimonial) {
      // Update existing testimonial
      setTestimonials(prev => prev.map(testimonial => 
        testimonial.id === editingTestimonial.id 
          ? { ...testimonial, ...formData }
          : testimonial
      ))
    } else {
      // Add new testimonial
      const newTestimonial: Testimonial = {
        id: Date.now().toString(),
        ...formData,
        enabled: true,
        createdAt: new Date().toISOString().split('T')[0]
      }
      setTestimonials(prev => [newTestimonial, ...prev])
    }

    // Reset form
    setFormData({
      name: '',
      photo: '',
      quote: '',
      jobTitle: '',
      company: '',
      rating: 5
    })
    setShowForm(false)
    setEditingTestimonial(null)
  }

  const handleEdit = (testimonial: Testimonial) => {
    setFormData({
      name: testimonial.name,
      photo: testimonial.photo,
      quote: testimonial.quote,
      jobTitle: testimonial.jobTitle,
      company: testimonial.company,
      rating: testimonial.rating
    })
    setEditingTestimonial(testimonial)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(prev => prev.filter(testimonial => testimonial.id !== id))
    }
  }

  const toggleTestimonial = (id: string) => {
    setTestimonials(prev => prev.map(testimonial =>
      testimonial.id === id 
        ? { ...testimonial, enabled: !testimonial.enabled }
        : testimonial
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Testimonials Management</h1>
              <p className="text-gray-600 mt-1">Manage customer testimonials and reviews</p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Section Toggle */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Section Enabled:</span>
                <button
                  onClick={() => setSectionEnabled(!sectionEnabled)}
                  className={`p-1 rounded-full transition-colors ${
                    sectionEnabled ? 'text-green-600' : 'text-gray-400'
                  }`}
                >
                  {sectionEnabled ? (
                    <ToggleRightIcon className="h-6 w-6" />
                  ) : (
                    <ToggleLeftIcon className="h-6 w-6" />
                  )}
                </button>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <PlusIcon className="h-5 w-5" />
                <span>Add Testimonial</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Total Testimonials</div>
              <StarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{testimonials.length}</div>
            <div className="text-sm text-gray-500">
              {testimonials.filter(t => t.enabled).length} active
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Average Rating</div>
              <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {(testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length || 0).toFixed(1)}
            </div>
            <div className="text-sm text-gray-500">Out of 5 stars</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Section Status</div>
              <EyeIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className={`text-3xl font-bold ${sectionEnabled ? 'text-green-600' : 'text-gray-400'}`}>
              {sectionEnabled ? 'Enabled' : 'Disabled'}
            </div>
            <div className="text-sm text-gray-500">Public visibility</div>
          </div>
        </div>

        {/* Testimonials Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Person</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Testimonial</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Rating</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {testimonials.map((testimonial) => (
                <tr key={testimonial.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.jobTitle}</div>
                        <div className="text-xs text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-md">
                      <p className="text-gray-900 line-clamp-2">"{testimonial.quote}"</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({testimonial.rating})</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleTestimonial(testimonial.id)}
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        testimonial.enabled
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {testimonial.enabled ? 'Active' : 'Inactive'}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(testimonial)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <EditIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(testimonial.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                {editingTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}
              </h3>
              <button
                onClick={() => {
                  setShowForm(false)
                  setEditingTestimonial(null)
                  setFormData({
                    name: '',
                    photo: '',
                    quote: '',
                    jobTitle: '',
                    company: '',
                    rating: 5
                  })
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Marketing Manager"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Company Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Photo URL *
                </label>
                <input
                  type="url"
                  required
                  value={formData.photo}
                  onChange={(e) => handleInputChange('photo', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Testimonial Quote *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.quote}
                  onChange={(e) => handleInputChange('quote', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write the testimonial quote here..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleInputChange('rating', star)}
                      className={`h-8 w-8 ${
                        star <= formData.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    >
                      <StarIcon className="h-full w-full" />
                    </button>
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({formData.rating} stars)</span>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {editingTestimonial ? 'Update Testimonial' : 'Add Testimonial'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default TestimonialsAdmin
