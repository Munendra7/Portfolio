import { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, FileText, Mail, ExternalLink, Menu, X, ArrowRight, Code, Sparkles, Award } from 'lucide-react';
import myPhoto from './assets/MUNENDRA PHOTO.jpg';
import AgentDemo from './assets/AgentDemo.gif';
import resume from './assets/Munendra_SharePoint_PowerPlatform_DotNet_Resume.pdf';

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

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
      icon: <img src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" alt="Azure AI Fundamentals" className="w-12 h-12" />,
      link: 'https://learn.microsoft.com/en-us/users/munendra-0579/credentials/54d4558d15bb0839',
      color: ''
    },
    { 
      name: 'Azure Fundamentals',
      icon: <img src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" alt="Azure AI Fundamentals" className="w-12 h-12" />,
      link: 'https://learn.microsoft.com/en-us/users/munendra-0579/credentials/e813f0fe470e0af1',
      color: ''
    },
    { 
      name: 'Power Platform Solution Architect Expert',
      icon: <img src="https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-expert-badge.svg" alt="Power Platform Solution Architect Expert" className="w-12 h-12" />,
      link: 'https://learn.microsoft.com/en-us/users/munendra-0579/credentials/5c70cd70071f68b1',
      color: ''
    },
    { 
      name: 'Power BI Data Analyst Associate',
      icon: <img src="https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg" alt="Power Platform Solution Architect Expert" className="w-12 h-12" />,
      link: 'https://learn.microsoft.com/en-us/users/munendra-0579/credentials/d876fff497b08fd4',
      color: ''
    },
    { 
      name: 'Power Platform Developer Associate',
      icon: <img src="https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg" alt="Power Platform Solution Architect Expert" className="w-12 h-12" />,
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation - Glass Effect */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        scrolled 
          ? `backdrop-blur-xl ${theme === 'dark' ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} shadow-lg border-b` 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Munendra
            </h1>
            
            <div className="flex items-center gap-4 md:gap-6">
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6">
                <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
                <a href="#certifications" className="hover:text-blue-500 transition-colors">Certifications</a>
                <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
                <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
                <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
              </div>
              
              {/* Theme Toggle - Always Visible */}
              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-lg transition-all duration-200 ${
                  theme === 'dark' 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                } shadow-lg hover:scale-105`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden py-4 space-y-3 ${theme === 'dark' ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-xl rounded-lg mb-4 px-4 border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
              <a href="#about" className="block py-2 hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#certifications" className="block py-2 hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Certifications</a>
              <a href="#projects" className="block py-2 hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#skills" className="block py-2 hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#contact" className="block py-2 hover:text-blue-500 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center pt-16 pb-12 px-4 sm:px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${theme === 'dark' ? 'bg-purple-600' : 'bg-blue-400'} rounded-full blur-3xl`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${theme === 'dark' ? 'bg-blue-600' : 'bg-purple-400'} rounded-full blur-3xl`}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl ${theme === 'dark' ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-500/20 border-blue-500/30'} border mb-6`}>
                <Sparkles size={16} className="text-blue-500" />
                <span className="text-sm font-medium">Available for opportunities</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Munendra</span>
              </h2>
              
              <p className={`text-xl sm:text-2xl mb-6 font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Full Stack Developer | SharePoint | Power Platform | React | .Net Core | Azure | Gen AI | Agentic AI | Tech Lead @ Xceedance | 5x Microsoft Certified
              </p>
              
              <p className={`text-base sm:text-lg mb-6 max-w-2xl mx-auto lg:mx-0 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Experienced in architecting and delivering scalable enterprise applications. Proficient in SharePoint, Power Platform, ASP.NET Core, and React with strong full-stack development expertise.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <a href="https://github.com/Munendra7" target='_blank' className={`p-3 rounded-xl backdrop-blur-xl ${theme === 'dark' ? 'bg-gray-800/80 hover:bg-gray-700/80' : 'bg-white/80 hover:bg-gray-100/80'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} transition-all hover:scale-110 shadow-lg`}>
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/munendra7" target='_blank' className={`p-3 rounded-xl backdrop-blur-xl ${theme === 'dark' ? 'bg-gray-800/80 hover:bg-gray-700/80' : 'bg-white/80 hover:bg-gray-100/80'} border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} transition-all hover:scale-110 shadow-lg`}>
                  <Linkedin size={24} />
                </a>
                <a href={resume} target='_blank' className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all hover:scale-105 shadow-xl flex items-center gap-2 group font-medium">
                  <FileText size={20} />
                  Resume
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <img
                  src={myPhoto}
                  alt="Profile"
                  className={`relative rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover ${theme === 'dark' ? 'border-4 border-gray-800' : 'border-4 border-white'} shadow-2xl`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-16 sm:py-24 px-4 sm:px-6 backdrop-blur-xl ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} border-y`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Professional Certifications
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Industry-recognized credentials & achievements
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-2xl backdrop-blur-xl ${theme === 'dark' ? 'bg-gray-900/80 border-gray-700 hover:bg-gray-800/80' : 'bg-white/80 border-gray-200 hover:bg-white'} border transition-all hover:scale-105 hover:shadow-2xl`}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <div className="scale-150">
                    {cert.icon}
                  </div>
                </div>
                
                <h3 className="text-center font-bold text-lg mb-2 group-hover:text-blue-500 transition-colors">
                  {cert.name}
                </h3>
                
                <div className="flex items-center justify-center gap-2 text-sm text-blue-600">
                  <Award size={16} />
                  <span>Verified Certificate</span>
                  <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Technologies I work with
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl backdrop-blur-xl ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/80' : 'bg-white/80 border-gray-200 hover:bg-white'} border transition-all hover:scale-105 hover:shadow-2xl cursor-pointer`}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="35%"
                      stroke={theme === 'dark' ? '#374151' : '#E5E7EB'}
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="35%"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 35} ${2 * Math.PI * 35}`}
                      strokeDashoffset={`${2 * Math.PI * 35 * (1 - skill.level / 100)}`}
                      strokeLinecap="round"
                      className="transition-all duration-700"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#9333EA" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                
                <h3 className="text-center font-semibold text-xs sm:text-sm group-hover:text-blue-500 transition-colors">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 sm:py-24 px-4 sm:px-6 backdrop-blur-xl ${theme === 'dark' ? 'bg-gray-800/30' : 'bg-gray-100/50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Some of my recent work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`group rounded-2xl overflow-hidden backdrop-blur-xl ${theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'} border ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2`}
              >
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className={`absolute top-4 right-4 ${theme === 'dark' ? 'bg-black/50' : 'bg-white/50'} backdrop-blur-md px-3 py-1.5 rounded-full`}>
                    <Code size={16} className={theme === 'dark' ? 'text-white' : 'text-gray-900'} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className={`mb-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className={`text-xs px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} hover:scale-105 transition-transform`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target='_blank'
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all hover:gap-3"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.live}
                      target='_blank'
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-all hover:gap-3"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="mailto:munendrach7@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all hover:scale-105 shadow-2xl text-lg font-medium group"
          >
            <Mail size={24} />
            <span>Say Hello</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 backdrop-blur-xl ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Munendra, Built with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}