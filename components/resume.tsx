"use client"

import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase, FaCode, FaCertificate, FaAward, FaHandsHelping } from "react-icons/fa"
import {
  SiDjango,
  SiPython,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiGit,
  SiTailwindcss,
  SiC,
  SiHtml5,
  SiReact,
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
      title: "Licence in Computer Science, Risk, and Decision",
      date: "2022 - 2025",
      content: "Focuses on web development using agile methods, specialized in Python and Django",
      institution: "E.S.M.I.A (École Supérieure de Management et de l'Informatique Appliquée)",
    },
    {
      title: "Computer Science Training",
      date: "2023 - Present",
      content: "CISCO License preparation in Computer Science",
      institution: "CISCO Ambohimahasoa",
    },
  ]

  const certificationData = [
    {
      title: "Responsive Web Design",
      date: "2023 - 2024",
      content: "Showcasing expertise in creating adaptable and user-friendly web interfaces.",
      institution: "FreeCodeCamp",
    },
    {
      title: "Javascript Algorithms and Data Structures",
      date: "2025",
      content:
        "Advanced certification covering JavaScript programming fundamentals, algorithms, and data structure implementation.",
      institution: "FreeCodeCamp",
    },
    {
      title: "Prompt Engineering - Generative AI for Marketing",
      date: "2025",
      content: "Expertise in leveraging AI tools and prompt engineering for marketing applications and content generation.",
      institution: "Coursera",
    },
  ]

  const attestationData = [
    {
      title: "Learn Coding Through Fun (S'initier au codage en s'amusant)",
      date: "2024",
      content:
        "Engaging introduction to programming concepts and development fundamentals.",
      institution: "Orange Digital Center (O.D.C)",
    },
    {
      title: "Master Web Scraping Techniques",
      date: "2025",
      content:
        "Comprehensive training on web scraping techniques, data extraction methods, and automation tools for web data collection.",
      institution: "Orange Digital Center (O.D.C)",
    },
    {
      title: "Transform Your Vision Into a Startup",
      date: "2025",
      content:
        "Entrepreneurship training focused on transforming ideas into viable startup ventures with business development strategies.",
      institution: "Orange Digital Center (O.D.C)",
    },
    {
      title: "IT Troubleshooting and Maintenance",
      date: "2024",
      content:
        "Technical support training covering computer maintenance, troubleshooting, and repair techniques.",
      institution: "Orange Digital Center (O.D.C)",
    },
  ]

  const experienceData = [
    {
      title: "Back-end Developer & Integrator",
      date: "2024 - Present",
      company: "NVA (New Vision Agency)",
      skills: ["Django", "Next.js", "TypeScript", "AI Integration"],
      description: "3-month internship developing intelligent event and agent management applications",
    },
    {
      title: "Full-Stack Developer",
      date: "May 2023 - May 2024",
      company: "M.E.N (Ministry of National Education)",
      skills: ["PHP", "MySQL", "Cordova"],
      description: "Developed library visitor account management systems and web applications",
    },
    {
      title: "Mobile App Developer",
      date: "May 2024 - June 2024",
      company: "M.E.N (Ministry of National Education)",
      skills: ["Mobile Development", "Task Management"],
      description: "2-month internship: developed mobile application for managing teacher weekly tasks",
    },
    {
      title: "WordPress Volunteer Developer",
      date: "2025 - Present",
      company: "Zara Hasina",
      skills: ["WordPress", "Web Maintenance"],
      description: "Volunteer work maintaining and updating WordPress website",
    },
  ]

  const skillsData = [
    { icon: <SiDjango className="w-10 h-10 text-green-500" />, label: "Django" },
    { icon: <SiPython className="w-10 h-10 text-blue-500" />, label: "Python" },
    { icon: <SiPhp className="w-10 h-10 text-purple-500" />, label: "PHP" },
    { icon: <SiJavascript className="w-10 h-10 text-yellow-500" />, label: "JavaScript" },
    { icon: <SiTypescript className="w-10 h-10 text-blue-600" />, label: "TypeScript" },
    { icon: <SiPostgresql className="w-10 h-10 text-blue-400" />, label: "PostgreSQL" },
    { icon: <SiGit className="w-10 h-10 text-orange-500" />, label: "Git" },
    { icon: <SiReact className="w-10 h-10 text-cyan-400" />, label: "React" },
    { icon: <SiHtml5 className="w-10 h-10 text-orange-600" />, label: "HTML5" },
    { icon: <SiTailwindcss className="w-10 h-10 text-cyan-500" />, label: "Tailwind" },
    { icon: <SiC className="w-10 h-10 text-gray-600" />, label: "C" },
  ]

  const engagementData = [
    {
      title: "Community Developer Advocate",
      description: "Active participant in developer communities, sharing knowledge and best practices",
    },
    {
      title: "Open Source Contributor",
      description: "Contributing to open-source projects and sharing code solutions with the developer community",
    },
    {
      title: "Tech Mentorship",
      description: "Mentoring junior developers and helping them grow their technical skills",
    },
  ]

  return (
    <section id="resume" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0.1, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Profile</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Full-Stack Developer with expertise in Python, Django, and modern web technologies. Specialized in building scalable applications with a focus on AI integration and clean code practices.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px", once: false }}
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0.1, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px", once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <FaCode className="text-[#00FF94]" /> Technical Skills
            </h3>
            <p className="text-gray-400 mt-2">Proficient technologies and tools</p>
          </motion.div>

          <motion.div
            custom={0}
            variants={cardVariants}
            className="bg-zinc-900 border-2 border-[#00FF94] transition-all duration-500 p-8 rounded-lg shadow-lg shadow-[#00FF94]/20"
            viewport={{ once: false }}
          >
            <CardContent>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-6">
                {skillsData.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg hover:bg-zinc-800 transition-all"
                    whileHover={{ scale: 1.15, y: -5 }}
                  >
                    {skill.icon}
                    <span className="text-xs text-gray-300 text-center font-medium">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </motion.div>
        </motion.div>



        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Education & Experience */}
          <div className="space-y-8">
            {/* Education Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px", once: false }}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                <FaGraduationCap className="text-[#00FF94]" /> Education
              </h3>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    className="bg-zinc-900 border-2 border-[#00FF94] hover:border-[#00FF55] hover:shadow-lg hover:shadow-[#00FF94]/30 transition-all duration-300 p-6 rounded-lg"
                    viewport={{ once: false }}
                  >
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-white text-lg">{edu.title}</CardTitle>
                      <p className="text-[#00FF94]">{edu.date}</p>
                    </CardHeader>
                    <CardContent className="text-gray-400 px-0 pb-0">
                      <p className="font-semibold">{edu.institution}</p>
                      <p className="mt-2">{edu.content}</p>
                    </CardContent>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px", once: false }}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                <FaBriefcase className="text-[#00FF94]" /> Experience
              </h3>
              <div className="space-y-4">
                {experienceData.map((exp, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={cardVariants}
                    className="bg-zinc-900 border-2 border-[#00FF94] hover:border-[#00FF55] hover:shadow-lg hover:shadow-[#00FF94]/30 transition-all duration-300 p-6 rounded-lg"
                    viewport={{ once: false }}
                  >
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-white text-lg">{exp.title}</CardTitle>
                      <p className="text-[#00FF94]">{exp.date}</p>
                    </CardHeader>
                    <CardContent className="px-0 pb-0">
                      <p className="text-gray-400 mb-2 font-semibold">{exp.company}</p>
                      {exp.description && <p className="text-gray-500 text-sm mb-3">{exp.description}</p>}
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

          {/* Middle Column - Certifications */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px", once: false }}>
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
              <FaCertificate className="text-[#00FF94]" /> Certifications
            </h3>
            <div className="space-y-4">
              {certificationData.map((cert, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className="bg-zinc-900 border-2 border-[#00FF94] hover:border-[#00FF55] hover:shadow-lg hover:shadow-[#00FF94]/30 transition-all duration-300 p-6 rounded-lg"
                  viewport={{ once: false }}
                >
                  <CardHeader className="px-0 pt-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-green-600 text-white text-xs">CERTIFICATE</Badge>
                    </div>
                    <CardTitle className="text-white text-lg">{cert.title}</CardTitle>
                    <p className="text-[#00FF94]">{cert.date}</p>
                  </CardHeader>
                  <CardContent className="text-gray-400 px-0 pb-0">
                    <p className="font-semibold">{cert.institution}</p>
                    <p className="mt-2">{cert.content}</p>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Attestations */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ margin: "-100px", once: false }}>
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
              <FaAward className="text-[#00FF94]" /> Training
            </h3>
            <div className="space-y-4">
              {attestationData.map((attestation, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className="bg-zinc-900 border-2 border-[#00FF94] hover:border-[#00FF55] hover:shadow-lg hover:shadow-[#00FF94]/30 transition-all duration-300 p-6 rounded-lg"
                  viewport={{ once: false }}
                >
                  <CardHeader className="px-0 pt-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-blue-600 text-white text-xs">TRAINING CERTIFICATE</Badge>
                    </div>
                    <CardTitle className="text-white text-lg">{attestation.title}</CardTitle>
                    <p className="text-[#00FF94]">{attestation.date}</p>
                  </CardHeader>
                  <CardContent className="text-gray-400 px-0 pb-0">
                    <p className="font-semibold">{attestation.institution}</p>
                    <p className="mt-2">{attestation.content}</p>
                  </CardContent>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Engagement Section */}
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px", once: false }}
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0.1, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px", once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <FaHandsHelping className="text-[#00FF94]" /> Community Engagement
            </h3>
            <p className="text-gray-400 mt-2">Contributing to the developer community</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementData.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-2 border-[#00FF94] hover:border-[#00FF55] hover:shadow-lg hover:shadow-[#00FF94]/30 transition-all duration-300 p-6 rounded-lg"
                viewport={{ once: false }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00FF94] bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-1">
                    <FaHandsHelping className="text-[#00FF94]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
