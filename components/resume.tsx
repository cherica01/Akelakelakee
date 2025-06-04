"use client"

import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase, FaCode, FaCertificate } from "react-icons/fa"
import {
  SiDjango,
  SiPython,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiGit,
  SiTailwindcss,
} from "react-icons/si"

const cardVariants = {
  hidden: { opacity: 0.1, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
}

export function Resume() {
  const educationData = [
    {
      title: "Bachelor's degree (Bac+3) in Computer Science, Risk, and Decision",
      date: "2024 - 2025",
      content: "Focuses on web development using agile methods",
      institution: "E.S.M.I.A",
    },
  ]

  const certificationData = [
    {
      title: "Responsive Web Design Certification",
      date: "2024 - 2025",
      content: "Showcasing expertise in creating adaptable and user-friendly web interfaces.",
      institution: "Freecodecamp",
    },
    // Space for 3 more certifications
    {
      title: "Certification Title",
      date: "Year",
      content: "Description of the certification",
      institution: "Institution",
    },
    {
      title: "Certification Title",
      date: "Year",
      content: "Description of the certification",
      institution: "Institution",
    },
    {
      title: "Certification Title",
      date: "Year",
      content: "Description of the certification",
      institution: "Institution",
    },
  ]

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
  ]

  const skillsData = [
    { icon: <SiDjango className="w-10 h-10" /> },
    { icon: <SiPython className="w-10 h-10" /> },
    { icon: <SiPhp className="w-10 h-10" /> },
    { icon: <SiJavascript className="w-10 h-10" /> },
    { icon: <SiTypescript className="w-10 h-10" /> },
    { icon: <SiPostgresql className="w-10 h-10" /> },
    { icon: <SiGit className="w-10 h-10" /> },
    { icon: <SiTailwindcss className="w-10 h-10" /> },
  ]

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
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px", once: false }}
        >
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0.1, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px", once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-white flex items-center justify-center">
              <FaCode className="mr-2" /> Skills
            </h3>
          </motion.div>

          <motion.div
            custom={0}
            variants={cardVariants}
            className="bg-zinc-900 border-2 border-[#00FF55] transition-all duration-500 p-6 rounded-lg mx-auto lg:w-2/3"
            viewport={{ once: false }}
          >
            <CardContent>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
                {skillsData.map((skill, index) => (
                  <div key={index} className="flex items-center justify-center">
                    {skill.icon}
                  </div>
                ))}
              </div>
            </CardContent>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Education Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px", once: false }}>
              <h3 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
                <FaGraduationCap className="mr-2" /> Education
              </h3>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    className="bg-zinc-900 border-2 border-[#00FF55] transition-all duration-500 p-6 rounded-lg"
                    viewport={{ once: false }}
                  >
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-white">{edu.title}</CardTitle>
                      <p className="text-[#00FF94]">{edu.date}</p>
                    </CardHeader>
                    <CardContent className="text-gray-400 px-0 pb-0">
                      <p>{edu.institution}</p>
                      <p className="mt-2">{edu.content}</p>
                    </CardContent>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px", once: false }}>
              <h3 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
                <FaBriefcase className="mr-2" /> Experience
              </h3>
              <div className="space-y-4">
                {experienceData.map((exp, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    className="bg-zinc-900 border-2 border-[#00FF55] transition-all duration-500 p-6 rounded-lg"
                    viewport={{ once: false }}
                  >
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-white">{exp.title}</CardTitle>
                      <p className="text-[#00FF94]">{exp.date}</p>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
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
            </motion.div>
          </div>

          {/* Right Column - Certifications */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px", once: false }}>
            <h3 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <FaCertificate className="mr-2" /> Certifications
            </h3>
            <div className="space-y-4">
              {certificationData.map((cert, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className="bg-zinc-900 border-2 border-[#00FF55] transition-all duration-500 p-6 rounded-lg"
                  viewport={{ once: false }}
                >
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-white">{cert.title}</CardTitle>
                    <p className="text-[#00FF94]">{cert.date}</p>
                  </CardHeader>
                  <CardContent className="text-gray-400 px-0 pb-0">
                    <p>{cert.institution}</p>
                    <p className="mt-2">{cert.content}</p>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
