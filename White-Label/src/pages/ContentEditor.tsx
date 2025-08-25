import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { db, storage } from '../lib/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Image as ImageIcon,
  Type,
  Layout,
  Users,
  Menu,
  MapPin,
  Phone,
  Upload
} from 'lucide-react'

interface SiteContent {
  hero: {
    title: string
    subtitle: string
    ctaText: string
    backgroundImage: string
  }
  about: {
    title: string
    description: string
    features: string[]
  }
  services: Array<{
    id: string
    title: string
    description: string
    price: string
    image: string
  }>
  testimonials: Array<{
    id: string
    name: string
    role: string
    company: string
    text: string
    rating: number
  }>
  contact: {
    phone: string
    email: string
    address: string
    hours: string
  }
}

export default function ContentEditor() {
  const { clientId } = useParams()
  const [content, setContent] = useState<SiteContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('hero')
  const [previewMode, setPreviewMode] = useState(false)

  useEffect(() => {
    loadContent()
  }, [clientId])

  const loadContent = async () => {
    try {
      // Mock data - replace with actual Firestore fetch
      const mockContent: SiteContent = {
        hero: {
          title: 'NOIR Cinema Catering',
          subtitle: 'Elevating Film Production Dining in Atlanta',
          ctaText: 'Get Started',
          backgroundImage: '/images/hero-catering-spread.jpg'
        },
        about: {
          title: 'About NOIR Cinema Catering',
          description: 'We specialize in providing exceptional catering services for film and television productions.',
          features: ['24/7 Service', 'Mobile Kitchen', 'Dietary Options', 'Professional Team']
        },
        services: [
          {
            id: '1',
            title: 'Breakfast Service',
            description: 'Fresh, energizing breakfast options to start the production day right',
            price: 'From $15/person',
            image: '/images/breakfast-catering.jpg'
          },
          {
            id: '2',
            title: 'Lunch Service',
            description: 'Hearty, satisfying lunches to keep your crew fueled',
            price: 'From $20/person',
            image: '/images/hot-lunch-buffet.jpg'
          }
        ],
        testimonials: [
          {
            id: '1',
            name: 'Sarah Mitchell',
            role: 'Production Manager',
            company: 'Atlanta Film Studios',
            text: 'NOIR Cinema Catering transformed our production experience.',
            rating: 5
          }
        ],
        contact: {
          phone: '(404) 555-0123',
          email: 'info@noircinemacatering.com',
          address: '123 Film Row, Atlanta, GA 30301',
          hours: 'Available 24/7 for Productions'
        }
      }
      
      setContent(mockContent)
    } catch (error) {
      console.error('Error loading content:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!content || !clientId) return
    
    setSaving(true)
    try {
      await setDoc(doc(db, 'sites', clientId), content)
      alert('Content saved successfully!')
    } catch (error) {
      console.error('Error saving content:', error)
      alert('Error saving content')
    } finally {
      setSaving(false)
    }
  }

  const handleImageUpload = async (file: File, path: string) => {
    try {
      const storageRef = ref(storage, `clients/${clientId}/${path}`)
      const snapshot = await uploadBytes(storageRef, file)
      const url = await getDownloadURL(snapshot.ref)
      return url
    } catch (error) {
      console.error('Error uploading image:', error)
      throw error
    }
  }

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (!content) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-xl font-semibold">Edit: {clientId}</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900"
              >
                <Eye className="h-5 w-5 mr-2" />
                {previewMode ? 'Edit' : 'Preview'}
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                <Save className="h-5 w-5 mr-2" />
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-4">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('hero')}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'hero' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Layout className="h-4 w-4 mr-3" />
                  Hero Section
                </button>
                <button
                  onClick={() => setActiveTab('about')}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'about' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Type className="h-4 w-4 mr-3" />
                  About
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'services' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Menu className="h-4 w-4 mr-3" />
                  Services
                </button>
                <button
                  onClick={() => setActiveTab('testimonials')}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'testimonials' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Users className="h-4 w-4 mr-3" />
                  Testimonials
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === 'contact' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Phone className="h-4 w-4 mr-3" />
                  Contact
                </button>
              </nav>
            </div>
          </div>

          {/* Content Editor */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow p-6">
              {activeTab === 'hero' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold mb-4">Hero Section</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Main Title
                    </label>
                    <input
                      type="text"
                      value={content.hero.title}
                      onChange={(e) => setContent({
                        ...content,
                        hero: { ...content.hero, title: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subtitle
                    </label>
                    <textarea
                      value={content.hero.subtitle}
                      onChange={(e) => setContent({
                        ...content,
                        hero: { ...content.hero, subtitle: e.target.value }
                      })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Call to Action Text
                    </label>
                    <input
                      type="text"
                      value={content.hero.ctaText}
                      onChange={(e) => setContent({
                        ...content,
                        hero: { ...content.hero, ctaText: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Background Image
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files?.[0]
                          if (file) {
                            const url = await handleImageUpload(file, 'hero-bg.jpg')
                            setContent({
                              ...content,
                              hero: { ...content.hero, backgroundImage: url }
                            })
                          }
                        }}
                        className="hidden"
                        id="hero-image-upload"
                      />
                      <label
                        htmlFor="hero-image-upload"
                        className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 cursor-pointer"
                      >
                        <Upload className="h-5 w-5 mr-2" />
                        Upload Image
                      </label>
                      {content.hero.backgroundImage && (
                        <img 
                          src={content.hero.backgroundImage} 
                          alt="Hero background" 
                          className="h-20 w-32 object-cover rounded"
                        />
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Services</h2>
                    <button
                      onClick={() => {
                        const newService = {
                          id: Date.now().toString(),
                          title: 'New Service',
                          description: 'Service description',
                          price: 'From $X',
                          image: ''
                        }
                        setContent({
                          ...content,
                          services: [...content.services, newService]
                        })
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Add Service
                    </button>
                  </div>

                  {content.services.map((service, index) => (
                    <div key={service.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
                      <div className="flex justify-between">
                        <h3 className="font-medium">Service {index + 1}</h3>
                        <button
                          onClick={() => {
                            setContent({
                              ...content,
                              services: content.services.filter(s => s.id !== service.id)
                            })
                          }}
                          className="text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Title
                        </label>
                        <input
                          type="text"
                          value={service.title}
                          onChange={(e) => {
                            const updatedServices = [...content.services]
                            updatedServices[index].title = e.target.value
                            setContent({ ...content, services: updatedServices })
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <textarea
                          value={service.description}
                          onChange={(e) => {
                            const updatedServices = [...content.services]
                            updatedServices[index].description = e.target.value
                            setContent({ ...content, services: updatedServices })
                          }}
                          rows={2}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Price
                        </label>
                        <input
                          type="text"
                          value={service.price}
                          onChange={(e) => {
                            const updatedServices = [...content.services]
                            updatedServices[index].price = e.target.value
                            setContent({ ...content, services: updatedServices })
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'testimonials' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Testimonials</h2>
                    <button
                      onClick={() => {
                        const newTestimonial = {
                          id: Date.now().toString(),
                          name: 'Client Name',
                          role: 'Position',
                          company: 'Company',
                          text: 'Testimonial text...',
                          rating: 5
                        }
                        setContent({
                          ...content,
                          testimonials: [...content.testimonials, newTestimonial]
                        })
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Add Testimonial
                    </button>
                  </div>

                  {content.testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="border border-gray-200 rounded-lg p-4 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                          </label>
                          <input
                            type="text"
                            value={testimonial.name}
                            onChange={(e) => {
                              const updated = [...content.testimonials]
                              updated[index].name = e.target.value
                              setContent({ ...content, testimonials: updated })
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company
                          </label>
                          <input
                            type="text"
                            value={testimonial.company}
                            onChange={(e) => {
                              const updated = [...content.testimonials]
                              updated[index].company = e.target.value
                              setContent({ ...content, testimonials: updated })
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Testimonial
                        </label>
                        <textarea
                          value={testimonial.text}
                          onChange={(e) => {
                            const updated = [...content.testimonials]
                            updated[index].text = e.target.value
                            setContent({ ...content, testimonials: updated })
                          }}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                      </div>

                      <button
                        onClick={() => {
                          setContent({
                            ...content,
                            testimonials: content.testimonials.filter(t => t.id !== testimonial.id)
                          })
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        Remove Testimonial
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={content.contact.phone}
                      onChange={(e) => setContent({
                        ...content,
                        contact: { ...content.contact, phone: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={content.contact.email}
                      onChange={(e) => setContent({
                        ...content,
                        contact: { ...content.contact, email: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      value={content.contact.address}
                      onChange={(e) => setContent({
                        ...content,
                        contact: { ...content.contact, address: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Hours
                    </label>
                    <input
                      type="text"
                      value={content.contact.hours}
                      onChange={(e) => setContent({
                        ...content,
                        contact: { ...content.contact, hours: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}