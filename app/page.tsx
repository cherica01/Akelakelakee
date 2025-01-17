import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Resume } from "@/components/resume"
import { Work } from "@/components/work"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Resume />
      <Work />
      <Contact />
    </main>
  )
}

