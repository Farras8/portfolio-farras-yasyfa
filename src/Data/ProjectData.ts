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
      '/JobMate1.png',
      '/JobMate2.png',
      '/JobMate3.png',
      '/JobMate4.png',
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
      '/SustainWise1.png',
      '/sustainwise-cloud-architecture.jpg',
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
      '/IvastaAdmin1.png',
      '/IvastaAdmin2.png',
      '/IvastaAdmin3.png',
      '/IvastaAdmin4.png',
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
      '/KingCulinaryApp1.png',
      '/KingCulinaryApp2.png'
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
      '/Mandiri1.jpeg',
      '/Mandiri2.jpeg',
      '/Mandiri3.jpeg',
    ],
    duration: '4 months',
    team: '3 developers',
    client: 'ChatCorp',
    status: 'Completed',
    liveUrl: '#',
    codeUrl: '#',
    rank: 'B-Rank',
    completionDate: '2024-08-25',
  }
];
