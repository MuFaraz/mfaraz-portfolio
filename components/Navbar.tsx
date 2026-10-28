"use client";
import { useState, useEffect } from "react";
import { whatsappLink } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const links = [
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || menuOpen ? "rgba(7,7,15,0.92)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
          Muhammad <span style={{ color: "var(--accent)" }}>Faraz</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm transition-colors duration-200 hover:text-[var(--text)]" style={{ color: "var(--muted)" }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-track="navbar"
            className="btn btn-whatsapp hidden sm:inline-flex"
            style={{ padding: "0.55rem 1rem", fontSize: "0.85rem" }}
          >
            <WhatsAppIcon size={16} />
            Get a Free Quote
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="block w-5 h-0.5" style={{ background: "var(--text)" }} />
            <span className="block w-5 h-0.5" style={{ background: "var(--text)" }} />
            <span className="block w-5 h-0.5" style={{ background: "var(--text)" }} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-1" style={{ borderBottom: "1px solid var(--border)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-base py-2.5" style={{ color: "var(--muted)" }} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-track="mobile-menu"
            className="btn btn-whatsapp mt-3"
          >
            <WhatsAppIcon />
            Get a Free Quote on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
