import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-40 bg-background-secondary border-b border-border shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="home" smooth={true} duration={500} className="text-lg sm:text-2xl font-bold text-text tracking-wide">
              <span className="sm:inline hidden">Muhammad Adeel</span>
              <span className="sm:hidden">MA</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-accent after:scale-x-100"
                className="relative text-text-secondary hover:text-accent font-medium cursor-pointer transition-colors duration-300 py-2 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-accent after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pl-4 border-l border-border flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-text-secondary hover:text-accent hover:bg-background transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-secondary hover:text-accent transition-colors"
            >
              {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-accent focus:outline-none p-2 transition-colors"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-secondary border-b border-border shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-accent border-l-4 border-accent pl-3 bg-background"
                className="text-text-secondary hover:text-accent hover:bg-background cursor-pointer transition-colors font-medium block px-4 py-3 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
