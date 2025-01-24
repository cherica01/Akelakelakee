import { Suspense } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Resume } from "@/components/resume"
import { Work } from "@/components/work"
import { Contact } from "@/components/contact"
import Footer from "@/components/footer"
import LoadingAnimation from "@/components/LoadingAnimation"

function Content() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Resume />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <Content />
    </Suspense>
  )
}

