import { personalInfo } from '../../data';

const Footer = () => {
    return (
        <footer className="bg-primary border-t border-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-2xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
                        AK.
                    </span>
                </div>
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
