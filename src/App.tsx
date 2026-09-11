import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import DesignSystem from './pages/DesignSystem'
import Verticals from './pages/Verticals'
import Analytics from './pages/Analytics'
import RealTime from './pages/RealTime'
import NotFound from './pages/NotFound'

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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
