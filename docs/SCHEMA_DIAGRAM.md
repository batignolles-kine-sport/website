# Schema Relationship Diagram

## 🏗️ Schema Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        WEBSITE LEVEL                             │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ WebSite Schema                                              │ │
│  │ @type: "WebSite"                                            │ │
│  │ name: "Batignolles Kiné Sport"                              │ │
│  │ url: "https://batignolleskinesport.fr"                      │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

                              ↓

┌─────────────────────────────────────────────────────────────────┐
│                    ORGANIZATION LEVEL                            │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Organization Schema                                         │ │
│  │ @type: "Organization"                                       │ │
│  │ @id: "#organization" ← CENTRAL ENTITY                       │ │
│  │ name: "BKS - Batignolles Kiné Sport"                        │ │
│  │ logo: ImageObject (600x600px)                               │ │
│  │ sameAs: [Doctolib, Instagram, Google Maps]                  │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

                              ↓

┌─────────────────────────────────────────────────────────────────┐
│                     BUSINESS LEVEL                               │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ LocalBusiness + MedicalBusiness + Physiotherapy             │ │
│  │ @type: ["LocalBusiness", "MedicalBusiness", "Physiotherapy"]│ │
│  │ @id: "#organization" ← SAME ID AS ORGANIZATION              │ │
│  │                                                              │ │
│  │ 📍 Location:                                                 │ │
│  │    • address: "6 rue des Batignolles, 75017 Paris"          │ │
│  │    • geo: 48.8833, 2.3212                                    │ │
│  │                                                              │ │
│  │ 📞 Contact:                                                  │ │
│  │    • telephone: "+33962434961"                               │ │
│  │    • email: "contact@batignolleskinesport.fr"                │ │
│  │                                                              │ │
│  │ 🕐 Hours:                                                    │ │
│  │    • Monday-Friday: 08:00 - 21:00                            │ │
│  │                                                              │ │
│  │ 💳 Services:                                                 │ │
│  │    • acceptsReservations: true                               │ │
│  │    • paymentAccepted: "Cash, Credit Card, Carte Vitale"      │ │
│  │    • priceRange: "€€"                                        │ │
│  │                                                              │ │
│  │ 🎯 Expertise:                                                │ │
│  │    • knowsAbout: [Médecine du sport, Kinésithérapie, ...]    │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘

                              ↓

┌─────────────────────────────────────────────────────────────────┐
│                      PEOPLE LEVEL                                │
│                                                                   │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────┐  │
│  │ Person #1        │  │ Person #2        │  │ Person #3    │  │
│  │ @type: "Person"  │  │ @type: "Person"  │  │ @type: "..."  │  │
│  │ @id: "#pract-1"  │  │ @id: "#pract-2"  │  │ @id: "..."   │  │
│  │                  │  │                  │  │              │  │
│  │ name: "..."      │  │ name: "..."      │  │ name: "..."  │  │
│  │ jobTitle: "..."  │  │ jobTitle: "..."  │  │ jobTitle: ...│  │
│  │ knowsAbout: [...] │  │ knowsAbout: [...] │  │ knowsAbout..│  │
│  │                  │  │                  │  │              │  │
│  │ worksFor: ───────┼──┼──────────────────┼──┼──────────────┤  │
│  │   @id: "#org"    │  │   @id: "#org"    │  │   @id: "#org"│  │
│  └──────────────────┘  └──────────────────┘  └──────────────┘  │
│           │                     │                     │          │
│           └─────────────────────┴─────────────────────┘          │
│                              ↓                                   │
│                    Links back to Organization                    │
└─────────────────────────────────────────────────────────────────┘

                              ↓

┌─────────────────────────────────────────────────────────────────┐
│                      PAGE-SPECIFIC SCHEMAS                       │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ FAQPage - Pratiques                                         │ │
│  │ @type: "FAQPage"                                            │ │
│  │ mainEntity: [                                               │ │
│  │   Question 1: "Quelles sont vos spécialités..."             │ │
│  │   Question 2: "Prenez-vous en charge les sportifs..."       │ │
│  │   Question 3: "Combien de séances..."                       │ │
│  │   Question 4: "Proposez-vous de la réathlétisation..."      │ │
│  │ ]                                                            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ FAQPage - ServiceDetail                                     │ │
│  │ @type: "FAQPage"                                            │ │
│  │ mainEntity: [                                               │ │
│  │   Question 1: "Faut-il une ordonnance ?"                    │ │
│  │   Question 2: "Que dois-je apporter..."                     │ │
│  │ ]                                                            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ BlogPosting - Blog Posts                                    │ │
│  │ @type: "BlogPosting"                                        │ │
│  │ headline: "Article title"                                   │ │
│  │ author: Organization → @id: "#organization"                 │ │
│  │ publisher: Organization → @id: "#organization"              │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ BreadcrumbList - Navigation                                 │ │
│  │ @type: "BreadcrumbList"                                     │ │
│  │ itemListElement: [Home → Category → Current Page]           │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔗 Entity Linking Strategy

### Central Entity: `#organization`

All schemas link back to the organization using `@id` references:

```json
{
  "@id": "https://batignolleskinesport.fr/#organization"
}
```

**Benefits:**

1. ✅ Creates a unified knowledge graph
2. ✅ Google understands entity relationships
3. ✅ Improves Knowledge Panel accuracy
4. ✅ Better local SEO signals

---

## 📊 Schema Distribution by Page

```
Homepage
├── Organization ✅
├── WebSite ✅
├── LocalBusiness + MedicalBusiness + Physiotherapy ✅
└── Person (x3) ✅

Pratiques Page
├── Organization ✅
├── WebSite ✅
├── LocalBusiness + MedicalBusiness + Physiotherapy ✅
├── Person (x3) ✅
└── FAQPage ✅ NEW

Service Detail Pages
├── Organization ✅
├── WebSite ✅
├── LocalBusiness + MedicalBusiness + Physiotherapy ✅
├── Person (x3) ✅
└── FAQPage ✅ NEW

Blog Posts
├── Organization ✅
├── WebSite ✅
├── LocalBusiness + MedicalBusiness + Physiotherapy ✅
├── Person (x3) ✅
├── BlogPosting ✅
└── BreadcrumbList ✅

Team Page
├── Organization ✅
├── WebSite ✅
├── LocalBusiness + MedicalBusiness + Physiotherapy ✅
└── Person (x3) ✅
```

---

## 🎯 Rich Snippet Eligibility

| Schema Type | Eligible For | Priority |
|-------------|--------------|----------|
| **Organization** | Knowledge Panel | 🔴 Critical |
| **LocalBusiness** | Business Info Card | 🔴 Critical |
| **MedicalBusiness** | Healthcare Features | 🟡 High |
| **Physiotherapy** | Specialty Badge | 🟡 High |
| **FAQPage** | FAQ Accordion | 🟡 High |
| **BlogPosting** | Article Card | 🟢 Medium |
| **Person** | People Cards | 🟢 Medium |
| **BreadcrumbList** | Breadcrumb Trail | 🟢 Medium |

---

## 🔄 Data Flow

```
1. User visits page
   ↓
2. React component renders
   ↓
3. SchemaMarkup component injects JSON-LD
   ↓
4. Google bot crawls page
   ↓
5. Google parses JSON-LD schemas
   ↓
6. Google validates schemas
   ↓
7. Google creates knowledge graph
   ↓
8. Rich snippets appear in search results
```

---

## 🛠️ Implementation Files

```
src/
├── components/
│   └── layout/
│       └── SchemaMarkup.tsx ← Global schemas
│
├── utils/
│   ├── structuredData.ts ← Schema generators
│   └── constants.ts ← Business data
│
└── pages/
    ├── Pratiques.tsx ← FAQPage schema
    ├── ServiceDetail.tsx ← FAQPage schema
    └── BlogPost.tsx ← BlogPosting schema
```

---

## 📈 SEO Impact Chain

```
Better Schemas
    ↓
More Rich Snippets
    ↓
Higher CTR
    ↓
More Organic Traffic
    ↓
Better User Engagement
    ↓
Improved Rankings
    ↓
More Visibility
    ↓
More Patients
```

---

**Created:** 2026-01-21  
**Purpose:** Visual reference for schema architecture  
**Audience:** Developers, SEO team
