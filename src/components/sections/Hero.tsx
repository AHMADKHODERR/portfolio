import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Cpu } from 'lucide-react';
import { Link } from 'react-scroll';
import { personalInfo } from '../../data';
import Magnetic from '../layout/Magnetic';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <span className="p-1.5 bg-accent/10 rounded-lg text-accent">
                            <Cpu size={16} />
                        </span>
                        <span className="text-accent-light font-bold tracking-[0.2em] text-[10px] uppercase block">
                            Engineering the Future
                        </span>
                    </div>
                    
                    <h1 className="text-6xl sm:text-8xl font-bold mb-8 tracking-tighter leading-none">
                        Hi, I'm <br />
                        <span className="text-gradient font-extrabold">{personalInfo.name}</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-12 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                    <div className="relative w-full h-full p-1 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-md border border-white/10 z-10 overflow-hidden">
                        <img
                            src="/profile.jpg"
                            alt={personalInfo.name}
                            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary border border-white/10 p-3 rounded-2xl shadow-2xl z-20">
                        <Sparkles className="text-accent" size={20} />
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-500 dark:text-gray-400 text-lg sm:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    A <span className="text-white underline decoration-accent decoration-2 underline-offset-4">{personalInfo.role}</span> architecting scalable DXP portals with <span className="text-accent-light">Liferay</span> & <span className="text-accent-light">React</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Magnetic>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="group cursor-pointer bg-white text-black hover:bg-accent hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-500 flex items-center gap-3 shadow-xl"
                        >
                            Explore Portfolio
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Magnetic>

                    <Magnetic>
                        <a
                            href="/cv.pdf"
                            download
                            className="cursor-pointer glass-card text-white py-4 px-10 rounded-full transition-all duration-500 flex items-center gap-3 border-white/10 hover:border-accent/50"
                        >
                            <Download size={20} className="text-accent" />
                            Download CV
                        </a>
                    </Magnetic>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
