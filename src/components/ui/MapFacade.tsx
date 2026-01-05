import React, { useState } from 'react';
import { MapPin, Loader2 } from 'lucide-react';

interface MapFacadeProps {
    mapSrc: string;
    title: string;
    className?: string;
}

export const MapFacade: React.FC<MapFacadeProps> = ({ mapSrc, title, className = '' }) => {
    const [isActivated, setIsActivated] = useState(false);
    const [isIframeLoading, setIsIframeLoading] = useState(true);

    if (isActivated) {
        return (
            <div className={`relative h-full w-full bg-slate-100 ${className}`}>
                {isIframeLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 transition-opacity duration-300">
                        <Loader2 className="w-10 h-10 text-primary animate-spin mb-3" />
                        <span className="text-sm font-medium text-slate-500 animate-pulse">Chargement de la carte...</span>
                    </div>
                )}
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={title}
                    onLoad={() => setIsIframeLoading(false)}
                    className={`transition-opacity duration-500 ${isIframeLoading ? 'opacity-0' : 'opacity-100'}`}
                />
            </div>
        );
    }

    return (
        <div
            className={`relative h-full w-full bg-slate-200 cursor-pointer group overflow-hidden ${className}`}
            onClick={() => setIsActivated(true)}
            role="button"
            aria-label="Charger la carte Google Maps"
        >
            {/* Map Preview Image - Optimized Implementation */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <img
                    src="/images/landing/map-preview.webp"
                    alt="Aperçu de l'emplacement du cabinet"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="600"
                />
                {/* Gradient overlay to ensure text/icon readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 transform group-hover:scale-110 transition-transform text-primary ring-4 ring-white/20">
                    <MapPin size={32} />
                </div>
                <div className="bg-white/95 backdrop-blur-sm px-6 py-2.5 rounded-full shadow-xl font-semibold text-slate-900 border border-white/40 flex items-center gap-2 transform group-hover:translate-y-[-4px] transition-transform">
                    Afficher la carte
                </div>
            </div>
        </div>
    );
};
