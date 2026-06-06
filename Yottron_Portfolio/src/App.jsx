import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import PageLayout from './components/common/PageLayout'
import Home from './pages/Home'
import AiAutomation from './pages/aiautomation'
import WebApplication from './pages/webapplication'
import CloudMigrations from './pages/cloudmigrations'
import Cybersecurity from './pages/cybersecurity'
import MobileAppDev from './pages/MobileAppDev'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ai-automation" element={<AiAutomation />} />
          <Route path="/web-application" element={<WebApplication />} />
          <Route path="/cloud-migrations" element={<CloudMigrations />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/mobile-app" element={<MobileAppDev />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
