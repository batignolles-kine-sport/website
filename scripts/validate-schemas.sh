#!/bin/bash

# Schema Validation Script
# This script helps validate all structured data schemas

echo "🔍 Schema Validation Helper"
echo "=============================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Schema Validation URLs${NC}"
echo ""

# Base URL (update this when deploying)
BASE_URL="https://batignolleskinesport.fr"

echo -e "${GREEN}1. Schema.org Validator${NC}"
echo "   Test your schemas for validity:"
echo "   https://validator.schema.org/"
echo ""

echo -e "${GREEN}2. Google Rich Results Test${NC}"
echo "   Test for rich snippet eligibility:"
echo "   https://search.google.com/test/rich-results"
echo ""

echo -e "${YELLOW}📄 Pages to Test:${NC}"
echo ""

# List of pages with schemas
declare -a pages=(
    "Homepage:/"
    "Pratiques:/pratiques"
    "Kinésithérapie du Sport:/kine-sport"
    "Rééducation:/reeducation"
    "Prise en charge du coureur:/runner"
    "Kinésithérapie de la femme:/women"
    "Team:/equipe"
    "Blog (any post):/blog/[slug]"
)

for page in "${pages[@]}"; do
    IFS=':' read -r name path <<< "$page"
    echo "   ✓ ${name}"
    echo "     ${BASE_URL}${path}"
    echo ""
done

echo -e "${BLUE}🎯 Expected Rich Results:${NC}"
echo ""
echo "   ✓ LocalBusiness → Business info card"
echo "   ✓ Organization → Knowledge Panel with logo"
echo "   ✓ FAQPage → Expandable FAQ in search results"
echo "   ✓ BlogPosting → Article cards"
echo "   ✓ BreadcrumbList → Navigation breadcrumbs"
echo ""

echo -e "${YELLOW}📊 Schema Types Implemented:${NC}"
echo ""
echo "   1. Organization (Knowledge Panel)"
echo "   2. LocalBusiness (Local SEO)"
echo "   3. MedicalBusiness (Healthcare SEO)"
echo "   4. Physiotherapy (Specialty)"
echo "   5. WebSite (Site metadata)"
echo "   6. Person (Team members)"
echo "   7. FAQPage (Pratiques + Services)"
echo "   8. BlogPosting (Articles)"
echo "   9. BreadcrumbList (Navigation)"
echo ""

echo -e "${GREEN}✅ Consistency Checks:${NC}"
echo ""
echo "   ✓ Coordinates: 48.8833, 2.3212"
echo "   ✓ Closing time: 21:00"
echo "   ✓ Type includes: Physiotherapy"
echo "   ✓ Accepts reservations: true"
echo "   ✓ Payment methods: Cash, Credit Card, Carte Vitale"
echo ""

echo -e "${BLUE}🔧 Manual Validation Steps:${NC}"
echo ""
echo "   1. Copy a page URL from above"
echo "   2. Paste into Schema.org Validator"
echo "   3. Check for errors or warnings"
echo "   4. Repeat with Google Rich Results Test"
echo "   5. Fix any issues found"
echo ""

echo -e "${YELLOW}💡 Tips:${NC}"
echo ""
echo "   • Test after every deployment"
echo "   • Monitor Google Search Console for schema errors"
echo "   • Keep FAQ schema in sync with visible content"
echo "   • Never add fake reviews or ratings"
echo ""

echo "=============================="
echo "For detailed information, see: SCHEMA_OPTIMIZATION_REPORT.md"
echo ""
