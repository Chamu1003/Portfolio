import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Profile from '../assets/Profile.png'; // adjust path as needed


const Home = () => {
  const socialLinks = [
    { icon: <FaGithub size={24} />, href: 'https://github.com/Chamu1003', label: 'GitHub' },
    { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com/in/chamudishehara/', label: 'LinkedIn' },
    { icon: <FaMedium size={24} />, href: 'https://medium.com/@chamushehara', label: 'Medium' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-width-container section-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-lg font-semibold text-primary dark:text-primary-light mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Chamudi Shehara
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold gradient-text mb-6">
              Full Stack Developer
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Passionate IT undergraduate building innovative solutions with modern web technologies. 
              Specializing in React, Node.js, and full-stack development.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary-light transition-all duration-300 transform hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors cursor-pointer inline-block text-center"
              >
                Get In Touch
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all cursor-pointer inline-block text-center"
              >
                View Projects
              </Link>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30 animate-pulse"></div>
              <img
                src={Profile}
                alt="Chamudi Shehara"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex flex-col items-center text-gray-500 hover:text-primary cursor-pointer group"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FaArrowDown className="animate-bounce group-hover:text-primary transition-colors" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;