import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const frame = requestAnimationFrame(() =>
        document
          .getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView(),
      );
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  useEffect(() => {
    if (!("IntersectionObserver" in window) || location.pathname !== "/")
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, [location.pathname]);
  return (
    <header className="system-header">
      <div className="nav-wrap">
        <Link to="/#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-icon">F.</span> FARRAS <small>/ DEV</small>
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-nav"
          className={open ? "open" : ""}
          aria-label="Main navigation"
        >
          {["Projects", "Experience", "About", "Skills", "Contact"].map(
            (label) => (
              <Link
                to={`/#${label.toLowerCase()}`}
                key={label}
                onClick={() => setOpen(false)}
                aria-current={
                  location.pathname === "/" && active === label.toLowerCase()
                    ? "location"
                    : undefined
                }
              >
                {label}
              </Link>
            ),
          )}
          <a
            className="nav-resume"
            href="/CV - Muhammad Farras Yasyfa.pdf"
            download
          >
            Resume <Download size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
}
