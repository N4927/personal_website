import { ArrowDownToLine } from "lucide-react";
import { profile } from "../data/profile";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Profile", href: "#profile" },
  { label: "Timeline", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner page-width">
          <a className="brand" href="#top" aria-label="Alberto Fasulo, back to top">
            Alberto Fasulo<span className="brand-mark" aria-hidden="true"> / AF</span>
          </a>
          <nav aria-label="Primary navigation">
            {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          </nav>
          <a className="header-cv" href={`${import.meta.env.BASE_URL}${profile.cvPath}`} download>
            <ArrowDownToLine size={16} aria-hidden="true" /> CV
          </a>
        </div>
      </header>
    </>
  );
}
