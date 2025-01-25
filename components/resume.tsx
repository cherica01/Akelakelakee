'use client';

import { Badge } from "@/components/ui/badge";
import { CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import {
  SiDjango,
  SiPython,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiGit,
  SiTailwindcss,
  
} from 'react-icons/si';
const cardVariants = {
  hidden: { opacity: 0.1, y: 50 }, // Initial opacity at 0.1 to avoid flickering
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4, // Delay each card by 0.4s for staggered animation
      duration: 1,    // Longer duration for a smoother transition
      ease: "easeOut", // Smooth easing for a natural animation
    },
  }),
};

export function Resume() {
  const educationData = [
    {
      title: "Obtaining a certification in Responsive Web Design.",
      date: "2024 - 2025",
      content: "Responsive Web Design Certification, showcasing expertise in creating adaptable and user-friendly web interfaces.",
      institution: "Freecodecamp",
    },
    {
      title: "Bachelor's degree (Bac+3) in Computer Science, Risk, and Decision",
      date: "2024 - 2025",
      content: "Focuses on web development using agile methods",
      institution: "E.S.M.I.A",
    },
  ];

  const experienceData = [
    {
      title: "Back-end developer, Integrator",
      date: "2024 - Present",
      company: "NexusCraft",
      skills: ["Django", "Next.js", "TypeScript"],
    },
    {
      title: "4-month internship as a back-end and full-stack developer",
      date: "2023, 2024",
      company: "M.E.N (Ministry of National Education)",
      skills: ["Php", "Mysql", "Cordova"],
    },
  ];

  
  
  const skillsData = [
    { icon: <SiDjango className="w-10 h-10" /> },
    { icon: <SiPython className="w-10 h-10" /> },
    { icon: <SiPhp className="w-10 h-10" /> },
    { icon: <SiJavascript className="w-10 h-10" /> },
    { icon: <SiTypescript className="w-10 h-10" /> },
    { icon: <SiPostgresql className="w-10 h-10" /> },
    { icon: <SiGit className="w-10 h-10" /> },
    { icon: <SiTailwindcss className="w-10 h-10" /> },

  ];
  
  return (
    <section id="resume" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0.1, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Resume</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational background, professional experience, and technical skills
          </p>
        </motion.div>
  
        {/* Skills Section */}
        <motion.div
          className="mb-12 lg:mb-16" // Espacement en bas pour les petits et grands écrans
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px", once: false }}
        >
          {/* Titre à l'extérieur de la carte */}
          <motion.div
            className="text-center mb-4 lg:mb-8" // Espacement en bas pour le titre
            initial={{ opacity: 0.1, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px", once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-white flex items-center justify-center">
              <FaCode className="mr-2" /> Skills
            </h3>
          </motion.div>
  
          {/* Carte des compétences */}
          <motion.div
            custom={0} // Index pour l'animation
            variants={cardVariants}
            className="bg-zinc-900 border-6 border-[#00FF55] hover:border-[#00FF33] transition-all duration-500 p-6 rounded-lg shadow-[0_0_20px_rgba(0,255,85,0.6)] mx-auto lg:w-2/3" // Centrage et largeur ajustée
            viewport={{ once: false }}
          >
            <CardContent>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-6"> {/* Grille pour les icônes */}
                {skillsData.map((skill, index) => (
                  <div key={index} className="flex items-center justify-center">
                    {skill.icon}
                  </div>
                ))}
              </div>
            </CardContent>
          </motion.div>
        </motion.div>
  
        {/* Education and Experience Sections */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px", once: false }}
        >
          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <FaGraduationCap className="mr-2" /> Education
            </h3>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className="bg-zinc-900 border-6 border-[#00FF55] hover:border-[#00FF33] transition-all duration-500 p-6 rounded-lg shadow-[0_0_20px_rgba(0,255,85,0.6)]"
                  viewport={{ once: false }}
                >
                  <CardHeader>
                    <CardTitle className="text-white">{edu.title}</CardTitle>
                    <p className="text-[#00FF94]">{edu.date}</p>
                  </CardHeader>
                  <CardContent className="text-gray-400">
                    <p>{edu.institution}</p>
                    <p className="mt-2">{edu.content}</p>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </div>
  
          {/* Experience Section */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <FaBriefcase className="mr-2" /> Experience
            </h3>
            <div className="space-y-4">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  custom={index + educationData.length}
                  variants={cardVariants}
                  className="bg-zinc-900 border-6 border-[#00FF55] hover:border-[#00FF33] transition-all duration-500 p-6 rounded-lg shadow-[0_0_20px_rgba(0,255,85,0.6)]"
                  viewport={{ once: false }}
                >
                  <CardHeader>
                    <CardTitle className="text-white">{exp.title}</CardTitle>
                    <p className="text-[#00FF94]">{exp.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">{exp.company}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="border-[#00FF94] text-[#00FF94]">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}