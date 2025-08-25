import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { db } from '../lib/firebase'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { 
  BarChart3, 
  Users, 
  Globe, 
  Activity,
  LogOut,
  Plus,
  Edit,
  Eye,
  TrendingUp
} from 'lucide-react'

interface Client {
  id: string
  name: string
  domain: string
  status: 'active' | 'inactive'
  lastUpdated: Date
  monthlyVisits: number
  totalLeads: number
}

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalClients: 0,
    activeClients: 0,
    totalVisits: 0,
    totalLeads: 0
  })

  useEffect(() => {
    loadClients()
  }, [])

  const loadClients = async () => {
    try {
      // Mock data for now - replace with actual Firestore queries
      const mockClients: Client[] = [
        {
          id: 'noir-catering',
          name: 'NOIR Cinema Catering',
          domain: 'noircinemacatering.com',
          status: 'active',
          lastUpdated: new Date(),
          monthlyVisits: 1250,
          totalLeads: 48
        },
        {
          id: 'joes-plumbing',
          name: "Joe's Plumbing Services",
          domain: 'joesplumbing.com',
          status: 'active',
          lastUpdated: new Date(Date.now() - 86400000),
          monthlyVisits: 890,
          totalLeads: 32
        },
        {
          id: 'salon-beauty',
          name: 'Salon Beauty & Spa',
          domain: 'salonbeautyspa.com',
          status: 'active',
          lastUpdated: new Date(Date.now() - 172800000),
          monthlyVisits: 2100,
          totalLeads: 67
        }
      ]

      setClients(mockClients)
      
      // Calculate stats
      setStats({
        totalClients: mockClients.length,
        activeClients: mockClients.filter(c => c.status === 'active').length,
        totalVisits: mockClients.reduce((sum, c) => sum + c.monthlyVisits, 0),
        totalLeads: mockClients.reduce((sum, c) => sum + c.totalLeads, 0)
      })
    } catch (error) {
      console.error('Error loading clients:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-semibold">Business Management Platform</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user?.email}</span>
              <button
                onClick={signOut}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Clients</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalClients}</p>
              </div>
              <Users className="h-10 w-10 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Sites</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeClients}</p>
              </div>
              <Activity className="h-10 w-10 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Monthly Visits</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalVisits.toLocaleString()}</p>
              </div>
              <BarChart3 className="h-10 w-10 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalLeads}</p>
              </div>
              <TrendingUp className="h-10 w-10 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Clients Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Client Websites</h2>
            <Link
              to="/clients"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Client
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Domain
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Monthly Visits
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Leads
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{client.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <Globe className="h-4 w-4 mr-2" />
                        {client.domain}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        client.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {client.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {client.monthlyVisits.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {client.totalLeads}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <Link
                          to={`/editor/${client.id}`}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit Content"
                        >
                          <Edit className="h-5 w-5" />
                        </Link>
                        <a
                          href={`https://${client.domain}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900"
                          title="View Site"
                        >
                          <Eye className="h-5 w-5" />
                        </a>
                        <Link
                          to={`/analytics/${client.id}`}
                          className="text-purple-600 hover:text-purple-900"
                          title="View Analytics"
                        >
                          <BarChart3 className="h-5 w-5" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

// Add missing import
import { Briefcase } from 'lucide-react'