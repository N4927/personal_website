import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="hero page-width" id="top" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <h1 id="hero-title"><span>Alberto Luigi</span><span>Fasulo.</span></h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">Explore work <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="text-action" href={`${import.meta.env.BASE_URL}${profile.cvPath}`} download>
              Download CV <ArrowDownToLine size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-window"><img src={`${import.meta.env.BASE_URL}profile/alberto-fasulo.jpeg`} alt="Portrait of Alberto Luigi Fasulo" /></div>
          <figcaption><span>Alberto Fasulo</span><span>{profile.location}</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
