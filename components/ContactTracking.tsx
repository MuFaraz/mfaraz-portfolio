"use client";
import { useEffect } from "react";
import { channelFromHref, trackLead } from "@/lib/contact";

// One listener for the whole site: any click on a WhatsApp, phone or email link is reported
// as a lead. Tag links with data-track="<where>" and optionally data-package="<package id>".
export default function ContactTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      if (!link) return;
      const channel = channelFromHref(link.getAttribute("href") ?? "");
      if (!channel) return;
      trackLead({ source: link.dataset.track ?? "link", channel, pkg: link.dataset.package });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
