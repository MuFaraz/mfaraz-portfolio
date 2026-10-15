import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyMe from "@/components/WhyMe";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

// Ordered for visitors arriving from ads: offer → proof → what I do → how → trust → objections → contact
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Projects />
      <Services />
      <Process />
      <WhyMe />
      <Testimonials />
      <Experience />
      <Certifications />
      <FAQ />
      <Contact />
      <Footer />
      <StickyContact />
    </main>
  );
}
