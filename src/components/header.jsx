import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const checkScreen = () => {
    setMobile(window.innerWidth <= 770);
  };

  useEffect(() => {
    checkScreen();
    window.addEventListener('resize', checkScreen);

    // Set the initial dark mode based on localStorage
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => {
      window.removeEventListener('resize', checkScreen);
    };
  }, [isDarkMode]); // Add isDarkMode to the dependency array

  const toggleMobileNav = () => {
    setIsNavOpen(!isNavOpen);
    setMobileNav(!mobileNav);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="fixed w-full z-50 bg-gray-900 dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-white flex items-center logo">
          <img src={logo} alt="Locsafe Logo" className="h-12 mr-3" />
        </Link>

        {mobile ? (
          <button 
            onClick={toggleMobileNav} 
            className="block lg:hidden focus:outline-none transition-transform duration-300"
          >
            <div className={`hamburger ${isNavOpen ? 'open' : ''}`}>
              <span className={`block h-0.5 w-6 bg-white mb-1 transition-transform duration-100 ${isNavOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-white mb-1 transition-opacity duration-100 ${isNavOpen ? 'opacity-100' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-100 ${isNavOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        ) : (
          <nav className="flex items-center space-x-8 text-white font-medium">
            <ul className="flex items-center space-x-8">
              <li>
                <button
                  onClick={toggleDarkMode}
                  className="text-l p-2 rounded transition-colors duration-300 flex items-center"
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <FaSun className="text-yellow-500 transition-transform duration-300" /> : <FaMoon className="text-gray-300 transition-transform duration-300" />}
                </button>
              </li>
              <li>
                <Link to="#" className={`hover:text-gray-400 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className={`hover:text-gray-400 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="https://chat.whatsapp.com/FHo517DQ4RSEZHjBq48LYO" className="hover:text-teal-400 transition-colors duration-300">
                  Join our community
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {mobile && (
        <nav className={`lg:hidden fixed inset-x-0 top-16 transition-opacity duration-500 ${mobileNav ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gray-900 dark:bg-gray-800 h-full w-full flex flex-col justify-center items-center">
            <ul className="text-white font-medium">
              <li>
                <button
                  onClick={toggleDarkMode}
                  className="text-2xl p-2 rounded transition-colors duration-300 mt-4 flex items-center"
                  aria-label="Toggle Dark Mode"
                >
                  {isDarkMode ? <FaSun className="text-yellow-500 transition-transform duration-300" /> : <FaMoon className="text-gray-300 transition-transform duration-300" />}
                </button>
              </li>
              <li>
                <Link to="/blog" className={`block py-2 px-4 hover:text-teal-400 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-4 hover:text-teal-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="https://chat.whatsapp.com/FHo517DQ4RSEZHjBq48LYO" className="block py-2 px-4 hover:text-teal-400 transition-colors duration-300">
                  Join our community
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button className="block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-12 rounded transition-colors duration-300 mb-5">
                    Get Started
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;













