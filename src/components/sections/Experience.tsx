import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../../data';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Professional <span className="text-accent">Experience</span></h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l border-gray-700 ml-3 md:ml-6 space-y-12">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-5 h-5 bg-accent border-4 border-primary rounded-full"></div>

                            <div className="glass-card rounded-xl p-6 hover:border-accent/50 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                                        <div className="flex items-center text-accent text-sm font-medium">
                                            <Briefcase size={16} className="mr-2" />
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0 bg-white/50 dark:bg-primary px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800">
                                        <Calendar size={14} className="mr-2" />
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                                    {exp.description}
                                </p>

                                <ul className="space-y-2">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                                            <span className="text-accent mr-2 mt-1.5">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
