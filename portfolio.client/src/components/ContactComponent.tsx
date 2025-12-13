import { ArrowRight, Mail } from "lucide-react";
import useTheme from '../hooks/useTheme';

const ContactComponent = () => {
    const { theme } = useTheme();
    return (
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
    );
}
export default ContactComponent;