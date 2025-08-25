# Business Management Platform - White Label CMS

A powerful no-code content management system for managing multiple client websites from a single dashboard.

## Features

### 🎯 Core Functionality
- **Multi-tenant Architecture** - Manage unlimited client websites from one dashboard
- **No-Code Content Editor** - Visual editing interface for all website content
- **Real-time Updates** - Changes reflect instantly on live websites
- **Media Management** - Centralized image and file storage
- **Analytics Dashboard** - Track visitor metrics and conversions

### 💼 Business Benefits
- **One Codebase, Multiple Sites** - Deploy once, manage many
- **Client Access Portal** - Give clients limited editing permissions
- **Version Control** - Track and rollback content changes
- **SEO Optimization** - Built-in tools for better Google rankings
- **Mobile Responsive** - All sites work perfectly on any device

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Hosting**: Firebase Hosting / Vercel
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Firebase account

### Installation

1. Clone the repository:
```bash
cd White-Label
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a new Firebase project
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Enable Storage
   - Copy your config to `.env`

4. Create `.env` file:
```bash
cp .env.example .env
# Edit .env with your Firebase credentials
```

5. Run the development server:
```bash
npm run dev
```

## Project Structure

```
White-Label/
├── src/
│   ├── components/     # Reusable components
│   ├── contexts/       # React contexts (Auth, etc)
│   ├── lib/           # Firebase config & utilities
│   ├── pages/         # Main application pages
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── ContentEditor.tsx
│   │   ├── ClientManager.tsx
│   │   ├── MediaLibrary.tsx
│   │   └── Analytics.tsx
│   └── App.tsx        # Main app component
├── public/            # Static assets
└── package.json       # Dependencies
```

## Usage

### Adding a New Client

1. Navigate to Client Manager
2. Click "Add New Client"
3. Enter client details and domain
4. Choose a template or start from scratch
5. Customize content in the editor

### Editing Content

1. Select a client from the dashboard
2. Click the edit icon
3. Use the visual editor to modify:
   - Hero sections
   - Services
   - Testimonials  
   - Contact info
   - Images and media
4. Save changes to push live

### Managing Media

1. Go to Media Library for a client
2. Upload images/files via drag & drop
3. Organize into folders
4. Use in content editor

## Deployment

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Custom Domain Setup
1. Add domain in Firebase Hosting
2. Update DNS records
3. SSL certificates auto-provision

## Pricing Model

Recommended pricing structure:

- **Setup Fee**: $1,500 - $3,000 per client
- **Monthly Hosting**: $50 - $100 per site
- **Add-on Features**: $200 - $500 each
  - Booking system
  - Email automation
  - Advanced analytics
  - A/B testing

## Security

- Firebase Authentication for admin access
- Row-level security in Firestore
- Separate data isolation per client
- Regular automated backups
- SSL on all domains

## Roadmap

- [ ] Blog/News posting system
- [ ] Email campaign integration
- [ ] Advanced SEO tools
- [ ] White-label branding options
- [ ] API for external integrations
- [ ] Automated social media posting
- [ ] Multi-language support

## Support

For issues or questions, please open an issue in the repository.

## License

Proprietary - All rights reserved