import { education } from "../data/education";
import { experience } from "../data/experience";
import { skillGroups } from "../data/skills";
import { profile } from "../data/profile";

export function ProfileSections() {
  return (
    <>
      <section className="profile-section section-band" id="profile" aria-labelledby="profile-title">
        <div className="page-width">
          <div className="section-intro"><h2 id="profile-title" data-reveal>About</h2><p data-reveal>Curious about how complex systems work, and how to make them better.</p></div>
          <div className="profile-content">
            <div className="profile-copy" data-reveal>
              <p className="profile-lead">I move from theory to practice: understand the problem, model it, and test the solution.</p>
              <p className="profile-focus"><span>Interests</span>{profile.focus.join(" / ")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section section-band" id="experience" aria-labelledby="timeline-title">
        <div className="page-width">
          <div className="timeline-intro"><h2 id="timeline-title" data-reveal>Experience & education</h2><p data-reveal>Teaching, technical training, and the academic foundation behind the work.</p></div>
          <div className="timeline-columns">
            <div className="timeline-group" data-reveal>
              <h3>Experience</h3>
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.title}-${item.period}`}>
                  <time>{item.period}</time>
                  <div><h4>{item.title}</h4><p className="timeline-organization">{item.organization}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
                </article>
              ))}
            </div>
            <div className="timeline-group" data-reveal>
              <h3>Education</h3>
              {education.map((item) => (
                <article className="timeline-item" key={item.degree}>
                  <time>{item.period}</time>
                  <div><h4>{item.institution}</h4><p className="timeline-organization">{item.degree}</p><p>{item.detail}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section-band" aria-labelledby="skills-title">
        <div className="page-width">
          <div className="section-intro"><h2 id="skills-title" data-reveal>Capabilities</h2><p data-reveal>Methods, tools, and languages used across the work.</p></div>
          <div className="skill-index">
            {skillGroups.map((group) => (
              <div className="skill-row" key={group.label} data-reveal><h3>{group.label}</h3><p>{group.skills.join(" / ")}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
