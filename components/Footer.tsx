import { PROFILE } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      className="py-8 text-center"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <p className="text-xs mt-1" style={{ color: "rgba(120,120,150,0.5)" }}>
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
