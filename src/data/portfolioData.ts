export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    focus?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Software & AI' | 'Engineering' | 'Research & Thesis';
  type: 'Completed Project' | 'Product Concept' | 'Thesis & Prototype' | 'Ongoing Exploration';
  description: string;
  problemStatement?: string;
  keyFeatures?: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  tag: 'Education' | 'Software' | 'AI / ML' | 'Engineering';
}

export interface EducationData {
  institution: string;
  degree: string;
  department: string;
  location: string;
  period: string;
  cgpa?: string;
  honors?: string;
  relevantCoursework: string[];
}

export interface InterestItem {
  title: string;
  tagline: string;
  description: string;
  topics: string[];
}

export interface MethodologyStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ResumeSectionItem {
  name: string;
  items: string[];
}

export interface ResumeProject {
  title: string;
  classification: 'Undergraduate Thesis & Experimental Prototype' | 'Product Concept' | 'Web Application Concept' | 'Automation Concept';
  technologies: string[];
  summary: string;
  contributions: string[];
  githubUrl?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    github: string;
    githubDisplay: string;
    linkedin: string;
    linkedinDisplay: string;
    location: string;
  };
  summary: string;
  skillGroups: {
    category: string;
    skills: string[];
  }[];
  projects: ResumeProject[];
  education: {
    institution: string;
    degree: string;
    department: string;
    location: string;
    coursework: string[];
  };
  technicalFocus: {
    title: string;
    organization: string;
    period: string;
    bulletPoints: string[];
  }[];
  interests: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Zubair Hossain",
    headline: "Mechatronics Engineer | AI/ML Enthusiast | Software & Automation",
    tagline: "Engineer building at the intersection of intelligent software, automation, mechanical systems, and emerging AI technologies.",
    bio: [
      "I am a Mechatronics Engineer from Rajshahi University of Engineering & Technology (RUET), Bangladesh, interested in solving practical problems through a combination of engineering, software, AI, and automation.",
      "My engineering background gave me experience with mechanical design, simulation, prototyping, and system-level thinking. Alongside this, I have been developing my skills in algorithms, backend development, databases, AI/ML, NLP, and modern software technologies.",
      "I am particularly interested in intelligent systems, LLM applications, robotics, industrial automation, and building practical technology products."
    ],
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    location: "Bangladesh",
    statusBadge: "RUET Mechatronics • Multidisciplinary Engineering",
  },

  // Real contact information & profile links
  links: {
    github: "https://github.com/sanimzbyr",
    linkedin: "https://www.linkedin.com/in/sanimzbyr/",
    email: "sanimzbyr@gmail.com",
    phone: "+8801302827082",
    displayPhone: "+880 1302-827082",
    resume: "./Zubair_Hossain_Resume.pdf",
    resumeView: "./resume.html",
  },

  // Skills organized into authentic engineering & software categories
  skillCategories: [
    {
      title: "Programming & Software",
      description: "Core languages and algorithmic fundamentals",
      skills: [
        { name: "C#" },
        { name: "Python" },
        { name: "Java" },
        { name: "JavaScript / TypeScript" },
        { name: "SQL" },
        { name: "Data Structures & Algorithms" }
      ]
    },
    {
      title: "Backend & Web",
      description: "Server architecture, APIs, databases, and client interfaces",
      skills: [
        { name: "ASP.NET / ASP.NET MVC" },
        { name: ".NET" },
        { name: "Spring Boot" },
        { name: "REST APIs" },
        { name: "PostgreSQL" },
        { name: "Entity Framework Core" },
        { name: "Authentication / Authorization" },
        { name: "Bootstrap" },
        { name: "React" },
        { name: "Git" }
      ]
    },
    {
      title: "AI / Data",
      description: "Applied machine learning, language models, and computational algorithms",
      skills: [
        { name: "Artificial Intelligence" },
        { name: "Machine Learning" },
        { name: "NLP" },
        { name: "Large Language Models" },
        { name: "LLM Applications" },
        { name: "AI Agents" },
        { name: "Data Processing" },
        { name: "Algorithm Design" }
      ]
    },
    {
      title: "Engineering",
      description: "Mechanical design, aerodynamics, numerical simulation, and automation",
      skills: [
        { name: "Mechatronics" },
        { name: "CAD" },
        { name: "Fusion 360" },
        { name: "ANSYS" },
        { name: "CFD" },
        { name: "FEA" },
        { name: "Mechanical Design" },
        { name: "Robotics" },
        { name: "Industrial Automation" },
        { name: "Rapid Prototyping" },
        { name: "3D Printing" }
      ]
    },
    {
      title: "Tools & Environments",
      description: "Development environments, modeling suites, and Unix systems",
      skills: [
        { name: "Git / GitHub" },
        { name: "Visual Studio Code" },
        { name: "Visual Studio" },
        { name: "Linux" },
        { name: "MATLAB" },
        { name: "ANSYS" },
        { name: "Fusion 360" }
      ]
    }
  ] as SkillCategory[],

  // Featured VAWT Thesis Project
  vawtProject: {
    title: "Design, Optimization, and Development of a Vertical Axis Wind Turbine for Low Wind Speed Area",
    role: "Undergraduate Thesis & Experimental Prototype",
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    description: "Designed and investigated a three-bladed H-Darrieus vertical axis wind turbine optimized for low-wind-speed environments.",
    problemStatement: "Conventional wind turbines often require relatively higher wind speeds for effective operation. The project investigated a compact vertical-axis configuration intended for low-wind-speed urban and semi-urban environments.",
    technologies: [
      "NACA 0021 Airfoil",
      "CFD Simulation",
      "ANSYS CFX",
      "Autodesk Fusion 360",
      "Aerodynamic Analysis",
      "Mechanical Design",
      "3D Printing",
      "Prototyping"
    ],
    specifications: [
      { label: "Configuration", value: "Three-bladed H-Darrieus" },
      { label: "Rotor Diameter", value: "650 mm" },
      { label: "Rotor Height", value: "1000 mm" },
      { label: "Design Wind Speed", value: "5 m/s" },
      { label: "Angular Velocity Investigated", value: "9 rad/s" },
      { label: "Airfoil Profile", value: "NACA 0021" },
      { label: "Blade Structure", value: "Hollow aerodynamic structure" },
      { label: "Development Stage", value: "Experimental prototype development" }
    ],
    methodology: [
      { step: "01", name: "Concept Development", detail: "Formulated the aerodynamic requirements and selected the H-Darrieus vertical axis architecture suitable for omnidirectional low-speed urban airflows." },
      { step: "02", name: "CAD Modeling", detail: "Parametric solid modeling of the rotor hub, support struts, hollow blades, and central mast using Autodesk Fusion 360." },
      { step: "03", name: "Aerodynamic Simulation", detail: "Computational Fluid Dynamics (CFD) using ANSYS CFX to compute torque coefficients, pressure distribution, and boundary layer behaviors." },
      { step: "04", name: "Design Comparison", detail: "Evaluated NACA 0021 airfoil aerodynamic performance at varied angles of attack and rotational velocities under 5 m/s free-stream conditions." },
      { step: "05", name: "Structural & Material Optimization", detail: "Engineered hollow blade internal ribs to minimize rotational inertia while maintaining structural stiffness against centrifugal forces." },
      { step: "06", name: "Prototype Fabrication", detail: "Precision additive manufacturing (3D printing) of aerodynamic blade sections, combined with mechanical assembly of shaft, bearings, and structural frame." },
      { step: "07", name: "Practical Testing", detail: "Conducted physical wind stream testing to assess self-starting characteristics, mechanical balance, and real-world rotational response." }
    ],
    dataLabels: {
      simulationNotice: "Simulation results conducted via ANSYS CFX under controlled boundary conditions (design wind speed: 5 m/s, rotational speed: 9 rad/s).",
      prototypeNotice: "Physical prototype observations focused on self-start feasibility, mechanical balance, and manufacturing tolerances using additive fabrication."
    }
  },

  // Software & AI Projects
  softwareProjects: [
    {
      id: "financial-ai-platform",
      title: "Financial AI Platform",
      category: "Software & AI",
      type: "Product Concept",
      description: "An AI-powered financial productivity platform concept designed to automate spreadsheet generation, document processing, presentation generation, financial calculations, company-context retrieval, and business analysis.",
      problemStatement: "Financial analysts and business operators spend substantial hours manually extracting data from unstructured filings, rebuilding Excel models, and assembling executive decks.",
      keyFeatures: [
        "Automated spreadsheet & model generation from financial narratives",
        "Document ingestion and entity extraction from reports & statements",
        "Context-aware corporate retrieval for multi-year financial statements",
        "PowerPoint synthesis from synthesized quantitative data"
      ],
      technologies: [
        "LLM APIs",
        "Python",
        "Document Processing",
        "Excel Automation",
        "PowerPoint Generation",
        "Data Processing",
        "Retrieval / Company Context",
        "Web Research"
      ],
      githubUrl: "https://github.com/sanimzbyr",
      liveUrl: undefined
    },
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      category: "Software & AI",
      type: "Product Concept",
      description: "A lightweight e-commerce web application concept designed for localized commercial workflows with bilingual support and seamless payment processing.",
      problemStatement: "Local merchants need clean, performant, mobile-first storefronts tailored to regional payment habits without the overhead of heavy monolithic platforms.",
      keyFeatures: [
        "Product catalog and stock management",
        "Clean administrative dashboard for order tracking",
        "Cash on Delivery & bKash payment verification workflow",
        "Bilingual interface (Bangla and English)",
        "Responsive, mobile-first shopping experience"
      ],
      technologies: [
        "C# / ASP.NET or Spring Boot",
        "PostgreSQL",
        "REST APIs",
        "React",
        "Tailwind CSS",
        "bKash Gateway Workflow"
      ],
      githubUrl: "https://github.com/sanimzbyr",
      liveUrl: undefined
    },
    {
      id: "ai-business-automation",
      title: "AI Business Automation",
      category: "Software & AI",
      type: "Product Concept",
      description: "A concept exploring multi-channel automation of social media communications, customer inquiry triaging, and automated marketing pipelines.",
      problemStatement: "Growing online retail businesses face high customer response latency across fragmented social channels, causing abandoned inquiries.",
      keyFeatures: [
        "Omni-channel routing for Facebook, Instagram, and WhatsApp Business",
        "AI-assisted intent detection and automated response generation",
        "Seamless human-in-the-loop escalation for complex requests",
        "Operational analytics and customer conversation summaries"
      ],
      technologies: [
        "Python",
        "AI Agents",
        "LLMs & NLP",
        "Meta Graph API",
        "WhatsApp Business API",
        "Webhooks & Async Queues"
      ],
      githubUrl: "https://github.com/sanimzbyr",
      liveUrl: undefined
    }
  ] as ProjectItem[],

  // Engineering & Hardware Projects
  engineeringWork: [
    {
      title: "Vertical Axis Wind Turbine (Thesis)",
      category: "Aerodynamics & Energy",
      status: "Featured Thesis",
      description: "Investigation and physical prototyping of an H-Darrieus VAWT with NACA 0021 airfoils for low-speed urban conditions (650mm diameter × 1000mm height).",
      tags: ["ANSYS CFX", "CFD", "Fusion 360", "3D Printing", "Aerodynamics"]
    },
    {
      title: "Mechanical Design & Simulation",
      category: "CAD, FEA & Prototyping",
      status: "Engineering Studies",
      description: "CAD modeling, Finite Element Analysis (FEA) for stress concentrations, and CFD studies investigating structural integrity and fluid dynamics.",
      tags: ["CAD Modeling", "FEA Stress Analysis", "CFD", "Fusion 360", "ANSYS"]
    },
    {
      title: "Robotics & Industrial Automation",
      category: "Mechatronics & Control",
      status: "Core Domain",
      description: "Sensor integration, actuator control loops, microcontrollers, and industrial automation principles combining mechanical hardware with programmatic logic.",
      tags: ["Robotics", "Sensors", "Actuators", "Control Systems", "Automation"]
    },
    {
      title: "Rapid Prototyping & Additive Manufacturing",
      category: "Fabrication",
      status: "Practical Execution",
      description: "Design for Additive Manufacturing (DFAM), slicing optimization, material selection, and iterative physical assembly of functional prototypes.",
      tags: ["3D Printing", "DFAM", "Tolerancing", "Physical Assembly"]
    }
  ],

  // Engineering Philosophy: How I Build
  methodology: [
    {
      step: "01",
      title: "Understand",
      tagline: "Define constraints and physical/software realities",
      description: "Carefully analyze the problem, operational constraints, performance requirements, and physical or computational boundaries before writing code or modeling geometry.",
      deliverables: ["Problem breakdown", "Boundary constraints", "System requirements"]
    },
    {
      step: "02",
      title: "Model",
      tagline: "Translate problem into rigorous technical models",
      description: "Formulate mathematical representations, aerodynamic simulations, CAD assemblies, database schemas, or software architecture diagrams.",
      deliverables: ["CAD / CFD models", "System architecture", "Data structures & schemas"]
    },
    {
      step: "03",
      title: "Build",
      tagline: "Develop functional hardware, software, or simulation",
      description: "Implement clean, modular code, fabricate physical prototypes via additive manufacturing, or execute numerical simulations using verified standards.",
      deliverables: ["Backend APIs & Services", "Physical prototype parts", "Simulation convergence"]
    },
    {
      step: "04",
      title: "Test & Improve",
      tagline: "Measure empirically, identify weaknesses, and iterate",
      description: "Subject the software or physical prototype to empirical testing, validate simulations against observed behaviors, identify failure modes, and iterate.",
      deliverables: ["Empirical test data", "Failure mode analysis", "Optimized iteration"]
    }
  ] as MethodologyStep[],

  // Current Technical Interests
  currentInterests: [
    {
      title: "AI & LLMs",
      tagline: "Applied Intelligence",
      description: "Building practical applications around modern language models, structured output generation, agentic reasoning, and retrieval pipelines.",
      topics: ["LLM Applications", "AI Agents", "NLP", "Retrieval Systems"]
    },
    {
      title: "Robotics & Automation",
      tagline: "Physical Intelligence",
      description: "Intelligent machines, feedback control systems, sensors, actuators, and industrial automation uniting mechanical assemblies with code.",
      topics: ["Mechatronics", "Sensor Fusion", "Control Loops", "Industrial Systems"]
    },
    {
      title: "Software Engineering",
      tagline: "Robust Digital Foundations",
      description: "Backend systems, RESTful APIs, relational databases, scalable application architecture, and algorithm design.",
      topics: ["C# & .NET", "Spring Boot", "PostgreSQL", "Clean Architecture"]
    },
    {
      title: "Product Development",
      tagline: "From Concept to Reality",
      description: "Turning engineering and software prototypes into functional, viable, and maintainable products that solve real human problems.",
      topics: ["User-centric Design", "Rapid Prototyping", "Design for Manufacturing", "MVP Lifecycle"]
    },
    {
      title: "Entrepreneurship",
      tagline: "Value Creation",
      description: "Building technology-driven business models around practical engineering solutions, sustainable manufacturing, and modern software.",
      topics: ["Tech Startups", "Market Validation", "Systematic Scaling", "Resource Optimization"]
    }
  ] as InterestItem[],

  // Experience & Learning Timeline
  timeline: [
    {
      id: "swe-focus",
      period: "Active Development Focus",
      title: "Software Engineering & Backend Systems",
      organization: "Independent Development & Applied Learning",
      location: "Bangladesh",
      description: "Deepening technical expertise across enterprise backend architectures, scalable database design, algorithms, and full-stack systems.",
      highlights: [
        "Developing backend competencies with C#, .NET, ASP.NET Core, and Entity Framework Core",
        "Exploring Java, Spring Boot, REST APIs, and relational databases (PostgreSQL)",
        "Building responsive frontends with React and modern CSS systems",
        "Applying disciplined Data Structures & Algorithms principles"
      ],
      tag: "Software"
    },
    {
      id: "ai-learning",
      period: "Applied Research & Projects",
      title: "AI, NLP & Intelligent Agent Exploration",
      organization: "Applied Research & Product Concepts",
      location: "Bangladesh",
      description: "Investigating practical applications of modern Machine Learning, Natural Language Processing, and LLM orchestration.",
      highlights: [
        "Designing LLM agent workflows and structured tool calling",
        "Exploring context retrieval pipelines for domain-specific automation",
        "Experimenting with NLP document processing and business workflows"
      ],
      tag: "AI / ML"
    },
    {
      id: "ruet-mechatronics",
      period: "Undergraduate Engineering Program",
      title: "Mechatronics Engineering",
      organization: "Rajshahi University of Engineering & Technology (RUET)",
      location: "Rajshahi, Bangladesh",
      description: "Rigorous multidisciplinary engineering education covering mechanical systems, electrical & electronics, control theory, automation, and computational methods.",
      highlights: [
        "Completed thesis on low-wind-speed H-Darrieus Vertical Axis Wind Turbine (VAWT)",
        "Applied CFD (ANSYS CFX) and CAD modeling (Fusion 360) to aerodynamic problems",
        "Constructed physical prototypes using additive manufacturing and mechanical tolerancing",
        "Studied robotics, industrial automation, control engineering, and microprocessors"
      ],
      tag: "Education"
    }
  ] as TimelineItem[],

  // Education Details
  education: {
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    degree: "Bachelor of Science in Mechatronics Engineering",
    department: "Department of Mechatronics Engineering",
    location: "Rajshahi, Bangladesh",
    period: "Bachelor of Science (B.Sc. Engg.)",
    relevantCoursework: [
      "Robotics & Automation",
      "Control Systems Engineering",
      "Fluid Mechanics & Aerodynamics",
      "Computer Aided Design (CAD/CAM)",
      "Microprocessors & Microcontrollers",
      "Finite Element Analysis (FEA)",
      "Engineering Mechanics & Dynamics",
      "Data Structures & Computer Programming",
      "Industrial Instrumentation & Sensors",
      "Electrical Machines & Power Electronics"
    ]
  } as EducationData,

  // GitHub & Open Source Repositories
  githubRepos: [
    {
      name: "vawt-aerodynamic-analysis",
      description: "CAD geometry and CFD simulation configuration files for the H-Darrieus low-wind-speed vertical axis turbine.",
      language: "Fusion 360 / ANSYS",
      stars: 0,
      forks: 0,
      url: "https://github.com/sanimzbyr",
      isCustom: true
    },
    {
      name: "financial-ai-assistant",
      description: "Concept prototype exploring document parsing, spreadsheet generation, and financial context retrieval.",
      language: "Python",
      stars: 0,
      forks: 0,
      url: "https://github.com/sanimzbyr",
      isCustom: true
    },
    {
      name: "ecommerce-backend-dotnet",
      description: "RESTful e-commerce API design utilizing C#, ASP.NET Core, EF Core, and PostgreSQL.",
      language: "C#",
      stars: 0,
      forks: 0,
      url: "https://github.com/sanimzbyr",
      isCustom: true
    }
  ]
};

// Single Source of Truth for Professional Resume
export const RESUME_DATA: ResumeData = {
  name: "Zubair Hossain",
  title: "Software Developer | AI/ML Enthusiast",
  contact: {
    phone: "+8801302827082",
    email: "sanimzbyr@gmail.com",
    github: "https://github.com/sanimzbyr",
    githubDisplay: "github.com/sanimzbyr",
    linkedin: "https://www.linkedin.com/in/sanimzbyr/",
    linkedinDisplay: "linkedin.com/in/sanimzbyr",
    location: "Rajshahi / Dhaka, Bangladesh"
  },
  summary: "Software Developer and Mechatronics Engineer from RUET with strong multidisciplinary problem-solving foundations spanning backend engineering, databases, web applications, and applied AI/ML systems. Experienced with C#, .NET, Java, Spring Boot, Python, and PostgreSQL, alongside hands-on engineering experience in CAD, CFD aerodynamic simulation, and physical prototyping. Passionate about building robust, performant software, practical AI/LLM applications, and intelligent automated products.",
  skillGroups: [
    {
      category: "Programming",
      skills: ["C#", "Java", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Backend & APIs",
      skills: [".NET", "ASP.NET", "ASP.NET MVC", "Spring Boot", "REST APIs", "Entity Framework Core"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "SQL", "Relational Schema Design"]
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap", "Tailwind CSS"]
    },
    {
      category: "AI & Intelligent Systems",
      skills: ["Artificial Intelligence", "Machine Learning", "NLP", "Large Language Models", "AI-Assisted Development", "AI Application Development", "AI Agents"]
    },
    {
      category: "Engineering & Hardware",
      skills: ["Mechatronics", "CAD", "Fusion 360", "ANSYS", "CFD Simulation", "FEA", "Robotics", "Industrial Automation", "3D Printing"]
    }
  ],
  projects: [
    {
      title: "Vertical Axis Wind Turbine (Thesis Project)",
      classification: "Undergraduate Thesis & Experimental Prototype",
      technologies: ["Fusion 360", "ANSYS CFX", "CFD", "NACA 0021 Airfoil", "3D Printing"],
      summary: "Designed, numerically investigated, and developed an experimental prototype of a three-bladed H-Darrieus vertical axis wind turbine tailored for urban low-wind-speed environments (5 m/s, 9 rad/s, Ø 650 mm × H 1000 mm).",
      contributions: [
        "Modeled parametric 3D solid assemblies of hub, support struts, hollow blades, and central mast using Autodesk Fusion 360.",
        "Executed Computational Fluid Dynamics (CFD) aerodynamic simulations in ANSYS CFX, analyzing pressure distributions and dynamic torque coefficients for the NACA 0021 airfoil.",
        "Engineered hollow blade internal ribbing to minimize rotational inertia and fabricated physical prototype sections via 3D printing for empirical validation."
      ],
      githubUrl: "https://github.com/sanimzbyr"
    },
    {
      title: "Financial AI Platform",
      classification: "Product Concept",
      technologies: ["Python", "LLM APIs", "Document Processing", "Excel Automation", "Retrieval Systems"],
      summary: "An architectural concept for an AI-powered financial productivity engine designed to automate spreadsheet generation, corporate statement ingestion, and business presentations.",
      contributions: [
        "Architected extraction pipelines to parse structured tables and narrative metrics from complex financial disclosures.",
        "Designed context-retrieval mechanisms connecting multi-year financial statements with generative LLM prompts.",
        "Formulated automated workflows for programmatic Excel model generation and synthesized PowerPoint slide decks."
      ],
      githubUrl: "https://github.com/sanimzbyr"
    },
    {
      title: "E-commerce Platform",
      classification: "Web Application Concept",
      technologies: ["C# / ASP.NET", "PostgreSQL", "REST APIs", "React", "bKash Workflow"],
      summary: "Lightweight, mobile-first commercial web application concept tailored for regional payment workflows and high-performance catalog browsing.",
      contributions: [
        "Structured RESTful backend API schemas with relational modeling in PostgreSQL.",
        "Designed order administration dashboard, stock management, and bilingual (Bangla/English) interface flows.",
        "Integrated dual transaction paths for Cash on Delivery and bKash digital payment verification."
      ],
      githubUrl: "https://github.com/sanimzbyr"
    },
    {
      title: "AI Business Automation",
      classification: "Automation Concept",
      technologies: ["Python", "AI Agents", "LLMs & NLP", "Meta Graph API", "WhatsApp Business API"],
      summary: "Exploratory automation architecture routing and resolving multi-channel social media inquiries, customer support requests, and business operations.",
      contributions: [
        "Designed intent-detection pipelines to triage incoming inquiries across WhatsApp, Facebook, and Instagram.",
        "Architected safe AI agent response workflows with automated escalation triggers for human operators."
      ],
      githubUrl: "https://github.com/sanimzbyr"
    }
  ],
  education: {
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    degree: "Bachelor of Science in Mechatronics Engineering",
    department: "Department of Mechatronics Engineering",
    location: "Rajshahi, Bangladesh",
    coursework: [
      "Control Systems Engineering",
      "Robotics & Industrial Automation",
      "Fluid Mechanics & Aerodynamics",
      "CAD/CAM",
      "Microprocessors & Microcontrollers",
      "Finite Element Analysis (FEA)",
      "Data Structures & Computer Programming",
      "Industrial Instrumentation & Sensors"
    ]
  },
  technicalFocus: [
    {
      title: "Software Engineering & Applied Backend Development",
      organization: "Independent Development & Applied Learning",
      period: "Continuous Focus",
      bulletPoints: [
        "Developing robust web backends and RESTful APIs using C#, .NET, ASP.NET Core, and Entity Framework Core.",
        "Working with Java, Spring Boot, relational database design in PostgreSQL, and clean architecture principles.",
        "Constructing modular, responsive client interfaces with TypeScript and React."
      ]
    },
    {
      title: "Applied AI, NLP & Intelligent Agent Exploration",
      organization: "Applied Research & Product Concepts",
      period: "Active Exploration",
      bulletPoints: [
        "Implementing tool-calling, agentic reasoning, and retrieval pipelines around modern Large Language Models.",
        "Investigating practical NLP document ingestion for enterprise workflows and business productivity."
      ]
    },
    {
      title: "Mechatronics & Physical Engineering Systems",
      organization: "RUET Labs & Thesis Work",
      period: "Academic Program",
      bulletPoints: [
        "Applied fluid dynamics, CAD solid modeling (Fusion 360), and CFD simulation (ANSYS CFX) to low-wind-speed turbine optimization.",
        "Integrated electronic sensors, actuator control loops, microcontrollers, and precision additive manufacturing (3D printing)."
      ]
    }
  ],
  interests: [
    "Software Engineering & Scalable Backend Architectures",
    "Artificial Intelligence & Large Language Models",
    "Robotics & Feedback Control Systems",
    "Industrial Automation & Sensor Systems",
    "Practical Product Development",
    "Technology Entrepreneurship"
  ]
};
