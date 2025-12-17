# Guide d'Implémentation - Top 3 Recommandations CRO

## 🥇 PRIORITÉ 1 : Sticky CTA Mobile avec Click-to-Call

### Objectif
Augmenter les conversions téléphoniques de 15-25% sur mobile

### Code à implémenter

#### 1. Créer le composant `src/components/ui/FloatingCTA.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { PHONE, DOCTOLIB_URL } from '../../utils/constants';
import { toTelHref } from '../../utils/helpers';

export const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher après 30% de scroll
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrolled / height) * 100;
      
      if (scrollPercent > 30 && !dismissed) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden animate-fade-in">
      <div className="relative">
        {/* Bouton de fermeture */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-2 -right-2 bg-slate-900 text-white rounded-full p-1 shadow-lg z-10"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>
        
        {/* CTA Principal */}
        <a
          href={toTelHref(PHONE)}
          className="flex items-center gap-3 bg-primary text-white pl-5 pr-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105 active:scale-95"
          onClick={() => {
            // Tracking Google Analytics
            if (window.gtag) {
              window.gtag('event', 'click_to_call', {
                event_category: 'conversion',
                event_label: 'floating_cta_mobile'
              });
            }
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
            <Phone className="w-6 h-6 relative z-10" />
          </div>
          <div className="text-left">
            <div className="text-xs font-medium opacity-90">Appelez-nous</div>
            <div className="text-sm font-bold">{PHONE}</div>
          </div>
        </a>
        
        {/* Alternative Doctolib */}
        <a
          href={DOCTOLIB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block text-center text-xs text-slate-600 hover:text-primary transition-colors"
        >
          Ou prendre RDV en ligne →
        </a>
      </div>
    </div>
  );
};
```

#### 2. Intégrer dans le Layout `src/components/layout/Layout.tsx`

```tsx
// Ajouter l'import
import { FloatingCTA } from '../ui/FloatingCTA';

// Dans le composant Layout, juste avant la fermeture du div principal
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // ... existing code ...
  
  return (
    <div className="flex min-h-screen flex-col font-sans text-text-main">
      {/* ... navbar, menu, etc. ... */}
      
      <main className="grow">{children}</main>
      
      <footer>
        {/* ... existing footer ... */}
      </footer>
      
      {/* 🆕 Ajout du Floating CTA */}
      <FloatingCTA />
    </div>
  );
};
```

#### 3. Ajouter l'animation dans `src/styles/globals.css` ou dans tailwind.config

```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out;
}
```

---

## 🥈 PRIORITÉ 2 : Popup Exit-Intent

### Objectif
Capturer 5-10% des visiteurs qui quittent le site sans conversion

### Code à implémenter

#### 1. Créer `src/components/ui/ExitIntentModal.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import { X, Clock, Phone, ArrowRight } from 'lucide-react';
import { Button, DoctolibMark } from './Button';
import { DOCTOLIB_URL, PHONE } from '../../utils/constants';

export const ExitIntentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Vérifier si déjà montré dans cette session
    const alreadyShown = sessionStorage.getItem('exitIntentShown');
    if (alreadyShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Déclencher uniquement si la souris quitte par le haut
      if (e.clientY < 10 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-4 p-8 relative animate-scale-in">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            ⏰ Attendez !
          </h2>
          
          <p className="text-lg text-slate-600 mb-6">
            Profitez de <span className="font-bold text-primary">disponibilités en urgence</span> cette semaine
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
            <p className="text-sm text-slate-700 font-medium mb-2">
              ✓ Rendez-vous sous 48h<br/>
              ✓ Bilan complet 1ère séance<br/>
              ✓ Prise en charge CPAM/Mutuelle
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button href={DOCTOLIB_URL} variant="primary" fullWidth className="text-lg py-4">
              <DoctolibMark className="mr-2" inverted />
              Réserver maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              Ou appelez-nous : {PHONE}
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-6">
            Places limitées cette semaine
          </p>
        </div>
      </div>
    </div>
  );
};
```

#### 2. Ajouter l'animation scale-in

```css
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
```

#### 3. Intégrer dans Layout (même principe que FloatingCTA)

```tsx
import { ExitIntentModal } from '../ui/ExitIntentModal';

// Dans le return
<ExitIntentModal />
```

---

## 🥉 PRIORITÉ 3 : Widget de Disponibilités en Temps Réel

### Objectif
Créer un sentiment d'urgence et augmenter la confiance

### Code à implémenter

#### 1. Créer `src/components/ui/AvailabilityWidget.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, TrendingDown } from 'lucide-react';

interface TimeSlot {
  day: string;
  time: string;
  available: boolean;
}

export const AvailabilityWidget: React.FC = () => {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [viewing, setViewing] = useState(12); // Simulé

  useEffect(() => {
    // Générer des créneaux fictifs (à remplacer par API Doctolib)
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'];
    const times = ['09:00', '10:30', '14:00', '16:30', '18:00'];
    
    const mockSlots: TimeSlot[] = [];
    days.forEach(day => {
      times.forEach((time, idx) => {
        mockSlots.push({
          day,
          time,
          available: Math.random() > 0.4 // 60% de disponibilité
        });
      });
    });
    
    setSlots(mockSlots.slice(0, 8)); // Afficher seulement 8 créneaux
    
    // Simuler le nombre de visiteurs
    const interval = setInterval(() => {
      setViewing(prev => Math.max(5, Math.min(30, prev + Math.floor(Math.random() * 5) - 2)));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const availableCount = slots.filter(s => s.available).length;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Disponibilités cette semaine
        </h3>
        <span className="text-sm text-slate-500 flex items-center gap-1">
          <TrendingDown className="w-4 h-4 text-orange-500" />
          {viewing} personnes regardent
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {slots.map((slot, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
              slot.available
                ? 'bg-green-50 border border-green-200 text-green-700'
                : 'bg-slate-50 border border-slate-200 text-slate-400 line-through'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span className="font-medium">{slot.day} {slot.time}</span>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-center">
        <p className="text-sm font-bold text-primary">
          {availableCount} créneaux disponibles
        </p>
        <p className="text-xs text-slate-600">
          Réservez maintenant avant complet
        </p>
      </div>
    </div>
  );
};
```

#### 2. Intégrer sur la Homepage (dans la section Location par exemple)

```tsx
// Dans src/pages/Home.tsx, section Location
<div className="lg:col-span-1">
  <AvailabilityWidget />
</div>
```

---

## 📊 Tracking & Analytics

### À configurer dans Google Analytics 4

```javascript
// Dans le fichier src/utils/analytics.ts (à créer)

export const trackEvent = (eventName: string, params?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Événements à tracker
export const trackPhoneClick = (source: string) => {
  trackEvent('click_to_call', {
    event_category: 'conversion',
    event_label: source, // 'floating_cta', 'header', 'contact_page', etc.
  });
};

export const trackDoctolibClick = (source: string) => {
  trackEvent('click_doctolib', {
    event_category: 'conversion',
    event_label: source,
  });
};

export const trackExitIntentShow = () => {
  trackEvent('exit_intent_shown', {
    event_category: 'engagement',
  });
};

export const trackExitIntentConversion = () => {
  trackEvent('exit_intent_conversion', {
    event_category: 'conversion',
    value: 1,
  });
};
```

---

## 🧪 A/B Testing Suggéré

### Variants à tester

1. **Floating CTA:**
   - Variante A : Texte "Appeler" uniquement
   - Variante B : Numéro de téléphone visible
   - Métrique : Taux de clic

2. **Exit Intent:**
   - Variante A : "Première séance -20%"
   - Variante B : "Disponibilités en urgence"
   - Métrique : Taux de conversion

3. **Couleur des CTAs:**
   - Variante A : Vert (actuel)
   - Variante B : Bleu Doctolib
   - Variante C : Orange (urgence)
   - Métrique : CTR et conversions

---

## ⏱️ Timeline d'Implémentation

### Semaine 1
- [ ] Jour 1-2 : Floating CTA mobile
- [ ] Jour 3 : Tests sur différents devices
- [ ] Jour 4-5 : Intégration tracking GA4

### Semaine 2
- [ ] Jour 1-3 : Exit Intent Modal
- [ ] Jour 4 : Widget disponibilités
- [ ] Jour 5 : Tests A/B setup

### Semaine 3
- [ ] Monitoring des KPIs
- [ ] Ajustements basés sur les données
- [ ] Documentation résultats

---

## 📈 KPIs à Monitorer

| Métrique | Baseline | Objectif | Tracking |
|----------|----------|----------|----------|
| Taux de conversion mobile | 2.1% | 2.8% (+33%) | GA4 |
| Appels téléphoniques/jour | 8 | 12 (+50%) | Call tracking |
| Taux de rebond | 54% | 45% (-17%) | GA4 |
| Temps sur site | 1:45 | 2:30 (+42%) | GA4 |
| Pages/session | 2.3 | 3.1 (+35%) | GA4 |

---

**Fin du guide - Bonne implémentation ! 🚀**
