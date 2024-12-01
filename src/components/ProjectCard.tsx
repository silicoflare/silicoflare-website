import { Project } from "../data";

export default function ProjectCard({
  name,
  tech,
  description,
  repo,
}: Project) {
  return (
    <a
      href={`https://github.com/${repo}`}
      target="_blank"
      className="card bg-base-300 w-full shadow-xl hover:scale-105 transition ease-in-out duration-200"
    >
      <div className="card-body text-sm text-justify md:text-left md:text-base">
        <h2 className="card-title flex items-center justify-between text-secondary">
          {name}
          <div className="flex items-center gap-2 text-neutral-content">
            {tech.map((x) => (
              <img
                key={x}
                height="20"
                width="20"
                src={`https://cdn.simpleicons.org/${x}/57C6F3`}
                className="text-neutral-content fill-neutral-content stroke-neutral-content"
                title={x}
              />
            ))}
          </div>
        </h2>
        <p>{description}</p>
      </div>
    </a>
  );
}
