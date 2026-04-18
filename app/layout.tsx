import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Faraz – Full-Stack Engineer | Next.js · NestJS · Laravel",
  description:
    "5+ years Full-Stack Software Engineer specializing in Next.js, NestJS, Laravel, React & AI integrations. Available for freelance on Fiverr & Upwork.",
  keywords: ["full-stack developer", "Next.js developer", "NestJS", "Laravel", "AI integration", "ChatGPT API", "freelance developer Pakistan"],
  authors: [{ name: "Muhammad Faraz" }],
  openGraph: {
    title: "Muhammad Faraz – Full-Stack Engineer",
    description: "Next.js · NestJS · Laravel · AI Integrations. Available for freelance.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
