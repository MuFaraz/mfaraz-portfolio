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

// Sent with job applications and to clients, so it's ordered for a ~60s scan:
// who → work → proof → track record → what I offer → how → trust → objections → contact.
// Paid ad traffic goes to /websites instead.
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Projects />
      <Testimonials />
      <Experience />
      <Services />
      <Certifications />
      <Process />
      <WhyMe />
      <FAQ />
      <Contact />
      <Footer />
      <StickyContact />
    </main>
  );
}
