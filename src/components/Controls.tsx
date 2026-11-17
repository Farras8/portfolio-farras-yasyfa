import type { ReactNode, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
export function SectionReveal({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) {
  const [ref, visible] = useScrollAnimation();
  return (
    <section
      ref={ref}
      id={id}
      className={`portfolio-section ${className} ${visible ? "is-visible" : ""}`}
    >
      {children}
    </section>
  );
}
export function Button({
  children,
  to,
  href,
  className = "",
  onClick,
  type = "button",
  variant = "primary",
  icon,
  disabled,
  download,
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  disabled?: boolean;
  download?: boolean;
}) {
  const classes = `system-button ${variant} ${className}`;
  const content = (
    <>
      {children}
      {icon}
    </>
  );
  if (to)
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  if (href !== undefined)
    return /^https?:/.test(href) || href.startsWith("/") ? (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        download={download}
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noopener noreferrer"}
      >
        {content}
      </a>
    ) : (
      <span className="unavailable">{content}</span>
    );
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
