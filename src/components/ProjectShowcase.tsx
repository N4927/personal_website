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

function ProjectFigure({ project, index }: { project: Project; index: number }) {
  const imageUrl = `${import.meta.env.BASE_URL}${project.image}`;
  return (
    <figure className="project-figure" data-reveal>
      <img src={imageUrl} alt={project.imageAlt ?? `Illustrated technical overview of ${project.title}`} loading={index === 0 ? "eager" : "lazy"} />
    </figure>
  );
}

function ProjectCopy({ project }: { project: Project }) {
  return (
    <div className="project-copy" data-reveal>
      <h3>{project.title}</h3>
      <p className="project-meta"><span>{project.kicker}</span><span>{project.period}</span></p>
      <p className="project-summary">{project.summary}</p>
      <div className="project-outcomes">
        <h4>What I built</h4>
        <ul>{project.impact.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <p className="project-stack"><span>Tools</span>{project.stack.join(" · ")}</p>
      <ProjectLinks project={project} />
    </div>
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
          {projects.map((project, index) => (
            <article className={`project ${index === 0 ? "project-featured" : ""} ${project.imageCaption ? "project-has-figure" : "project-text-only"}`} data-project={project.id} id={project.id} key={project.id}>
              <ProjectCopy project={project} />
              {project.imageCaption ? <ProjectFigure project={project} index={index} /> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
