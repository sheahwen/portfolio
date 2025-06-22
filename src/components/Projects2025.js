import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Projects2025 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Duck farm",
      description:
        "A web application where users can generate unique duck images and build their virtual duck farm. Features include, duck generation, farm management, and a gallery to showcase your duck collection.",
      technologies: ["Next.js", "Express.js", "MongoDB", "OpenAI api"],
      github: "https://github.com/sheahwen/duck-farm-nextjs",
      live: "https://duck-farm-nextjs.vercel.app/home",
      category: "Full-Stack",
      image: "🦆",
    },
    {
      id: 2,
      title: "Salary calculator",
      description:
        "A macOS app that helps you visualize your monthly salary earnings in real-time and track your progress towards your financial goals.",
      technologies: ["Swift", "MacOS"],
      github: "https://github.com/sheahwen/time-is-money",
      live: "https://github.com/sheahwen/time-is-money",
      category: "Mobile",
      image: "💰",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="modern-projects-section"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Recent Projects</h2>
        <p className="section-subtitle">
          My little fun projects or applications to keep my sanity. Nothing
          serious here, just projects I built to gain hands-on experience with
          new tools or technologies.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover="hover"
            hoverVariants={hoverVariants}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="project-header">
              <div className="project-icon">{project.image}</div>
              <div className="project-category">{project.category}</div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link live-link"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects2025;
