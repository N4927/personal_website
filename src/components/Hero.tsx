import { ArrowRight, Download, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Engineering portfolio</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button" href="#projects">
            Explore projects
            <ArrowRight size={18} />
          </a>
          <a className="button secondary" href={`${import.meta.env.BASE_URL}${profile.cvPath}`} download>
            <Download size={18} />
            Download CV
          </a>
          <a className="button ghost" href={`mailto:${profile.email}`}>
            <Mail size={18} />
            Email
          </a>
          <a className="button ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
      <aside className="hero-panel" aria-label="Profile summary">
        <div className="profile-portrait">
          <img src={`${import.meta.env.BASE_URL}profile/alberto-fasulo.jpg`} alt="Alberto Luigi Fasulo" />
        </div>
        <div className="hero-status">
          <span>ETH Zurich MSc</span>
          <strong>Control, ML, embedded systems</strong>
          <p>
            Electrical engineering profile with practical work across controls, ML, embedded firmware, and mobile
            systems.
          </p>
        </div>
        <div className="focus-grid">
          {profile.focus.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="location">
          <MapPin size={16} />
          {profile.location}
        </p>
      </aside>
    </section>
  );
}
