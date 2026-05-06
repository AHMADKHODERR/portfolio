import { motion } from 'framer-motion';
import { Briefcase, Calendar, Star } from 'lucide-react';
import { experience } from '../../data';

const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-accent-light font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Chronicles</span>
                    <h2 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
                        Professional <span className="text-gradient">Trajectory</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/50 via-accent-light/30 to-transparent"></div>

                    <div className="space-y-16">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 md:ml-[-5px] top-0 w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] z-10"></div>

                                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                                    <div className="glass-card p-8 rounded-[2rem] hover:scale-[1.02] transition-all duration-500 group">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="p-3 bg-accent/10 rounded-2xl text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                                <Briefcase size={20} />
                                            </div>
                                            <div className="flex items-center text-[10px] font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                                                <Calendar size={12} className="mr-2" />
                                                {exp.period}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{exp.role}</h3>
                                        <p className="text-accent-light font-semibold mb-4 text-sm uppercase tracking-wider">{exp.company}</p>
                                        
                                        <p className="text-gray-400 text-sm italic mb-6 border-l-2 border-accent/20 pl-4">
                                            {exp.description}
                                        </p>

                                        <ul className="space-y-3">
                                            {exp.achievements.map((item, i) => (
                                                <li key={i} className="flex items-start text-xs text-gray-400 leading-relaxed">
                                                    <Star size={10} className="mr-2 mt-1 text-accent-light shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
