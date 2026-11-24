export const education = [
  {
    id: 1,
    title: "IT School GoIT",
    data: "2024 - 2025",
    name: "Fullstack Developer",
    text: [
      "Improved clean code practices and gained team experience as both a developer and team lead.",
      "Learned to build back-end services and manage full-stack project development.",
    ],
  },
  {
    id: 2,
    title: "IT courses by Okten School",
    data: "2023",
    name: "Frontend Developer",
    text: [
      "Strengthened programming fundamentals by building a pet project and working with Figma for UI design.",
      "Gained practical experience in front-end workflows and independent problem-solving.",
    ],
  },
  {
    id: 3,
    title: "Ostrogradskyi National University of Kremenchuk",
    data: "2013 - 2018",
    name: "Computer Science, Master's Degree",
    text: "Gained foundational knowledge in programming, computer logic, and design principles during university studies, while also developing critical thinking and problem-solving skills.",
  },
];

export const experience = [
    {
    id: 1,
    title: "Pythons Team",
    data: "2025 - Oct 2026",
    name: "Frontend Developer",
    text: [
      "Developed responsive landing pages for advertising campaigns, from scratch and based on existing designs.",
      "Built and maintained web applications using Next.js and React.",
      "Integrated frontend applications with backend services and APIs within a microservices-based architecture.",
      "Worked with Figma designs to implement pixel-accurate, responsive interfaces.",
      "Collaborated with the development team using Git, participated in code reviews, and maintained code quality.",
      "Improved existing code and optimized application performance and maintainability.",
    ],
  },
    {
    id: 2,
    title: "VerbUp",
    data: "2025 - now",
    name: "Frontend Developer (part-time)",
    text: "Worked as a Frontend Developer on an educational web platform focused on making English vocabulary learning interactive and engaging. Responsible for frontend development, implementing core application features, building interactive learning experiences, managing application state, and integrating backend services. Contributed to the product's functionality, user experience, and ongoing development.",
  },
  {
    id: 3,
    title: "Security Police",
    data: "2017 - 2021",
    name: "Technical security engineer",
    text: "Learned to set priorities and adapt to different work styles while delivering reliable results. Gained experience in communication, task management, and supporting overall work efficiency.",
  },
];

export const resumeUrl = `${import.meta.env.BASE_URL}files/MariiaSkydan_FullStack.pdf`;

export const projects = [
  {
    id: 11,
    title: "PetMind",
    data: "2026",
    skills: ["#react", "#typescript", "#supabase", "#scss"],
    url: "https://pet-mind-two.vercel.app/",
    foto: "./projects/petmind.webp",
    alt: "PetMind — pet wellbeing web app",
    text: "A full-stack SaaS-style app that turns a short personality quiz into a personalised care plan for a pet, then helps owners track its wellbeing over time. Onboarding funnel from landing to quiz, sign-up, paywall and dashboard; auth and data on Supabase (Postgres) with Row Level Security, triggers and SQL functions; species-aware reports, mood journal, weight and mood charts, weekly insights and a rule-based care coach. Freemium model with gated premium features and checkout. Built with React, TypeScript, Vite, React Router, SCSS Modules, Recharts and Supabase.",
  },
  {
    id: 5,
    title: "Website - 'Olena Studio'",
    data: "2023",
    skills: ["#react", "#node", "#redux", "#mongo", "#chart"],
    url: "https://o-react.vercel.app/",
    foto: "./projects/olena-studio.webp",
    alt: "Olena Studio",
    text: "Full stack website. Logining, salon appointment, products buy, etc. Separate admin account with setting products and more. Also, the site has an analysis for the administrator using React Chart. The documentation is written by Swagger.",
  },
  {
    id: 1,
    title: "Sweetopia",
    data: "2026-now",
    skills: ["#react", "#scss"],
    url: "https://sweetopia-flame.vercel.app/",
    foto: "./projects/sweetopia.webp",
    alt: "Sweetopia",
    text: "A landing page about sweets, featuring animations and generated images, is currently under development. It is being created using AI.",
  },
  {
    id: 2,
    title: "VerbUp",
    data: "2025-now",
    skills: ["#react", "#scss", "#redux", "#canvas"],
    url: "https://verbup-fe.vercel.app/",
    foto: "./projects/verbUp.webp",
    alt: "VerbUp",
    text: "A web application for learning irregular English verbs through games. The app is still under development, but already features a wide range of functions, such as registration, a personal dashboard, score tracking, a choice of difficulty levels and more.",
  },
  {
    id: 3,
    title: "Landing - 'Portfolio'",
    data: "2025",
    skills: ["#js", "#html", "#css"],
    url: "https://dimabarbara.github.io/project-WebGuru/",
    foto: "./projects/full-stack.webp",
    alt: "Portfolio",
    text: "Portfolio site. Role: Developer. Collaborated on the 'About Us' section as part of a pair programming effort. Conducted thorough code reviews to ensure consistency and quality, assisted in the development of other sections, and actively participated in debugging and optimization code and images tasks to improve site performance.",
  },
  {
    id: 4,
    title: "Landing - 'Watcharm'",
    data: "2024",
    skills: ["#html", "#css"],
    url: "https://maskaa22.github.io/perfect-developers/",
    foto: "./projects/watcharm.webp",
    alt: "Watcharm",
    text: "A responsive website built with attention to layout and performance. Role: Team Lead & Developer. Responsible for project setup on GitHub, checking build errors, monitoring live page performance, and developing the header component. Also contributed to team coordination, code reviews, and deployment process.",
  },
  // Hidden for now while being fixed: Ulia Ushenko
  // {
  //   id: 6,
  //   title: "Website - 'Ulia Ushenko'",
  //   data: "2023",
  //   skills: ["#react", "#node", "#redux", "#mongo"],
  //   url: "https://ulia-ushenko.vercel.app/",
  //   foto: "./projects/ulia-ushenko.webp",
  //   alt: "Ulia Ushenko",
  //   text: "Full-stack website. Front-end developed using React, back-end built with Node.js, and MongoDB used as the database. The platform features an admin panel for a poet to upload and manage poems, with functionality for registered users to rate and comment on the poems.",
  // },
  // Hidden for now while they are being fixed: Natural Forest, 3D model, Hoo bank
  // {
  //   id: 7,
  //   title: "Landing - 'Natural Forest'",
  //   data: "2024",
  //   skills: ["#react", "#css"],
  //   url: "https://forest-site.vercel.app/",
  //   foto: "./projects/natural-forest.webp",
  //   alt: "Natural Forest",
  //   text: "This site is built with React. A key feature of the project is the interactive 3D main screen, where users can explore the structure more comprehensively by moving the mouse. The project also includes smooth animations, responsive design, and optimized performance for seamless user experience across different devices.",
  // },
  // {
  //   id: 8,
  //   title: "3D - model website",
  //   data: "2023",
  //   skills: ["#react", "#three_fiber", "#tailwind_css"],
  //   url: "https://3d-model-website-ten.vercel.app/",
  //   foto: "./projects/3-d-model.webp",
  //   alt: "3D",
  //   text: "Written in React using 3D models. The main window features an interactive menu designed as a star system, where users can navigate to other pages by scrolling. The project incorporates smooth transitions, engaging animations, and dynamic content that responds to user interaction for a unique browsing experience.",
  // },
  // {
  //   id: 9,
  //   title: "Landing - 'Hoo bank'",
  //   data: "2023",
  //   skills: ["#react", "#tailwind_css"],
  //   url: "https://bank-system-weld.vercel.app/",
  //   foto: "./projects/hoo-bank.webp",
  //   alt: "Hoo bank",
  //   text: "Written in React using Tailwind CSS. A simple landing page that highlights banking opportunities. The main advantage is the use of a new CSS library, providing a clean, modern design with highly customizable components for a responsive user experience. The site is optimized for fast load times and seamless navigation.",
  // },
];

export const navItems = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const heroTools = [
  "React",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Figma",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Git",
];

export const skillsTape = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Redux",
  "Figma",
  "Swagger",
  "HTML",
  "CSS",
];

export const services = [
  {
    id: 1,
    title: "Interactive interfaces",
    text: "User interfaces for the web — responsive, animated and pleasant to use.",
    tags: ["React", "CSS", "Figma"],
  },
  {
    id: 2,
    title: "Data visualizations",
    text: "Dashboards and charts that make numbers easy to read.",
    tags: ["Chart.js", "Recharts"],
  },
  {
    id: 3,
    title: "Documented REST APIs",
    text: "Clear endpoints with docs your team can actually use.",
    tags: ["Swagger", "Postman"],
  },
  {
    id: 4,
    title: "Payment integration",
    text: "Checkout flows connected to payment services (test mode).",
    tags: ["Stripe"],
  },
  {
    id: 5,
    title: "Back-end services",
    text: "Server logic, auth and databases behind the screens.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 6,
    title: "Teamwork & code review",
    text: "Team lead experience, careful reviews, debugging and shared standards.",
    tags: ["Git", "Review", "Lead"],
  },
];

export const contacts = [
  {
    id: "email",
    icon: "mail",
    label: "E-mail",
    value: "kyrosika565@gmail.com",
    href: "mailto:kyrosika565@gmail.com",
  },
  {
    id: "telegram",
    icon: "telegram",
    label: "Telegram",
    value: "@maskaa22",
    href: "https://t.me/maskaa22",
  },
  {
    id: "github",
    icon: "github",
    label: "GitHub",
    value: "github.com/maskaa22",
    href: "https://github.com/maskaa22",
  },
  {
    id: "linkedin",
    icon: "linkedin",
    label: "LinkedIn",
    value: "in/mariia-skydan",
    href: "https://www.linkedin.com/in/mariia-skydan",
  },
];
