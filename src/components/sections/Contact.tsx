import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data';
import Magnetic from '../layout/Magnetic';

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-accent-light font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Connection</span>
                    <h2 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight">
                        Initiate <span className="text-gradient">Contact</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Ready to integrate cutting-edge expertise into your next enterprise venture.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Magnetic>
                        <a
                            href={`mailto:${personalInfo.contact.email}`}
                            className="flex items-center p-8 glass-card rounded-[2.5rem] hover:border-accent group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Mail size={120} />
                            </div>
                            <div className="p-5 bg-accent/10 rounded-3xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                <Mail size={32} />
                            </div>
                            <div className="ml-8">
                                <h3 className="text-xl font-bold mb-1">Email Interface</h3>
                                <p className="text-gray-400 group-hover:text-accent-light transition-colors">{personalInfo.contact.email}</p>
                            </div>
                        </a>
                    </Magnetic>

                    <Magnetic>
                        <div className="flex items-center p-8 glass-card rounded-[2.5rem] hover:border-accent group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Phone size={120} />
                            </div>
                            <div className="p-5 bg-accent/10 rounded-3xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                <Phone size={32} />
                            </div>
                            <div className="ml-8">
                                <h3 className="text-xl font-bold mb-1">Direct Line</h3>
                                <p className="text-gray-400">{personalInfo.contact.phone}</p>
                            </div>
                        </div>
                    </Magnetic>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-6 mt-16"
                >
                    <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-2xl text-gray-400 hover:text-white hover:bg-accent transition-all duration-500 hover:scale-110">
                        <Linkedin size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
