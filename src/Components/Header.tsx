// import  logo from "../public/images/logo.png"
import  logo from "../../public/images/logo.png"
import { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle dark mode toggle effect on <html> class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navItems = ["Main", "About", "Shop", "Contact us"];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo or Brand */}
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {/* Logo */}
                 <img src={logo} alt="no image" style={{width:'60px'}} />
            </div>

            {/* Nav Links */}
            <ul className="hidden sm:flex space-x-8">
              {navItems.map((item, i) => (
                <li
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`
                    cursor-pointer
                    text-gray-700 dark:text-gray-300
                    hover:text-blue-600 dark:hover:text-blue-400
                    transition-colors duration-300
                    ${activeIndex === i ? "font-semibold text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400" : ""}
                  `}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {darkMode ? (
                // Sun icon for light mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707m16.97 9.556l-.707-.707M4.222 19.778l-.707-.707M21 12h-1M4 12H3m15.364 5.364l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"
                  />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="none"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to avoid content hidden behind fixed navbar */}
      <div className="h-16"></div>

      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center pt-8 font-extrabold text-pink-600 dark:text-pink-400 select-none">
        Image Gallery
      </h1>
    </>
  );
};

export default Header;

