import { PROFILE, WHATSAPP_DEFAULT_MESSAGE } from "@/data/portfolio";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function emailLink(subject: string, body = "") {
  return `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const phoneLink = `tel:${PROFILE.phone.replace(/\s/g, "")}`;

export type ContactChannel = "whatsapp" | "phone" | "email";

export function channelFromHref(href: string): ContactChannel | null {
  if (href.startsWith("https://wa.me/")) return "whatsapp";
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("mailto:")) return "email";
  return null;
}

// Reports a contact click as a conversion to Meta Pixel ("Lead") and GA4 ("contact_whatsapp" /
// "contact_phone" / "contact_email"). Each tracker is a no-op when it isn't configured.
// Links are tracked automatically by <ContactTracking /> — only call this directly for
// contacts that don't go through an <a> click (e.g. the contact form's window.open).
export function trackLead({ source, channel, pkg }: { source: string; channel: ContactChannel; pkg?: string }) {
  if (typeof window === "undefined") return;
  const page = window.location.pathname;

  window.fbq?.("track", "Lead", {
    content_name: source,
    content_category: channel,
    page,
    ...(pkg && { package: pkg }),
  });

  window.gtag?.("event", `contact_${channel}`, {
    source,
    page_path: page,
    ...(pkg && { package: pkg }),
  });
}
