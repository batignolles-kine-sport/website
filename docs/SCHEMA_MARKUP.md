# Schema Markup Implementation

## Overview

This implementation adds comprehensive JSON-LD structured data to the Batignolles Kiné Sport website for improved SEO and local search visibility.

## What's Been Added

### 1. SchemaMarkup Component (`src/components/layout/SchemaMarkup.tsx`)

A React component that generates and injects JSON-LD schema markup into the page `<head>` using `react-helmet-async`.

**Features:**
- **Multiple Schema Types**: LocalBusiness + MedicalBusiness + Physiotherapy
- **Business Information**: Complete address, phone, email, hours
- **Geo-Location**: Precise coordinates (48.8822, 2.3244) for Batignolles
- **Area Served**: Explicitly targets "Batignolles, Paris 17" for local SEO
- **Aggregate Rating**: Displays 5.0 star rating from 36 Google reviews
- **Practitioner Schemas**: Individual Person schemas for each team member
- **Medical Expertise**: Defines specialties and areas of knowledge

### 2. Integration

The component is automatically included in the main Layout component, so it appears on every page.

```tsx
<SchemaMarkup
  practitioners={TEAM}
  aggregateRating={{
    ratingValue: reviewsData.note_moyenne,
    reviewCount: reviewsData.nombre_avis_total,
  }}
/>
```

### 3. Helper Functions

Added `formatPhoneForSchema()` in `src/utils/helpers.ts` to properly format phone numbers for international schema format.

## Validation

### Google Rich Results Test

1. Deploy your site to production
2. Visit: https://search.google.com/test/rich-results
3. Enter your production URL
4. Verify that LocalBusiness and MedicalBusiness schemas are detected
5. Check that all required fields are present and valid

### Schema.org Validator

1. Visit: https://validator.schema.org/
2. Paste the JSON-LD from your page source
3. Verify no errors or warnings

### Manual Verification

View the schema in your browser:
1. Open the website
2. View page source (Ctrl+U / Cmd+Option+U)
3. Search for `application/ld+json`
4. Verify the JSON structure is correct

## Expected Schema Structure

The implementation generates:

1. **Main Clinic Schema**:
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "Physiotherapy"],
  "name": "BKS - Batignolles Kiné Sport",
  "address": {...},
  "geo": {"latitude": 48.8822, "longitude": 2.3244},
  "aggregateRating": {"ratingValue": 5.0, "reviewCount": 36},
  ...
}
```

2. **Practitioner Schemas** (for each team member):
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Léa HLUBINA",
  "jobTitle": "Kiné du Sport",
  "medicalSpecialty": ["Traumatologie", "Réathlétisation", "Suivi Sportif"],
  "worksFor": {"@id": "https://batignolleskinesport.fr/#organization"}
}
```

## SEO Benefits

This implementation should improve:

1. **Local Search Visibility**
   - Better ranking for "Kiné du sport Batignolles"
   - Enhanced "Paris 17" and neighborhood targeting

2. **Rich Snippets**
   - Star rating display in search results
   - Business hours and contact info
   - Map integration

3. **Knowledge Graph**
   - Improved Google Knowledge Panel
   - Practitioner information
   - Medical specialties display

4. **Voice Search**
   - Better results for "physiotherapist near me"
   - Structured business hours for voice assistants

## Configuration

### Constants

Key values are configured in `src/utils/constants.ts`:
- `PHONE`: Business phone number
- `EMAIL`: Contact email
- `ADDRESS`: Street address
- `DOCTOLIB_URL`: Booking link
- `INSTAGRAM_URL`: Social media
- `GOOGLE_MAPS_URL`: Maps location

### Domain

Production domain is set in `SchemaMarkup.tsx`:
```typescript
const PRODUCTION_DOMAIN = 'https://batignolleskinesport.fr';
```

Update this constant if your production domain changes.

### Review Threshold

Aggregate rating only displays if there are at least 10 reviews:
```typescript
const MIN_REVIEWS_FOR_AGGREGATE_RATING = 10;
```

## Maintenance

### Adding New Team Members

Team member schemas are automatically generated from the `TEAM` array in `constants.ts`. Simply add new members there, and their Person schema will be included.

### Updating Business Information

Update the relevant constants in `src/utils/constants.ts`:
- Hours are hardcoded in `SchemaMarkup.tsx` (lines 114-128)
- Geo-coordinates are hardcoded (lines 107-111)
- Medical specialties are hardcoded (lines 93-99)

### Updating Reviews

The aggregate rating automatically updates from `src/data/avis.json`. When you update this file with new review data, the schema will reflect the changes.

## Troubleshooting

**Schema not appearing in search results?**
- Allow 1-2 weeks for Google to re-crawl and process
- Verify schema is valid using Google Rich Results Test
- Check Search Console for schema-related issues

**Duplicate schema detected?**
- Ensure you're not using another SEO plugin that adds schema
- Check that the schema only appears once in page source

**Invalid JSON errors?**
- Run build process to catch TypeScript errors
- Validate output with schema.org validator
- Check console for React errors

## Further Reading

- [Google Structured Data Guidelines](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Schema.org MedicalBusiness](https://schema.org/MedicalBusiness)
- [JSON-LD Best Practices](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data#structured-data-format)
