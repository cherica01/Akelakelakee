import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Resume } from "@/components/resume";
import { Work } from "@/components/work";
import { Contact } from "@/components/contact";
import Footer from "@/components/footer"; // Importation du footer

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Resume />
      <Work />
      <Contact />
      <Footer /> {/* Ajout du footer ici */}
    </main>
  );
}
