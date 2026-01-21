import { motion } from 'framer-motion';
import { skills } from '../../data';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Technical <span className="text-accent">Expertise</span></h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Main Skills (Core & Frontend) */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
                            <span className="w-2 h-8 bg-purple-500 rounded-full mr-3"></span>
                            Core & Frontend
                        </h3>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {[...skills.core, ...skills.frontend].map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={item}
                                    className="bg-white/80 dark:bg-primary/50 border border-gray-200 dark:border-gray-700 hover:border-accent text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-white px-4 py-2 rounded-lg transition-all duration-300 cursor-default shadow-sm dark:shadow-none"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Backend & Tools */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
                            <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
                            Backend, Tools & Concepts
                        </h3>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {[...skills.backend, ...skills.tools, ...skills.concepts].map((skill) => (
                                <motion.span
                                    key={skill}
                                    variants={item}
                                    className="bg-white/80 dark:bg-primary/50 border border-gray-200 dark:border-gray-700 hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-white px-4 py-2 rounded-lg transition-all duration-300 cursor-default shadow-sm dark:shadow-none"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
