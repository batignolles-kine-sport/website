# Schema Validation Checklist

Use this checklist to validate all structured data after deployment.

---

## 🔍 Pre-Deployment Validation

### Code Review

- [x] All TypeScript files compile without errors
- [x] No duplicate schemas on same page
- [x] All @id references are consistent
- [x] FAQ schema matches visible FAQ content
- [x] Coordinates match Google My Business (48.8833, 2.3212)
- [x] Opening hours match actual hours (Mon-Fri 08:00-21:00)
- [x] Contact information is accurate
- [x] All required properties included

### Schema Consistency

- [x] SchemaMarkup.tsx uses correct coordinates
- [x] SchemaMarkup.tsx uses correct closing time (21:00)
- [x] SchemaMarkup.tsx includes 'Physiotherapy' type
- [x] structuredData.ts matches SchemaMarkup.tsx values
- [x] All schemas use same @id for organization
- [x] Person schemas link to organization via worksFor

---

## 🌐 Post-Deployment Validation

### Schema.org Validator

Test URL: <https://validator.schema.org/>

#### Homepage

- [ ] Visit: <https://batignolleskinesport.fr/>
- [ ] Paste URL into validator
- [ ] Check for errors: **Expected: 0 errors**
- [ ] Verify schemas detected:
  - [ ] Organization
  - [ ] WebSite
  - [ ] LocalBusiness
  - [ ] MedicalBusiness
  - [ ] Physiotherapy
  - [ ] Person (x3)

#### Pratiques Page

- [ ] Visit: <https://batignolleskinesport.fr/pratiques>
- [ ] Paste URL into validator
- [ ] Check for errors: **Expected: 0 errors**
- [ ] Verify schemas detected:
  - [ ] Organization
  - [ ] WebSite
  - [ ] LocalBusiness
  - [ ] MedicalBusiness
  - [ ] Physiotherapy
  - [ ] Person (x3)
  - [ ] FAQPage (4 questions)

#### Service Detail Pages

Test each service page:

- [ ] /kine-sport
- [ ] /reeducation
- [ ] /runner
- [ ] /women

For each page:

- [ ] Paste URL into validator
- [ ] Check for errors: **Expected: 0 errors**
- [ ] Verify FAQPage schema (2 questions)

#### Blog Posts

- [ ] Test at least 3 blog post URLs
- [ ] Verify BlogPosting schema
- [ ] Verify BreadcrumbList schema
- [ ] Check author links to Organization

---

### Google Rich Results Test

Test URL: <https://search.google.com/test/rich-results>

#### LocalBusiness Rich Results

- [ ] Test homepage URL
- [ ] Verify "LocalBusiness" detected
- [ ] Check eligible for rich results: **Expected: Yes**
- [ ] Verify properties shown:
  - [ ] Name: "BKS - Batignolles Kiné Sport"
  - [ ] Address: "6 rue des Batignolles, 75017 Paris"
  - [ ] Phone: "+33962434961"
  - [ ] Hours: Monday-Friday 08:00-21:00
  - [ ] Coordinates: 48.8833, 2.3212

#### FAQPage Rich Results - Pratiques

- [ ] Test: <https://batignolleskinesport.fr/pratiques>
- [ ] Verify "FAQPage" detected
- [ ] Check eligible for rich results: **Expected: Yes**
- [ ] Verify 4 questions detected:
  - [ ] "Quelles sont vos spécialités en kinésithérapie ?"
  - [ ] "Prenez-vous en charge les sportifs de tous niveaux ?"
  - [ ] "Combien de séances sont nécessaires ?"
  - [ ] "Proposez-vous de la réathlétisation ?"

#### FAQPage Rich Results - Service Detail

- [ ] Test a service detail page
- [ ] Verify "FAQPage" detected
- [ ] Check eligible for rich results: **Expected: Yes**
- [ ] Verify 2 questions detected:
  - [ ] "Faut-il une ordonnance ?"
  - [ ] "Que dois-je apporter à la première séance ?"

#### BlogPosting Rich Results

- [ ] Test a blog post URL
- [ ] Verify "BlogPosting" detected
- [ ] Check eligible for rich results: **Expected: Yes**
- [ ] Verify properties:
  - [ ] Headline
  - [ ] Date published
  - [ ] Author (Organization)
  - [ ] Publisher (Organization)

---

### Google Search Console

#### Submit for Indexing

- [ ] Log into Google Search Console
- [ ] Navigate to URL Inspection tool
- [ ] Test live URLs for key pages:
  - [ ] Homepage
  - [ ] Pratiques page
  - [ ] At least 2 service pages
  - [ ] At least 2 blog posts
- [ ] Request indexing for each

#### Monitor Enhancements

- [ ] Navigate to Enhancements section
- [ ] Check "FAQ" report:
  - [ ] Valid items: **Expected: 6+** (Pratiques + 5 services)
  - [ ] Errors: **Expected: 0**
  - [ ] Warnings: Review and fix if any
- [ ] Check "LocalBusiness" report:
  - [ ] Valid items: **Expected: All pages**
  - [ ] Errors: **Expected: 0**
- [ ] Check "Organization" report:
  - [ ] Valid items: **Expected: All pages**
  - [ ] Errors: **Expected: 0**

---

## 🔧 Manual Testing

### Visual Verification

#### FAQ Sections

- [ ] Visit Pratiques page
- [ ] Verify FAQ section is visible
- [ ] Click each question to expand
- [ ] Verify answers match schema content
- [ ] Test on mobile device

#### Business Information

- [ ] Verify phone number is clickable
- [ ] Verify address links to Google Maps
- [ ] Verify opening hours displayed correctly
- [ ] Test Doctolib booking link

---

## 📊 Performance Monitoring

### Week 1 After Deployment

- [ ] Check Google Search Console for schema errors
- [ ] Monitor impressions for key pages
- [ ] Check if rich snippets appearing in search
- [ ] Review CTR changes

### Week 2-4 After Deployment

- [ ] Compare organic traffic to previous period
- [ ] Monitor Knowledge Panel appearance
- [ ] Check FAQ snippet appearance in search
- [ ] Review bounce rate changes

### Month 2-3 After Deployment

- [ ] Analyze full SEO impact
- [ ] Compare rankings for key terms
- [ ] Review conversion rate changes
- [ ] Document lessons learned

---

## 🚨 Common Issues & Fixes

### Issue: Schema not detected

**Possible causes:**

- JavaScript not executing
- Syntax error in JSON-LD
- Schema wrapped in comments

**Fix:**

- View page source (not inspect element)
- Search for "application/ld+json"
- Verify JSON is valid

### Issue: FAQ not eligible for rich results

**Possible causes:**

- FAQ schema doesn't match visible content
- Less than 2 questions
- Questions/answers too short

**Fix:**

- Ensure FAQ section is visible on page
- Match schema content exactly to visible content
- Ensure at least 2 questions with substantial answers

### Issue: LocalBusiness missing properties

**Possible causes:**

- Required properties missing
- Invalid coordinate format
- Incorrect phone format

**Fix:**

- Verify all required properties present
- Check coordinates are numbers, not strings
- Use international phone format: +33...

### Issue: Duplicate schemas

**Possible causes:**

- Schema included multiple times
- Conflicting plugins/components

**Fix:**

- Search codebase for duplicate schema injection
- Ensure SchemaMarkup component only included once
- Check for conflicting SEO plugins

---

## ✅ Final Validation

### All Tests Passed?

- [ ] Schema.org Validator: 0 errors on all pages
- [ ] Google Rich Results Test: All schemas eligible
- [ ] Google Search Console: No enhancement errors
- [ ] Manual testing: All features working
- [ ] Visual verification: FAQ sections display correctly

### Documentation Complete?

- [ ] SCHEMA_OPTIMIZATION_REPORT.md reviewed
- [ ] SCHEMA_QUICK_REFERENCE.md accessible to team
- [ ] SCHEMA_DIAGRAM.md understood
- [ ] This checklist completed

### Team Informed?

- [ ] Development team notified of changes
- [ ] SEO team provided with documentation
- [ ] Stakeholders informed of expected impact
- [ ] Monitoring plan in place

---

## 📝 Notes

Use this section to document any issues found or observations:

```
Date: _______________
Tester: _______________

Issues Found:
1. 
2. 
3. 

Resolutions:
1. 
2. 
3. 

Additional Observations:


```

---

## 🎯 Success Criteria

✅ **Deployment is successful when:**

1. All schemas validate without errors
2. All pages eligible for rich results
3. No errors in Google Search Console
4. FAQ sections display correctly
5. Team is trained on maintenance

---

**Created:** 2026-01-21  
**Version:** 1.0  
**Next Review:** After deployment
