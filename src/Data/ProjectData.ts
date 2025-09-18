// projectData.ts
export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  myJobDesk: string[];
  images: string[];
  duration: string;
  team: string;
  client: string;
  status: string;
  liveUrl: string;
  codeUrl: string;
  rank: 'S-Rank' | 'A-Rank' | 'B-Rank' | 'C-Rank';
  completionDate: string;
  maintenanceMessage?: string;
}

export const projects: ProjectData[] = [
  {
    "id": "dsimfoniku-009",
    "title": "Project: Dsimfoniku",
    "subtitle": "Health Inspection Website for the Health Department",
    "description": "Dsimfoniku is a Laravel-based web application designed for the Health Department and community health centers (Puskesmas) to conduct and manage environmental health inspections through structured digital forms.",
    "longDescription": "Dsimfoniku is a web-based health inspection system that enables the Health Department and community health centers (Puskesmas) to digitize the process of recording and reporting environmental health inspections. The platform provides structured forms for various types of inspections and supports full data management with CRUD operations, duplication, advanced search, filtering, and inspection history export. Super Admin (Health Department) can manage all inspection data and Admin accounts, while Admin (Puskesmas) can only access their own inspection records. The system also includes profile management, editable letterheads for official inspection reports, and PDF generation for inspection results with customized headers. This makes the reporting process more efficient, standardized, and professional.",
    "technologies": [
    "Laravel",
    "PHP",
    "MariaDB/MySQL",
    "Tailwind",
    "DaisyUI",
    "jQuery",
    "Vite",
    "Laravel DomPDF",
    "Maatwebsite Excel",
    "Domainesia"
    ],
    "features": [
      "Two user roles: Super Admin (Health Department) and Admin (Community Health Center)",
      "CRUD operations for environmental health inspection forms",
      "Duplicate inspections for faster data entry",
      "Inspection history with search, filter, and CSV export functionality",
      "Role-based access: Super Admin can view all inspections, Admin can only view their own",
      "Profile management: Super Admin can edit all Admin profiles, Admin can only edit their own",
      "Letterhead editor with live PDF preview for official inspection reports",
      "Download inspection reports in PDF format with customized letterhead"
    ],
    "myJobDesk": [
      "Developed CRUD functionality for three new inspection forms",
      "Updated one existing inspection form with improvements",
      "Established relational mapping between database tables in MySQL",
      "Fixed and optimized search and filter functionality for inspection history",
      "Implemented letterhead editing feature with live PDF preview",
      "Re-deployed and configured the website hosting on Domainesia (cPanel)"
    ],
    "images": [
      "/Dsimfoniku1.jpeg",
      "/Dsimfoniku2.jpeg",
      "/Dsimfoniku3.jpeg"
    ],
    "duration": "On-going (Maintenance Project)",
    "team": "1 Developer (Maintenance)",
    "client": "Health Department",
    "status": "In Progress",
    "liveUrl": "https://dsimfoniku.com/",
    "codeUrl": "https://github.com/depokitdinkes-netizen/dsimfoniku_dinkes.git",
    "rank": "S-Rank",
    "completionDate": "In Progress"
  },
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
      '/JobMate1.png',
      '/JobMate2.png',
      '/JobMate3.png',
      '/JobMate4.png',
    ],
    duration: 'On-going',
    team: '6 developers, 3 Front-End Back-End, 3 Machine Learning',
    client: 'Dicoding',
    status: 'Maintenance',
    liveUrl: 'https://job-mate-six.vercel.app/',
    codeUrl: 'https://github.com/Farras8/JobMate.git',
    rank: 'S-Rank',
    completionDate: 'In Progress',
    maintenanceMessage: 'Project ini sedang dalam maintenance karena GCP free trial telah berakhir. Sedang mencari hosting baru untuk API backend dan ML model.',
  },
  {
    id: 'Harmoni Alam-008',
    title: 'Project: HarmoniAlam',
    subtitle: 'Environmental Volunteer Platform',
    description: 'Comprehensive digital platform connecting volunteers with environmental event organizers across Indonesia, featuring multi-role authentication, event management, content publishing, and community engagement features.',

    longDescription: 'HarmoniAlam is a revolutionary web platform designed to bridge the gap between environmental volunteers and event organizers in Indonesia. The platform features a sophisticated three-tier user system (Volunteers, Organizers, and Admins) with comprehensive role-based access control. Built with modern web technologies, it provides seamless event discovery, registration, content management, and community interaction features. The platform includes real-time email verification, dynamic content publishing, interactive mapping, bookmark functionality, and secure file storage integration with Google Cloud Services.',

    technologies: [
      'Node.js',
      'Express.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Prisma ORM',
      'Supabase',
      'Google Cloud Storage',
      'Google Cloud Run',
      'JWT Authentication',
      'Nodemailer',
      'Vite',
      'TailwindCSS',
      'Leaflet Maps',
      'Swiper'
    ],
    features: [
      'Multi-role authentication system (Volunteer, Organizer, Admin)',
      'Email verification and password reset functionality',
      'Event creation, management, and registration system',
      'Article publishing with draft/publish status',
      'Interactive event mapping with coordinates',
      'Image gallery management for events and articles',
      'Bookmark system for favorite events and articles',
      'Organizer approval workflow with admin controls',
      'Profile management with profile picture upload',
      'Real-time communication system',
      'Contact form integration',
      'Responsive design with mobile optimization',
      'Advanced search and filtering capabilities',
      'Dashboard interfaces for all user roles',
      'File upload and management with Google Cloud Storage',
      'Soft delete functionality for data integrity',
      'Category-based content organization',
      'Event status tracking (upcoming, completed, full)',
      'User status management (active, suspended, deleted)',
      'Automated email notifications',
      'RESTful API architecture',
      'Database migrations and schema management',
      'Error handling and validation',
      'CORS and security middleware',
      'Cloud deployment ready infrastructure'
    ],
    myJobDesk: [
      'Backend Development - Designed and implemented complete RESTful API architecture using Node.js and Express.js',
      'Database Architecture - Created comprehensive database schema using Prisma ORM with PostgreSQL, implementing 15+ data models with proper relationships',
      'Authentication System - Built secure multi-role authentication using JWT tokens with bcrypt password hashing for Volunteers, Organizers, and Admins',
      'Email Integration - Implemented automated email verification system using Nodemailer with custom HTML templates and password reset functionality',
      'File Management - Integrated Google Cloud Storage for secure file uploads including profile pictures, event galleries, and document storage',
      'API Endpoints - Developed 50+ API endpoints covering user management, event operations, article publishing, bookmarks, and administrative functions',
      'Database Migrations - Created and managed 12+ database migrations for schema evolution and data integrity',
      'Middleware Development - Built custom middleware for authentication, authorization, CORS handling, and request validation',
      'Frontend Development - Developed complete React TypeScript application with modern UI/UX using TailwindCSS',
      'State Management - Implemented React Query for efficient server state management and caching',
      'Routing System - Built comprehensive routing architecture using React Router DOM with protected routes and role-based access',
      'Component Architecture - Created 25+ reusable React components including modals, forms, dashboards, and layout components',
      'Interactive Features - Integrated Leaflet maps for event locations, image carousels, and smooth scrolling animations',
      'Dashboard Interfaces - Built specialized dashboards for Volunteers, Organizers, and Admins with role-specific functionalities',
      'Form Management - Developed complex forms for user registration, event creation, article publishing, and profile management',
      'API Integration - Connected frontend with backend using Axios with proper error handling and loading states',
      'Responsive Design - Ensured mobile-first responsive design across all pages and components',
      'User Experience - Implemented confirmation modals, success/error notifications, and intuitive navigation flows',
      'Cloud Deployment - Configured deployment setup for Google Cloud Run with proper environment management',
      'Security Implementation - Added input validation, XSS protection, and secure authentication flows',
      'Performance Optimization - Implemented code splitting, lazy loading, and optimized asset delivery',
      'Testing & Debugging - Conducted comprehensive testing across all user roles and functionalities',
      'Documentation - Created detailed API documentation and setup instructions for development and deployment'
    ],
    images: [
      '/Harmoni1.jpeg',
      '/Harmoni2.jpeg',
      '/Harmoni3.jpeg',
      '/Harmoni4.jpeg',
      '/Harmoni5.jpeg',
      '/Harmoni6.jpeg',
      '/Harmoni7.jpeg',
    ],
    duration: '1 months',
    team: '3 developer',
    client: 'TIC UNEJ',
    status: 'Maintenance',
    liveUrl: 'https://harmonii-alam.vercel.app/',
    codeUrl: 'https://github.com/Farras8/HarmoniiAlam.git',
    rank: 'A-Rank',
    completionDate: '2025-08-03',
    maintenanceMessage: 'Project ini sedang dalam maintenance karena GCP free trial telah berakhir. Sedang mencari hosting baru untuk API backend ',
  },
  {
    id: 'Portfolio-009',
    title: 'Project: Personal Portfolio Website',
    subtitle: 'Modern React Portfolio',
    description: 'A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS, showcasing projects, skills, experience, and professional achievements with smooth animations and interactive features.',

    longDescription: 'This personal portfolio website represents a comprehensive showcase of my professional journey as a Full-Stack Web Developer. Built with modern web technologies, the site features a sleek, responsive design with smooth scroll animations, interactive components, and a professional layout. The portfolio includes dedicated sections for projects, skills, experience, education, certificates, and contact information. Each project is presented with detailed information, live demos, and source code links. The site implements modern UI/UX principles with a dark theme, gradient accents, and smooth transitions throughout.',

    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'React Router DOM',
      'Lucide React',
      'React Icons',
      'Intersection Observer API',
      'CSS Animations',
      'Responsive Design'
    ],
    features: [
      'Responsive design with smooth scroll animations',
      'Interactive project showcase with detailed views',
      'Professional timeline for experience and education',
      'Modern dark theme with gradient accents',
      'Contact integration with CV download'
    ],
    myJobDesk: [
      'Frontend Development - Built complete React TypeScript application with modern component architecture',
      'UI/UX Design - Designed responsive layouts using TailwindCSS with smooth animations',
      'Component Development - Created 15+ reusable components and implemented routing system',
      'Deployment & Optimization - Configured Vite build and deployed to Vercel with performance optimization'
    ],
    images: [
      '/Portfolio1.jpeg',
    ],
    duration: '1 weeks',
    team: '1 developer',
    client: 'Personal Project',
    status: 'Completed',
    liveUrl: 'https://portfolio-farras-yasyfa.vercel.app/',
    codeUrl: 'https://github.com/Farras8/portfolio-farras-yasyfa.git',
    rank: 'A-Rank',
    completionDate: '2025-07-15',
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
      '/SustainWise1.png',
      '/sustainwise-cloud-architecture.jpg',
    ],
    duration: '2 months',
    team: '3 Machine Learning, 2 Mobile Developer, 2 Cloud Computing',
    client: 'SalesForce Inc.',
    status: 'Completed',
    liveUrl: '#',
    codeUrl: 'https://github.com/SustainWise',
    rank: 'A-Rank',
    completionDate: '2024-12-10',
  },
  {
    id: 'FitMate-003',
    title: 'Project: FitMate',
    subtitle: 'Android Diet Assistant App',
    description:
      'FitMate is an Android-based diet assistant app that helps users track their daily calories, monitor weight goals, recognize food using computer vision, and receive nutrition guidance through an integrated chatbot.',
    longDescription:
      'FitMate is a smart diet assistant Android application designed to help users maintain their nutrition and health goals. It calculates daily calorie needs based on BMI, BMR, and TDEE using user data such as weight, height, age, gender, and activity level. Users can track their weight progress toward personal goals, and benefit from a food recognition feature powered by CNN-based computer vision. FitMate also includes a food recommendation engine based on association rules that suggest meals according to user preferences and common eating patterns. An IndoBERT-based NLP chatbot is fully integrated, providing conversational assistance for nutrition-related questions and guiding users across the app’s features.',
    technologies: ['Kotlin', 'Python', 'TensorFlow', 'Cloud Run', 'Cloud Storage'],
    features: [
      'Daily calorie tracking based on BMI, BMR, and TDEE',
      'Weight progress tracking toward user-defined goals',
      'Food recognition using Computer Vision (CNN)',
      'Food recommendations based on user preferences using association rules',
      'Chatbot integration for nutrition guidance and app feature support',
    ],
    myJobDesk: [
      'Handled Natural Language Processing (NLP) for chatbot development',
      'Built chatbot model using IndoBERT pre-trained language model',
      'Uploaded and hosted the chatbot model on Google Cloud Storage',
      'Developed a Flask API to serve the model and deployed it to Cloud Run for integration with the Android app',
    ],
    images: [
      '/FitMate1.jpeg',
      '/FitMate2.jpeg',
      '/FitMate3.jpeg',
      '/FitMate4.jpeg',
    ],
    duration: '4 months',
    team: '1 Mobile Developer, 1 Machine Learning Engineer, 1 Natural Languange Process Engineer, 1 Data Scientist',
    client: 'Lapis AI',
    status: 'Completed',
    liveUrl: '#',
    codeUrl: 'https://github.com/2025-TI-CCIT-6A-Kelompok-5',
    rank: 'A-Rank',
    completionDate: '2025-06-19',
  },
  {
    id: 'Ivasta-004',
    title: 'Project: PHP Native Dashboard Admin Website',
    subtitle: 'Dashboard Admin Website',
    description:
      'Ivasta is a web-based admin dashboard built with native PHP for managing a pasta shop, featuring full product and category management, order tracking, and monthly sales analytics.',
    longDescription:
      'Ivasta is a super admin dashboard website developed using PHP Native and MySQL, designed for efficiently managing a pasta shop. The platform includes full CRUD functionality for product and category management, admin user management, order creation, and order history tracking. It also features monthly sales and revenue tracking visualized with graphical charts to help monitor business performance. This project was developed entirely as a solo endeavor, with a focus on building a functional and intuitive admin interface without using frameworks.',
    technologies: ['PHP', 'MYSQL'],
    features: [
      'CRUD operations for categories and products',
      'Admin management system',
      'Order creation and tracking',
      'Monthly revenue and sales analytics with charts',
      'Order history and management dashboard',
    ],
    myJobDesk: [
      'Project handled individually from planning to deployment',
      'Developed all core features using PHP Native and MySQL',
      'Designed and implemented the admin dashboard UI and logic',
      'Integrated graphical order and revenue tracking system',
    ],
    images: [
      '/IvastaAdmin1.png',
      '/IvastaAdmin2.png',
      '/IvastaAdmin3.png',
      '/IvastaAdmin4.png',
    ],
    duration: '1 months',
    team: '1 developer',
    client: '',
    status: 'Completed',
    liveUrl: '#',
    codeUrl: 'https://github.com/Farras8/PWL.git',
    rank: 'B-Rank',
    completionDate: '2023-12-15',
  },
  {
    id: 'King Culinary-005',
    title: 'Project: Dashboard Super Admin King Culinary',
    subtitle: 'Dashboard Admin',
    description:
      'King Culinary Admin Dashboard is a web-based super admin panel designed to manage users, comments, and recipes while providing real-time insights into platform activity.',
    longDescription:
      'The Dashboard Super Admin King Culinary is a dedicated admin interface for managing and monitoring the core aspects of the King Culinary platform. Built using HTML, CSS, JavaScript, Firebase, and deployed via Vercel, the dashboard enables super admins to view, create, and manage recipes; moderate user comments; and oversee user activity. It includes a summary dashboard for tracking total users, comments, and uploaded recipes in real time. This solo project was developed with a focus on simplicity, admin efficiency, and data visualization for quick insights.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vercel', 'Firebase'],
    features: [
      'Super admin dashboard overview of users, comments, and recipes',
      'Create and manage recipes directly from the admin panel',
      'View and moderate user-submitted comments',
      'Monitor platform growth through visual statistics',
      'Responsive and intuitive interface for administration',
    ],
    myJobDesk: [
      'Built the entire super admin dashboard using HTML, CSS, and JavaScript',
      'Integrated Firebase to manage real-time data for users, comments, and recipes',
      'Implemented recipe creation and comment moderation features',
      'Developed dashboard UI for tracking statistics and platform health',
    ],
    images: [
      '/DK1.png',
      '/DK2.png'
    ],
    duration: '2 weeks',
    team: '2 developer',
    client: 'Personal Project',
    status: 'Completed',
    liveUrl: 'https://dashboard-culinary.vercel.app/',
    codeUrl: 'https://github.com/Farras8/Dashboard-Culinary.git',
    rank: 'A-Rank',
    completionDate: '2024-06-11',
  },
  {
    id: 'Mandiri-006',
    title: 'Project: Mandiri News',
    subtitle: 'Android News App',
    description:
      'Mandiri News is a Kotlin-based Android app that delivers the latest news from a public News API, with category-based filtering and detailed news viewing.',
    longDescription:
      'Mandiri News is a mobile news application built using Kotlin for Android. It fetches and displays up-to-date news articles from a third-party News API. Users can browse general headlines, filter articles by categories such as technology, health, business, and entertainment, and read complete news details through a clean and responsive interface. Developed as a solo project, this app focuses on simplicity, smooth UX, and effective API integration for real-time news updates.',
    technologies: ['Kotlin'],
    features: [
      'Fetch and display the latest news from a News API',
      'Filter news by various categories (e.g., tech, health, business)',
      'View detailed information of selected news articles',
      'User-friendly and responsive interface',
    ],
    myJobDesk: [
      'Designed and developed the Android app using Kotlin',
      'Integrated News API to fetch real-time articles',
      'Implemented category filtering and detail viewing functionality',
      'Handled UI design and overall app architecture',
    ],
    images: [
      '/Mandiri1.jpeg',
      '/Mandiri2.jpeg',
      '/Mandiri3.jpeg',
    ],
    duration: '1 months',
    team: '1 developers',
    client: 'ChatCorp',
    status: 'Completed',
    liveUrl: '#',
    codeUrl: 'https://github.com/Farras8/MandiriNews.git',
    rank: 'B-Rank',
    completionDate: '2024-04-25',
  },
  {
    id: 'King Culinary-007',
    title: 'Project: King Culinary',
    subtitle: 'Android Recipe App',
    description:
      'King Culinary is a Java-based Android app that allows users to explore, upload, and bookmark food recipes, featuring Firebase authentication and real-time data integration.',
    longDescription:
      'King Culinary is a mobile recipe-sharing application built with Java for Android and powered by Firebase for authentication and real-time data storage. Users can register and log in securely using Firebase Auth, recover passwords, view recipes uploaded by both admins and other users, upload their own recipes, bookmark favorites, comment on others’ recipes, and manage their profiles. This project was developed independently with a focus on smooth user interaction, Firebase integration, and clean UI implementation.',
    technologies: ['Java', 'Firebase'],
    features: [
      'Firebase Authentication with login, register, and password reset',
      'Browse recipes from admin and community submissions',
      'Upload and manage personal recipes',
      'Bookmark favorite recipes',
      'Edit and update user profiles',
      'Comment on other users’ recipes',
    ],
    myJobDesk: [
      'Developed the entire Android app using Java',
      'Integrated Firebase Authentication and Realtime Database',
      'Implemented features such as recipe upload, bookmarking, and commenting',
      'Handled UI/UX design and profile management functionality',
    ],
    images: [
      '/Culinary1.png',
      '/Culinary2.png',
      '/Culinary3.png',
      '/Culinary4.png',
      '/Culinary5.png',
      '/Culinary6.png',
      '/Culinary7.png',
      '/Culinary8.png',
    ],
    duration: '1 months',
    team: '2 developer',
    client: 'ShopEasy Inc.',
    status: 'Completed',
    liveUrl: 'https://drive.google.com/drive/folders/1g22u0L1POZ8BXnYNcrmwdVifcmMQm0JI?usp=sharing',
    codeUrl: 'https://github.com/Farras8/King_Culinary_App.git',
    rank: 'A-Rank',
    completionDate: '2024-07-11',
  }
];
