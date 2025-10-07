import React from "react";
import { Code2, Layers } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  highlights,
  technologies,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 h-full">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl flex flex-col">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-4 flex-grow">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300 flex-wrap gap-2">
          <span className="font-semibold text-blue-400 text-lg">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 leading-relaxed text-base">
          {description}
        </p>

        {/* Key Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="mt-6 space-y-3">
            <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-gray-300 text-sm"
                >
                  <span className="text-cyan-400 mr-2 mt-1">▹</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mt-6">
            <h4 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Code2,
      title: "Software Developer Intern",
      company: "CoreValue Technology",
      period: "Oct 2022 - Jan 2023",
      description:
        "Began my professional journey developing enterprise-grade backend applications using Spring Boot. Integrated PostgreSQL for robust data management and KeyCloak for secure authentication and authorization. Created RESTful APIs for targeted doctor notifications in healthcare applications.",
      highlights: [
        "Built secure RESTful APIs with Spring Boot and PostgreSQL integration",
        "Implemented authentication and authorization using KeyCloak",
        "Gained hands-on experience with AWS SQS and SES for message queuing and email services",
        "Mastered microservices architecture, multithreading, and asynchronous programming",
        "Implemented DevOps practices using Docker for containerization",
      ],
      technologies: [
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "KeyCloak",
        "AWS SQS",
        "AWS SES",
        "Docker",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      icon: Layers,
      title: "Software Developer",
      company: "CoreValue Technology",
      period: "Jan 2023 - Jan 2025",
      description:
        "Took complete ownership of TreeFlow Integration Framework, revolutionizing FETCH's backend architecture. Designed and implemented a scalable general tree system with cross-referencing that eliminated manual configuration overhead and enabled seamless integration of POS systems, printers, loyalty programs, and payment gateways.",
      highlights: [
        "Architected TreeFlow Integration Framework with general tree structure and cross-referencing, reducing retrieval times by 30% and improving consistency by 40%",
        "Designed LoyaltyPay Integration System using adapter pattern for seamless bill splitting, tips, and loyalty point redemption with robust rollback mechanisms",
        "Led critical migration of 17-18 million user records from Elasticsearch to OpenSearch and MongoDB to PostgreSQL with 99.9% data integrity",
        "Enabled auto-propagation of configurations from top-level to all lower levels, eliminating redundant copies and manual reconfiguration",
        "Contributed to closing strategic partnership deal with Accor hospitality brand through innovative loyalty system design",
      ],
      technologies: [
        "Spring Boot",
        "Java",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "Elasticsearch",
        "OpenSearch",
        "AWS",
        "KeyCloak",
        "NodeJS",
        "TypeScript",
        "Git",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Transforming ideas into digital reality, one project at a time"
            </p>
          </div>

          {/* Experience grid - 2 cards side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto items-stretch">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;
