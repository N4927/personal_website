import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { QuadrotorDemo } from "../demos/QuadrotorDemo";
import { RoboticArmDemo } from "../demos/RoboticArmDemo";
import { RocketMpcDemo } from "../demos/RocketMpcDemo";
import { SchedulingDemo } from "../demos/SchedulingDemo";
import { WavvyDemo } from "../demos/WavvyDemo";
import { WiBodyDemo } from "../demos/WiBodyDemo";

function Demo({ project }: { project: Project }) {
  if (project.demo === "SchedulingDemo") return <SchedulingDemo />;
  if (project.demo === "RocketMpcDemo") return <RocketMpcDemo />;
  if (project.demo === "QuadrotorDemo") return <QuadrotorDemo />;
  if (project.demo === "WavvyDemo") return <WavvyDemo />;
  if (project.demo === "WiBodyDemo") return <WiBodyDemo />;
  return <RoboticArmDemo />;
}

export function ProjectShowcase() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((project) => project.id === activeId) ?? projects[0];

  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Interactive project portfolio</p>
        <h2>Projects that recruiters can inspect, not just read about.</h2>
      </div>

      <div className="project-layout">
        <div className="project-tabs" role="tablist" aria-label="Project demos">
          {projects.map((project) => (
            <button
              key={project.id}
              className={project.id === activeId ? "active" : ""}
              onClick={() => setActiveId(project.id)}
              role="tab"
              aria-selected={project.id === activeId}
            >
              <span>{project.kicker}</span>
              {project.title}
            </button>
          ))}
        </div>

        <article className="project-detail">
          <div className="project-copy">
            <p className="eyebrow">{active.period}</p>
            <h3>{active.title}</h3>
            <p>{active.summary}</p>
            <ul>
              {active.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="stack-list">
              {active.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="project-visual">
            <img src={`${import.meta.env.BASE_URL}${active.image}`} alt={`${active.title} source preview`} />
            <Demo project={active} />
          </div>
        </article>
      </div>

      <a className="source-note" href={`${import.meta.env.BASE_URL}${active.image}`} target="_blank" rel="noreferrer">
        <ExternalLink size={15} />
        Preview asset generated from source material
      </a>
    </section>
  );
}
