import { ReactNode } from "react";

type ExternalLinkProps = {
  link: string;
  aria: string;
  children?: ReactNode | ReactNode[];
};

function ExternalLink({ link, aria, children }: ExternalLinkProps) {
  return (
    <a href={link} aria-label={aria} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default ExternalLink;
