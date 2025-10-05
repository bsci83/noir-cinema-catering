# Noir Cinema Catering - Project Hub

## Project Overview
This directory serves as the main hub for multiple web development projects, including the White-Label platform and connections to the SageAAA agency website. The goal is to create a scalable SaaS platform for managing multiple client websites.

## Current Session Status (Last Updated: 2025-01-05)

### ✅ Latest Session Completed Tasks (January 5, 2025)
1. **Updated Services page** - Changed "Craft Services" to "Drop Catering" with new description
2. **Configured Resend API** - Added API key to local environment for testing
3. **Updated email recipients** - Form now sends to christina@cinema-catering.com and chef.sean.noir@gmail.com
4. **Removed recipient** - Removed Christina@galacateringservice.com from email list
5. **Deployed all changes** - All updates pushed to GitHub and auto-deployed to Vercel

### ✅ Previous Session Tasks (October 2, 2025)
1. **Added new testimonial** - Mike Clark (Production Supervisor, Eagle Rock Studios Atlanta)
2. **Integrated Resend for contact form emails** - Professional email delivery service
3. **Created Vercel serverless API endpoint** - `/api/send-quote.ts` for handling form submissions
4. **Updated Contact component** - Now sends emails directly instead of mailto links
5. **Created setup documentation** - `RESEND_SETUP.md` with complete client instructions

### ✅ Previous Session Tasks (August 20, 2025)
1. **Analyzed sageaaa.com** - Site is live and working
2. **Compared project folders** - SageAAA vs Sage.AAA
3. **Evaluated visual editor** - Found it's prototype-level, not production-ready
4. **Assessed landing page code** - Professional quality with animations
5. **Defined business model** - Vertical SaaS with industry packages

### 🎯 Key Decisions Made
- **Use SageAAA folder** (has Firebase integration)
- **Skip drag-and-drop** - Use block-based editing instead
- **Focus on verticals** - Restaurant, law firm, medical packages
- **Multi-tenant architecture** - One codebase, many clients

## Project Structure
```
noir-cinema-catering/
├── White-Label/              # White-label platform (separate project)
│   ├── CLAUDE.md            # Platform documentation
│   ├── src/                 # Platform source code
│   └── dist/                # Built platform
├── check-sageaaa.js         # Playwright script for site checking
├── sageaaa-screenshot.png   # Screenshot of live site
└── CLAUDE.md               # This file

Related Projects:
├── /Replit projects/SageAAA/     # Main agency site (Firebase configured)
└── /Replit projects/Sage.AAA/    # Cleaner version (no Firebase)
```

## Strategic Direction

### The Vision
Transform SageAAA from a single agency website into a **Vertical SaaS Platform** that serves multiple businesses with industry-specific templates.

### Business Model
```
One Codebase → Multiple Industries → Recurring Revenue

📦 RestaurantPro ($297/mo)
📦 LawFirmElite ($397/mo)  
📦 MedicalPractice ($497/mo)
📦 RealEstateHub ($297/mo)
```

### Implementation Strategy

#### Phase 1: Multi-Tenant Foundation
- Add tenant identification system
- Implement domain mapping
- Create tenant isolation in Firebase

#### Phase 2: Industry Templates
- Build restaurant template
- Build law firm template
- Build medical template
- Create onboarding flow

#### Phase 3: Simplified Management
- Replace visual editor with forms
- Create content management system
- Build client admin panel

#### Phase 4: Scale & Automate
- Automated provisioning
- Billing integration
- Support system

## Technical Architecture

### Current Stack (NOIR Cinema Catering Website)
- **Frontend**: React + TypeScript + Tailwind CSS + Vite
- **Email Service**: Resend (via Vercel serverless functions)
- **Hosting**: Vercel
- **Components**: Radix UI + Lucide React icons
- **Routing**: React Router v6
- **Form Handling**: Custom hooks + fetch API

### Email Integration Details
- **Service**: Resend.com
- **API Endpoint**: `/api/send-quote.ts` (Vercel serverless function)
- **Pricing**: Free tier (3,000 emails/month, 100/day)
- **Recipients**: 
  - christina@cinema-catering.com
  - chef.sean.noir@gmail.com
- **API Key**: Configured in Vercel environment variables (RESEND_API_KEY)
- **Features**:
  - Direct email delivery (no mailto links)
  - Formatted HTML emails
  - Reply-To set to customer email
  - Error handling and loading states
  - Success confirmation messages
  - Multiple recipient support

### Multi-Tenant Architecture
```typescript
// Core concept
interface Tenant {
  id: string
  domain: string
  industry: 'restaurant' | 'law' | 'medical'
  branding: {
    primaryColor: string
    logo: string
    businessName: string
  }
  features: string[]
  subscription: {
    plan: 'starter' | 'pro' | 'enterprise'
    status: 'active' | 'suspended'
  }
}
```

### Database Structure
```
firestore/
  tenants/
    {tenantId}/
      config/         # Branding, features, settings
      content/        # Pages, posts, media
      users/          # Admin users for this tenant
      analytics/      # Traffic, conversions
```

## Key Insights from Analysis

### SageAAA Strengths
✅ Professional landing page with animations
✅ Firebase already configured
✅ Client management system exists
✅ Authentication working
✅ Good component structure

### SageAAA Weaknesses
❌ Visual editor too basic for production
❌ Duplicate .jsx/.tsx files (messy)
❌ Not multi-tenant ready
❌ No industry templates
❌ No automated deployment

### Recommendations
1. **Don't rebuild** - Use SageAAA as foundation
2. **Don't fix drag-and-drop** - Replace with block editor
3. **Don't customize per client** - Use templates
4. **Don't charge once** - Monthly subscriptions
5. **Don't host yourself** - Use Vercel/Netlify

## Development Roadmap

### Week 1: Foundation
- [ ] Clean up SageAAA (remove .jsx duplicates)
- [ ] Add tenant database schema
- [ ] Implement domain detection
- [ ] Create tenant context provider

### Week 2: First Template
- [ ] Build restaurant template
- [ ] Create menu management
- [ ] Add reservation system
- [ ] Test with demo data

### Week 3: Admin Panel
- [ ] Build tenant onboarding
- [ ] Create content editor (forms)
- [ ] Add media library
- [ ] Implement preview system

### Week 4: Launch Prep
- [ ] Set up billing (Stripe)
- [ ] Deploy to production
- [ ] Create marketing site
- [ ] Document everything

## Revenue Projections

### Conservative Scenario
- 10 clients × $297/mo = $2,970 MRR
- Year 1: ~$35,000

### Realistic Scenario  
- 30 clients × $297/mo = $8,910 MRR
- Year 1: ~$100,000

### Optimistic Scenario
- 50 clients × $397/mo = $19,850 MRR
- Year 1: ~$238,000

## Quick Commands

```bash
# Navigate to SageAAA
cd "/mnt/c/Users/bifil/OneDrive/Desktop/AppLand/Replit projects/SageAAA"

# Start development
npm run dev

# Check Firebase config
cat .env | grep FIREBASE

# Navigate to White-Label
cd "/mnt/c/Users/bifil/OneDrive/Desktop/AppLand/noir/noir-cinema-catering/White-Label"
```

## Important Files

### NOIR Cinema Catering Key Files
- `/src/components/Contact.tsx` - Contact form with Resend integration
- `/src/components/Services.tsx` - Services page with Drop Catering, Location Catering, Corporate Events, Mobile Kitchen
- `/src/components/Testimonials.tsx` - Customer testimonials carousel (5 testimonials)
- `/api/send-quote.ts` - Vercel serverless function for email sending (sends to multiple recipients)
- `/RESEND_SETUP.md` - Complete setup guide for client
- `/package.json` - Dependencies including Resend
- `.env.local` - Local environment variables (for testing only)
- `.env` (Vercel) - Environment variables (RESEND_API_KEY configured in Vercel dashboard)

### SageAAA Key Files
- `/client/src/lib/firebase.ts` - Firebase configuration
- `/client/src/pages/Home.tsx` - Landing page
- `/client/src/pages/admin/visual-editor.tsx` - Page builder
- `/server/routes.ts` - API endpoints
- `/.env` - Firebase credentials

### White-Label Key Files
- `/src/pages/PlatformLanding.tsx` - Platform sales page
- `/src/pages/Dashboard.tsx` - Client management
- `/src/lib/firebase.ts` - Currently mocked

## Next Session Tasks

1. **Decide on approach**:
   - Option A: Make SageAAA multi-tenant
   - Option B: Continue White-Label separately
   - Recommendation: Option A (less work, better foundation)

2. **If Option A (recommended)**:
   - Add tenant system to SageAAA
   - Create first industry template
   - Build simplified content editor

3. **If Option B**:
   - Copy Firebase config to White-Label
   - Build out platform features
   - Create integration with SageAAA

## Contact & Support

This project combines multiple codebases to create a scalable SaaS platform. The key is to leverage existing code (SageAAA) rather than building from scratch.

**Remember**: The goal is recurring revenue through industry-specific website packages, not custom development for each client.

## Session Notes

### January 5, 2025 Session
- **Services Update**: Changed "Craft Services" to "Drop Catering" - targeting smaller, budget-minded productions and production offices
- **Email Recipients**: Updated to send to christina@cinema-catering.com and chef.sean.noir@gmail.com
- **Resend API Key**: Configured in Vercel environment variables for secure email delivery
- **Deployment**: All changes pushed to GitHub and auto-deployed via Vercel

### October 2, 2025 Session
- **Testimonials**: 5 total testimonials in carousel (Dianne Ashford, Montez Monroe, Chloe Benard, Carl Seaton, Mike Clark)
- **Email Integration**: Migrated from mailto links to Resend API for professional email delivery
- **No Auth Required**: Public marketing website - no authentication needed for contact forms
- **Deployment**: Site deployed on Vercel with serverless functions
- **Client Action Required**: Must add RESEND_API_KEY environment variable to Vercel

### Previous Session Notes
**Playwright MCP**: Installed in White-Label but not needed for core functionality

**Firebase Project**: sage-aaa (already configured in SageAAA)

**Domain**: sageaaa.com (live and working)

**Critical Decision**: Use block-based content editing, not visual drag-and-drop

**Business Focus**: Vertical SaaS for specific industries, not general website builder