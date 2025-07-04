import { Product, Service } from '../types';

export const products: Product[] = [
  {
    id: 'free-outline',
    title: 'FREE Nonprofit Starter Blueprint',
    price: 0,
    description: 'Your nonprofit journey starts here - essential basics including board structure, EIN process, and formation fundamentals',
    features: [
      'Define Your Mission & Vision worksheet',
      'Community Needs Assessment guide',
      'Board recruitment checklist',
      'Legal documents overview',
      '90-Day Action Plan template'
    ],
    buttonText: 'Download Free Guide',
    buttonColor: 'bg-green-600 hover:bg-green-700',
    type: 'free',
    downloadUrl: '/downloads/nonprofit-starter-blueprint.pdf'
  },
  {
    id: 'mini-playbook',
    title: 'Nonprofit Startup Essentials',
    price: 5,
    description: 'From Vision to Reality - comprehensive 8-page starter guide with editable templates and step-by-step instructions',
    features: [
      'Pre-launch checklist with worksheets',
      'Legal formation guide (501c3 explained)',
      'Funding fundamentals & top 3 sources',
      'Community engagement strategies',
      'Editable action plan template'
    ],
    buttonText: 'Buy for $5',
    buttonColor: 'bg-red-600 hover:bg-red-700',
    type: 'paid'
  },
  {
    id: 'premium-playbook',
    title: 'Complete Nonprofit Development Toolkit',
    price: 29.99,
    description: '30-page comprehensive guide covering everything from startup to scaling with modern tools and proven tactics',
    features: [
      '30+ pages of expert guidance',
      'Foundation & legal setup templates',
      'Fundraising & grant writing toolkit',
      'Program design & impact measurement',
      'Board development strategies',
      '10+ editable worksheets included'
    ],
    buttonText: 'Buy on Amazon',
    buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
    type: 'external',
    externalUrl: 'https://amazon.com/your-book-link'
  }
];

export const services: Service[] = [
  {
    id: 'strategy-call',
    title: 'Free Strategy Call',
    price: 'Free',
    description: '30-minute consultation to discuss your nonprofit vision and create a personalized roadmap',
    features: [
      'Vision clarity session',
      'Needs assessment review',
      'Roadmap development',
      'Resource identification',
      'Next steps planning'
    ]
  },
  {
    id: 'grant-writing',
    title: 'Grant Writing Services',
    price: 'From $250',
    description: 'Professional grant writing and funding opportunity identification with proven success track record',
    features: [
      'Grant research and identification',
      'Proposal writing and editing',
      'Budget development assistance',
      'Submission management',
      'Follow-up coordination'
    ]
  },
  {
    id: 'strategy-coaching',
    title: 'Strategy Coaching',
    price: '$75/hour',
    description: 'Ongoing strategic guidance and organizational development support for sustainable growth',
    features: [
      'Monthly strategy sessions',
      'Board development guidance',
      'Program design consultation',
      'Sustainability planning',
      'Growth strategy development'
    ]
  }
];

export const founderBio = {
  name: 'Abdullahi Yusuf, MBA, DBA (c)',
  title: 'Healthcare Operations Strategist & Nonprofit Development Expert',
  experience: '15+ years',
  achievements: [
    '$1M+ in secured grants',
    'Led $100M referendum in Rochester, MN',
    'Healthcare operations leader',
    'Quality assurance systems expert'
  ],
  bio: 'A dynamic healthcare operations strategist, clinical research expert, and community leader with a proven track record in managing complex programs, transforming underperforming systems, and bridging the gap between technical and non-technical teams. Currently pursuing a Doctor of Business Administration in Accounting and Finance, with over 15 years of experience spanning quality management, healthcare operations, grant writing, and strategic consulting. From leading operations to securing million-dollar public grants, my portfolio reflects a commitment to excellence, equity, and innovation in both healthcare and nonprofit sectors.'
};