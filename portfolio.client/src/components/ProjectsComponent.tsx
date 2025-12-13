import { Code, ExternalLink, Github } from "lucide-react";
import { projects } from "../Data/Constants";
import useTheme from '../hooks/useTheme';

const ProjectComponent = () => {
  const { theme } = useTheme();
    return (
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
    );
}

export default ProjectComponent;