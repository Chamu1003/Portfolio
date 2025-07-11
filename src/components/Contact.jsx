import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaMedium, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = {
    email: "chamudi.us@gmail.com",
    phone: "+94 760 055 941",
    location: "Nawasigahawatta, Nugegoda, Sri Lanka",
    social: [
      { name: "LinkedIn", icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/chamudishehara/" },
      { name: "GitHub", icon: <FaGithub size={20} />, url: "https://github.com/ChamudiShehara" },
      { name: "Medium", icon: <FaMedium size={20} />, url: "https://medium.com/@chamushehara" }
    ]
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaEnvelope className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaPhone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 text-gray-600 dark:text-gray-300"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FaMapMarkerAlt className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p>{contactInfo.location}</p>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {contactInfo.social.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-primary hover:text-white transition-all"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resume Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center text-center"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
              <div className="mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaFileDownload className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Download Resume</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get a detailed overview of my qualifications and experience
                </p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Download CV
              </motion.button>
              
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Updated January 2025
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Chamudi Shehara. Built with React, TailwindCSS & ❤️
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;