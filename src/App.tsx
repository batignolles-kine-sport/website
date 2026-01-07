import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home'; // Eager load for critical route


const Team = lazy(() => import('./pages/Team').then((m) => ({ default: m.Team })));
const Pratiques = lazy(() => import('./pages/Pratiques').then((m) => ({ default: m.Pratiques })));
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then((m) => ({ default: m.BlogPost })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Legal = lazy(() => import('./pages/Legal').then((m) => ({ default: m.Legal })));
const ServicePage = lazy(() => import('./pages/ServiceDetail').then((m) => ({ default: m.ServicePage })));
const DesignSystem = lazy(() => import('./pages/DesignSystem'));

// Composant de redirection pour préserver le slug (ancienne URL pathologies)
const PathologiesRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (slug) {
    return <Navigate to={`/blog/${slug}`} replace />;
  }
  return <Navigate to="/blog" replace />;
};

import OpenWidget from './components/OpenWidget';

const App: React.FC = () => {
  return (
    <Router>
      <OpenWidget />
      <Layout>
        <Suspense fallback={<div className="p-8 text-center text-text-muted">Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Services Routes */}
            <Route path="/services/kine-sport" element={<ServicePage serviceId="kine-sport" />} />
            <Route path="/services/reeducation-post-traumatique" element={<ServicePage serviceId="reeducation-post-traumatique" />} />
            <Route path="/services/prevention-preparation-physique" element={<ServicePage serviceId="prevention-preparation-physique" />} />

            {/* Redirect generic service root to first service or home */}
            <Route path="/services" element={<Navigate to="/services/kine-sport" replace />} />

            {/* Blog routes (nouvelle architecture unifiée) */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/pratiques" element={<Pratiques />} />

            {/* Redirections anciennes URLs pathologies vers blog */}
            <Route path="/pathologies" element={<Navigate to="/blog" replace />} />
            <Route path="/pathologies/:slug" element={<PathologiesRedirect />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<Legal />} />
            <Route path="/design-system" element={<DesignSystem />} />

            {/* 404 Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;