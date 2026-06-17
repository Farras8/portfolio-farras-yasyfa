import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
  PageBreak,
  Table,
  TableRow,
  TableCell,
  WidthType,
  ShadingType,
  ImageRun,
  convertInchesToTwip,
} from 'docx';
import { writeFileSync, readFileSync } from 'fs';
import { extname } from 'path';

// ─── DATA ───────────────────────────────────────────────────────────────────

const projects = [
  {
    title: 'Finance Form System',
    subtitle: 'Internal Finance Workflow System',
    period: 'Apr 2026 - Present',
    client: 'Durich Agro Persada',
    team: '3 developers (1 Backend, 1 Frontend, 1 Project Manager)',
    technologies: ['Go', 'Gin', 'Next.js', 'PostgreSQL', 'JWT', 'Bun ORM', 'Zap Logger', 'Web Push', 'Cron'],
    longDescription:
      'Finance Form System is an internal web application built to digitize and streamline company finance workflows. It handles the full lifecycle of financial documents including LPJ (accountability reports), advance payment submissions, and multi-level approval processes. The system supports role-based access control with JWT authentication and a layered permission middleware, ensuring each employee only accesses relevant financial data. Built for a team of 35 employees, the application prioritizes simplicity and reliability.',
    features: [
      'LPJ (accountability report) submission and management',
      'Advance payment request and approval workflow',
      'Multi-level role-based access control with JWT authentication',
      'Push notification integration for approval updates',
      'Scheduled jobs for automated reminders and processing',
      'Digital document management and export',
    ],
    myJobDesk: [
      'Designed and implemented RESTful API architecture using Go (Gin framework)',
      'Built multi-layer middleware for authentication and permission management',
      'Developed approval workflow logic and business rule engine',
      'Integrated push notification system for real-time approval updates',
      'Implemented scheduled jobs using Cron for automated processing',
      'Contributed to frontend development using Next.js',
    ],
    liveUrl: 'https://internalf.durich.id/',
    codeUrl: 'https://github.com/IT-DURICH/finance-form-system.git',
    image: 'public/Finance1.png',
  },
  {
    title: 'Palm Fund Manager',
    subtitle: 'Palm Oil Cash Flow & Profit Sharing System',
    period: 'Apr 2026 - Present',
    client: 'Durich Agro Persada',
    team: '3 developers (1 Backend, 1 Frontend, 1 Project Manager)',
    technologies: ['Laravel', 'PHP', 'Vue.js 3', 'Inertia.js', 'TailwindCSS', 'MySQL', 'PostgreSQL', 'Vite'],
    longDescription:
      'Palm Fund Manager is a web-based financial management system developed for internal use at a palm oil plantation company. It centralizes the recording of all operational transactions (harvest, fertilizer, salaries, maintenance) and automates the calculation and allocation of profit sharing to various stakeholders. The system provides real-time financial reporting across daily, weekly, and monthly periods, with multi-role access ensuring each stakeholder level sees only relevant data.',
    features: [
      'Operational cash flow recording for plantation transactions',
      'Automated profit sharing calculation and stakeholder allocation',
      'Real-time financial reporting (daily, weekly, monthly)',
      'Multi-role access control (Admin, Stakeholder, SuperAdmin)',
      'Transaction categorization (harvest, fertilizer, salaries, maintenance)',
      'Financial dashboard with summary and analytics',
    ],
    myJobDesk: [
      'Developed backend using Laravel 12 MVC architecture',
      'Built SPA frontend using Vue.js 3 with Inertia.js',
      'Implemented multi-role authentication and access control system',
      'Designed database schema and Eloquent ORM models',
      'Created automated profit sharing calculation logic',
      'Built financial reporting and dashboard features',
    ],
    liveUrl: null,
    codeUrl: 'https://github.com/IT-DURICH/palm-fund-manager.git',
    image: 'public/Palm1.png',
  },
  {
    title: 'Durich Company Profile',
    subtitle: 'Company Profile Website',
    period: 'Apr 2026 - Present',
    client: 'Durich Agro Persada',
    team: '3 developers (1 Backend, 1 Frontend, 1 Project Manager)',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Go', 'Gin'],
    longDescription:
      "Durich Company Profile is the official web presence for Durich Agro Persada, a palm oil plantation company. The website showcases the company's profile, vision and mission, core services, and business information in a clean and professional design. Built as a full-stack application with a separate backend and frontend.",
    features: [
      'Company profile and about section',
      'Services and business portfolio showcase',
      'Vision, mission, and company values presentation',
      'Responsive design for all devices',
      'Contact and inquiry section',
    ],
    myJobDesk: [
      'Developed backend API using Go (Gin framework)',
      'Built frontend using Next.js with TypeScript and TailwindCSS',
      'Implemented responsive layouts and UI components',
      'Integrated frontend with backend API',
    ],
    liveUrl: null,
    codeUrl: 'https://github.com/Farras8/durich-cp-fe.git',
    image: 'public/CP1.png',
  },
  {
    title: 'Dsimfoniku',
    subtitle: 'Health Inspection Website for the Health Department',
    period: 'Aug 2025 - Present',
    client: 'Dinas Kesehatan Depok',
    team: '1 Developer (Maintenance)',
    technologies: ['Laravel', 'PHP', 'MariaDB/MySQL', 'Tailwind', 'DaisyUI', 'jQuery', 'Vite', 'Laravel DomPDF', 'Maatwebsite Excel'],
    longDescription:
      'Dsimfoniku is a web-based health inspection system that enables the Health Department and community health centers (Puskesmas) to digitize the process of recording and reporting environmental health inspections. The platform provides structured forms for various types of inspections and supports full data management with CRUD operations, duplication, advanced search, filtering, and inspection history export.',
    features: [
      'Two user roles: Super Admin (Health Department) and Admin (Puskesmas)',
      'CRUD operations for environmental health inspection forms',
      'Duplicate inspections for faster data entry',
      'Inspection history with search, filter, and CSV export',
      'Letterhead editor with live PDF preview',
      'Download inspection reports in PDF format',
    ],
    myJobDesk: [
      'Developed CRUD functionality for three new inspection forms',
      'Updated one existing inspection form with improvements',
      'Established relational mapping between database tables in MySQL',
      'Fixed and optimized search and filter functionality',
      'Implemented letterhead editing feature with live PDF preview',
      'Re-deployed and configured the website hosting on Domainesia (cPanel)',
    ],
    liveUrl: 'https://dsimfoniku.com/',
    codeUrl: 'https://github.com/depokitdinkes-netizen/dsimfoniku_dinkes.git',
    image: 'public/Dsimfoniku1.jpeg',
  },
  {
    title: 'JobMate',
    subtitle: 'AI-Powered Job Search Platform',
    period: '2025',
    client: 'Dicoding / DBS Foundation',
    team: '6 developers (3 Full-Stack, 3 Machine Learning)',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Express.js', 'Python', 'Cloud Run', 'Firebase', 'Google Gemini', 'IndoBERT'],
    longDescription:
      'JobMate is a responsive and intelligent job search website designed to help users find suitable employment opportunities easily. The platform allows users to edit their profiles—including experience, education, and portfolio—bookmark job listings, and search for job vacancies or companies. It integrates a Gemini 2.0 Flash-based chatbot and a personalized job recommendation engine powered by a machine learning model.',
    features: [
      'Edit profile information including experience, education, and portfolio',
      'Bookmark job listings',
      'Search for job vacancies and companies',
      'Chatbot powered by Gemini 2.0 Flash',
      'Job recommendations based on user skills using machine learning',
    ],
    myJobDesk: [
      'Developed REST API using Express.js and deployed to Cloud Functions',
      'Designed and implemented Firebase Realtime Database structure',
      'Built responsive frontend using React TSX and Tailwind CSS',
      'Created ML-based recommendation API using Flask on Cloud Run',
      'Developed chatbot API using Flask integrated with Gemini 2.0 Flash',
      'Deployed the entire website to Vercel',
    ],
    liveUrl: 'https://job-mate-six.vercel.app/',
    codeUrl: 'https://github.com/Farras8/JobMate.git',
    image: 'public/JobMate1.png',
  },
  {
    title: 'FitMate',
    subtitle: 'Android Diet Assistant App',
    period: '2025',
    client: 'Lapis AI',
    team: '1 Mobile Developer, 1 ML Engineer, 1 NLP Engineer, 1 Data Scientist',
    technologies: ['Kotlin', 'Python', 'TensorFlow', 'Cloud Run', 'Cloud Storage', 'IndoBERT', 'Room Database'],
    longDescription:
      'FitMate is a smart diet assistant Android application designed to help users maintain their nutrition and health goals. It calculates daily calorie needs based on BMI, BMR, and TDEE. Users can track weight progress, use food recognition powered by CNN computer vision, get food recommendations via FP-Growth association rules, and interact with an IndoBERT-based NLP chatbot for nutrition guidance.',
    features: [
      'Daily calorie tracking based on BMI, BMR, and TDEE',
      'Weight progress tracking toward user-defined goals',
      'Food recognition using Computer Vision (CNN with EfficientNetV2S)',
      'Food recommendations based on FP-Growth data mining',
      'IndoBERT-powered chatbot for nutrition guidance',
    ],
    myJobDesk: [
      'Handled NLP development for chatbot feature',
      'Built chatbot model using IndoBERT pre-trained language model',
      'Uploaded and hosted the chatbot model on Google Cloud Storage',
      'Developed Flask API to serve the model and deployed to Cloud Run',
    ],
    liveUrl: null,
    codeUrl: 'https://github.com/2025-TI-CCIT-6A-Kelompok-5',
    image: 'public/FitMate1.jpeg',
  },
  {
    title: 'SustainWise',
    subtitle: 'Android Money Management App',
    period: '2024',
    client: 'Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)',
    team: '3 Machine Learning, 2 Mobile Developer, 2 Cloud Computing',
    technologies: ['Express.js', 'Kotlin', 'Cloud Functions', 'Cloud Storage', 'Firebase', 'TensorFlow Lite'],
    longDescription:
      'SustainWise is an Android application developed to assist users in managing their finances effectively. Built using Kotlin, the app enables users to perform CRUD on income and expenses with monthly tracking via graphical charts. A machine learning model analyzes monthly financial behavior and provides personalized financial recommendations.',
    features: [
      'CRUD operations for tracking income and expenses',
      'Monthly financial tracking with graphical analytics',
      'Personalized financial recommendations using machine learning',
    ],
    myJobDesk: [
      'Cloud Computing role — developed REST API using Express.js on Cloud Functions',
      'Created and managed real-time database using Firebase',
      'Integrated backend APIs into Android Studio using Kotlin',
      'Consumed TensorFlow Lite model outputs within the Android app',
    ],
    liveUrl: null,
    codeUrl: 'https://github.com/SustainWise',
    image: 'public/SustainWise1.png',
  },
  {
    title: 'King Culinary',
    subtitle: 'Android Recipe App',
    period: '2024',
    client: 'Personal Project',
    team: '2 developers',
    technologies: ['Java', 'Firebase'],
    longDescription:
      'King Culinary is a mobile recipe-sharing application built with Java for Android and powered by Firebase for authentication and real-time data storage. Users can register/login, view recipes from admin and community, upload their own recipes, bookmark favorites, comment on recipes, and manage profiles.',
    features: [
      'Firebase Authentication with login, register, and password reset',
      'Browse recipes from admin and community submissions',
      'Upload and manage personal recipes',
      'Bookmark favorite recipes',
      "Comment on other users' recipes",
    ],
    myJobDesk: [
      'Developed the entire Android app using Java',
      'Integrated Firebase Authentication and Realtime Database',
      'Implemented recipe upload, bookmarking, and commenting features',
      'Handled UI/UX design and profile management functionality',
    ],
    liveUrl: 'https://drive.google.com/drive/folders/1g22u0L1POZ8BXnYNcrmwdVifcmMQm0JI',
    codeUrl: 'https://github.com/Farras8/King_Culinary_App.git',
    image: 'public/Culinary1.png',
  },
  {
    title: 'Dashboard Super Admin King Culinary',
    subtitle: 'Web Admin Dashboard',
    period: '2024',
    client: 'Personal Project',
    team: '2 developers',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Vercel'],
    longDescription:
      'The Dashboard Super Admin King Culinary is a dedicated admin interface for managing and monitoring the King Culinary platform. Enables super admins to view, create, and manage recipes; moderate user comments; and oversee user activity with a summary dashboard for real-time tracking.',
    features: [
      'Super admin dashboard overview of users, comments, and recipes',
      'Create and manage recipes from the admin panel',
      'View and moderate user-submitted comments',
      'Monitor platform growth through visual statistics',
    ],
    myJobDesk: [
      'Built the entire super admin dashboard using HTML, CSS, and JavaScript',
      'Integrated Firebase for real-time data management',
      'Implemented recipe creation and comment moderation features',
      'Developed dashboard UI for tracking statistics and platform health',
    ],
    liveUrl: 'https://dashboard-culinary.vercel.app/',
    codeUrl: 'https://github.com/Farras8/Dashboard-Culinary.git',
    image: 'public/DK1.png',
  },
  {
    title: 'Ivasta Admin Dashboard',
    subtitle: 'PHP Native Admin Dashboard for Pasta Shop',
    period: '2023',
    client: 'Personal Project',
    team: '1 developer',
    technologies: ['PHP', 'MySQL'],
    longDescription:
      'Ivasta is a super admin dashboard website developed using PHP Native and MySQL, designed for efficiently managing a pasta shop. Includes full CRUD for product and category management, admin user management, order creation, order history tracking, and monthly sales/revenue tracking with graphical charts.',
    features: [
      'CRUD operations for categories and products',
      'Admin management system',
      'Order creation and tracking',
      'Monthly revenue and sales analytics with charts',
      'Order history and management dashboard',
    ],
    myJobDesk: [
      'Developed all core features using PHP Native and MySQL',
      'Designed and implemented the admin dashboard UI and logic',
      'Integrated graphical order and revenue tracking system',
      'Handled project from planning to completion independently',
    ],
    liveUrl: null,
    codeUrl: 'https://github.com/Farras8/PWL.git',
    image: 'public/IvastaAdmin1.png',
  },
  {
    title: 'Mandiri News',
    subtitle: 'Android News App',
    period: '2024',
    client: 'Personal Project',
    team: '1 developer',
    technologies: ['Kotlin'],
    longDescription:
      'Mandiri News is a mobile news application built using Kotlin for Android. It fetches and displays up-to-date news articles from a third-party News API. Users can browse general headlines, filter by categories (technology, health, business, entertainment), and read complete news details.',
    features: [
      'Fetch and display the latest news from a News API',
      'Filter news by various categories',
      'View detailed information of selected news articles',
      'User-friendly and responsive interface',
    ],
    myJobDesk: [
      'Designed and developed the Android app using Kotlin',
      'Integrated News API to fetch real-time articles',
      'Implemented category filtering and detail viewing functionality',
      'Handled UI design and overall app architecture',
    ],
    liveUrl: null,
    codeUrl: 'https://github.com/Farras8/MandiriNews.git',
    image: 'public/Mandiri1.jpeg',
  },
];

// ─── HELPERS ────────────────────────────────────────────────────────────────

const ACCENT = '2563EB';
const DARK   = '1E293B';
const LIGHT  = 'F1F5F9';
const WHITE  = 'FFFFFF';
const GRAY   = '64748B';

function imgType(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (ext === '.png') return 'png';
  if (ext === '.jpg' || ext === '.jpeg') return 'jpg';
  return 'png';
}

function sectionLabel(text) {
  return new Paragraph({
    spacing: { before: 160, after: 60 },
    children: [
      new TextRun({ text: text.toUpperCase(), bold: true, size: 18, color: ACCENT, font: 'Calibri' }),
    ],
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: ACCENT } },
  });
}

function bulletItem(text) {
  return new Paragraph({
    spacing: { before: 40, after: 40 },
    indent: { left: convertInchesToTwip(0.2) },
    children: [
      new TextRun({ text: '• ', color: ACCENT, size: 17, font: 'Calibri' }),
      new TextRun({ text, size: 17, color: DARK, font: 'Calibri' }),
    ],
  });
}

function buildProjectPage(project, isLast) {
  const blocks = [];

  // ── Full-width image at top ──
  const imgBuf = readFileSync(project.image);
  blocks.push(
    new Paragraph({
      spacing: { before: 0, after: 0 },
      children: [
        new ImageRun({
          data: imgBuf,
          type: imgType(project.image),
          transformation: { width: 620, height: 310 },
        }),
      ],
    })
  );

  // ── Title block below image ──
  blocks.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 160, after: 40 },
      shading: { type: ShadingType.SOLID, color: DARK, fill: DARK },
      children: [
        new TextRun({ text: project.title, bold: true, size: 32, color: WHITE, font: 'Calibri' }),
      ],
    })
  );
  blocks.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 160 },
      children: [
        new TextRun({ text: project.subtitle, size: 20, color: GRAY, font: 'Calibri' }),
      ],
    })
  );

  // ── Meta info row ──
  blocks.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: {
        top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
        left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
        insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE },
      },
      rows: [
        new TableRow({
          children: [
            ['Period', project.period],
            ['Client', project.client],
            ['Team', project.team],
          ].map(([label, value]) =>
            new TableCell({
              width: { size: 33, type: WidthType.PERCENTAGE },
              shading: { type: ShadingType.SOLID, color: LIGHT, fill: LIGHT },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({ text: label + ': ', bold: true, size: 16, color: GRAY, font: 'Calibri' }),
                    new TextRun({ text: value, size: 16, color: DARK, font: 'Calibri' }),
                  ],
                }),
              ],
            })
          ),
        }),
      ],
    })
  );

  // ── Overview ──
  blocks.push(sectionLabel('Overview'));
  blocks.push(
    new Paragraph({
      spacing: { before: 60, after: 60 },
      children: [
        new TextRun({ text: project.longDescription, size: 17, color: DARK, font: 'Calibri' }),
      ],
    })
  );

  // ── Tech Stack ──
  blocks.push(sectionLabel('Tech Stack'));
  blocks.push(
    new Paragraph({
      spacing: { before: 60, after: 60 },
      children: [
        new TextRun({ text: project.technologies.join('  •  '), size: 17, color: DARK, font: 'Calibri' }),
      ],
    })
  );

  // ── Two-column: Features | My Role ──
  blocks.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      spacing: { before: 120 },
      borders: {
        top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
        left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
        insideH: { style: BorderStyle.NONE },
        insideV: { style: BorderStyle.SINGLE, size: 4, color: 'E2E8F0' },
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              margins: { top: 0, bottom: 0, left: 0, right: 180 },
              children: [
                new Paragraph({
                  spacing: { before: 0, after: 60 },
                  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: ACCENT } },
                  children: [
                    new TextRun({ text: 'KEY FEATURES', bold: true, size: 17, color: ACCENT, font: 'Calibri' }),
                  ],
                }),
                ...project.features.map(bulletItem),
              ],
            }),
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              margins: { top: 0, bottom: 0, left: 180, right: 0 },
              children: [
                new Paragraph({
                  spacing: { before: 0, after: 60 },
                  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: ACCENT } },
                  children: [
                    new TextRun({ text: 'MY ROLE & CONTRIBUTIONS', bold: true, size: 17, color: ACCENT, font: 'Calibri' }),
                  ],
                }),
                ...project.myJobDesk.map(bulletItem),
              ],
            }),
          ],
        }),
      ],
    })
  );

  // ── Links ──
  const linkParts = [];
  if (project.liveUrl) {
    linkParts.push(
      new TextRun({ text: 'Live: ', bold: true, size: 16, color: GRAY, font: 'Calibri' }),
      new TextRun({ text: project.liveUrl, size: 16, color: ACCENT, font: 'Calibri' })
    );
  }
  if (project.codeUrl) {
    if (linkParts.length) linkParts.push(new TextRun({ text: '     ', size: 16, font: 'Calibri' }));
    linkParts.push(
      new TextRun({ text: 'Code: ', bold: true, size: 16, color: GRAY, font: 'Calibri' }),
      new TextRun({ text: project.codeUrl, size: 16, color: ACCENT, font: 'Calibri' })
    );
  }
  if (linkParts.length) {
    blocks.push(new Paragraph({ spacing: { before: 120, after: 60 }, children: linkParts }));
  }

  if (!isLast) {
    blocks.push(new Paragraph({ children: [new PageBreak()] }));
  }

  return blocks;
}

// ─── COVER PAGE ──────────────────────────────────────────────────────────────

const coverPage = [
  new Paragraph({ spacing: { before: 1440 } }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 160 },
    children: [
      new TextRun({ text: 'MUHAMMAD FARRAS YASYFA', bold: true, size: 56, color: DARK, font: 'Calibri' }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [
      new TextRun({ text: 'Full-Stack Web Developer  •  Cloud Computing  •  Mobile Developer', size: 24, color: GRAY, font: 'Calibri' }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 800 },
    children: [
      new TextRun({ text: '+62 813-1493-5717  •  mfarras2004@gmail.com', size: 20, color: GRAY, font: 'Calibri' }),
    ],
  }),
  new Table({
    width: { size: 60, type: WidthType.PERCENTAGE },
    alignment: AlignmentType.CENTER,
    borders: {
      top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE },
      insideH: { style: BorderStyle.NONE }, insideV: { style: BorderStyle.NONE },
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            shading: { type: ShadingType.SOLID, color: ACCENT, fill: ACCENT },
            margins: { top: 160, bottom: 160, left: 200, right: 200 },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: `${projects.length} Projects`, bold: true, size: 48, color: WHITE, font: 'Calibri' }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'Portfolio Overview', size: 20, color: 'DBEAFE', font: 'Calibri' }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 800 },
    children: [
      new TextRun({ text: 'github.com/Farras8  •  portfolio-farras-yasyfa.vercel.app', size: 18, color: GRAY, font: 'Calibri' }),
    ],
  }),
  new Paragraph({ children: [new PageBreak()] }),
];

// ─── BUILD & WRITE ────────────────────────────────────────────────────────────

const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(0.7),
            bottom: convertInchesToTwip(0.7),
            left: convertInchesToTwip(0.8),
            right: convertInchesToTwip(0.8),
          },
        },
      },
      children: [
        ...coverPage,
        ...projects.flatMap((p, i) => buildProjectPage(p, i === projects.length - 1)),
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  writeFileSync('public/Portfolio - Muhammad Farras Yasyfa.docx', buffer);
  console.log('✅  Generated: public/Portfolio - Muhammad Farras Yasyfa.docx');
});
