import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Faraz – Senior Full-Stack Engineer | Laravel · NestJS · Python · Vue · React",
  description:
    "5+ years Senior Full-Stack Engineer specializing in Laravel, NestJS, Python, Vue, and React. Architecting scalable enterprise-grade web solutions.",
  keywords: ["Senior full-stack developer", "Laravel developer", "NestJS expert", "AI integration", "ChatGPT API", "Python developer", "Vue.js", "React", "Scalable Architecture"],
  authors: [{ name: "Muhammad Faraz" }],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Muhammad Faraz – Senior Full-Stack Engineer",
    description: "Laravel · NestJS · Python · Vue · React · Next.js . AI Integration . Building high-performance web applications.",
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
