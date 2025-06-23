// projectData.ts
export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  myJobDesk: string[]; // <- updated from 'challenges'
  images: string[];
  duration: string;
  team: string;
  client: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  liveUrl: string;
  codeUrl: string;
  rank: 'S-Rank' | 'A-Rank' | 'B-Rank' | 'C-Rank';
  completionDate: string;
}

export const projects: ProjectData[] = [
  {
    id: 'jobmate-001',
    title: 'Project: JobMate',
    subtitle: 'Responsive Website for Job Search',
    description:
      'JobMate is a modern job search platform built with React TypeScript and Tailwind CSS, featuring personalized job recommendations and AI chatbot support.',
    longDescription:
      'JobMate is a responsive and intelligent job search website designed to help users find suitable employment opportunities easily. The platform allows users to edit their profiles—including experience, education, and portfolio—bookmark job listings, and search for job vacancies or companies. It also integrates a Gemini 2.0 Flash-based chatbot to assist users in navigating the platform and finding job matches. A key feature of JobMate is the personalized job recommendation engine powered by a machine learning model. The backend is built using Express.js and deployed via Cloud Functions, while the recommendation and chatbot models are served using Flask APIs hosted on Cloud Run. The project is fully deployed to Vercel for seamless access.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Express.js', 'Python', 'Cloud Run', 'Firebase', 'Cloud Storage'],
    features: [
      'Edit profile information including experience, education, and portfolio',
      'Bookmark job listings',
      'Search for job vacancies and companies',
      'Chatbot powered by Gemini 2.0 Flash to assist users',
      'Job recommendations based on user skills using machine learning'
    ],
    myJobDesk: [
      'Developed REST API using Express.js and deployed it to Cloud Functions',
      'Designed and implemented Firebase Realtime Database structure',
      'Built responsive frontend using React TSX and Tailwind CSS',
      'Created a machine learning-based recommendation API using Flask and deployed it to Cloud Run',
      'Developed a chatbot API using Flask integrated with Gemini 2.0 Flash and deployed it to Cloud Run',
      'Deployed the entire website to Vercel for production hosting'
    ],
    images: [
      '../../public/JobMate1.png',
      '../../public/JobMate2.png',
      '../../public/JobMate3.png',
      '../../public/JobMate4.png',
    ],
    duration: '1 months',
    team: '6 developers, 3 Front-End Back-End, 3 Machine Learning',
    client: 'TechCorp',
    status: 'Completed',
    liveUrl: 'https://job-mate-six.vercel.app/',
    codeUrl: 'https://github.com/Farras8/JobMate.git',
    rank: 'S-Rank',
    completionDate: '2025-06-13',
  },
  {
    id: 'sustainWise-002',
    title: 'Project: Sustain Wise',
    subtitle: 'Android Money Management App',
    description:
      'SustainWise is a money management Android app built with Kotlin that helps users track their income and expenses, offering monthly financial insights and machine learning-based recommendations.',
    longDescription:
      'SustainWise is an Android application developed to assist users in managing their finances effectively. Built using Kotlin, the app enables users to perform CRUD operations on their income and expenses, providing monthly tracking through intuitive graphical charts. A machine learning model is integrated to analyze users\' monthly financial behavior and offer personalized financial recommendations. The backend services are powered by Express.js and deployed on Cloud Functions, while Firebase handles real-time data storage. The Android frontend consumes both the backend APIs and TensorFlow Lite model outputs to deliver a seamless experience.',
    technologies: ['Express.js', 'Kotlin', 'Cloud Functions', 'Cloud Storage', 'Firebase'],
    features: [
      'CRUD operations for tracking user income and expenses',
      'Monthly financial tracking with graphical analytics',
      'Personalized financial recommendations using machine learning model',
    ],
    myJobDesk: [
      'In this project my job desk was cloud computing',
      'Developed REST API using Express.js and deployed it to Cloud Functions',
      'Created and managed real-time database using Firebase',
      'Integrated backend APIs from Cloud Functions into Android Studio using Kotlin',
      'Consumed TensorFlow Lite model outputs from ML team within the Android app',
    ],
    images: [
      '../../public/SustainWise1.png',
      '../../public/sustainwise-cloud-architecture.jpg',
    ],
    duration: '2 months',
    team: '3 Machine Learning, 2 Mobile Developer, 2 Cloud Computing',
    client: 'SalesForce Inc.',
    status: 'Completed',
    liveUrl: '#',
    codeUrl: '#',
    rank: 'A-Rank',
    completionDate: '2024-12-10',
  },
  {
    id: 'FitMate-003',
    title: 'Project: FitMate',
    subtitle: 'Android Diet Assistant App',
    description:
      'A centralized knowledge base platform ensuring secure and rapid access to internal documentation for enterprise clients.',
    longDescription:
      'Gatekeeper is an enterprise-grade knowledge base platform designed for secure and efficient access to internal documentation. Powered by Next.js for fast rendering, PostgreSQL for reliable data storage, and GraphQL for flexible data querying, Gatekeeper ensures rapid access and robust security. The platform supports role-based access control and full-text search capabilities.',
    technologies: ['Kotlin', 'Python', 'TensorFlow', 'Cloud Run', 'Cloud Storage'],
    features: [
      'Secure document access',
      'Full-text search capabilities',
      'Role-based access control',
      'API-driven architecture',
    ],
    myJobDesk: [
      'Implementing secure authentication',
      'Optimizing search performance',
      'Managing large datasets',
    ],
    images: [
      '../../public/FitMate1.jpeg',
      '../../public/FitMate2.jpeg',
      '../../public/FitMate3.jpeg',
      '../../public/FitMate4.jpeg',
    ],
    duration: '4 months',
    team: '1 Mobile Developer, 1 Machine Learning Engineer, 1 Natural Languange Process Engineer, 1 Data Scientist',
    client: 'Enterprise Solutions Ltd.',
    status: 'Completed',
    liveUrl: '#',
    codeUrl: '#',
    rank: 'A-Rank',
    completionDate: '2025-06-19',
  },
  {
    id: 'Ivasta-004',
    title: 'Project: PHP Native Dashboard Admin Website',
    subtitle: 'Dashboard Admin Website',
    description:
      'A UI/UX case study and redesign of a popular mobile banking application to improve user flow and accessibility.',
    longDescription:
      'Beru is a comprehensive UI/UX case study focused on redesigning a mobile banking application. Using Figma for prototyping, the project aimed to enhance user flow, improve accessibility, and create a visually appealing interface that meets modern design standards. The redesign was validated through user testing and feedback iterations.',
    technologies: ['PHP', 'MYSQL'],
    features: [
      'Improved user navigation',
      'Enhanced accessibility features',
      'Modern design system',
      'User testing integration',
    ],
    myJobDesk: [
      'Meeting WCAG accessibility standards',
      'Balancing aesthetics and functionality',
      'Iterating based on user feedback',
    ],
    images: [
      '../../public/IvastaAdmin1.png',
      '../../public/IvastaAdmin2.png',
      '../../public/IvastaAdmin3.png',
      '../../public/IvastaAdmin4.png',
    ],
    duration: '3 months',
    team: '2 designers, 1 researcher',
    client: 'BankApp Co.',
    status: 'Completed',
    liveUrl: '#',
    codeUrl: '#',
    rank: 'B-Rank',
    completionDate: '2024-09-15',
  },
  {
    id: 'King Culinary-005',
    title: 'Project: King Culinary',
    subtitle: 'E-Commerce Platform',
    description:
      'A fully functional e-commerce site with product management, shopping cart, and payment integration via Stripe.',
    longDescription:
      'Kamish is a feature-rich e-commerce platform built with React for a responsive UI, Stripe for secure payment processing, and MongoDB for flexible data storage. The platform includes product management, a shopping cart, and seamless checkout experiences, designed to provide a user-friendly shopping experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    features: [
      'Secure payment integration',
      'Product catalog management',
      'Shopping cart functionality',
      'Responsive design',
    ],
    myJobDesk: [
      'Ensuring payment security',
      'Optimizing database queries',
      'Handling high traffic',
    ],
    images: [
      '../../public/KingCulinaryApp1.png',
      '../../public/KingCulinaryApp2.png'
    ],
    duration: '5 months',
    team: '4 developers, 1 designer',
    client: 'ShopEasy Inc.',
    status: 'In Progress',
    liveUrl: '#',
    codeUrl: '#',
    rank: 'A-Rank',
    completionDate: '2025-01-31',
  },
  {
    id: 'Mandiri-006',
    title: 'Project: Mandiri News',
    subtitle: 'Android News App',
    description:
      'A chat application built with WebSockets for instant messaging, user presence, and private channels.',
    longDescription:
      'Bellion is a real-time chat application leveraging Socket.IO for instant messaging, Node.js for server-side logic, and React for an interactive UI. The app supports user presence indicators, private channels, and a scalable WebSocket-based architecture, ensuring a seamless communication experience.',
    technologies: ['Kotlin'],
    features: [
      'Real-time messaging',
      'User presence detection',
      'Private chat channels',
      'Scalable infrastructure',
    ],
    myJobDesk: [
      'Managing WebSocket connections',
      'Ensuring low latency',
      'Handling concurrent users',
    ],
    images: [
      '../../public/Mandiri1.jpeg',
      '../../public/Mandiri2.jpeg',
      '../../public/Mandiri3.jpeg',
    ],
    duration: '4 months',
    team: '3 developers',
    client: 'ChatCorp',
    status: 'Completed',
    liveUrl: '#',
    codeUrl: '#',
    rank: 'B-Rank',
    completionDate: '2024-08-25',
  },
  {
    id: 'Ivasta-007',
    title: 'Project: Ivasta',
    subtitle: 'UI Website for mini pasta shop ',
    description:
      'A modern blog built with a headless CMS for easy content management and a fast, static front-end.',
    longDescription:
      'Architect is a modern blog platform powered by Next.js for static site generation, Strapi as a headless CMS for content management, and TailwindCSS for sleek styling. The platform offers fast load times, easy content updates, and a responsive design, optimized for SEO and user engagement.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    features: [
      'Headless CMS integration',
      'Static site generation',
      'Responsive design',
      'SEO optimization',
    ],
    myJobDesk: [
      'Integrating Strapi with Next.js',
      'Optimizing build times',
      'Ensuring content scalability',
    ],
    images: [
      '../../public/Ivasta1.png',
      '../../public/Ivasta2.png',
    ],
    duration: '3 months',
    team: '2 developers, 1 content manager',
    client: 'BlogNow',
    status: 'Completed',
    liveUrl: '#',
    codeUrl: '#',
    rank: 'C-Rank',
    completionDate: '2024-07-10',
  },
];
