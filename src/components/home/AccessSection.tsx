import React from 'react';
import { MapPin, Train, Car, Activity } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { MapFacade } from '../ui/MapFacade';
import { ADDRESS, DOCTOLIB_URL } from '../../utils/constants';

export const AccessSection: React.FC = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <SectionHeader
                    badge="CONTACT"
                    title={
                        <>
                            Venir<br />
                            <span className="text-gradient-primary">au cabinet.</span>
                        </>
                    }
                    description="Nous vous accueillons du lundi au vendredi, avec des équipements de pointe pour votre rééducation."
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-card border border-slate-100 flex flex-col justify-between h-full">
                    <div>
                        <div className="space-y-5">
                            <div className="flex items-start">
                                <MapPin className="text-primary mt-1 mr-4 shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Adresse & transports</h3>
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
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Horaires</h3>
                                    <p className="text-slate-600">Lundi – Vendredi : 8h00 – 21h00</p>
                                    <p className="text-slate-500 text-sm mt-2">
                                        Des créneaux tôt le matin et en fin de journée pour s’adapter à votre emploi du temps.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Button href={DOCTOLIB_URL} variant="booking" className="w-full sm:w-auto">
                            Prendre rendez-vous
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="h-full min-h-map w-full rounded-2xl overflow-hidden shadow-card bg-gray-200">
                        <MapFacade
                            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.68397904634!2d2.321234876520314!3d48.88330069895298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd1fdf67bd%3A0x49cb2ecbd1bf21c1!2sBatignolles%20Kiné%20Sport%20%7C%20Paris%2017!5e0!3m2!1sfr!2sfr!4v1765299373175!5m2!1sfr!2sfr"
                            title="Carte Google Maps"
                            className="rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
