import AgentDemo from '../assets/AgentDemo.gif';

const skills = [
    { name: 'React', level: 95 },
    { name: '.Net Core', level: 85 },
    { name: 'SharePoint', level: 100 },
    { name: 'Power Automate', level: 100 },
    { name: 'Power Pages', level: 85 },
    { name: 'Power Apps', level: 80 },
    { name: 'Power BI', level: 75 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 90 },
    { name: 'C#', level: 88 },
    { name: 'Azure', level: 85 },
    { name: 'SQL Server', level: 80 },
    { name: 'Docker', level: 80 },
    { name: 'Gen AI & Agentic AI', level: 75 }
  ];

  const certifications = [
    { 
      name: 'Azure AI Fundamentals',
      icon: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
      link: 'https://learn.microsoft.com/en-us/users/munendra-0579/credentials/54d4558d15bb0839',
      color: ''
    },
    { 
      name: 'Azure Fundamentals',
      icon: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
      link: 'https://learn.microsoft.com/en-us/users/munendra-0579/credentials/e813f0fe470e0af1',
      color: ''
    },
    { 
      name: 'Power Platform Solution Architect Expert',
      icon: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-expert-badge.svg',
      link: 'https://learn.microsoft.com/en-us/users/munendra-0579/credentials/5c70cd70071f68b1',
      color: ''
    },
    { 
      name: 'Power BI Data Analyst Associate',
      icon: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
      link: 'https://learn.microsoft.com/en-us/users/munendra-0579/credentials/d876fff497b08fd4',
      color: ''
    },
    { 
      name: 'Power Platform Developer Associate',
      icon: 'https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg',
      link: 'https://learn.microsoft.com/en-us/users/munendra-0579/credentials/c03a6c347a5f1910',
      color: ''
    }
  ];
  
  const projects = [
    {
      title: 'AI-Agent',
      description: 'AI-Agent is a full-stack, intelligent assistant built with the Semantic Kernel Agent Framework. It combines a React + Tailwind frontend with an ASP.NET Core + Semantic Kernel backend to deliver a context-aware, extensible AI platform.',
      tech: ['React', '.Net Core', 'SQL Server', 'Qdrant', 'Azure Blob Storage', 'Node JS', 'Semantic Kernel'],
      image: AgentDemo,
      github: 'https://github.com/Munendra7/Ai-Agent',
      live: "https://www.youtube.com/watch?v=-5dCIRRaq_A",
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'To Be Updated',
      description: '',
      tech: ['TBU'],
      image: 'https://placehold.co/600x400/0891B2/ffffff?text=To+Be+Updated',
      github: '#',
      live: '#',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'To Be Updated',
      description: '',
      tech: ['TBU'],
      image: 'https://placehold.co/600x400/059669/ffffff?text=To+Be+Updated',
      github: '#',
      live: '#',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  export { skills, certifications, projects };