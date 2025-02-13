'use client';

import { Code, Globe, Smartphone } from 'lucide-react';
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0.1, y: 50 }, // Opacity starts at 0.1 to avoid total invisibility
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",  // A smoother easing function to avoid a hard "pop" effect
    },
  }),
};

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0.1, y: -20 }} // Set opacity to 0.1 initially
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer a wide range of development services to help bring your digital ideas to life
          </p>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
        >
          {[ // Array of service data to map over
            { icon: <Code className="h-12 w-12 text-[#00FF94] mb-4" />, title: "Web Development", description: "Creating responsive and dynamic web applications using modern frameworks and technologies" },
            { icon: <Globe className="h-12 w-12 text-[#00FF94] mb-4" />, title: "SEO Optimization", description: "Improving website visibility and search engine rankings through optimization" },
            { icon: <Smartphone className="h-12 w-12 text-[#00FF94] mb-4" />, title: "Mobile Development", description: "Building cross-platform mobile applications with React Native" },
          ].map((service, index) => (
            <motion.div
              key={index}
              custom={index} // Custom index for stagger effect
              variants={cardVariants}
              className="bg-zinc-900 border-6 border-[#00FF55] hover:border-[#00FF44] transition-all duration-500 mx-auto p-6 rounded-lg group shadow-[0_0_20px_rgba(0,255,85,0.7)]"
            >
              <CardHeader>
                {service.icon}
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  {service.description}
                </CardDescription>
              </CardContent>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
