# Quick Schema Reference Guide

## 📍 Schema Locations

### Global Schemas (All Pages)

**File:** `/src/components/layout/SchemaMarkup.tsx`

Included in every page via Layout component:

- ✅ Organization
- ✅ WebSite  
- ✅ LocalBusiness + MedicalBusiness + Physiotherapy
- ✅ Person (team members, when provided)

### Page-Specific Schemas

| Page | Schema Type | File |
|------|-------------|------|
| **Pratiques** | FAQPage | `/src/pages/Pratiques.tsx` |
| **Service Detail** | FAQPage | `/src/pages/ServiceDetail.tsx` |
| **Blog Posts** | BlogPosting | Generated via `structuredData.ts` |
| **Any page** | BreadcrumbList | Generated via `structuredData.ts` |

---

## 🔧 Key Configuration Values

### Business Information

```typescript
Name: "BKS - Batignolles Kiné Sport"
Alternate Name: "Batignolles Kiné Sport"
Address: "6 rue des Batignolles, 75017 Paris"
Coordinates: 48.8833, 2.3212
Phone: "+33962434961"
Email: "contact@batignolleskinesport.fr"
```

### Opening Hours

```typescript
Days: Monday - Friday
Opens: 08:00
Closes: 21:00
```

### Business Properties

```typescript
Price Range: "€€"
Accepts Reservations: true
Payment Accepted: "Cash, Credit Card, Carte Vitale"
```

### Business Types

```typescript
@type: [
  'LocalBusiness',
  'MedicalBusiness', 
  'Physiotherapy'
]
```

---

## 📝 How to Add/Update Schemas

### Adding FAQ to a New Page

1. **Import dependencies:**

```tsx
import { Head } from 'vite-react-ssg';
import { generateFAQSchema } from '../utils/structuredData';
```

1. **Add schema in component:**

```tsx
<Head>
  <script type="application/ld+json">
    {JSON.stringify(generateFAQSchema([
      {
        question: 'Your question here?',
        answer: 'Your answer here.'
      }
    ]))}
  </script>
</Head>
```

1. **Important:** FAQ schema MUST match visible FAQ content on the page!

### Adding Person Schema for Team Member

Person schemas are automatically generated when you pass team members to `SchemaMarkup`:

```tsx
<SchemaMarkup 
  practitioners={teamMembers}
  aggregateRating={ratingData}
/>
```

Each team member should have:

```typescript
{
  name: string;
  title: string;
  specialties: string[];
  image: string;
  doctolibUrl?: string;
}
```

### Adding Article Schema for Blog Post

Use the `generateArticleSchema` function:

```tsx
import { generateArticleSchema } from '../utils/structuredData';

const articleSchema = generateArticleSchema(
  title,
  description,
  slug,
  datePublished,
  author
);
```

---

## ⚠️ Important Rules

### DO ✅

- Keep FAQ schema in sync with visible FAQ content
- Use actual business hours and contact info
- Link entities with `@id` references
- Test schemas after updates
- Monitor Google Search Console

### DON'T ❌

- Add fake reviews or ratings to schema
- Use different coordinates than Google My Business
- Create schemas for content not visible on page
- Duplicate schemas on same page
- Hardcode aggregateRating (let Google pull from GMB)

---

## 🔍 Testing Schemas

### Quick Test

```bash
# Run validation helper
bash scripts/validate-schemas.sh
```

### Manual Testing

1. **Schema.org Validator:** <https://validator.schema.org/>
2. **Google Rich Results Test:** <https://search.google.com/test/rich-results>
3. **Google Search Console:** Monitor "Enhancements" section

---

## 🎯 Expected Rich Results

### LocalBusiness Schema

**Appears as:** Business info card in local search
**Shows:**

- Business name and type
- Address and phone
- Opening hours
- Reviews (from Google My Business)
- Directions link

### FAQPage Schema  

**Appears as:** Expandable questions in search results
**Shows:**

- Question text
- Expandable answer
- Link to full page

### Organization Schema

**Appears as:** Knowledge Panel (right side of Google)
**Shows:**

- Logo (600x600px)
- Business name
- Social media links
- Website link

### BlogPosting Schema

**Appears as:** Article card in search results
**Shows:**

- Article title
- Publish date
- Author
- Featured image

---

## 🔄 Updating Business Information

When business details change, update in **ONE** place:

**File:** `/src/utils/constants.ts`

```typescript
export const ADDRESS = '6 rue des Batignolles';
export const PHONE = '09 62 43 49 61';
export const EMAIL = 'contact@batignolleskinesport.fr';
// etc.
```

All schemas automatically use these constants!

---

## 📊 Schema Hierarchy

```
Organization (#organization)
├── LocalBusiness (same @id)
│   ├── MedicalBusiness
│   └── Physiotherapy
├── Person (#practitioner-1)
│   └── worksFor → #organization
├── Person (#practitioner-2)
│   └── worksFor → #organization
└── Person (#practitioner-3)
    └── worksFor → #organization
```

The `@id` system creates a knowledge graph that Google understands!

---

## 🚀 Future Schema Opportunities

### VideoObject

When you add video content:

```typescript
{
  "@type": "VideoObject",
  "name": "Video title",
  "description": "Video description",
  "thumbnailUrl": "https://...",
  "uploadDate": "2026-01-21",
  "duration": "PT5M30S"
}
```

### Service

For detailed service offerings:

```typescript
{
  "@type": "Service",
  "serviceType": "Kinésithérapie du Sport",
  "provider": { "@id": "#organization" },
  "areaServed": "Paris 17",
  "offers": {
    "@type": "Offer",
    "priceRange": "€€"
  }
}
```

### HowTo

For exercise guides:

```typescript
{
  "@type": "HowTo",
  "name": "How to do X",
  "step": [
    {
      "@type": "HowToStep",
      "text": "Step 1 description"
    }
  ]
}
```

---

## 📚 Resources

- **Schema.org Documentation:** <https://schema.org/>
- **Google Search Central:** <https://developers.google.com/search/docs/appearance/structured-data>
- **Rich Results Test:** <https://search.google.com/test/rich-results>
- **Schema Validator:** <https://validator.schema.org/>

---

**Last Updated:** 2026-01-21  
**Maintained by:** Development Team
