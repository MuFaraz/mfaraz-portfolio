import type { Metadata, Viewport } from "next";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mfaraz.vercel.app";

const title = "Muhammad Faraz – Website & Web App Developer | Next.js · Laravel · Shopify · AI";
const description =
  "Need a website, online store or custom web app? Senior full-stack developer with 5+ years and 20+ live projects for businesses in the US, UK & Canada. Free consultation — reply within 24 hours.";

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
    title: "Muhammad Faraz – I build websites & web apps that bring you customers",
    description,
    type: "website",
    url: "/",
    siteName: "Muhammad Faraz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Faraz – Website & Web App Developer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#07070f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
