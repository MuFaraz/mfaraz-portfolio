import type { Metadata } from "next";
import { Check, Clock } from "lucide-react";
import {
  PROFILE,
  PROJECTS,
  PACKAGES,
  PACKAGES_PRICE_NOTE,
  LANDING_PROJECT_IDS,
  LANDING_FAQS,
  LANDING_WHATSAPP_MESSAGE,
  formatPKR,
  packageWhatsAppMessage,
} from "@/data/portfolio";
import { whatsappLink } from "@/lib/contact";
import { ProjectCard } from "@/components/Projects";
import Testimonials, { FiverrSummary } from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// Landing page for paid ads (Pakistani small businesses). Not linked from the main navbar.
const title = "Business Website in 7 Days – Karachi & Pakistan | Muhammad Faraz";
const description = `Website for your clinic, salon, restaurant, shop or real estate business — live in 7 days. Packages from ${formatPKR(
  PACKAGES[0].priceFromPKR
)}. Online stores with COD and AI chatbots too. Chat on WhatsApp for a free quote.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/websites" },
  openGraph: {
    title: "Your business website, live in 7 days",
    description,
    type: "website",
    url: "/websites",
    siteName: "Muhammad Faraz",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your business website, live in 7 days",
    description,
  },
};

const BUSINESS_TYPES = ["Clinics", "Salons", "Restaurants", "Shops", "Real estate"];
const projects = LANDING_PROJECT_IDS.map((id) => PROJECTS.find((p) => p.id === id)).filter((p) => p !== undefined);
const stat = (label: string) => PROFILE.stats.find((s) => s.label === label)?.value;

function WhatsAppButton({ track, className = "", children }: { track: string; className?: string; children: React.ReactNode }) {
  return (
    <a
      href={whatsappLink(LANDING_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      data-track={track}
      className={`btn btn-whatsapp ${className}`}
    >
      <WhatsAppIcon size={20} />
      {children}
    </a>
  );
}

export default function WebsitesLanding() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <span className="font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
          Muhammad <span style={{ color: "var(--accent)" }}>Faraz</span>
        </span>
        <a
          href={whatsappLink(LANDING_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          data-track="websites-header"
          className="btn btn-whatsapp"
          style={{ padding: "0.5rem 0.9rem", fontSize: "0.85rem" }}
        >
          <WhatsAppIcon size={16} />
          WhatsApp
        </a>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-14 md:pt-16 md:pb-20 text-center relative">
          <span className="eyebrow">For businesses in Karachi &amp; across Pakistan</span>
          <h1
            className="font-bold leading-[1.1] mt-3 mb-5"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.1rem, 5.5vw, 3.3rem)", letterSpacing: "-0.025em" }}
          >
            Your business website, <span className="text-gradient">live in 7 days.</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed mx-auto mb-6" style={{ color: "var(--muted)", maxWidth: "560px" }}>
            A clean, mobile-friendly website that brings you WhatsApp messages and calls. Clear price. No tech headache.
            You talk directly to the developer.
          </p>

          <ul className="flex flex-wrap justify-center gap-2 mb-8">
            {BUSINESS_TYPES.map((b) => (
              <li
                key={b}
                className="text-xs px-3 py-1 rounded-full"
                style={{ border: "1px solid var(--border-strong)", color: "var(--text)" }}
              >
                {b}
              </li>
            ))}
          </ul>

          <WhatsAppButton track="websites-hero" className="w-full sm:w-auto">
            <span style={{ fontSize: "1.05rem" }}>Get a Free Quote on WhatsApp</span>
          </WhatsAppButton>
          <p className="text-sm mt-3" style={{ color: "var(--muted)" }}>
            Urdu mein baat karein — reply within 24 hours.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 mt-8 text-sm" style={{ color: "var(--muted)" }}>
            <FiverrSummary className="justify-center" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 mt-2 text-sm" style={{ color: "var(--muted)" }}>
            <span>{stat("Years experience")} years experience</span>
            <span>·</span>
            <span>{stat("Live projects")} live projects</span>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 md:py-20" style={{ borderTop: "1px solid var(--border)", background: "var(--bg2)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-8 text-center">
            <span className="eyebrow">Packages</span>
            <h2 className="section-title">Simple packages, clear prices</h2>
            <p className="text-sm md:text-base mt-3 mx-auto" style={{ color: "var(--muted)", maxWidth: "520px" }}>
              Tell me what you need and I&apos;ll send you a fixed quote before we start.
            </p>
            <p className="text-sm mt-2 mx-auto" style={{ color: "var(--text)", maxWidth: "520px" }}>
              {PACKAGES_PRICE_NOTE}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-xl p-6 flex flex-col gap-4"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div>
                  <h3 className="font-semibold text-xl" style={{ fontFamily: "var(--font-display)" }}>{pkg.name}</h3>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Best for: {pkg.bestFor}</p>
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>Starting from</p>
                  <p className="font-semibold text-3xl" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>{formatPKR(pkg.priceFromPKR)}</p>
                  <p className="text-sm mt-1.5 inline-flex items-center gap-1.5" style={{ color: "var(--muted)" }}>
                    <Clock size={14} aria-hidden="true" /> Ready in {pkg.delivery}
                  </p>
                </div>
                <ul className="flex flex-col gap-2 text-sm flex-1 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent3)" }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(packageWhatsAppMessage(pkg))}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="websites-package"
                  data-package={pkg.id}
                  className="btn btn-whatsapp w-full"
                >
                  <WhatsAppIcon />
                  Ask about this package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-16 md:py-20" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-8">
            <span className="eyebrow">Recent work</span>
            <h2 className="section-title">Real websites I&apos;ve built</h2>
            <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>
              Some were delivered as part of development teams. All names and brands belong to their owners.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ items={LANDING_FAQS} title="Common questions" />

      {/* Final call to action */}
      <section className="py-16 md:py-20" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="section-title">Ready to get your business online?</h2>
          <p className="text-sm md:text-base mt-3 mb-7" style={{ color: "var(--muted)" }}>
            Send a message on WhatsApp. Tell me about your business — I&apos;ll reply with ideas and a free quote.
          </p>
          <WhatsAppButton track="websites-final" className="w-full sm:w-auto">
            <span style={{ fontSize: "1.05rem" }}>Chat on WhatsApp</span>
          </WhatsAppButton>
          <p className="text-sm mt-3" style={{ color: "var(--muted)" }}>Urdu mein baat karein.</p>
        </div>
      </section>

      <Footer />
      <StickyContact message={LANDING_WHATSAPP_MESSAGE} label="Chat on WhatsApp" showCall={false} trackPrefix="websites-" />
    </main>
  );
}
