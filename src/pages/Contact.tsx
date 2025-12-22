import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Train, Car } from 'lucide-react';
import { SEO } from '../components/layout/SEO';
import { Button } from '../components/ui/Button';
import { ADDRESS, EMAIL, DOCTOLIB_URL, PHONE } from '../utils/constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: 'sport',
    message: '',
    consent: false
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Validate
    if (!formData.consent) {
      alert("Veuillez accepter la politique de confidentialité.");
      setStatus('idle');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'sport',
        message: '',
        consent: false
      });
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Contactez-nous - Batignolles Kiné Sport" 
        description="Prendre rendez-vous ou nous contacter. Cabinet situé au 6 rue des Batignolles, Paris 17e." 
      />

      <div className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-text-main mb-4">Contact</h1>
          <p className="text-xl text-text-light">
            Une question ? Besoin d'informations ? Nous sommes à votre écoute.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-text-main mb-6">Envoyez-nous un message</h2>
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-bold mb-2">Message envoyé !</h3>
                  <p>Merci de nous avoir contactés. Nous vous répondrons sous 24h ouvrées.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-primary font-medium hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-text-main mb-1">Prénom</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-text-main mb-1">Nom</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-main mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-main mb-1">Téléphone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[0-9]{10}"
                        placeholder="0612345678"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-main mb-1">Sujet / Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    >
                      <option value="sport">Kiné du Sport</option>
                      <option value="reeducation">Rééducation</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-main mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      minLength={10}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={handleCheckbox}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-text-light">
                      J'accepte que mes données soient traitées pour répondre à ma demande. Aucune donnée n'est transmise à des tiers.
                    </label>
                  </div>

                  <Button type="submit" disabled={status === 'submitting'} fullWidth>
                    {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Info & Map */}
            <div>
               <div className="bg-secondary p-8 rounded-lg mb-8">
                 <h3 className="text-xl font-bold text-text-main mb-6">Coordonnées</h3>
                 <ul className="space-y-6">
                   <li className="flex items-start">
                     <MapPin className="text-primary mt-1 mr-4 shrink-0" />
                     <div>
                       <span className="font-semibold block text-text-main">Adresse</span>
                       <span className="text-text-light">{ADDRESS}</span>
                       <div className="mt-2 space-y-1 text-sm text-text-light">
                         <p className="flex items-center"><Train size={14} className="mr-2" /> Métro Rome (L2)</p>
                         <p className="flex items-center"><Train size={14} className="mr-2" /> Place de Clichy (L2, L13)</p>
                         <p className="flex items-center"><Train size={14} className="mr-2" /> Gare Haussmann St-Lazare (RER A, E)</p>
                         <p className="flex items-center"><Car size={14} className="mr-2" /> Parking Mairie du 17ème (20 Rue des Batignolles)</p>
                       </div>
                     </div>
                   </li>
                   <li className="flex items-start">
                     <Phone className="text-primary mt-1 mr-4 shrink-0" />
                     <div>
                       <span className="font-semibold block text-text-main">Téléphone</span>
                       <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="text-text-light hover:text-primary">{PHONE}</a>
                     </div>
                   </li>
                   <li className="flex items-start">
                     <Mail className="text-primary mt-1 mr-4 shrink-0" />
                     <div>
                       <span className="font-semibold block text-text-main">Email</span>
                       <a href={`mailto:${EMAIL}`} className="text-text-light hover:text-primary">{EMAIL}</a>
                     </div>
                   </li>
                   <li className="flex items-start">
                     <Clock className="text-primary mt-1 mr-4 shrink-0" />
                     <div>
                       <span className="font-semibold block text-text-main">Horaires</span>
                       <p className="text-text-light">Lundi - Vendredi : 8h00 - 21h00</p>
                     </div>
                   </li>
                 </ul>
                 <div className="mt-8">
                   <Button href={DOCTOLIB_URL} variant="booking" className="w-full sm:w-auto">
                     Prendre rendez-vous
                    </Button>
                 </div>
               </div>
               
               <div className="h-64 rounded-lg overflow-hidden shadow-sm bg-gray-200">
                  <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.68397904634!2d2.321234876520314!3d48.88330069895298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd1fdf67bd%3A0x49cb2ecbd1bf21c1!2sBatignolles%20Kiné%20Sport%20%7C%20Paris%2017!5e0!3m2!1sfr!2sfr!4v1765299373175!5m2!1sfr!2sfr" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                      allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte Google Maps Contact"
                  ></iframe>
               </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};