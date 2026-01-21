import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { projects } from '../../data';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured <span className="text-accent">Projects</span></h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative glass-card rounded-xl overflow-hidden hover:border-accent/50 transition-colors duration-300"
                        >
                            <div className="p-6 sm:p-8">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                        <MapPin size={14} className="mr-1" />
                                        {project.location}
                                    </div>
                                </div>

                                <p className="text-accent/80 font-medium mb-3 text-sm">
                                    {project.role}
                                </p>

                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <ul className="space-y-2 mb-6">
                                    {project.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                                            <span className="text-accent mr-2 mt-1.5 ">›</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/50">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent-light border border-accent/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover overlay effects could go here for images if we had them */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
