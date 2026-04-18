"use client";
import { useState, useEffect } from "react";
import { PROFILE } from "@/data/portfolio";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,7,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
          Muhammad <span style={{ color: "var(--accent)" }}>Faraz</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
            style={{
              background: "var(--accent)",
              color: "#fff",
              fontFamily: "DM Sans, sans-serif",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            Hire Me ↗
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5" style={{ background: "var(--text)" }} />
            <span className="block w-5 h-0.5" style={{ background: "var(--text)" }} />
            <span className="block w-5 h-0.5" style={{ background: "var(--text)" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-3"
          style={{ background: "rgba(7,7,15,0.97)", borderBottom: "1px solid var(--border)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm py-2"
              style={{ color: "var(--muted)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-sm font-medium py-2 px-4 rounded-lg text-center mt-2"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Hire Me ↗
          </a>
        </div>
      )}
    </nav>
  );
}
