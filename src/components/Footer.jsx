import { FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border py-8 sm:py-10 lg:py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
        <div className="text-center md:text-left order-2 md:order-1">
          <h3 className="text-lg sm:text-xl font-bold text-text tracking-wide mb-1">
            Muhammad Adeel
          </h3>
          <p className="text-text-secondary text-xs sm:text-sm font-medium">
            Building scalable and user-focused applications.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2 order-1 md:order-2">
          <div className="flex space-x-4 sm:space-x-6 mb-2">
            <a href="https://github.com/MuhammadAdeel0072" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors p-2">
              <span className="sr-only">GitHub</span>
              <FiGithub className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
            <a href="mailto:madeelkhan072@gmail.com" className="text-text-secondary hover:text-accent transition-colors p-2">
              <span className="sr-only">Email</span>
              <FiMail className="w-4 sm:w-5 h-4 sm:h-5" />
            </a>
          </div>
          <p className="text-text-secondary text-xs">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
