import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data';
const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get In <span className="text-accent">Touch</span></h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="flex justify-center max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-8 max-w-lg w-full"
                    >
                        <a
                            href={`mailto:${personalInfo.contact.email}`}
                            className="flex items-center p-6 glass-card rounded-xl hover:border-accent/50 transition-all group"
                        >
                            <div className="p-4 bg-accent/10 rounded-full text-accent group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                                <p className="text-gray-600 dark:text-gray-400 group-hover:text-accent-light transition-colors">{personalInfo.contact.email}</p>
                            </div>
                        </a>

                        <div className="flex items-center p-6 glass-card rounded-xl hover:border-accent/50 transition-all group">
                            <div className="p-4 bg-accent/10 rounded-full text-accent group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div className="ml-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                                <p className="text-gray-600 dark:text-gray-400">{personalInfo.contact.phone}</p>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center pt-4">
                            <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-gray-400 hover:text-white hover:bg-accent transition-all duration-300 hover:scale-110">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
