import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, User, Code, Mail, ArrowRight, X } from 'lucide-react';

const CommandPalette: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const actions = [
        { icon: User, label: 'About Ahmad', shortcut: 'G + A', section: 'hero' },
        { icon: Code, label: 'Technical Skills', shortcut: 'G + S', section: 'skills' },
        { icon: Command, label: 'View Projects', shortcut: 'G + P', section: 'projects' },
        { icon: Mail, label: 'Contact Info', shortcut: 'G + C', section: 'contact' },
    ];

    const filteredActions = actions.filter(action => 
        action.label.toLowerCase().includes(query.toLowerCase())
    );

    const handleAction = (section: string) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="relative w-full max-w-xl glass-card rounded-2xl overflow-hidden border-accent/20 shadow-2xl"
                    >
                        <div className="flex items-center p-4 border-b border-white/10 bg-white/5">
                            <Search className="text-gray-400 mr-3" size={20} />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type a command or search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-transparent border-none outline-none text-lg placeholder:text-gray-500"
                            />
                            <div className="flex items-center gap-1 px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] text-gray-500">
                                <span className="text-xs">ESC</span>
                            </div>
                        </div>

                        <div className="p-2 max-h-[300px] overflow-y-auto">
                            {filteredActions.length > 0 ? (
                                filteredActions.map((action, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAction(action.section)}
                                        className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-accent/10 group transition-colors text-left"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                                                <action.icon size={18} className="text-gray-400 group-hover:text-accent" />
                                            </div>
                                            <span className="font-medium text-gray-300 group-hover:text-white">
                                                {action.label}
                                            </span>
                                        </div>
                                        <ArrowRight size={16} className="text-gray-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </button>
                                ))
                            ) : (
                                <div className="p-8 text-center text-gray-500">
                                    No results found for "{query}"
                                </div>
                            )}
                        </div>

                        <div className="p-3 bg-black/20 border-t border-white/10 flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                            <span>AI-Powered Search</span>
                            <div className="flex gap-4">
                                <span className="flex items-center gap-1"><span className="text-accent">↑↓</span> Navigate</span>
                                <span className="flex items-center gap-1"><span className="text-accent">↵</span> Select</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
