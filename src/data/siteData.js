export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
]

export const socials = {
  email: 'pjaranzas',
  linkedin: 'https://linkedin.com/in/Pol Jesvin Tanag',
  github: 'https://github.com/pjaranzasotanag',
  instagram: 'https://instagram.com/pljsvntng',
  tiktok: 'https://tiktok.com/@jesdev30',
}

export const stats = [
  { value: '7', label: 'Projects Completed' },
  { value: '17', label: 'Technologies' },
  { value: '6', label: 'Clients & Collaborations' },
]

export const services = [
  {
    number: '01',
    label: 'Static',
    title: 'Development & Delivery',
    description:
      'Lightweight, fast, ultra-secure landing pages and portfolio experiences built with modern technologies.',
    details: [
      'Semantic, accessible markup with clean component structure',
      'Performance budgets — sub-second first paint, optimized assets',
      'Deployed on Vercel or Netlify with CI previews for every change',
    ],
  },
  {
    number: '02',
    label: 'Dynamic Optimization',
    title: 'Fullstack Architecture',
    description:
      'Interactive web applications with scalable architecture, secure authentication, APIs, and database integration.',
    details: [
      'REST or GraphQL APIs with role-based authentication',
      'Relational schema design in PostgreSQL or MySQL',
      'Caching, rate limiting, and background jobs where they matter',
    ],
  },
  {
    number: '03',
    label: 'Deployment',
    title: 'Infrastructure & Ops',
    description:
      'Reliable deployment, hosting setup, performance optimization, and maintainable production environments.',
    details: [
      'CI/CD pipelines with automated testing gates',
      'Environment configuration, secrets management, and monitoring',
      'Documentation so the next developer isn\u2019t guessing',
    ],
  },
  {
    number: '04',
    label: 'UI/UX',
    title: 'Design & Refinement',
    description:
      'Clean interfaces, responsive layouts, usability improvements, and thoughtful visual systems.',
    details: [
      'Component-level design systems in Figma, handed off cleanly',
      'Usability passes: contrast, tap targets, motion, reading order',
      'Responsive layouts recomposed for mobile, not just shrunk',
    ],
  },
]

export const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: ['PHP', 'MySQL'],
  },
  {
    id: 'languages',
    label: 'Languages',
    items: ['Java', 'JavaScript', 'PHP'],
  },
  {
    id: 'design',
    label: 'Design & Editing',
    items: ['Figma', 'Canva'],
  },
  {
    id: 'tools',
    label: 'Tools & AI',
    items: ['Git', 'GitHub', 'VS Code', 'Netlify', 'Vercel', 'AI Development Tools'],
  },
]

export const education = {
  fileLabel: '// ACTIVE FILE: EDUCATION',
  heading: 'Academic Background',
  description:
    'I\u2019m a Computer Science student who spends about as much time outside the classroom shipping projects as inside it \u2014 the coursework gives me the fundamentals, the side projects are where I actually learn how software behaves in the wild.',
  degree: 'Bachelor of Science in Computer Science',
  focus: 'Web Development & UI/UX',
  status: '3rd Year Student',
  school: 'Cavite State University \u2013 Naic Campus',
}

export const projects = [
  {
    id: 'student-management-portal',
    title: 'Student Management Portal',
    category: 'Full-Stack Web Application',
    description:
      'A web-based student management platform with authentication, student records, courses, schedules, and administrative functionality.',
    technologies: ['PHP', 'MySQL', 'CSS', 'HTML5'],
    problem: 'Academic staff were tracking enrollment, schedules, and grades across scattered spreadsheets with no shared source of truth.',
    solution: 'A role-based portal where administrators manage records centrally and students view their own courses, schedules, and standing in real time.',
    features: [
      'Role-based authentication for admins, faculty, and students',
      'Course and schedule management with conflict detection',
      'Searchable student records with audit history',
    ],
    github: 'https://github.com/pljsvntng/student-management-portal',
    demo: 'https://example.com/student-management-portal',
  },
  {
    id: 'virtual-study-group',
    title: 'Virtual Study Group',
    category: 'Full-Stack Web Application',
    description:
      'A collaborative study platform designed for students with study groups, shared resources, and communication features.',
    technologies: ['PHP', 'MySQL', 'CSS3' , 'HTML5'],
    problem: 'Students juggling group projects had no single place to coordinate, share materials, and keep discussion organized by topic.',
    solution: 'A lightweight platform where students form study groups, share resources in threaded discussions, and message in real time.',
    features: [
      'Group creation with shared resource libraries',
      'Real-time chat and threaded discussion boards',
      'Notification system for new materials and replies',
    ],
    github: 'https://github.com/pljsvntng/virtual-study-group',
    demo: 'https://example.com/virtual-study-group',
  },
  {
    id: 'quiz-flashcard-app',
    title: 'PoliCard / Flashcard Application',
    category: 'React Application',
    description:
      'An interactive learning platform with quizzes, flashcards, question generation, scoring, and progress tracking.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    problem: 'Existing flashcard tools were either too rigid to customize or too cluttered to use for quick review sessions.',
    solution: 'A focused study tool that generates quizzes from a deck of flashcards and tracks scoring and progress over time.',
    features: [
      'Custom deck creation with spaced-repetition style review',
      'Auto-generated quizzes with instant scoring',
      'Progress tracking across sessions',
    ],
    github: 'https://github.com/pljsvntng/Policard',
    demo: 'https://policard-six.vercel.app/',
  },
  {
    id: 'healthcare-website',
    title: 'Healthcare Website',
    category: 'Marketing Website',
    description:
      'An informational site for a small clinic, covering services, staff profiles, and appointment requests.',
    technologies: ['PHP', 'MySQL', 'CSS3', 'HTML5'],
    problem: 'Patients had no easy way to see available services or request appointments outside of phone calls.',
    solution: 'A clear, accessible site structure with service pages and a simple appointment request flow.',
    features: [
      'Service and staff directory',
      'Accessible appointment request form',
      'Mobile-first layout for on-the-go patients',
    ],
    github: 'https://github.com/pljsvntng/healthcare-website',
    demo: 'https://example.com/healthcare-website',
  },
  {
  id: 'photobooth-website',
  title: 'Photobooth Web Application',
  category: 'Interactive Web Application',
  description:
    'A fun and interactive web-based photobooth that lets users capture photos, apply filters and effects, create photo strips, and download their finished photos.',
  technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
  problem:
    'Traditional photobooth experiences often require dedicated hardware or software, making them less accessible for users who simply want to take and customize photos from their browser.',
  solution:
    'A browser-based photobooth that provides an easy and interactive way to capture, customize, and save photos without requiring additional software.',
  features: [
    'Real-time camera preview with photo capture',
    'Multiple photo filters and visual effects',
    'Customizable photobooth photo strips',
    'Countdown timer for hands-free photo capture',
    'Preview and retake captured photos',
    'Download finished photos directly to the device',
  ],
  github: 'https://github.com/pljsvntng/photobooth',
  demo: 'https://photo-booth-nu-red.vercel.app/',
},
  {
    id: 'java-quiz-game',
    title: 'Java Quiz Game',
    category: 'Desktop Application',
    description:
      'A desktop quiz game built in Java with a scoring system and multiple categories.',
    technologies: ['HTML5', 'CSS3', 'PHP', 'MySQL'],
    problem: 'A course assignment called for a self-contained desktop application demonstrating OOP fundamentals.',
    solution: 'A category-based quiz game with a clean Swing interface and persistent high scores.',
    features: [
      'Multiple choice questions across categories',
      'Timed rounds with live scoring',
      'Local high-score persistence',
    ],
    github: 'https://github.com/pljsvntng/java-quiz-game',
    demo: null,
  },
  {
  id: 'bottle-royale',
  title: 'Bottle Royale',
  category: 'Web Application',
  description:
    'An interactive spin-the-bottle party game where friends enjoy randomized questions and fun challenges together.',
  technologies: ['React', 'Vite', 'Node.js'],
  problem:
    'Traditional spin-the-bottle games rely on a physical bottle and manually prepared prompts, limiting variety and interactive gameplay.',
  solution:
    'Developed a digital spin-the-bottle party game with interactive spinning, randomized prompts, and an engaging interface designed for group entertainment.',
  features: [
    'Interactive digital bottle spinning',
    'Multiple party game categories',
    'Randomized questions and challenges',
    'Group gameplay with friends',
    'Responsive and engaging user interface',
  ],
  github: 'https://github.com/pljsvntng/bottle-royale',
  demo: 'https://bottle-royale.vercel.app/',
}
]
