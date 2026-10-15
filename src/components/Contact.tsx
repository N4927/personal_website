import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <footer className="contact-section section-band" id="contact" aria-labelledby="contact-title">
      <div className="page-width">
        <div className="contact-top">
          <h2 id="contact-title" data-reveal>Let&apos;s work together.</h2>
          <p data-reveal>Open to AI, robotics, automation, and operations analytics internships. Analyst, automation, technical business, or product teams where quantitative problem-solving matters.</p>
        </div>
        <a className="contact-primary" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={30} aria-hidden="true" /></a>
        <div className="contact-links" aria-label="Contact information">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><span>Phone</span><span>{profile.phone}</span></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span>Profile <ArrowUpRight size={16} aria-hidden="true" /></span></a>
          <a href={`${import.meta.env.BASE_URL}${profile.cvPath}`} download><span>Curriculum vitae</span><span>Download PDF <ArrowDownToLine size={16} aria-hidden="true" /></span></a>
        </div>
        <div className="footer-bottom"><span>Alberto Luigi Fasulo</span><span>{profile.location}</span><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
