import React, { Suspense, lazy } from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import type { RouteRecord } from 'vite-react-ssg';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { getRoutes } from './routes';
import './styles/fonts.css';
import './styles/main.css';

// Lazy loaded components for code splitting
const Team = lazy(() => import('./pages/Team').then((m) => ({ default: m.Team })));
const Pratiques = lazy(() => import('./pages/Pratiques').then((m) => ({ default: m.Pratiques })));
const Blog = lazy(() => import('./pages/Blog').then((m) => ({ default: m.Blog })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Legal = lazy(() => import('./pages/Legal').then((m) => ({ default: m.Legal })));
const ServicePage = lazy(() => import('./pages/ServiceDetail').then((m) => ({ default: m.ServicePage })));

// OpenWidget - client only component
const OpenWidget = lazy(() => import('./components/OpenWidget'));

// Loading fallback component
const LoadingFallback = () => (
    <div className="p-8 text-center text-text-muted">Chargement...</div>
);

// Wrapper components with Suspense for lazy loaded pages
function TeamPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Team />
        </Suspense>
    );
}

function PratiquesPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Pratiques />
        </Suspense>
    );
}

function BlogPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Blog />
        </Suspense>
    );
}

function ContactPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Contact />
        </Suspense>
    );
}

function LegalPage() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Legal />
        </Suspense>
    );
}

function ServicePageWrapper({ serviceId }: { serviceId: string }) {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <ServicePage serviceId={serviceId} />
        </Suspense>
    );
}

// Route configuration for vite-react-ssg
// Using RouteRecord type for proper SSG support
const routes: RouteRecord[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/blog',
        element: <BlogPage />,
    },
    // Blog posts - using lazy loading with getStaticPaths and loader
    {
        path: '/blog/:slug',
        lazy: () => import('./pages/BlogPostSSG'),
        entry: 'src/pages/BlogPostSSG.tsx',
    },
    {
        path: '/equipe',
        element: <TeamPage />,
    },
    {
        path: '/pratiques',
        element: <PratiquesPage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
    {
        path: '/mentions-legales',
        element: <LegalPage />,
    },
    {
        path: '/services/kine-sport',
        element: <ServicePageWrapper serviceId="kine-sport" />,
    },
    {
        path: '/services/reeducation-post-traumatique',
        element: <ServicePageWrapper serviceId="reeducation-post-traumatique" />,
    },
    {
        path: '/services/prevention-preparation-physique',
        element: <ServicePageWrapper serviceId="prevention-preparation-physique" />,
    },
];

// Fix pour l'accès à l'admin Decap CMS (client-side only)
if (typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/admin')) {
        if (!window.location.pathname.includes('index.html')) {
            window.location.href = '/admin/index.html';
        }
    }
}

// ViteReactSSG export - no need for HelmetProvider, vite-react-ssg uses its own Head component
export const createRoot = ViteReactSSG(
    { routes, basename: '/' },
    ({ isClient }) => {
        // Client-side only setup
        if (isClient) {
            // Register service worker (deferred)
            import('./registerSW');
        }
    },
    ({ children }) => {
        return (
            <>
                {/* Only render OpenWidget on client side */}
                {typeof window !== 'undefined' && (
                    <Suspense fallback={null}>
                        <OpenWidget />
                    </Suspense>
                )}
                <Layout>{children}</Layout>
            </>
        );
    }
);

// Export getRoutes for SSG to know which paths to pre-render
export { getRoutes };
