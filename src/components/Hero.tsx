import { Download, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">Personal portfolio / CV</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button" href={`${import.meta.env.BASE_URL}${profile.cvPath}`} download>
              <Download size={18} />
              Download CV
            </a>
            <a className="button secondary" href={`mailto:${profile.email}`}>
              <Mail size={18} />
              Contact
            </a>
            <a className="quiet-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="hero-media" aria-label="Profile summary">
          <img src={`${import.meta.env.BASE_URL}profile/alberto-fasulo.jpeg`} alt="Alberto Luigi Fasulo" />
          <div className="portrait-caption">
            <p>
              <MapPin size={15} />
              {profile.location}
            </p>
            <span>ETH Zurich MSc</span>
          </div>
        </aside>
      </div>

      <div className="hero-footer">
        <dl className="hero-meta">
          <div>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Current frame</dt>
            <dd>ETH Zurich MSc, ML, control, robotics, operations</dd>
          </div>
          <div>
            <dt>Seeking</dt>
            <dd>AI analyst, robotics, automation, operations analytics internships</dd>
          </div>
        </dl>
        <div className="focus-grid">
          {profile.focus.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
