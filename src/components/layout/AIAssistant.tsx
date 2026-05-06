import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, Sparkles, User, MessageSquare } from 'lucide-react';
import { personalInfo, skills, projects } from '../../data';

interface Message {
    id: string;
    text: string;
    sender: 'ai' | 'user';
    timestamp: Date;
}

const AIAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: `Hi! I'm Ahmad's Digital Twin. I can tell you about his expertise in Liferay DXP, React, or his work at PIF. How can I help you today?`,
            sender: 'ai',
            timestamp: new Date()
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate AI Response logic
        setTimeout(() => {
            const response = generateAIResponse(input.toLowerCase());
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: response,
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const generateAIResponse = (query: string): string => {
        const q = query.toLowerCase();
        if (q.includes('liferay')) {
            return `Ahmad is a Senior Liferay Developer with extensive experience at Netways. He specializes in DXP 7.4, Fragments, Themes, and performance optimization. He's worked on major portals like the Public Investment Fund (PIF).`;
        }
        if (q.includes('react')) {
            return `React is one of Ahmad's core strengths. He builds enterprise-grade UIs with React and TypeScript, integrating them seamlessly with Liferay or custom Node.js backends.`;
        }
        if (q.includes('pif') || q.includes('investment')) {
            return `Ahmad worked on-site in Riyadh for the Public Investment Fund (PIF). He owned multiple enterprise services, focusing on architecture, security, and reusable fragments.`;
        }
        if (q.includes('contact') || q.includes('email') || q.includes('how to')) {
            return `You can reach Ahmad at ${personalInfo.contact.email} or call him at ${personalInfo.contact.phone}. He's open to remote and on-site opportunities globally.`;
        }
        if (q.includes('skill') || q.includes('core')) {
            return `His top technical skills include: ${skills.core.join(', ')}. He's also highly proficient in ${skills.frontend.join(', ')} and ${skills.concepts.join(', ')}.`;
        }
        if (q.includes('experience') || q.includes('work')) {
            return `Ahmad has over 2 years of professional experience, currently serving as a Senior Software Developer at Netways. He has led frontend implementations for major government and investment portals.`;
        }
        return "That's an interesting question! I focus on Ahmad's professional background in software engineering. Feel free to ask about his specific projects, technical stack, or availability!";
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="glass-card mb-4 w-[350px] sm:w-[400px] h-[500px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border-accent/20"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-accent/10 to-accent-light/10 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center relative">
                                    <Bot className="text-accent" size={24} />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-primary"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Ahmad's Digital Twin</h3>
                                    <span className="text-[10px] text-accent-light uppercase tracking-widest font-semibold">AI Assistant</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div 
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                        msg.sender === 'user' 
                                            ? 'bg-accent text-white rounded-tr-none' 
                                            : 'bg-white/10 dark:bg-white/5 border border-white/10 rounded-tl-none'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 dark:bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none">
                                        <div className="flex gap-1">
                                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-accent rounded-full" />
                                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-accent rounded-full" />
                                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-accent rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input & Suggestions */}
                        <div className="p-4 border-t border-white/10 bg-black/20">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "Tell me about PIF",
                                    "What are your core skills?",
                                    "Work experience",
                                    "How to contact?"
                                ].map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        onClick={() => {
                                            setInput(suggestion);
                                            // Trigger send automatically for better UX
                                            setTimeout(() => handleSend(), 100);
                                        }}
                                        className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light hover:bg-accent hover:text-white transition-all"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask about Liferay, PIF, or React..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-accent hover:text-accent-light transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
                    isOpen ? 'bg-red-500 rotate-90' : 'bg-accent'
                }`}
            >
                {isOpen ? <X className="text-white" /> : <Bot className="text-white" size={28} />}
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-accent-light rounded-full flex items-center justify-center"
                    >
                        <Sparkles size={12} className="text-white" />
                    </motion.div>
                )}
            </motion.button>
        </div>
    );
};

export default AIAssistant;
