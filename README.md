# ASCEND - Nonprofit Development Website

A professional, mobile-responsive website for ASCEND (Advancing Solutions for Community Empowerment & Nonprofit Development), designed to help immigrant-led nonprofits and community organizations launch, fund, and scale their missions.

## Features

- **Mobile-Responsive Design**: Optimized for all devices with breakpoints for mobile, tablet, and desktop
- **Brand Colors**: Red (#C1272D), Black (#000000), White (#FFFFFF)
- **Digital Downloads**: Free and paid resource system with payment integration
- **Course Waitlist**: Signup system for upcoming online course
- **Contact Forms**: Professional contact and consultation booking
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **GitHub Pages Ready**: Deployable to GitHub Pages

## Technologies Used

- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite for build tooling
- Modern CSS Grid and Flexbox

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with CTAs
│   ├── About.tsx       # Founder bio and credentials
│   ├── Resources.tsx   # Digital products and downloads
│   ├── Course.tsx      # Course information and waitlist
│   ├── Services.tsx    # Professional services
│   ├── Contact.tsx     # Contact form and information
│   └── Footer.tsx      # Site footer
├── data/               # Content and configuration
│   └── content.ts      # Site content and product data
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── utils/              # Utility functions
│   ├── payment.ts      # Payment processing utilities
│   └── downloads.ts    # Download management utilities
└── App.tsx            # Main application component
```

## Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Key Features

### Digital Downloads
- Free Nonprofit Starter Blueprint
- $5 Mini Playbook with payment integration
- Premium Playbook available on Amazon

### Payment Integration
- Stripe and PayPal integration placeholders
- Secure payment processing workflow
- Download delivery system

### Course System
- Waitlist signup for "Vision to Viability" course
- Email collection and management
- Course module preview

### Professional Services
- Free strategy call booking
- 501(c)(3) setup services
- Grant writing services
- Strategy coaching

### SEO Optimization
- Meta tags for social sharing
- Structured data markup
- Performance optimization
- Mobile-first responsive design

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to "GitHub Actions"
4. The site will be automatically built and deployed

### Manual Deployment
1. Run `npm run build`
2. Upload `dist/` folder contents to web server
3. Configure server to serve `index.html` for all routes

## Content Management

Content is managed through the `src/data/content.ts` file, making it easy to update:
- Product information and pricing
- Service descriptions and features
- Founder bio and achievements
- Contact information

## Payment Integration

The site includes placeholder code for:
- Stripe checkout integration
- PayPal payment processing
- Download delivery system
- Email confirmations

To implement live payments:
1. Set up Stripe/PayPal accounts
2. Add API keys to environment variables
3. Implement webhook handlers
4. Configure email delivery service

## Contact Information

- **Email**: abdullahiyusuf21@gmail.com
- **Domain**: www.ascendnonprofits.org
- **Location**: Rochester, Minnesota

## Legal

© 2025 Abdullahi Yusuf. All rights reserved.

## License

This project is proprietary and confidential. All rights reserved.