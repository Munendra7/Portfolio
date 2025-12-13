import { useState, useEffect } from 'react';
import useTheme from './hooks/useTheme';
import NavBar from './components/NavBar';
import HeroComponent from './components/HeroComponent';
import CertificationsComponent from './components/CertificationsComponent';
import SkillsComponent from './components/SkillsComponent';
import ProjectComponent from './components/ProjectsComponent';
import ContactComponent from './components/ContactComponent';

export default function Portfolio() {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <NavBar scrolled={scrolled} />
      <HeroComponent />
      <CertificationsComponent />
      <SkillsComponent />
      <ProjectComponent />
      <ContactComponent />
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