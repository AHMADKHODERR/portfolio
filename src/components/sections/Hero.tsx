import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import { personalInfo } from '../../data';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary px-4 sm:px-6 lg:px-8">
            {/* Background gradients */}
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-accent-light font-medium tracking-wider text-sm sm:text-base uppercase mb-4 block">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <span className="text-gradient font-extrabold">{personalInfo.name}</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light rounded-full blur-lg opacity-20 dark:opacity-75 animate-pulse"></div>
                    <img
                        src="/profile.jpg"
                        alt={personalInfo.name}
                        className="relative w-full h-full object-cover rounded-full border-2 border-white/20 shadow-2xl z-10"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-400 text-lg sm:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {personalInfo.role} specializing in building exceptional digital experiences with <span className="text-gray-900 dark:text-white font-semibold">Liferay DXP</span> and <span className="text-gray-900 dark:text-white font-semibold">React</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="group cursor-pointer bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
                    >
                        View My Work
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                        href="/cv.pdf"
                        download
                        className="cursor-pointer border border-gray-300 dark:border-gray-700 hover:border-accent text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-white py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
                    >
                        <Download size={20} />
                        Download CV
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-2 bg-accent rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
