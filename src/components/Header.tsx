import { Download, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";

const navItems = ["Projects", "Profile", "Experience", "Contact"];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Alberto Fasulo home">
        AF
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <Linkedin size={18} />
        </a>
        <a className="icon-link" href={`mailto:${profile.email}`} aria-label="Email Alberto">
          <Mail size={18} />
        </a>
        <a className="button small" href={`${import.meta.env.BASE_URL}${profile.cvPath}`} download>
          <Download size={17} />
          CV
        </a>
      </div>
    </header>
  );
}
