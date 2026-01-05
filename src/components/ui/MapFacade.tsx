import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface MapFacadeProps {
    mapSrc: string;
    title: string;
    className?: string;
}

export const MapFacade: React.FC<MapFacadeProps> = ({ mapSrc, title, className = '' }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    if (isLoaded) {
        return (
            <div className={`h-full w-full ${className}`}>
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={title}
                />
            </div>
        );
    }

    return (
        <div
            className={`relative h-full w-full bg-slate-200 cursor-pointer group overflow-hidden ${className}`}
            onClick={() => setIsLoaded(true)}
            role="button"
            aria-label="Charger la carte Google Maps"
        >
            {/* Background/Placeholder - replaced with a static gradient */}
            <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-70 transition-opacity flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                {/* Fallback pattern if image fails */}
                <div className="absolute inset-0 bg-slate-200/50" />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 transform group-hover:scale-110 transition-transform text-primary">
                    <MapPin size={32} />
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm font-medium text-slate-900 border border-white/20">
                    Afficher la carte
                </div>
            </div>
        </div>
    );
};
