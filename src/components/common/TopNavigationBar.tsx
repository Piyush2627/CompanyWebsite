import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const TopNavigationBar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      navbarOpen &&
      !document.getElementById("navbar")?.contains(e.target as Node)
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    if (navbarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navbarOpen]);

  const closeNavbar = () => setNavbarOpen(false);

  const location = useLocation();
  useEffect(() => {
    setNavbarOpen(false);
  }, [location]);

  return (
    <nav
      id="navbar"
      className={` absolute z-30 w-full transition duration-300 ease-in-out ${
        scroll ? "bg-white shadow-lg dark:bg-cinder-950" : "bg-transparent"
      }`}
    >
      <div className=" px-4 sm:px-6 xl:px-16">
        <div className="flex h-16 items-center sm:justify-end">
          <div className="hidden space-x-8 md:flex">
            <Link
              to="/"
              className="text-lg font-normal text-gray-700 hover:text-gray-500 dark:text-white"
              onClick={closeNavbar}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-normal text-gray-700 hover:text-gray-500 dark:text-white"
              onClick={closeNavbar}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-lg font-normal text-gray-700 hover:text-gray-500 dark:text-white"
              onClick={closeNavbar}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-lg font-normal text-gray-700 hover:text-gray-500 dark:text-white"
              onClick={closeNavbar}
            >
              Contact
            </Link>
            <Link
              to="/careers"
              className="text-lg font-normal text-gray-700 hover:text-gray-500 dark:text-white"
              onClick={closeNavbar}
            >
              Careers
            </Link>
          </div>
          <div className="flex items-center text-white md:hidden  ">
            <button onClick={() => setNavbarOpen(!navbarOpen)}>
              {navbarOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {navbarOpen && (
        <div className="bg-white md:hidden dark:bg-cinder-500">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              to="/"
              className="block text-lg font-normal text-gray-700 hover:text-gray-500 dark:text-white"
              onClick={closeNavbar}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-lg font-medium text-gray-700 hover:text-gray-500 dark:text-white"
              onClick={closeNavbar}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="block text-lg font-medium text-gray-700 hover:text-gray-500 dark:text-white"
              onClick={closeNavbar}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-white"
              onClick={closeNavbar}
            >
              Contact
            </Link>
            <Link
              to="/careers"
              className="block text-lg font-medium text-gray-700 hover:text-gray-900 dark:text-white"
              onClick={closeNavbar}
            >
              Careers
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNavigationBar;
