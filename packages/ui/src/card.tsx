import { ReactNode } from "react";

export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title?: string;
  children: ReactNode;
  href?: string;
}) {
  return href ? (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo`}
      rel="noopener noreferrer"
      target="_blank"
    >
      {title && <h2>{title} <span>-&gt;</span></h2>}
      <p>{children}</p>
    </a>
  ) : (
    <div className={className}>
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </div>
  );
}
