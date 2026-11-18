import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Github,
} from "lucide-react";
import { projects, type ProjectData } from "../Data/ProjectData";
import { Panel, ProjectOverview } from "./SystemUI";
const valid = (url: string) => /^https?:\/\//.test(url);
function Detail({ project: p }: { project: ProjectData }) {
  const [image, setImage] = useState(0);
  return (
    <article className="detail-page">
      <Link to="/#projects" className="detail-back">
        <ArrowLeft size={16} /> Back to Projects
      </Link>
      <div className="detail-heading">
        <span className="eyebrow">PROJECT ARCHIVE / {p.client}</span>
        <h1>
          {p.title.replace(/^Project:\s*/, "")}
          <span className="accent">.</span>
        </h1>
        <p>{p.subtitle}</p>
        <span className="status-badge">{p.status}</span>
      </div>
      {p.status === "Maintenance" && (
        <p className="maintenance">
          Maintenance �{" "}
          {p.maintenanceMessage ||
            "This project is currently under maintenance."}
        </p>
      )}
      {p.images.length ? (
        <Panel className="detail-gallery">
          <div>
            {p.images.length ? (
              <img
                src={p.images[image]}
                alt={`${p.title} screenshot ${image + 1}`}
              />
            ) : (
              <p>No screenshots available.</p>
            )}
          </div>
          {p.images.length > 1 && (
            <div className="gallery-controls">
              <button
                aria-label="Previous screenshot"
                onClick={() =>
                  setImage((image - 1 + p.images.length) % p.images.length)
                }
              >
                <ChevronLeft />
              </button>
              <span aria-live="polite">
                {image + 1} / {p.images.length}
              </span>
              <button
                aria-label="Next screenshot"
                onClick={() => setImage((image + 1) % p.images.length)}
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </Panel>
      ) : (
        <Panel>
          <ProjectOverview project={p} />
        </Panel>
      )}
      <div className="hero-actions detail-actions">
        {valid(p.liveUrl) ? (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="system-button primary"
          >
            View Live <ArrowUpRight size={18} />
          </a>
        ) : (
          <span className="unavailable">Demo unavailable</span>
        )}
        {valid(p.codeUrl) ? (
          <a
            href={p.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="system-button"
          >
            View Code <Github size={18} />
          </a>
        ) : (
          <span className="unavailable">Code unavailable</span>
        )}
      </div>
      <div className="detail-columns">
        <div>
          <Panel>
            <span className="eyebrow">01 / OVERVIEW</span>
            <h2>The project</h2>
            <p>{p.longDescription}</p>
          </Panel>
          <Panel>
            <span className="eyebrow">02 / MY CONTRIBUTIONS</span>
            <h2>What I worked on</h2>
            <ul>
              {p.myJobDesk.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Panel>
          <Panel>
            <span className="eyebrow">03 / KEY FEATURES</span>
            <h2>Built to do more</h2>
            <ul>
              {p.features.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Panel>
        </div>
        <aside>
          <Panel>
            <span className="eyebrow">TECH STACK</span>
            <div className="tech-tags">
              {p.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Panel>
          <Panel>
            <span className="eyebrow">PROJECT INFORMATION</span>
            <dl>
              {[
                ["Client", p.client],
                ["Duration", p.duration],
                ["Team", p.team],
                ["Status", p.status],
                ["Completion", p.completionDate],
                ...(p.role ? [["My Role", p.role]] : []),
              ].map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </Panel>
        </aside>
      </div>
    </article>
  );
}
export default function ProjectDetailPage() {
  const { id } = useParams();
  const p = projects.find((p) => p.id === id);
  return p ? (
    <Detail key={p.id} project={p} />
  ) : (
    <div className="not-found">
      <span className="eyebrow">SYSTEM / 404</span>
      <h1>Project not found.</h1>
      <p>This project is not in the archive.</p>
      <Link className="system-button primary" to="/#projects">
        Return to Projects <ArrowLeft size={16} />
      </Link>
    </div>
  );
}
