import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="system-footer">
      <Link to="/#home" className="brand">
        FARRAS<span className="accent">.</span>
      </Link>
      <span>� {new Date().getFullYear()} Muhammad Farras Yasyfa</span>
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          })
        }
      >
        BACK TO TOP
      </button>
    </footer>
  );
}
