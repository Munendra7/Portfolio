import { ExternalLink, Award } from 'lucide-react';
import { certifications } from "../Data/Constants";
import useTheme from '../hooks/useTheme';

const CertificationsComponent = () => {
  const { theme } = useTheme();
    return (
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
                    <img src={cert.icon} alt="Certificates" className="w-12 h-12" />
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
    );
}
export default CertificationsComponent;