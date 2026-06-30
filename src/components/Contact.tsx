import { Download, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Open to technical engineering opportunities.</h2>
        <p>
          Best fit: robotics, automation, embedded systems, control, wireless sensing, ML engineering, or technical
          product work with real implementation responsibility.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button" href={`mailto:${profile.email}`}>
          <Mail size={18} />
          {profile.email}
        </a>
        <a className="button secondary" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
          <Phone size={18} />
          {profile.phone}
        </a>
        <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a className="button ghost" href={`${import.meta.env.BASE_URL}${profile.cvPath}`} download>
          <Download size={18} />
          Download CV
        </a>
      </div>
    </section>
  );
}
