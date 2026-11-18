import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Code2,
} from "lucide-react";
import { projects, type ProjectData } from "../Data/ProjectData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`system-panel ${className}`}>{children}</div>;
}
export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">
          {(
            {
              "Selected projects": "01",
              Experience: "02",
              "About Me": "03",
              Skills: "04",
              Education: "05",
              "Certificates & Achievements": "06",
              "Contact Me": "07",
            } as Record<string, string>
          )[title] || "SYSTEM"}{" "}
          / {title.toUpperCase()}
        </span>
        <h2>
          {title}
          <span className="accent">.</span>
        </h2>
      </div>
      <p>{subtitle}</p>
    </div>
  );
}
const roles = [
  "Full-Stack Web Developer",
  "Back-End Developer",
  "Cloud Enthusiast",
];

function TypingRole() {
  const [text, setText] = useState("");

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout>;

    function start() {
      clearTimeout(timer);
      if (motion.matches) return;
      let role = 0;
      let length = 0;
      let deleting = false;

      function tick() {
        length += deleting ? -1 : 1;
        setText(roles[role].slice(0, length));
        let delay = deleting ? 45 : 95;
        if (!deleting && length === roles[role].length) {
          deleting = true;
          delay = 3000;
        } else if (deleting && length === 0) {
          deleting = false;
          role = (role + 1) % roles.length;
          delay = 350;
        }
        timer = setTimeout(tick, delay);
      }

      timer = setTimeout(tick, 95);
    }

    start();
    motion.addEventListener("change", start);
    return () => {
      clearTimeout(timer);
      motion.removeEventListener("change", start);
    };
  }, []);

  return (
    <p className="hero-role typing-role">
      <span className="role-static">{roles[0]}</span>
      <span className="role-animated" aria-hidden="true">
        {text}
        <span className="typing-cursor" />
      </span>
    </p>
  );
}

export function Home() {
  return (
    <section id="home" className="hero">
      <div>
        <span className="eyebrow">DEVELOPER PORTFOLIO / 2026</span>
        <h1>
          Muhammad
          <br />
          Farras <span className="gradient-text">Yasyfa.</span>
        </h1>
        <TypingRole />
        <p className="hero-description">
          Building thoughtful web experiences, reliable backend systems, and
          cloud-powered solutions.
        </p>
        <div className="hero-actions">
          <a className="system-button primary" href="#projects">
            View Projects <ArrowUpRight size={18} />
          </a>
          <a className="system-button" href="#contact">
            Contact Me <ArrowRight size={18} />
          </a>
        </div>
        <div className="download-links">
          <a href="/CV - Muhammad Farras Yasyfa.pdf" download>
            <Download size={14} /> Resume <small>PDF</small>
          </a>
          <span>/</span>
          <a href="/Portfolio - Muhammad Farras Yasyfa.docx" download>
            Portfolio <small>DOCX</small>
          </a>
        </div>
        <div className="social-links">
          <a href="https://github.com/Farras8" target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-farras-yasyfa-89a0b12a6"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
      <div className="profile-wrap">
        <div className="aura" />
        <Panel className="profile-panel">
          <div className="system-bar">
            <span>SYSTEM / PROFILE</span>
            <span>01</span>
          </div>
          <div className="portrait">
            <img src="/optimized/Photo.webp" alt="Muhammad Farras Yasyfa" />
            <div>
              FARRAS YASYFA<small>WEB DEVELOPER</small>
            </div>
          </div>
          <div className="profile-info">
            <span className="eyebrow">DEVELOPER PROFILE</span>
            <p>
              Backend <span>/</span> Web <span>/</span> Cloud
            </p>
            <div className="tech-tags">
              {["Go", "Laravel", "React", "PostgreSQL"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </Panel>
        <p className="profile-caption">[ ALWAYS LEARNING. ALWAYS BUILDING. ]</p>
      </div>
      <a className="scroll-cue" href="#projects">
        SCROLL TO EXPLORE
      </a>
    </section>
  );
}
const featuredIds = [
  "finance-form-system-010",
  "palm-fund-manager-011",
  "dsmart-013",
];
function ProjectReveal({
  children,
  index,
  featured = false,
}: {
  children: ReactNode;
  index: number;
  featured?: boolean;
}) {
  const [ref, visible] = useScrollAnimation();
  return (
    <article
      ref={ref}
      className={`work-entry ${featured ? "work-entry-featured" : ""} ${visible ? "work-entry-visible" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 70}ms` }}
    >
      {children}
    </article>
  );
}

export function ProjectOverview({ project }: { project: ProjectData }) {
  return (
    <div className="project-overview">
      <Code2 size={32} aria-hidden="true" />
      <span className="eyebrow">PROJECT OVERVIEW</span>
      <p>{project.title.replace(/^Project:\s*/, "")}</p>
      <small>{project.subtitle}</small>
      <div className="tech-tags">
        {project.technologies.slice(0, 3).map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  p,
  large = false,
}: {
  p: ProjectData;
  large?: boolean;
}) {
  const name = p.title.replace(/^Project:\s*/, "");
  return (
    <Panel className={`work-card ${large ? "work-featured" : ""}`}>
      <Link
        className="work-image"
        to={`/projects/${encodeURIComponent(p.id)}`}
        aria-label={`View ${name}`}
      >
        {p.images.length ? (
          <img
            src={
              ["Finance1.png", "Dsimfoniku1.jpeg", "JobMate1.png"].some(
                (file) => p.images[0]?.endsWith(file),
              )
                ? "/optimized/" +
                  p.images[0]
                    .split("/")
                    .pop()
                    ?.replace(/\.[^.]+$/, ".webp")
                : p.images[0]
            }
            alt={`${name} preview`}
            loading="lazy"
          />
        ) : (
          <ProjectOverview project={p} />
        )}
        {p.images.length > 0 && (
          <span>{large ? "FEATURED PROJECT / 01" : "SELECTED WORK"}</span>
        )}
      </Link>
      <div className="work-body">
        <span className="eyebrow">{p.client}</span>
        <div className="work-title">
          <h3>{name}</h3>
          <span className="status-badge">{p.status}</span>
        </div>
        {p.role && (
          <span className="role-badge" aria-label={`My role: ${p.role}`}>
            {p.role
              .replace(
                "Backend Developer with Frontend Support",
                "Backend \u00b7 Frontend Support",
              )
              .replace("Full-Stack Developer", "Full-Stack")
              .replace(" Developer", "")}
          </span>
        )}
        <p className="work-summary">{p.description}</p>
        <div className="tech-tags">
          {p.technologies.slice(0, 4).map((t) => (
            <span key={t}>{t}</span>
          ))}
          {p.technologies.length > 4 && (
            <span>+{p.technologies.length - 4}</span>
          )}
        </div>
        <div className="work-actions">
          <Link to={`/projects/${encodeURIComponent(p.id)}`}>
            Explore Project <ArrowUpRight size={16} />
          </Link>
          {/^https?:/.test(p.liveUrl) ? (
            <a href={p.liveUrl} target="_blank" rel="noreferrer">
              Live demo
            </a>
          ) : (
            <small>Demo unavailable</small>
          )}
        </div>
      </div>
    </Panel>
  );
}
export function Projects() {
  const [all, setAll] = useState(false);
  const featured = featuredIds.flatMap(
    (id) => projects.find((p) => p.id === id) ?? [],
  );
  return (
    <section id="projects" className="portfolio-section">
      <SectionHeading
        title="Selected projects"
        subtitle="Real problems. Practical solutions. A selection of things I've built."
      />
      <div className="work-grid">
        {featured.map((p, i) => (
          <ProjectReveal key={p.id} index={i} featured={i === 0}>
            <ProjectCard p={p} large={i === 0} />
          </ProjectReveal>
        ))}
        {all &&
          projects
            .filter((p) => !featuredIds.includes(p.id))
            .map((p, i) => (
              <ProjectReveal key={p.id} index={i + featured.length}>
                <ProjectCard p={p} />
              </ProjectReveal>
            ))}
      </div>
      <div className="section-end">
        <span>
          {all ? projects.length : 3} / {projects.length} PROJECTS
        </span>
        <button
          className="system-button"
          onClick={() => {
            setAll(!all);
            if (all) document.getElementById("projects")?.scrollIntoView();
          }}
        >
          {all ? "Show Fewer" : "View All Projects"} <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
