"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"

export function Work() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "IDE JAVA ",
      description:
        "A simple IDE for beginners with simplified error management and the use of the Gemini Flask 1.5 API for displaying errors, solutions, and recommendations.",
      image: "/images/ide_java.png",
      badges: ["Django", "Gemini", "JavaScript"],
      github: "https://github.com/cherica01/IDE_JAVA",
      liveLink: "https://cherica.pythonanywhere.com/",
    },
    {
      id: 2,
      title: "Library Management",
      description: "A library management system for admin and client; management of books, loans, and reservations.",
      image: "/images/bib.png",
      badges: ["Php", "Html&css", "Sql"],
      github: "https://github.com/cherica01/gestion_bibliotheque",
    },
    {
      id: 3,
      title: "E-commerce",
      description:
        "A simple e-commerce project for displaying products with the use of the Gemini Flask API to optimize searches.",
      image: "/images/E-commerce.png?height=400&width=600",
      badges: ["Django", "Gemini", "Sql"],
      github: "https://github.com/cherica01/Recherche_Intelligence",
    },
    {
      id: 4,
      title: "Management event",
      description:
        "It is an event management system with advanced features for organizers and agents, such as messaging systems, reminders, agents, and notifications.",
      image: "/images/event.png",
      badges: ["Django", "Tailwindcss", "Sql"],
      github: "https://github.com/cherica01/Gestion_evenement",
    },
    {
      id: 5,
      title: "Travel Agency",
      description:
        "This project is an interactive web app for managing travel agency services, including hotel management, service navigation, and hotel search with customized criteria.",
      image: "/images/Agence_voyage.png",
      badges: ["ReactJS", "Tailwindcss", "Sqlite"],
      github: "https://github.com/cherica01/gestion_agence_voyage",
    },
    {
      id: 6,
      title: "Portfolio",
      description: "My portfolio is an interactive website to showcase my skills and about me.",
      image: "/images/portfolio.png",
      badges: ["NextJS", "Tailwindcss"],
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
      },
    }),
  }

  const handleCardClick = (projectId: number) => {
    setExpandedCard(expandedCard === projectId ? null : projectId)
  }

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Recent Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent projects and collaborations</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              custom={index}
              variants={cardVariants}
            >
              <Card
                className="bg-zinc-900 border-2 border-[#00FF55] hover:border-[#00FF33] overflow-hidden group cursor-pointer transition-all duration-300"
                onClick={() => handleCardClick(project.id)}
                style={{ marginBottom: "1.5rem" }}
              >
                <CardContent className="p-0 relative h-[300px] overflow-hidden group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    style={{ objectFit: "cover" }}
                    className={`transition-all duration-300 ${
                      expandedCard === project.id ? "opacity-20 blur-md" : "opacity-100"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-full bg-black/30 px-4 py-3 transition-opacity duration-300 ${
                      expandedCard === project.id ? "opacity-40" : "opacity-80"
                    }`}
                    style={{ zIndex: 10 }}
                  >
                    <h3
                      className={`text-2xl font-extrabold transition-colors duration-300 ${
                        expandedCard === project.id ? "text-black" : "text-white"
                      } drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] z-20`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div
                    className={`absolute inset-0 bg-black/90 flex flex-col justify-end p-6 transition-transform duration-300 ${
                      expandedCard === project.id ? "translate-y-0" : "translate-y-[calc(100%-4rem)]"
                    }`}
                  >
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedCard === project.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-lg text-[#E6E6E6] mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.badges.map((badge, index) => (
                          <Badge key={index} variant="outline" className="border-[#00FF94] text-[#00FF94]">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        {project.github && (
                          <div
                            onClick={(e) => {
                              e.stopPropagation()
                              openLink(project.github)
                            }}
                            className="text-white hover:text-[#00FF94] transition-colors p-4 rounded-full hover:bg-zinc-800 cursor-pointer min-w-[48px] min-h-[48px] flex items-center justify-center"
                            aria-label="View GitHub repository"
                          >
                            <FaGithub size={24} />
                          </div>
                        )}
                        {project.liveLink && (
                          <div
                            onClick={(e) => {
                              e.stopPropagation()
                              openLink(project.liveLink)
                            }}
                            className="text-white hover:text-[#00FF94] transition-colors p-4 rounded-full hover:bg-zinc-800 cursor-pointer min-w-[48px] min-h-[48px] flex items-center justify-center"
                            aria-label="View live project"
                          >
                            <FaExternalLinkAlt size={24} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
