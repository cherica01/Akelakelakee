"use client"
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";
import BinaryBackground from "@/components/BinaryBackground";
import AnimatedIntro from "@/components/AnimatedIntro";
import AnimatedProfileImage from "@/components/AnimatedProfile";
import { useTheme } from "@/components/ThemeContext";
import CountUp from "react-countup";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <BinaryBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2
              className="text-blue-800 text-3xl font-mono"
              style={{
                position: "relative",
                top: "60px",
                textShadow: "0 0 15px #00f7ff, 0 0 25px #00f7ff, 0 0 35px #00f7ff",
                color: "#00f7ff",
              }}
            >
              Back-end developer, Integrator
            </h2>

            <AnimatedIntro />

            <p className="text-gray-400 max-w-lg">
              I am a young developer specializing in creating elegant digital experiences, and I
              am proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                download="CHERICA-CV.pdf"
                className="bg-[#00FF94] text-black hover:bg-[#00FF94]/90 px-4 py-2 rounded"
              >
                DOWNLOAD CV
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/cherica01" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/riantsoa-cherica-88740a303"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://web.facebook.com/riantsoa.cherica.7/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:riantsoacherica01@gmail.com">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-[300px] h-[300px] mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-[#00FF94] animate-spin-slow" />
              <AnimatedProfileImage
                src="/images/Screenshot_20241207-213145~2.png"
                alt="Profile"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <h3 className="text-6xl font-bold text-white">
              <CountUp start={0} end={3} duration={6} />
            </h3>
            <p className="text-gray-400 text-sm">Years of experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-6xl font-bold text-white">
              <CountUp start={0} end={16} duration={4} />
            </h3>
            <p className="text-gray-400 text-sm">Projects completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-6xl font-bold text-white">
              <CountUp start={0} end={8} duration={4} />
            </h3>
            <p className="text-gray-400 text-sm">Technologies mastered</p>
          </div>
          <div className="text-center">
            <h3 className="text-6xl font-bold text-white">
              <CountUp start={0} end={500} duration={4} />
            </h3>
            <p className="text-gray-400 text-sm">Code commits</p>
          </div>
        </div>
      </div>
    </section>
  );
}
