"use client";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i:number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.6,
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

  return (
    <section id="resume" className="py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px", once: false }} // Relance à chaque vue
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Resume</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My educational background and professional experience
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px", once: false }} // Relance à chaque vue
        >
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Education</h3>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  className="bg-zinc-900 border-zinc-800 hover:border-[#00FF94] transition-colors p-6 rounded-lg"
                  viewport={{ once: false }} // Relance l'animation à chaque vue
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
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Experience</h3>
            <div className="space-y-4">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  custom={index + educationData.length}
                  variants={cardVariants}
                  className="bg-zinc-900 border-zinc-800 hover:border-[#00FF94] transition-colors p-6 rounded-lg"
                  viewport={{ once: false }} // Relance l'animation à chaque vue
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
