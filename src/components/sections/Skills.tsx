import { motion } from 'framer-motion';
import { skills } from '../../data';
import { Code2, Terminal, Cpu, Blocks, Globe, Zap } from 'lucide-react';

const Skills = () => {
    const allSkills = [...skills.core, ...skills.frontend, ...skills.backend, ...skills.tools];

    return (
        <section id="skills" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
                        Technical <span className="text-gradient">Powerhouse</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
                        Leveraging a sophisticated stack of modern technologies to build high-performance, AI-ready enterprise solutions.
                    </p>
                </motion.div>

                {/* Infinite Marquee */}
                <div className="relative flex overflow-x-hidden mb-32 border-y border-white/5 py-10 bg-black/20">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="flex whitespace-nowrap gap-12"
                    >
                        {[...allSkills, ...allSkills].map((skill, i) => (
                            <div key={i} className="flex items-center gap-3 text-2xl font-bold text-gray-700 dark:text-gray-400/50 hover:text-accent transition-colors cursor-default uppercase tracking-tighter">
                                <Zap size={20} className="text-accent-light" />
                                {skill}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Core & Frontend', items: [...skills.core, ...skills.frontend], icon: Globe, color: 'text-blue-400' },
                        { title: 'Backend & Logic', items: skills.backend, icon: Terminal, color: 'text-purple-400' },
                        { title: 'Tools & Vision', items: [...skills.tools, ...skills.concepts], icon: Blocks, color: 'text-cyan-400' }
                    ].map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-10 rounded-3xl group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <category.icon size={80} />
                            </div>
                            
                            <category.icon className={`${category.color} mb-6`} size={32} />
                            <h3 className="text-2xl font-bold mb-8">{category.title}</h3>
                            
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs font-semibold px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 group-hover:border-accent/30 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
