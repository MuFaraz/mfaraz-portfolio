import { PROFILE, WHATSAPP_DEFAULT_MESSAGE } from "@/data/portfolio";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function emailLink(subject: string, body = "") {
  return `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Reports a conversion to the Meta (Facebook) Pixel so ad campaigns can optimise for leads.
// No-op when the pixel isn't configured.
export function trackLead(source: string, channel: "whatsapp" | "call" | "email" | "form" = "whatsapp") {
  if (typeof window === "undefined" || !window.fbq) return;
  // Direct chats/calls are "Contact"; filled-in enquiries are "Lead" — optimise ads for either in Ads Manager.
  window.fbq("track", channel === "whatsapp" || channel === "call" ? "Contact" : "Lead", {
    content_name: source,
    content_category: channel,
  });
}
