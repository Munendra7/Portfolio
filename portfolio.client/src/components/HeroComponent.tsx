import { Github, Linkedin, FileText, ArrowRight, Sparkles } from 'lucide-react';
import myPhoto from '../assets/MUNENDRA PHOTO.jpg';
import resume from '../assets/Munendra_SharePoint_PowerPlatform_DotNet_Resume.pdf';
import useTheme from '../hooks/useTheme';

const HeroComponent = () => {
  const { theme } = useTheme();
    return (
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
    );
}

export default HeroComponent;