import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaLanguage, FaCode } from 'react-icons/fa';

const About = () => {
  const education = [
    {
      degree: "B.Sc. (Hons) in Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "Expected Graduation: September 2026",
      icon: <FaGraduationCap className="text-2xl" />
    },
    {
      degree: "G.C.E. Advanced Level – Physical Science",
      institution: "St. Thomas Girls' High School",
      period: "2018 – 2020",
      icon: <FaGraduationCap className="text-2xl" />
    }
  ];

  const certifications = [
    {
      name: "Full Stack Developer Trainee Program",
      issuer: "University of Moratuwa",
      period: "2025",
      icon: <FaCertificate />
    },
    {
      name: "Python Programming",
      icon: <FaCode />
    },
    {
      name: "Web Development",
      icon: <FaCode />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        {/* Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Enthusiastic and results-driven Information Technology undergraduate with a passion for building 
            innovative solutions to real-world problems. Skilled in full-stack development with hands-on 
            experience in web, mobile, and desktop applications. Adept in JavaScript, Java, C#, Python, 
            and frameworks like React, Node.js, and Electron.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaGraduationCap className="mr-3 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">{edu.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaCertificate className="mr-3 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center">
                    <span className="text-primary mr-3">{cert.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                      {cert.period && <p className="text-xs text-gray-500 dark:text-gray-400">{cert.period}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
            <FaLanguage className="mr-3 text-primary" />
            Languages
          </h3>
          <div className="inline-flex items-center bg-gray-50 dark:bg-gray-700 rounded-lg px-6 py-3">
            <span className="text-lg font-medium text-gray-900 dark:text-white">English</span>
            <span className="ml-3 text-sm text-gray-600 dark:text-gray-300">(Fluent)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;