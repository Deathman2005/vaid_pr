import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import SmoothScroll from './components/SmoothScroll';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SmoothScroll>
          <div className="min-h-screen bg-brand-bg selection:bg-brand-lime/30 selection:text-brand-dark">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/:slug" element={<ServicePage />} />
              </Routes>
            </AnimatePresence>
          </div>
        </SmoothScroll>
      </Router>
    </HelmetProvider>
  );
}

export default App;
