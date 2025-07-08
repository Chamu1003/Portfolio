import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaDatabase, FaTools } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiDotnet,
  SiTailwindcss,
} from "react-icons/si";

const Experience = () => {
  const experience = {
    title: "Committee Member",
    organization: "Information Systems Engineering Students' Society",
    location: "Sri Lanka Institute of Information Technology (SLIIT)",
    responsibilities: [
      "Organized student workshops and technical training sessions",
      "Supported curriculum improvement initiatives and project development",
      "Mentored peers in software project work and technical guidance",
    ],
  };

  const skills = {
    languages: [
      { name: "JavaScript", level: 90, icon: <SiJavascript /> },
      { name: "Java", level: 85 },
      { name: "C#", level: 80, icon: <SiDotnet /> },
      { name: "Python", level: 75 },
      { name: "C++", level: 70 },
      { name: "HTML/CSS", level: 95 },
    ],
    frameworks: [
      { name: "React.js", level: 90, icon: <SiReact /> },
      { name: "Node.js", level: 85, icon: <SiNodedotjs /> },
      { name: "Express.js", level: 85 },
      { name: "TailwindCSS", level: 90, icon: <SiTailwindcss /> },
      { name: ".NET", level: 75 },
    ],
    databases: [
      { name: "MongoDB", level: 85, icon: <SiMongodb /> },
      { name: "MySQL", level: 80 },
    ],
    concepts: [
      "OOP",
      "Data Structures",
      "Algorithms",
      "RESTful APIs",
      "Git/GitHub",
    ],
    soft: [
      "Communication",
      "Teamwork",
      "Critical Thinking",
      "Time Management",
      "Problem-Solving",
    ],
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center justify-center">
            <FaBriefcase className="mr-3 text-primary" />
            Professional Experience
          </h3>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700"></div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative bg-gray-50 dark:bg-gray-700 rounded-lg p-6 ml-8 md:ml-0"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {experience.title}
              </h4>
              <p className="text-primary dark:text-primary-light font-medium mb-1">
                {experience.organization}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {experience.location}
              </p>
              <ul className="space-y-2">
                {experience.responsibilities.map((resp, index) => (
                  <li
                    key={index}
                    className="text-gray-600 dark:text-gray-300 flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaCode className="mr-3 text-primary" />
              Technical Skills
            </h3>

            {/* Languages */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                Programming Languages
              </h4>
              <div className="space-y-3">
                {skills.languages.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 dark:text-gray-300 flex items-center">
                        {skill.icon && (
                          <span className="mr-2">{skill.icon}</span>
                        )}
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                Frameworks & Libraries
              </h4>
              <div className="space-y-3">
                {skills.frameworks.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 dark:text-gray-300 flex items-center">
                        {skill.icon && (
                          <span className="mr-2">{skill.icon}</span>
                        )}
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4 flex items-center">
                <FaDatabase className="mr-2 text-primary" />
                Databases
              </h4>
              <div className="space-y-3">
                {skills.databases.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 dark:text-gray-300 flex items-center">
                        {skill.icon && (
                          <span className="mr-2">{skill.icon}</span>
                        )}
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Other Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Concepts */}
            <div className="mb-8">
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4 flex items-center">
                <FaTools className="mr-2 text-primary" />
                Concepts & Tools
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.concepts.map((concept) => (
                  <motion.span
                    key={concept}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary-light transition-colors"
                  >
                    {concept}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                Soft Skills
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.soft.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg text-center"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
