import { motion } from 'framer-motion';
import { MapPin, Sparkles, Code2, ExternalLink, ShieldCheck } from 'lucide-react';
import { projects } from '../../data';

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-accent-light font-semibold tracking-tighter text-sm uppercase mb-3 block">Portfolio</span>
                    <h2 className="text-4xl sm:text-6xl font-bold mb-4 tracking-tight">
                        Featured <span className="text-gradient">Innovations</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-lg">
                        A curated selection of enterprise-grade solutions built with AI-driven principles and modern architecture.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                    {projects.map((project, index) => {
                        // Custom grid spans for Bento effect with responsive fallback
                        const gridSpans = [
                            "md:col-span-4 md:row-span-2 min-h-[400px]", 
                            "md:col-span-2 md:row-span-2 min-h-[400px]", 
                            "md:col-span-3 md:row-span-1 min-h-[300px]", 
                            "md:col-span-3 md:row-span-1 min-h-[300px]"
                        ];
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`${gridSpans[index] || "md:col-span-2"} group relative glass-card rounded-3xl overflow-hidden glow-border`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-2 text-accent-light text-xs font-bold uppercase tracking-widest">
                                                <Sparkles size={14} />
                                                AI Insight Enabled
                                            </div>
                                            <div className="p-2 bg-white/5 rounded-full text-gray-400 group-hover:text-accent transition-colors">
                                                <ExternalLink size={18} />
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                                            {project.title}
                                        </h3>
                                        
                                        <div className="flex items-center text-gray-500 text-sm mb-4">
                                            <MapPin size={14} className="mr-1" />
                                            {project.location}
                                        </div>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 uppercase tracking-wider"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* AI Insight Overlay (Visible on Hover) */}
                                    <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black via-black/90 to-transparent">
                                        <div className="flex items-center gap-2 mb-3 text-accent-light">
                                            <ShieldCheck size={16} />
                                            <span className="text-xs font-bold uppercase tracking-widest">Architectural Impact</span>
                                        </div>
                                        <ul className="space-y-2">
                                            {project.achievements.slice(0, 2).map((item, i) => (
                                                <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                                                    <span className="text-accent mt-1">●</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
