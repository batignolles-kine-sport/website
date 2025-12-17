import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';

const Team = lazy(() => import('./pages/Team').then((m) => ({ default: m.Team })));
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then((m) => ({ default: m.BlogPost })));
const Pathologies = lazy(() => import('./pages/Pathologies').then((m) => ({ default: m.Pathologies })));
const PathologyPost = lazy(() => import('./pages/PathologyPost').then((m) => ({ default: m.PathologyPost })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Legal = lazy(() => import('./pages/Legal').then((m) => ({ default: m.Legal })));
const ServicePage = lazy(() => import('./pages/ServiceDetail').then((m) => ({ default: m.ServicePage })));

// We map the service routes manually to ensure type safety and proper component rendering
const App: React.FC = () => {
  return (
    <Router>
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