import React, { useState } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Master of Science · Computer Science",
      school: "San Francisco State University",
      mascot: "🎓",
      year: "2025-2027",
      achievements: [
        "4.0 / 4.0 GPA",
        "Team Lead — Intro to Database Systems",
        "Team Lead — Software Engineering (Buy & Sell App for SFSU Faculty)",
      ],
      skills: [
        "Java",
        "Python",
        "Node.js",
        "TypeScript",
        "Spring Boot",
        "AWS",
        "PostgreSQL",
        "MongoDB",
        "OpenSearch / Elasticsearch",
        "RESTful APIs",
        "Microservices",
        "Cloud Computing",
        "Backend Systems",
        "System Design",
        "Data Pipelines",
        "Database Management",
        "Distributed Systems",
        "Docker",
        "CI/CD",
        "DevOps",
        "Software Architecture",
        "Scalability",
        "Leadership",
        "Team Collaboration",
        "Problem Solving",
      ],

      description:
        "M.S. candidate focusing on scalable backend systems, data pipelines, and cloud-native development. Led teams in academic projects—one for Intro to Database Systems and another for Software Engineering, where we built a buy-and-sell web application tailored for SFSU faculty and staff. Oversaw system design, data modeling, and full-stack implementation with a strong emphasis on maintainability and scalability.",
    },
    {
      degree: "Bachelor of Technology · Mechanical & Automation Engineering",
      school: "Indira Gandhi Delhi Technical University for Women",
      mascot: "📘",
      year: "2018 – 2022",
      achievements: [
        "Built strong foundation in algorithms, data structures, and system design principles",
        "Designed and developed an IoT-enabled, touchless medicine dispensing system with an integrated web application for remote ordering—built during COVID-19 to promote safe, contactless healthcare delivery.",
        "Transitioned from mechanical engineering to software development through self-directed learning",
        "Completed multiple technical certifications in Python, Data Structures & Algorithms, and Machine Learning",
      ],
      skills: [
        "Java",
        "Python",
        "C++",
        "C",
        "Data Structures & Algorithms",
        "System Design",
        "Problem Solving",
        "Automation & IoT",
        "Full-Stack Development",
      ],
      description:
        "Completed a rigorous engineering program that established a strong analytical foundation and problem-solving mindset. Bridged mechanical engineering with software development by applying programming to automation and real-world systems. Notable achievement: designed and developed a touchless medicine dispenser machine with companion web application for remote ordering during COVID-19, minimizing physical contact and improving accessibility. This hands-on project strengthened my Java and Python expertise while demonstrating practical application of software engineering principles. The experience catalyzed my transition into backend and full-stack development, leading to a Software Developer Internship at CoreValue Technology immediately after graduation.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
