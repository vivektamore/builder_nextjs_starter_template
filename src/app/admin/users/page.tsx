'use client'

import { useState } from 'react'
import { PlusIcon, EditIcon, TrashIcon, UserIcon, ShieldIcon, PenToolIcon, MailIcon, CalendarIcon, MoreHorizontalIcon } from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  role: 'super-admin' | 'admin' | 'author'
  status: 'active' | 'inactive' | 'pending'
  avatar?: string
  joinDate: string
  lastLogin: string
  articlesCount: number
  bio?: string
}

const UsersAdmin = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'super-admin',
      status: 'active',
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F58d2287985394e16867f6a8285bf9e4b?format=webp&width=400',
      joinDate: '2023-01-15',
      lastLogin: '2024-01-20',
      articlesCount: 25,
      bio: 'Founder and lead content strategist'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      role: 'admin',
      status: 'active',
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F8ee6ddb6607042d1a7267219bd2be73c?format=webp&width=400',
      joinDate: '2023-03-20',
      lastLogin: '2024-01-19',
      articlesCount: 18,
      bio: 'Content manager and SEO specialist'
    },
    {
      id: '3',
      name: 'Mike Chen',
      email: 'mike@example.com',
      role: 'author',
      status: 'active',
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2Fed8ddc195d9d48969e0292b9e62d317b?format=webp&width=400',
      joinDate: '2023-06-10',
      lastLogin: '2024-01-18',
      articlesCount: 12,
      bio: 'Technical SEO writer and consultant'
    },
    {
      id: '4',
      name: 'Lisa Rodriguez',
      email: 'lisa@example.com',
      role: 'author',
      status: 'pending',
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F5da5723087014f18a754f9207f7a5c9c%2F52115549de9143c591653b13b2c69927?format=webp&width=400',
      joinDate: '2024-01-15',
      lastLogin: 'Never',
      articlesCount: 0,
      bio: 'Content marketing specialist'
    }
  ])

  const [showForm, setShowForm] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'author' as const,
    bio: ''
  })
  const [currentUser] = useState({
    id: '1',
    role: 'super-admin'
  }) // Mock current user

  const roles = [
    { value: 'author', label: 'Author', description: 'Can create and submit articles' },
    { value: 'admin', label: 'Admin', description: 'Can manage content and users' },
    { value: 'super-admin', label: 'Super Admin', description: 'Full system access' }
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingUser) {
      // Update existing user (only allow if current user is super-admin or admin)
      if (currentUser.role === 'super-admin' || 
          (currentUser.role === 'admin' && editingUser.role !== 'super-admin')) {
        setUsers(prev => prev.map(user => 
          user.id === editingUser.id 
            ? { ...user, ...formData }
            : user
        ))
      }
    } else {
      // Add new user
      const newUser: User = {
        id: Date.now().toString(),
        ...formData,
        status: 'pending',
        joinDate: new Date().toISOString().split('T')[0],
        lastLogin: 'Never',
        articlesCount: 0
      }
      setUsers(prev => [newUser, ...prev])
    }

    resetForm()
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      role: 'author',
      bio: ''
    })
    setShowForm(false)
    setEditingUser(null)
  }

  const handleEdit = (user: User) => {
    // Only super-admin can edit all users, admin cannot edit super-admin
    if (currentUser.role === 'super-admin' || 
        (currentUser.role === 'admin' && user.role !== 'super-admin')) {
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role,
        bio: user.bio || ''
      })
      setEditingUser(user)
      setShowForm(true)
    }
  }

  const handleDelete = (id: string) => {
    const userToDelete = users.find(u => u.id === id)
    
    // Only super-admin can delete users, and cannot delete themselves
    if (currentUser.role === 'super-admin' && id !== currentUser.id) {
      if (confirm(`Are you sure you want to delete ${userToDelete?.name}? This action cannot be undone.`)) {
        setUsers(prev => prev.filter(user => user.id !== id))
      }
    }
  }

  const updateUserStatus = (id: string, status: 'active' | 'inactive') => {
    setUsers(prev => prev.map(user =>
      user.id === id ? { ...user, status } : user
    ))
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'super-admin':
        return <ShieldIcon className="h-4 w-4 text-red-600" />
      case 'admin':
        return <UserIcon className="h-4 w-4 text-blue-600" />
      case 'author':
        return <PenToolIcon className="h-4 w-4 text-green-600" />
      default:
        return <UserIcon className="h-4 w-4 text-gray-600" />
    }
  }

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'super-admin':
        return 'bg-red-100 text-red-800'
      case 'admin':
        return 'bg-blue-100 text-blue-800'
      case 'author':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'inactive':
        return 'bg-gray-100 text-gray-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const canEditUser = (user: User) => {
    return currentUser.role === 'super-admin' || 
           (currentUser.role === 'admin' && user.role !== 'super-admin')
  }

  const canDeleteUser = (user: User) => {
    return currentUser.role === 'super-admin' && user.id !== currentUser.id
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
              <p className="text-gray-600 mt-1">Manage authors, admins, and user permissions</p>
            </div>
            
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <PlusIcon className="h-5 w-5" />
              <span>Add User</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Total Users</div>
              <UserIcon className="h-5 w-5 text-gray-400" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{users.length}</div>
            <div className="text-sm text-gray-500">
              {users.filter(u => u.status === 'active').length} active
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Authors</div>
              <PenToolIcon className="h-5 w-5 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {users.filter(u => u.role === 'author').length}
            </div>
            <div className="text-sm text-gray-500">Content creators</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Admins</div>
              <ShieldIcon className="h-5 w-5 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {users.filter(u => u.role === 'admin' || u.role === 'super-admin').length}
            </div>
            <div className="text-sm text-gray-500">Admin users</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Pending</div>
              <CalendarIcon className="h-5 w-5 text-yellow-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {users.filter(u => u.status === 'pending').length}
            </div>
            <div className="text-sm text-gray-500">Awaiting approval</div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">User</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Role</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Articles</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Last Login</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <UserIcon className="h-6 w-6 text-gray-600" />
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-600">{user.email}</div>
                        {user.bio && (
                          <div className="text-xs text-gray-500 mt-1 max-w-xs truncate">
                            {user.bio}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {getRoleIcon(user.role)}
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleBadgeColor(user.role)}`}>
                        {user.role.replace('-', ' ')}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={user.status}
                      onChange={(e) => updateUserStatus(user.id, e.target.value as 'active' | 'inactive')}
                      disabled={!canEditUser(user)}
                      className={`text-xs font-semibold rounded-full border-0 ${getStatusBadgeColor(user.status)} ${
                        canEditUser(user) ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'
                      }`}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="pending">Pending</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {user.articlesCount} articles
                    </div>
                    <div className="text-xs text-gray-500">
                      Member since {user.joinDate}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {user.lastLogin === 'Never' ? (
                        <span className="text-gray-500">Never</span>
                      ) : (
                        user.lastLogin
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      {canEditUser(user) && (
                        <button
                          onClick={() => handleEdit(user)}
                          className="text-blue-600 hover:text-blue-700"
                          title="Edit user"
                        >
                          <EditIcon className="h-4 w-4" />
                        </button>
                      )}
                      {canDeleteUser(user) && (
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-red-600 hover:text-red-700"
                          title="Delete user"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      )}
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontalIcon className="h-4 w-4" />
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
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                {editingUser ? 'Edit User' : 'Add New User'}
              </h3>
              <button
                onClick={resetForm}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
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
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role *
                </label>
                <select
                  required
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {roles.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.label} - {role.description}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description about the user..."
                />
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {editingUser ? 'Update User' : 'Add User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default UsersAdmin
