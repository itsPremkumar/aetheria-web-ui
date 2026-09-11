import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import DesignSystem from './pages/DesignSystem'
import Verticals from './pages/Verticals'
import Analytics from './pages/Analytics'
import RealTime from './pages/RealTime'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/design-system" element={<DesignSystem />} />
            <Route path="/verticals" element={<Verticals />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/realtime" element={<RealTime />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
