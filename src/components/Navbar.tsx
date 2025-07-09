import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <i className="fas fa-compass text-2xl text-primary-600"></i>
            <span className="text-xl font-bold text-gray-900">TravelQuest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/explore" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Explore
            </Link>
            <a 
              href="#features" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Features
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              About
            </a>
            <a 
              href="#download" 
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Download
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/explore"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={toggleMenu}
              >
                Explore
              </Link>
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#download"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={toggleMenu}
              >
                Download
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar