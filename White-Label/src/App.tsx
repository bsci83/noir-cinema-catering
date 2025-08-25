import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ClientManager from './pages/ClientManager'
import ContentEditor from './pages/ContentEditor'
import MediaLibrary from './pages/MediaLibrary'
import Analytics from './pages/Analytics'
import LandingPage from './pages/LandingPage'
import PlatformLanding from './pages/PlatformLanding'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PlatformLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="clients" element={<ClientManager />} />
          <Route path="editor/:clientId" element={<ContentEditor />} />
          <Route path="media/:clientId" element={<MediaLibrary />} />
          <Route path="analytics/:clientId" element={<Analytics />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App