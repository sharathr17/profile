export type SkillGroup = {
  id: string;
  label: string;
  note: string;
  items: { name: string; hint?: string }[];
};

export type Certification = {
  title: string;
  organization: string;
  category: "design" | "learning" | "tools" | "interview";
  /** Leave empty when no public credential/URL exists yet. */
  url?: string;
};

export type EducationEntry = {
  degree: string;
  institution: string;
  university: string;
  years: string;
  location: string;
  current?: boolean;
};

export type Project = {
  index: string;
  title: string;
  description: string;
  details: string[];
  tech: string[];
  /** Put these URL comments in place until real links are provided. */
  githubUrl: string; // TODO: replace REPLACE_WITH_GITHUB_URL with a real repo URL
  demoUrl: string; // TODO: replace REPLACE_WITH_LIVE_DEMO_URL with a real live URL
  preview: "store" | "weather" | "hotel";
  /** Conceptual preview — swap with real screenshots when available. */
};

export const profile = {
  name: "Sharath R",
  role: "Web Developer",
  location: "Bangalore / Kundapur, India",
  headline: "Building useful digital experiences with code.",
  intro:
    "MCA student with a BCA background, focused on learning, building practical web applications, and turning ideas into useful experiences.",
  bio: [
    "Web developer and MCA student at RVITM, Bangalore — with a BCA foundation in building things that actually work.",
    "I care about clear structure, honest interfaces, and code anyone can read. When I'm not studying, I'm building, breaking, and fixing projects to learn how they behave in the real world.",
  ],
  currently: {
    label: "Currently",
    value: "Building practical web apps end-to-end — Python, React, CSS, and SQL.",
  },
  email: "sharathrmaravanthe@gmail.com",
  phone: "+91 8546918524",
  phoneHref: "tel:+918546918524",
  github: {
    label: "GitHub",
    handle: "sharathr17",
    url: "https://github.com/sharathr17",
  },
  linkedin: {
    label: "LinkedIn",
    handle: "sharath-r-maravanthe",
    url: "https://www.linkedin.com/in/sharath-r-maravanthe",
  },
  site: "https://sharathrmaravanthe.vercel.app",
  profileImage: "/profile.jpg",
};

export const education: EducationEntry[] = [
  {
    degree: "MCA — Master of Computer Applications",
    institution: "RV Institute of Technology and Management",
    university: "VTU University",
    years: "2025 – 2027",
    location: "Bangalore",
    current: true,
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    institution: "IMJ Institute of Science & Commerce",
    university: "Mangalore University",
    years: "2022 – 2025",
    location: "Kundapur",
  },
  {
    degree: "Pre-University Course (PCMC)",
    institution: "Govt Pre-university College, Navunda",
    university: "Karnataka State PU Board",
    years: "2020 – 2022",
    location: "Navunda",
  },
  {
    degree: "SSLC",
    institution: "Sandeepan English Medium High School, Kirimanjeshwara",
    university: "KSEEB",
    years: "2017 – 2020",
    location: "Kirimanjeshwara",
  },
];

export const skills: SkillGroup[] = [
  {
    id: "technical",
    label: "Technical",
    note: "The tools I write software with today.",
    items: [
      { name: "Python" },
      { name: "React.js" },
      { name: "CSS" },
      { name: "SQL" },
    ],
  },
  {
    id: "soft",
    label: "Soft skills",
    note: "How I work with people and problems.",
    items: [
      { name: "Team Collaboration" },
      { name: "Critical Thinking" },
      { name: "Adaptability" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    note: "What I communicate in.",
    items: [
      { name: "English" },
      { name: "Kannada" },
      { name: "Hindi" },
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "UI/UX Development Workshop",
    organization: "CodeLab, Mangalore",
    category: "design",
  },
  {
    title: "Magic Bus certification",
    organization: "Magic Bus, Bangalore",
    category: "learning",
  },
  {
    title: "AI Tools and Technologies Workshop",
    organization: "Next Wave",
    category: "tools",
  },
  {
    title: "Python Interview Preparation",
    organization: "Simplilearn",
    category: "interview",
  },
];

export const projects: Project[] = [
  {
    index: "01",
    title: "Mobile Store Management System",
    description:
      "Inventory and store management web application.",
    details: [
      "A web application for managing a mobile store's inventory and day-to-day operations.",
      "Built with HTML, CSS and JavaScript on the front end, backed by PHP on the server.",
      "Covers core store-management needs: tracking stock and keeping product data organized.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl: "REPLACE_WITH_GITHUB_URL", // TODO: add repo URL
    demoUrl: "REPLACE_WITH_LIVE_DEMO_URL", // TODO: add live demo URL
    preview: "store",
  },
  {
    index: "02",
    title: "Weather Now",
    description:
      "Real-time weather updates and forecasts.",
    details: [
      "A weather forecast app that shows current conditions and forecasts.",
      "Uses the OpenWeatherMap API for live weather data.",
      "Built with semantic HTML5, CSS3 and vanilla JavaScript.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "OpenWeatherMap API"],
    githubUrl: "REPLACE_WITH_GITHUB_URL", // TODO: add repo URL
    demoUrl: "REPLACE_WITH_LIVE_DEMO_URL", // TODO: add live demo URL
    preview: "weather",
  },
  {
    index: "03",
    title: "Ocean Pearls",
    description:
      "Hotel room booking and customer management.",
    details: [
      "A hotel-room booking and customer management application.",
      "Lets staff manage room availability and guest records.",
      "Front end built with HTML, CSS and JavaScript, with PHP on the server.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl: "REPLACE_WITH_GITHUB_URL", // TODO: add repo URL
    demoUrl: "REPLACE_WITH_LIVE_DEMO_URL", // TODO: add live demo URL
    preview: "hotel",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];