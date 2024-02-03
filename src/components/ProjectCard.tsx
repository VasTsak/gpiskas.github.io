import type { ProjectEntry } from "types";
import Datetime from "./Datetime";

export interface Props {
  href?: string;
  frontmatter: ProjectEntry["data"];
}

export default function ProjectCard({ href, frontmatter }: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    className: "text-lg line-clamp-2 font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        <h2 {...headerProps}>{title}</h2>
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p className="line-clamp-2">{description}</p>
    </li>
  );
}