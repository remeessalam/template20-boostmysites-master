import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import logo from "../../assets/images/headerlogo.png";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import { Link as Scrolllink } from "react-scroll";

const LandingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const navigate = useNavigate();
  // const navigateTo = () => {
  //   navigate("/contact-us");
  // };
  return (
    <nav className="fixed w-full top-0 !z-50 bg-primary dark:bg-darkblack shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <div className="flex-shrink-0">
            <div className=" w-auto text-white">
              <img src={logo} alt="logo" className="w-[6.4rem]" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-blue-300 dark:hover:text-primary"
            >
              Home
            </Link>
            <Scrolllink
              to="about-us"
              key={"about-us"}
              spy={true}
              smooth={true}
              offset={-140}
              duration={1000}
              activeClass="active-link text-blue-300 dark:text-primary"
              className="text-white hover:text-blue-300 dark:hover:text-primary"
            >
              About Us
            </Scrolllink>
            <Scrolllink
              to="services"
              key={"services"}
              spy={true}
              smooth={true}
              offset={-140}
              duration={1000}
              activeClass="active-link text-blue-300 dark:text-primary"
              className="text-white hover:text-blue-300 dark:hover:text-primary"
            >
              Services
            </Scrolllink>

            <Link
              to="/blog"
              className="text-white hover:text-blue-300 dark:hover:text-primary"
            >
              Blog
            </Link>
            <Scrolllink
              to="contact"
              key={"contact"}
              spy={true}
              smooth={true}
              offset={-140}
              duration={1000}
              activeClass="active-link "
              className="primary-btn"
            >
              Contact Us
            </Scrolllink>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 text-gray-600  `}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:text-yellow-300 text-gray-600`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Home
            </Link>
            <Scrolllink
              to="about-us"
              key={"about-us"}
              onClick={toggleMenu}
              spy={true}
              smooth={true}
              offset={-140}
              duration={1000}
              activeClass="active-link text-blue-300 dark:text-primary"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              About Us
            </Scrolllink>
            <Scrolllink
              to="services"
              key={"services"}
              onClick={toggleMenu}
              spy={true}
              smooth={true}
              offset={-140}
              duration={1000}
              activeClass="active-link text-blue-300 dark:text-primary"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Services
            </Scrolllink>
            <Link
              to="/blog"
              className="block px-3  pt-2 pb-3 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Blog
            </Link>
            <Scrolllink
              to="contact"
              key={"contact"}
              onClick={toggleMenu}
              spy={true}
              smooth={true}
              offset={-140}
              duration={1000}
              className="w-full  text-center bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Contact Us
            </Scrolllink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingHeader;
