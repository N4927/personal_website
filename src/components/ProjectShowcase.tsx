import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/projects";

function ProjectLinks({ project }: { project: Project }) {
  if (!project.links?.length && !project.imageCaption) return null;
  return (
    <div className="project-links">
      {project.links?.map((link) => {
        const href = link.url.startsWith("http") ? link.url : `${import.meta.env.BASE_URL}${link.url}`;
        return <a href={href} key={link.url} target="_blank" rel="noopener noreferrer">{link.label} <ArrowUpRight size={16} aria-hidden="true" /></a>;
      })}
      {project.imageCaption ? <a href={`${import.meta.env.BASE_URL}${project.image}`} target="_blank" rel="noopener noreferrer">{project.imageCaption} <ArrowUpRight size={16} aria-hidden="true" /></a> : null}
    </div>
  );
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="project-entry" id={project.id}>
      <details>
        <summary className="project-row">
          <span className="project-context"><span>{project.period}</span><span>{project.kicker}</span></span>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <span className="project-toggle" aria-hidden="true"><span className="toggle-plus">+</span><span className="toggle-minus">-</span></span>
        </summary>
        <div className="project-detail">
          <div className="project-outcomes">
            <h4>What I built</h4>
            <ul>{project.impact.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="project-resources">
            <p className="project-stack"><span>Tools</span>{project.stack.join(" · ")}</p>
            <ProjectLinks project={project} />
          </div>
        </div>
      </details>
    </article>
  );
}

export function ProjectShowcase() {
  return (
    <section className="projects-section section-band" id="projects" aria-labelledby="projects-title">
      <div className="page-width">
        <div className="section-intro">
          <h2 id="projects-title" data-reveal>Selected work</h2>
          <p data-reveal>Modeling constraints, testing systems, and turning complexity into decisions.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => <ProjectEntry project={project} key={project.id} />)}
        </div>
      </div>
    </section>
  );
}
