import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import useTheme from '../hooks/useTheme';

type NavBarProps = {
    scrolled: boolean;
};

const NavBar = ({scrolled} : NavBarProps) => {
  const { theme, toggleTheme } = useTheme();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
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
    );
}

export default NavBar;