'use client'

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export function Work() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "IDE JAVA ",
      description: "A simple IDE for beginners with simplified error management and the use of the Gemini Flask 1.5 API for displaying errors, solutions, and recommendations.",
      image: "/images/ide_java.png",
      badges: ["Django", "Gemini", "JavaScript"],
      github: "https://github.com/cherica01/IDE_JAVA",
      liveLink: "https://cherica.pythonanywhere.com/"
    },
    {
      id: 2,
      title: "Library Management",
      description: "A library management system for admin and client; management of books, loans, and reservations.",
      image: "/images/Bib.png",
      badges: ["Php", "Html&css", "Sql"],
      github: "https://github.com/cherica01/gestion_bibliotheque",
    },
    {
      id: 3,
      title: "E-commerce",
      description: "A simple e-commerce project for displaying products with the use of the Gemini Flask API to optimize searches.",
      image: "/images/E-commerce.png?height=400&width=600",
      badges: ["Django", "Gemini", 'Sql'],
      github: "https://github.com/cherica01/Recherche_Intelligence",
    },
    {
      id: 4,
      title: "Management event",
      description: "It is an event management system with advanced features for organizers and agents, such as messaging systems, reminders, agents, and notifications.",
      image: "/images/event.png",
      badges: ["Django", "Tailwindcss", "Sql"],
      github: "https://github.com/cherica01/Gestion_evenement",
    },
    {
      id: 5,
      title: "Travel Agency",
      description: "This project is an interactive web application for managing the services of a travel agency. It includes features for hotel management, navigation between the different services offered, and searching for hotels with customized criteria.",
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

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Recent Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent projects and collaborations
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-zinc-900 border-zinc-800 overflow-hidden group cursor-pointer"
              onClick={() => setExpandedCard(expandedCard === project.id ? null : project.id)}
            >
              <CardContent className="p-0 relative h-[300px]">
              <Image
  src={project.image || "/placeholder.svg"}
  alt={project.title}
  layout="responsive"
  width={600}  // Définir une largeur fixe
  height={400} // Définir une hauteur fixe
  objectFit="cover"
/>

                <div 
                  className={`absolute inset-0 bg-black/80 flex flex-col justify-end p-6 transition-transform duration-300 ${
                    expandedCard === project.id ? 'translate-y-0' : 'translate-y-[calc(100%-4rem)]'
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedCard === project.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.badges.map((badge, index) => (
                        <Badge key={index} variant="outline" className="border-[#00FF94] text-[#00FF94]">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#00FF94] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#00FF94] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

