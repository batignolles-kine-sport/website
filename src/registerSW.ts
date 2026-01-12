/**
 * Manual Service Worker Registration
 * Deferred to avoid blocking initial page load and LCP
 */

// Wait for page to be fully loaded before registering SW
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Additional delay to ensure critical rendering is complete
        setTimeout(() => {
            navigator.serviceWorker
                .register('/sw.js', { scope: '/' })
                .then((registration) => {
                    console.log('SW registered:', registration);

                    // Check for updates periodically
                    setInterval(() => {
                        registration.update();
                    }, 60 * 60 * 1000); // Check every hour
                })
                .catch((error) => {
                    console.error('SW registration failed:', error);
                });
        }, 2000); // 2 second delay after load
    });
}
