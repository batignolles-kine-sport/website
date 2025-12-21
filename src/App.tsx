import React, { Suspense, lazy, useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import './styles/loader.css';

const Team = lazy(() => import('./pages/Team').then((m) => ({ default: m.Team })));
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then((m) => ({ default: m.BlogPost })));
const Pathologies = lazy(() => import('./pages/Pathologies').then((m) => ({ default: m.Pathologies })));
const PathologyPost = lazy(() => import('./pages/PathologyPost').then((m) => ({ default: m.PathologyPost })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Legal = lazy(() => import('./pages/Legal').then((m) => ({ default: m.Legal })));
const ServicePage = lazy(() => import('./pages/ServiceDetail').then((m) => ({ default: m.ServicePage })));

const RouteLoader: React.FC = () => {
  const location = useLocation();
  const [renderOverlay, setRenderOverlay] = useState(true);
  const [overlayState, setOverlayState] = useState<'visible' | 'hiding' | 'hidden'>('visible');
  const [barKey, setBarKey] = useState(0);

  useEffect(() => {
    const hide = () => {
      setOverlayState('hiding');
      window.setTimeout(() => {
        setOverlayState('hidden');
        setRenderOverlay(false);
      }, 220);
    };

    if (document.readyState === 'complete') {
      const t = window.setTimeout(hide, 80);
      return () => window.clearTimeout(t);
    }
    window.addEventListener('load', hide);
    return () => window.removeEventListener('load', hide);
  }, []);

  useEffect(() => {
    setRenderOverlay(true);
    setOverlayState('visible');
    setBarKey((k) => k + 1);
    const t = window.setTimeout(() => {
      setOverlayState('hiding');
      window.setTimeout(() => {
        setOverlayState('hidden');
        setRenderOverlay(false);
      }, 220);
    }, 450);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.search]);

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-[2001] h-1 w-full overflow-hidden">
        <div key={barKey} className="route-bar h-full w-full bg-primary animate-route-progress" />
      </div>

      {renderOverlay && (
        <div
          className={`loader-overlay pointer-events-none fixed inset-0 z-[2000] flex items-center justify-center`}
          data-state={overlayState}
        >
          <div className="scale-75 sm:scale-90">
            <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
              <div className="wheel"></div>
              <div className="hamster">
                <div className="hamster__body">
                  <div className="hamster__head">
                    <div className="hamster__ear"></div>
                    <div className="hamster__eye"></div>
                    <div className="hamster__nose"></div>
                  </div>
                  <div className="hamster__limb hamster__limb--fr"></div>
                  <div className="hamster__limb hamster__limb--fl"></div>
                  <div className="hamster__limb hamster__limb--br"></div>
                  <div className="hamster__limb hamster__limb--bl"></div>
                  <div className="hamster__tail"></div>
                </div>
              </div>
              <div className="spoke"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// We map the service routes manually to ensure type safety and proper component rendering
const App: React.FC = () => {
  return (
    <Router>
      <RouteLoader />
      <Layout>
        <Suspense fallback={<div className="p-8 text-center text-text-light">Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Services Routes */}
            <Route path="/services/kine-sport" element={<ServicePage serviceId="kine-sport" />} />
            <Route path="/services/reeducation-post-traumatique" element={<ServicePage serviceId="reeducation-post-traumatique" />} />
            <Route path="/services/prevention-preparation-physique" element={<ServicePage serviceId="prevention-preparation-physique" />} />
            
            {/* Redirect generic service root to first service or home */}
            <Route path="/services" element={<Navigate to="/services/kine-sport" replace />} />

            <Route path="/pathologies" element={<Pathologies />} />
            <Route path="/pathologies/:slug" element={<PathologyPost />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<Legal />} />
            
            {/* 404 Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;