import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gray-800 text-white py-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
              src="https://avatars.githubusercontent.com/u/847230?v=4?s=400"
              className="h-8 mr-3"
              alt="Mutse's Logo"
          />
          <Link to="/" className="text-white">Home</Link>
        </div>
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <nav className={`space-x-4 md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="https://blog.mutse.top" className="text-white hover:text-gray-300">Blog</a>
          <Link to="/photo" className="text-white hover:text-gray-300">Photo</Link>
          <div className="inline-block relative">
            <button 
              onClick={toggleDropdown} 
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              AI
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10">
                <a href="https://chatgpt.mutse.top" className="block px-4 py-2 hover:bg-gray-200">ChatGPT</a>
                <a href="https://bing.mutse.top/web/#" className="block px-4 py-2 hover:bg-gray-200">Bing</a>
                <a href="https://claude.mutse.top" className="block px-4 py-2 hover:bg-gray-200">Claude</a>
                <a href="https://ai.mutse.top" className="block px-4 py-2 hover:bg-gray-200">AI</a>
              </div>
            )}
          </div>
          <a href="https://libretv.mutse.top" className="text-white hover:text-gray-300">LibreTV</a>
          <Link to="/tools" className="text-white hover:text-gray-300">Tools</Link>
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;



