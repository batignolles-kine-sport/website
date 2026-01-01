import React from 'react';
import { MapPin, Train, Car, Activity } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { ADDRESS, DOCTOLIB_URL } from '../../utils/constants';

export const AccessSection: React.FC = () => {
    return (
        <section className="py-10 md:py-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <SectionHeader
                    badge="CONTACT"
                    title={
                        <>
                            Venir<br />
                            <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">au cabinet.</span>
                        </>
                    }
                    description="Nous vous accueillons du lundi au vendredi, avec des équipements de pointe pour votre rééducation."
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-slate-100 flex flex-col justify-between h-full">
                    <div>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="text-primary mt-1 mr-4 shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">Adresse & transports</h3>
                                    <p className="text-slate-600">{ADDRESS}</p>
                                    <div className="mt-3 space-y-1 text-sm text-slate-500">
                                        <p className="flex items-center"><Train size={14} className="mr-2" /> Métro : Rome (L2), Place de Clichy (L2, L13)</p>
                                        <p className="flex items-center"><Car size={14} className="mr-2" /> Parking : Mairie du 17ème, 20 Rue des Batignolles</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Activity className="text-primary mt-1 mr-4 shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">Horaires</h3>
                                    <p className="text-slate-600">Lundi – Vendredi : 8h00 – 21h00</p>
                                    <p className="text-slate-500 text-sm mt-2">
                                        Des créneaux tôt le matin et en fin de journée pour s’adapter à votre emploi du temps.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Button href={DOCTOLIB_URL} variant="booking" className="w-full sm:w-auto">
                            Prendre rendez-vous
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="h-full min-h-map w-full rounded-2xl overflow-hidden shadow-card bg-gray-200 bg-surface">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.68397904634!2d2.321234876520314!3d48.88330069895298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd1fdf67bd%3A0x49cb2ecbd1bf21c1!2sBatignolles%20Kiné%20Sport%20%7C%20Paris%2017!5e0!3m2!1sfr!2sfr!4v1765299373175!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            className="border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Carte Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
