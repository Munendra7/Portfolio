import { skills } from "../Data/Constants";
import useTheme from '../hooks/useTheme';

const SkillsComponent = () => {
  const { theme } = useTheme();
    return (
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
    )
}

export default SkillsComponent;