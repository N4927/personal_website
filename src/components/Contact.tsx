import { Download, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2>Open to AI, robotics, automation, and operations analytics internships.</h2>
        <p>Analyst, automation, technical business, or product teams where quantitative problem-solving matters.</p>
      </div>
      <div className="contact-panel" aria-label="Contact information">
        <a href={`mailto:${profile.email}`}>
          <span>
            <Mail size={17} />
            Email
          </span>
          <strong>{profile.email}</strong>
        </a>
        <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
          <span>
            <Phone size={17} />
            Phone
          </span>
          <strong>{profile.phone}</strong>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <span>
            <Linkedin size={17} />
            LinkedIn
          </span>
          <strong>Profile</strong>
        </a>
        <a href={`${import.meta.env.BASE_URL}${profile.cvPath}`} download>
          <span>
            <Download size={17} />
            CV
          </span>
          <strong>Download PDF</strong>
        </a>
      </div>
    </section>
  );
}
