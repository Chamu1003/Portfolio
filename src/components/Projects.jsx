import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Codeverse",
      subtitle: "Social Media Platform for Academics",
      description: "Developed mentor-student communication interface with real-time chat capabilities and role-based access controls.",
      tech: ["React", "Vite", "TailwindCSS", "Node.js", "Express", "MongoDB"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
      features: [
        "Real-time chat capabilities",
        "Role-based access controls",
        "RESTful APIs for resource sharing",
        "MongoDB integration"
      ]
    },
    {
      title: "Lizard",
      subtitle: "B2B E-commerce Platform",
      description: "Engineered seller onboarding, product listings, and inventory modules with secure authentication.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Bcrypt", "Vite"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      features: [
        "Seller management system",
        "Secure authentication with Bcrypt",
        "Order and product data management",
        "B2B commerce capabilities"
      ]
    },
    {
      title: "Cashires",
      subtitle: "Point of Sale (POS) Application",
      description: "Built a desktop-based POS system with sales, receipts, and transaction logs for efficient cashier workflows.",
      tech: [".NET", "C#", "Visual Studio", "WinForms"],
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=400&fit=crop",
      features: [
        "Sales and receipt management",
        "Transaction logging",
        "Intuitive WinForms UI",
        "Business logic handling"
      ]
    },
    {
      title: "Portfolio Website",
      subtitle: "Personal Portfolio",
      description: "Created a fully responsive portfolio site with smooth navigation and clean design to showcase projects.",
      tech: ["React", "Vite", "TailwindCSS", "Vercel"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop",
      features: [
        "Fully responsive design",
        "GitHub and LinkedIn integration",
        "Smooth navigation",
        "Continuous integration with Vercel"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-width-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my journey through code - from full-stack web applications to desktop solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex space-x-3">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <FaGithub className="text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <FaExternalLinkAlt className="text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-primary dark:text-primary-light font-medium mb-3">{project.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;