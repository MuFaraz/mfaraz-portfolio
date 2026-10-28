import type { Metadata, Viewport } from "next";
import MetaPixel from "@/components/MetaPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ContactTracking from "@/components/ContactTracking";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mfaraz.vercel.app";

const title = "Muhammad Faraz – Senior Full-Stack & AI Developer | Next.js · NestJS · Laravel · Shopify";
const description =
  "Senior full-stack & AI developer in Karachi with 5+ years and 20+ live projects for clients in the US, UK & Canada. Next.js, NestJS, Laravel, Shopify and Claude/OpenAI integrations. Rated 5.0 on Fiverr.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "hire web developer",
    "freelance full-stack developer",
    "website developer Pakistan",
    "Next.js developer",
    "Laravel developer",
    "Shopify developer",
    "WordPress developer",
    "AI chatbot developer",
    "custom web app development",
  ],
  authors: [{ name: "Muhammad Faraz" }],
  icons: { icon: "/icon.png" },
  openGraph: {
    title: "Muhammad Faraz – Senior Full-Stack & AI Developer",
    description,
    type: "website",
    url: "/",
    siteName: "Muhammad Faraz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Faraz – Senior Full-Stack & AI Developer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        {children}
        <ContactTracking />
        <MetaPixel />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
