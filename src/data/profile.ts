// Single source of truth for all portfolio content. Keep it accurate to the resume.

export const profile = {
  name: "Sainath Ratanlal Bohare",
  shortName: "Sainath Bohare",
  designation: "Software Developer | Full-Stack .NET & Angular Developer",
  tagline: "Full-Stack .NET Developer | Building Scalable Web Applications & API Integrations",
  experience: "2.9+ Years",
  location: "Thane, Maharashtra, India",
  email: "sainathbohare2000@gmail.com",
  phone: "+91 93724 63903",
  phoneHref: "tel:+919372463903",
  linkedin: "https://linkedin.com/in/sainath-bohare",
  // Leave empty to hide the GitHub link everywhere.
  github: "",
  previousCompany: "Athrava Infotech",
  previousDesignation: "Software Developer",
  resumeUrl: "/Sainath_Bohare_Resume.pdf",
};

export const heroIntro =
  "I build enterprise web applications with .NET, Angular and SQL Server — from CRM modules for travel, insurance and accommodation businesses to SOAP and REST supplier integrations that keep them connected.";

export const summary = [
  "Results-driven Full-Stack .NET Developer with 2.9+ years of professional experience in designing, developing, and maintaining enterprise-grade web applications. Experienced in C#, ASP.NET MVC, ASP.NET Core, ASP.NET Web Forms, Angular, SQL Server, and RESTful/SOAP API integrations.",
  "Experienced in developing CRM modules for travel, insurance, accommodation, and supplier connectivity platforms. Passionate about writing clean, maintainable code, solving complex technical problems, optimizing database performance, and delivering scalable business solutions.",
];

export type SkillKey =
  | "html" | "css" | "bootstrap" | "js" | "jquery" | "ajax" | "angular"
  | "csharp" | "mvc" | "core" | "webforms" | "webapi" | "adonet" | "ef" | "linq"
  | "sqlserver" | "sp" | "functions" | "views" | "indexes" | "optimization" | "ddl"
  | "rest" | "soap" | "xmljson" | "supplier" | "reqres";

export const skillGroups: {
  id: string;
  title: string;
  blurb: string;
  skills: { key: SkillKey; name: string }[];
}[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    blurb: "Interactive, responsive interfaces for business users.",
    skills: [
      { key: "html", name: "HTML5" },
      { key: "css", name: "CSS" },
      { key: "bootstrap", name: "Bootstrap" },
      { key: "js", name: "JavaScript" },
      { key: "jquery", name: "jQuery" },
      { key: "ajax", name: "AJAX" },
      { key: "angular", name: "Angular" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    blurb: "Server-side logic and services on the Microsoft .NET stack.",
    skills: [
      { key: "csharp", name: "C#" },
      { key: "mvc", name: "ASP.NET MVC" },
      { key: "core", name: "ASP.NET Core" },
      { key: "webforms", name: "ASP.NET Web Forms" },
      { key: "webapi", name: "Web API" },
      { key: "adonet", name: "ADO.NET" },
      { key: "ef", name: "Entity Framework" },
      { key: "linq", name: "LINQ" },
    ],
  },
  {
    id: "database",
    title: "Database",
    blurb: "Data design, procedures and performance tuning.",
    skills: [
      { key: "sqlserver", name: "Microsoft SQL Server" },
      { key: "sp", name: "Stored Procedures" },
      { key: "functions", name: "Functions" },
      { key: "views", name: "Views" },
      { key: "indexes", name: "Indexes" },
      { key: "optimization", name: "Query Optimization" },
      { key: "ddl", name: "DDL and DML" },
    ],
  },
  {
    id: "api",
    title: "API Integration",
    blurb: "Connecting business systems with external suppliers.",
    skills: [
      { key: "rest", name: "RESTful API" },
      { key: "soap", name: "SOAP Web Services" },
      { key: "xmljson", name: "XML and JSON" },
      { key: "supplier", name: "Third-party Supplier Integration" },
      { key: "reqres", name: "API Request/Response Handling" },
    ],
  },
];

export const experience = [
  {
    role: "Software Developer",
    company: "Athrava Infotech",
    period: "October 2023 – July 2026",
    type: "Full-time",
    clients: ["CoverPro", "Ottila International"],
    points: [
      "Developed and maintained CRM modules for travel, accommodation, and insurance clients.",
      "Worked on client solutions including CoverPro and Ottila International.",
      "Developed supplier connectivity and third-party API integrations using SOAP and RESTful services.",
      "Implemented integrations for insurance, accommodation, loyalty vouchers, and travel modules.",
      "Analyzed business requirements and converted them into technical implementations.",
      "Designed and optimized SQL Server stored procedures, functions, and views.",
      "Developed SOAP services and handled XML request/response transformations.",
      "Created interactive user interfaces using JavaScript, jQuery, AJAX, and ASP.NET Web Forms.",
      "Debugged application issues and implemented client change requests.",
      "Prepared technical documentation and deployment notes.",
      "Participated in code reviews and followed coding standards.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "One Roof Technology",
    period: "4 Months",
    type: "Internship",
    clients: [] as string[],
    points: [
      "Gained practical exposure to full-stack development.",
      "Learned enterprise software development workflows.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: "Professional" | "Academic";
  domain: string;
  description: string;
  responsibilities: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    id: "insurance-crm",
    title: "Insurance Management & Booking CRM",
    category: "Professional",
    domain: "Insurance",
    description:
      "Developed and maintained insurance-related CRM modules for managing insurance products, plans, customer information, bookings, and supplier integrations.",
    responsibilities: [
      "Developed insurance booking and management modules.",
      "Integrated external insurance supplier APIs.",
      "Worked with SOAP and RESTful APIs.",
      "Managed XML and JSON request/response data.",
      "Developed SQL stored procedures and optimized database operations.",
      "Implemented dynamic forms and user interfaces.",
    ],
    tech: ["C#", "ASP.NET", "ASP.NET Web Forms", "SQL Server", "JavaScript", "jQuery", "AJAX", "SOAP", "REST API"],
  },
  {
    id: "travel-crm",
    title: "Travel & Accommodation Management CRM",
    category: "Professional",
    domain: "Travel & Accommodation",
    description: "Worked on CRM functionality for travel and accommodation clients.",
    responsibilities: [
      "Developed and maintained CRM modules.",
      "Integrated third-party supplier services.",
      "Implemented accommodation and travel-related functionalities.",
      "Handled API communication and data transformation.",
      "Fixed bugs and implemented client enhancements.",
    ],
    tech: ["ASP.NET", "C#", "SQL Server", "JavaScript", "jQuery", "AJAX", "XML", "REST API"],
  },
  {
    id: "loyalty-voucher",
    title: "Loyalty Voucher Integration",
    category: "Professional",
    domain: "Loyalty & Rewards",
    description: "Worked on loyalty voucher functionality and external service connectivity.",
    responsibilities: [
      "Integrated supplier services.",
      "Handled API requests and responses.",
      "Implemented voucher-related workflows.",
      "Managed application-side data processing.",
    ],
    tech: ["C#", "ASP.NET", "SQL Server", "SOAP", "REST API", "XML", "JSON"],
  },
  {
    id: "optometrist-shop",
    title: "Online Optometrist Shopping Website",
    category: "Academic",
    domain: "E-commerce · MCA Final Year",
    description:
      "Developed an academic e-commerce website for online shopping as part of the MCA final-year project.",
    responsibilities: [],
    tech: ["C#", "ASP.NET", "SQL Server", "HTML5", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
];

export const sportsAchievements = [
  { title: "National-level Participant", detail: "Ice Hockey", medal: "national" as const },
  { title: "State-level Gold Medalist", detail: "Ice Hockey", medal: "gold" as const },
  { title: "State-level Silver Medalist", detail: "Ice Hockey", medal: "silver" as const },
];

export const professionalAchievements = [
  "Successfully contributed to enterprise CRM modules for multiple clients.",
  "Hands-on experience with third-party supplier integrations and business-critical application development.",
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "IMCOST, Thane – Mumbai University",
    year: "2023",
  },
  {
    degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
    school: "Mumbai University",
    year: "2021",
  },
];

export const certifications = [
  { name: "ASP.NET Certification", issuer: "" },
  { name: "MS-CIT", issuer: "Maharashtra State Board of Technical Education" },
  { name: "Automation 360 RPA Essentials", issuer: "Student Prep" },
];

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;
