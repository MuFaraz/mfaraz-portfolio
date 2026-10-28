"use client";
import { useEffect, useState } from "react";
import { whatsappLink, phoneLink } from "@/lib/contact";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// Always-reachable contact: floating WhatsApp bubble on desktop, bottom action bar on mobile.
export default function StickyContact({
  message,
  label = "Get a Free Quote",
  showCall = true,
  trackPrefix = "",
}: {
  message?: string;
  label?: string;
  showCall?: boolean;
  trackPrefix?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        data-track={`${trackPrefix}floating-button`}
        aria-label="Chat on WhatsApp"
        className="wa-ping hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full items-center justify-center shadow-xl transition-transform hover:scale-110"
        style={{ background: "#25d366", color: "#fff", isolation: "isolate" }}
      >
        <WhatsAppIcon size={30} />
      </a>

      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 grid ${showCall ? "grid-cols-[1fr_auto]" : "grid-cols-1"} gap-2 p-3 transition-transform duration-300`}
        style={{
          background: "rgba(7,7,15,0.95)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid var(--border)",
          transform: visible ? "translateY(0)" : "translateY(110%)",
          paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))",
        }}
      >
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          data-track={`${trackPrefix}mobile-bar`}
          className="btn btn-whatsapp"
          style={{ padding: "0.8rem" }}
        >
          <WhatsAppIcon />
          {label}
        </a>
        {showCall && (
          <a
            href={phoneLink}
            data-track={`${trackPrefix}mobile-bar-call`}
            className="btn btn-ghost"
            style={{ padding: "0.8rem 1.1rem" }}
            aria-label="Call"
          >
            📞 Call
          </a>
        )}
      </div>
    </>
  );
}
