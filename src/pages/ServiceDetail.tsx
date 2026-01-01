import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { CheckCircle, Clock, Calendar } from 'lucide-react';
import { SEO } from '../components/layout/SEO';
import { Button } from '../components/ui/Button';
import { SERVICES, DOCTOLIB_URL } from '../utils/constants';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the service data based on the ID extracted from the URL path logic in App.tsx
  // We need to map the URL structure to the Service ID.
  // Actually, let's look up by comparing the path suffix or just ID if passed via props. 
  // To keep it simple, I'll pass the service object directly from App.tsx using a wrapper.
  
  // But wait, App.tsx structure below uses this component as a generic.
  // Let's iterate SERVICES to find which one matches the current window location or pass it via prop.
  // Better: The caller in App.tsx will pass the `serviceId` prop.
  return <Navigate to="/404" />;
};

// Actual implementation that accepts props
interface ServicePageProps {
  serviceId: string;
}

export const ServicePage: React.FC<ServicePageProps> = ({ serviceId }) => {
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <SEO 
        title={`${service.title} - Batignolles Kiné Sport`} 
        description={service.shortDescription} 
      />

      {/* Header */}
      <div className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center p-3 bg-white rounded-full text-primary shadow-sm mb-6">
                <service.icon size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-6">{service.title}</h1>
              <p className="text-xl text-text-muted leading-relaxed mb-8">
                {service.fullDescription}
              </p>
              <Button href={DOCTOLIB_URL} variant="booking">
                Prendre rendez-vous
              </Button>
            </div>
            <div className="flex-1 w-full">
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-lg shadow-lg w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features & Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column: Features */}
            <div>
              <h2 className="text-2xl font-bold text-text-main mb-6">Notre Approche</h2>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-primary mt-1 mr-3 shrink-0" size={20} />
                    <span className="text-text-main">{feature}</span>
                  </li>
                ))}
              </ul>

              {service.indications && (
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-text-main mb-4">Pour qui ?</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                     {service.indications.map((ind, idx) => (
                       <li key={idx} className="bg-surface px-3 py-2 rounded text-sm text-text-main border-l-4 border-primary">
                         {ind}
                       </li>
                     ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right Column: Process or Extra Info */}
            <div>
              {service.process ? (
                <>
                  <h2 className="text-2xl font-bold text-text-main mb-6">Le Déroulement</h2>
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <span className="text-sm font-bold">{idx + 1}</span>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow-sm">
                          <h3 className="font-bold text-text-main mb-1">{step.title}</h3>
                          <p className="text-sm text-text-muted">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="bg-surface p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Besoin d'informations ?</h3>
                  <p className="text-text-muted mb-6">
                    Chaque patient est différent. Lors de votre première séance, nous établirons un bilan complet pour définir les objectifs de votre traitement.
                  </p>
                  <div className="flex items-center text-text-main mb-2">
                    <Clock size={20} className="mr-3 text-primary" />
                    <span>Séances de 30 à 60 minutes</span>
                  </div>
                  <div className="flex items-center text-text-main">
                    <Calendar size={20} className="mr-3 text-primary" />
                    <span>Sur rendez-vous uniquement</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Placeholder */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Questions Fréquentes</h2>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-lg shadow-sm cursor-pointer group">
              <summary className="font-medium list-none flex justify-between items-center text-text-main">
                Faut-il une ordonnance ?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-text-muted mt-4 text-sm">
                Oui, pour bénéficier d'une prise en charge par la Sécurité Sociale et votre mutuelle, une prescription médicale est nécessaire. Vous pouvez cependant consulter sans ordonnance (hors parcours de soins).
              </p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-sm cursor-pointer group">
              <summary className="font-medium list-none flex justify-between items-center text-text-main">
                Que dois-je apporter à la première séance ?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-text-muted mt-4 text-sm">
                Votre ordonnance, votre carte vitale, votre carte de mutuelle, ainsi que les éventuels examens complémentaires (radios, IRM, échographies). Prévoyez une tenue confortable.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};