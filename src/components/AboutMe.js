import NavBar from "./NavBar";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2012",
    title: "🇸🇬 Start of my journey in Singapore",
    text: "At sixteen, I left my hometown of Sarawak and moved to Singapore to pursue O levels. The transition to a new country and education system was challenging, but it taught me resilience and independence. This experience shaped my adaptability and determination for the years ahead.",
  },
  {
    year: "2019",
    title:
      "🎓 Graduated from Nanyang Technological University with a Bachelor of Accountancy",
    text: "I graduated from NTU with a degree in Accountancy, where I honed my analytical and problem-solving skills. My journey began in the world of audit at KPMG Singapore, where I learned the importance of hardwork, precision and teamwork. These foundational years set the stage for my future growth.",
  },
  {
    year: "2021",
    title: "💻 Started my journey in software development",
    text: "Driven by curiosity and a desire for something more fulfilling, I took a leap of faith and enrolled in General Assembly’s Software Engineering Immersive. It was an intense, full-time commitment—where I spent every day building projects, debugging late into the night, and absorbing everything from JavaScript fundamentals to full-stack architecture.",
  },
  {
    year: "2022",
    title: "🧑‍💻 My first job as a software engineer",
    text: "Working as a software engineer at Alta Exchange marked the beginning of an exciting journey. We started with just flowcharts and diagrams - a project that hadn't yet left the whiteboard - and together as a team, we built it from the ground up. We brainstormed, shipped features, and debugged real-time issues to bring a trading platform to life, one that users came to rely on. Throughout this journey, I often felt like I was living out the anime Solo Leveling—constantly growing, taking on tougher challenges, and leveling up alongside a fast-moving team.",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Typescript",
      "Nest.js",
      "mySQL",
      "Docker",
      "Terraform",
      "AWS",
      "Google Cloud",
    ],
  },
  {
    year: "2025",
    title: "🚀 Ready for a new challenge",
    text: "I’m currently open to new opportunities and actively looking for my next role—particularly in fintech or in the exciting space of large language models (LLMs). I’m passionate about building impactful products, continuously learning, and taking on greater responsibilities. If you’re interested in working together, feel free to download my resume below.",
  },
];

const AboutMe = () => {
  return (
    <>
      <NavBar />
      <div style={{ maxWidth: 1000, margin: "auto" }}>
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="about-intro"
        >
          <h1 className="about-intro-title">Hi, I'm Sheah Wen</h1>
          <h2 className="about-intro-subtitle">Full Stack Developer</h2>
          <p className="about-intro-text">
            I love building interactive, user-focused applications that make a
            difference. My passion lies in blending technology and
            creativity—whether it's through intuitive UI, smooth animations, or
            solving real-world problems with code. I take pride in my work and
            hold myself to a high standard, always striving to build things I'd
            be proud to use and share. With experiences across the stack, I'm
            constantly learning, collaborating, and turning ideas into
            meaningful digital experiences.
          </p>
        </motion.div>
        <div style={{ margin: "auto" }}>
          <div className="timeline-container">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                className="timeline-row"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.18,
                  ease: "easeOut",
                }}
              >
                <div className="timeline-number-col">
                  <div className="timeline-number">{item.year}</div>
                  {index !== timelineData.length - 1 && (
                    <motion.div
                      className="timeline-vertical-line"
                      initial={{
                        background:
                          "linear-gradient(to bottom, #333 60%, transparent 100%)",
                      }}
                      whileInView={{
                        background:
                          "linear-gradient(to bottom, #8f5cff 60%, transparent 100%)",
                      }}
                      exit={{
                        background:
                          "linear-gradient(to bottom, #333 60%, transparent 100%)",
                      }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  )}
                </div>
                <div className="timeline-content">
                  {item.year === "2025" && (
                    <div className="timeline-label">Present</div>
                  )}
                  <div className="timeline-heading">{item.title}</div>
                  <div className="timeline-description">{item.text}</div>
                  {item.year === "2025" && (
                    <a
                      href="https://drive.google.com/file/d/1MHNovcUgOG8VSQe_Dl95Y-lAuYdBBQbX/view?usp=sharing"
                      className="resume-download-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Resume
                    </a>
                  )}
                  {item.skills && (
                    <div className="timeline-skills">
                      <strong>Skills:</strong> {item.skills.join(", ")}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
