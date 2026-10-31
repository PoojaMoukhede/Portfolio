export const personalData = {
  name: 'Pooja Moukhede',
  title: 'MERN Stack Developer',
  headlineRoles: [
    'MERN Stack Developer',
    'React.js Developer',
    'Full Stack Engineer',
    'Real-Time Web Specialist',
  ],
  experienceYears: '4+ Years',
  email: 'poojamoukhede27@gmail.com',
  resumeUrl: '/files/Pooja_Moukhede_MERN_4years.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/pooja-moukhede-b69803211/',
    github: 'https://github.com/PoojaMoukhede',
  },
  summary:
    "Results-driven MERN Stack Developer with 4 years of experience in building scalable, high-performance web applications using React.js, JavaScript, TypeScript, Node.js, Express.js, and MongoDB. Skilled in Redux, REST APIs, WebSockets, responsive UI development, and frontend performance optimization. Committed to writing clean, maintainable code and delivering efficient, reliable, and user-focused web solutions.",
};

export const experiences = [
  {
    role: 'MERN Stack Developer',
    company: '9DOT TECHNOLOGIES',
    period: 'Dec 2024 – Oct 2026',
    location: 'Surat, Gujarat',
    technologies: [
      'React.js',
      'Redux',
      'WebSockets',
      'Vimeo Player API',
      'REST APIs',
      'Trading-view',
    ],
    highlights: [
      {
        title: 'Amberon & Sasi LMS Platforms',
        text: 'Engineered responsive frontend video learning platforms integrating Vimeo Player API for domain-restricted streaming, resume playback, and real-time watch analytics.',
        demos: [
          { name: 'Amberon', url: 'https://client.amberon.ae/' },
          { name: 'Sasi LMS', url: 'https://ai.sasiglobaleducation.com/login' },
        ],
      },
      {
        title: 'Real-Time Trading Platform (VertexFx)',
        text: 'Maintained VertexFx live trading platform, architecting WebSocket pipelines to stream sub-second market data feeds and order updates.',
        demos: [
          { name: 'Vertex', url: 'https://vertexproweb.hybridsolutions.com/' },
        ],
      },
      {
        title: 'High-Performance Frontend Architecture',
        text: 'Engineered scalable React architectures with Redux state management, custom playback telemetry, and optimized RESTful API integrations.',
      },
    ],
  },
  {
    role: 'Web Developer',
    company: 'Multispan Control Instruments Pvt. Ltd.',
    period: 'Mar 2023 – Nov 2024',
    location: 'Ahmedabad, Gujarat',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST APIs'],
    highlights: [
      {
        title: 'Android-Integrated HRMS Dashboard',
        text: 'Developed administrative dashboards for employee attendance tracking, shift scheduling, and leave management integrated with Android systems.',
      },
      {
        title: 'Full-Stack MERN Repair Automation',
        text: 'Engineered repair-order processing module automating service ticketing, invoice generation, and warranty tracking lifecycle.',
      },
      {
        title: 'Database Architecture & API Optimization',
        text: 'Designed robust MongoDB schemas and SQL queries, delivering sub-second response times for enterprise operational telemetry.',
      },
    ],
  },
  {
    role: 'React Developer',
    company: 'Endlos Technologies Pvt. Ltd.',
    period: 'Nov 2022 – Mar 2023',
    location: 'Ahmedabad, Gujarat',
    technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'REST APIs'],
    highlights: [
      {
        title: 'Quick Commission Advance Platform',
        text: 'Developed responsive frontend UI for property broker financial advance web application, streamlining multi-step application workflows.',
      },
      {
        title: 'Component Architecture & Mobile-First UI',
        text: 'Built modular, reusable component libraries using React.js and Bootstrap, ensuring seamless cross-browser responsiveness and accessibility.',
      },
      {
        title: 'RESTful Integration & Performance',
        text: 'Integrated client-side REST APIs with client validation and error handling, reducing render lag and enhancing end-user transaction speed.',
      },
    ],
  },
];

export const educations = [
  {
    title: 'GenAI & Multi Agent Systems Certification',
    institution: 'Coding Ninjas',
    period: 'Oct 2026 – Present',
    description:
      'Learning Generative AI concepts, LLM architectures, multi-agent systems, and AI-powered application development.',
  },
  {
    title: 'Full Stack Web Development Certification',
    institution: '10x Academy',
    period: 'April 2022 – November 2022',
    description:
      'Intensive program in MERN stack architecture, algorithms, and system design. Hands-on mastery of MongoDB, Express.js, React.js, Node.js, and scalable web applications.',
  },
  {
    title: 'Bachelor of Engineering (B.E.), Mechanical Engineering',
    institution: 'University Institute of Technology, RGPV',
    period: '2016 – 2019',
    description:
      'Graduated from Rajiv Gandhi Proudyogiki Vishwavidyalaya (SBITM Betul) with a focus on mechanical engineering.',
  },
  {
    title: 'Diploma in Mechanical Engineering',
    institution: 'Polytechnic',
    period: '2013 – 2016',
    description:
      'Completed comprehensive technical diploma in Mechanical Engineering.',
  },
];

export const skillCategories = [
  {
    title: 'Languages & Frontend',
    iconName: 'code',
    skills: [
      'React.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'Redux Toolkit',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'Responsive UI',
    ],
  },
  {
    title: 'Backend & Real-Time',
    iconName: 'server',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'WebSockets',
      'Swagger / OpenAPI',
      'Authentication (JWT)',
    ],
  },
  {
    title: 'Video & Media APIs',
    iconName: 'play',
    skills: [
      'Vimeo Player API',
      'Secure Domain Embeds',
      'Real-Time Progress Tracking',
      'Event Telemetry',
      'Trading-view',
    ],
  },
  {
    title: 'Databases & Tools',
    iconName: 'database',
    skills: [
      'MongoDB',
      'SQL',
      'Git',
      'GitHub',
      'Postman',
      'Cursor AI',
      'GitHub Copilot',
      'VS Code',
      'Figma',
    ],
  },
];

export const projects = [
  {
    id: 'amberon-lms',
    title: 'Amberon LMS',
    description:
      'Interactive Learning Management System frontend engineered for video courses, enrollment workflows, and domain-restricted video streaming via Vimeo Player API.',
    category: 'Frontend',
    image: '/img/amberon.png',
    imageFit: 'contain',
    tags: ['React.js', 'Redux', 'Vimeo API', 'LMS'],
    liveUrl: 'https://client.amberon.ae/',
    featured: true,
  },
  {
    id: 'sasi-global-lms',
    title: 'Sasi Global Education LMS',
    description:
      'Interactive global e-learning platform frontend featuring real-time video progress tracking, automated watch-time analytics, and milestone course completion certifications.',
    category: 'Frontend',
    image: '/img/sasi.png',
    imageFit: 'contain',
    tags: ['React.js', 'REST APIs', 'Vimeo API', 'EdTech'],
    liveUrl: 'https://ai.sasiglobaleducation.com/login',
    featured: true,
  },
  {
    id: 'vertex-fx',
    title: 'VertexFx Live Trading Platform',
    description:
      'Real-time trading web platform streaming sub-second live market feeds, order updates, and charts with WebSockets.',
    category: 'Real-time',
    image: '/img/vertex.png',
    imageFit: 'contain',
    tags: ['React.js', 'WebSockets', 'Trading-view', 'Real-time'],
    liveUrl: 'https://vertexproweb.hybridsolutions.com/',
    featured: true,
  },
  {
    id: 'qca',
    title: 'Quick Commission Advance',
    description:
      'Responsive financial technology frontend for property broker commission advance web application with multi-step workflows.',
    category: 'Frontend',
    image: '/img/Component 80.png',
    tags: ['React.js', 'Bootstrap', 'REST APIs'],
    liveUrl: 'https://www.quickcommissionadvance.com/',
    featured: true,
  },
  {
    id: 'swiggy',
    title: 'Swiggy Food Ordering Clone',
    description:
      'Feature-rich food ordering platform with dynamic restaurant menus, cart management, and interactive UI.',
    category: 'Frontend',
    image: '/img/Swiggy.png',
    tags: ['React.js', 'CSS3', 'REST APIs'],
    liveUrl: 'https://swiggy-pooja.netlify.app/',
    githubUrl: 'https://github.com/PoojaMoukhede',
  },
  {
    id: 'akeshya',
    title: 'Akeshya Corporate Platform',
    description:
      'Modern agency website featuring sleek animations, services showcase, responsive layouts, and interactive client sections.',
    category: 'Frontend',
    image: '/img/akeshya.png',
    tags: ['React.js', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://akeshya-pooja.vercel.app/',
    githubUrl: 'https://github.com/PoojaMoukhede',
  },
  {
    id: 'netflix',
    title: 'Netflix UI Streaming Clone',
    description:
      'Entertainment UI recreating Netflix hero banner trailers, category rows, modal previews, and smooth hover animations.',
    category: 'Frontend',
    image:
      'https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png',
    tags: ['React.js', 'TMDB API', 'CSS Grid'],
  },
  {
    id: 'evspot',
    title: 'EvSpot - EV Charging Station Finder',
    description:
      'Interactive EV charging locator application for discovering charging slots, station details, and reserving spots.',
    category: 'Full Stack',
    image:
      'https://www.power-technology.com/wp-content/uploads/sites/21/2021/09/shutterstock_1864450102-scaled.jpg',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/PoojaMoukhede/EvSpot',
  },
];
