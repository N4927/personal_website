import { education } from "../data/education";
import { experience } from "../data/experience";
import { skillGroups } from "../data/skills";

export function ProfileSections() {
  return (
    <>
      <section className="section profile-section" id="profile">
        <div className="section-heading">
          <p className="eyebrow">Technical profile</p>
          <h2>Electrical engineering foundation with software depth.</h2>
        </div>
        <div className="profile-grid">
          <div className="profile-card">
            <h3>What I want to work on</h3>
            <p>
              I am interested in applied engineering work across robotics, intelligent systems, embedded software,
              automation, wireless sensing, and technical software tools.
            </p>
          </div>
          <div className="profile-card">
            <h3>How I work</h3>
            <p>
              I like projects where modeling, implementation, and verification meet: define the system, build the
              prototype, measure behavior, and iterate from evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section timeline-section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience and education</p>
          <h2>ETH training, teaching work, and engineering projects.</h2>
        </div>
        <div className="timeline-grid">
          <div>
            <h3>Experience</h3>
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.title}-${item.period}`}>
                <span>{item.period}</span>
                <h4>{item.title}</h4>
                <p>{item.organization}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div>
            <h3>Education</h3>
            {education.map((item) => (
              <article className="timeline-item" key={item.degree}>
                <span>{item.period}</span>
                <h4>{item.institution}</h4>
                <p>{item.degree}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="section-heading compact">
          <p className="eyebrow">Skills</p>
          <h2>Practical toolset across code, hardware, and systems.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.label}>
              <h3>{group.label}</h3>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
