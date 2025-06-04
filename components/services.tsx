"use client"

import { Code, Database, Globe, Server, Layers, Palette } from "lucide-react"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

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

export function Services() {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-[#00FF94] mb-4" />,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks like Tailwind CSS",
    },
    {
      icon: <Server className="h-12 w-12 text-[#00FF94] mb-4" />,
      title: "Backend Development",
      description:
        "Building robust server-side applications and APIs using Django  with secure authentication and data management",
    },
   
 
    {
      icon: <Globe className="h-12 w-12 text-[#00FF94] mb-4" />,
      title: "Web Application Development",
      description:
        "Creating dynamic web applications with modern frameworks, focusing on performance, scalability, and user experience",
    },
  
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0.1, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive web development services to bring your digital projects to life
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="bg-zinc-900 border-2 border-[#00FF55] hover:border-[#00FF33] transition-all duration-500 mx-auto p-6 rounded-lg group"
            >
              <CardHeader className="px-0 pt-0">
                {service.icon}
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardContent>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
