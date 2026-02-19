import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="mb-2 font-mono text-sm text-neutral-400">Work</h2>
      <h3 className="text-2xl font-bold text-white">Projects</h3>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 transition-colors hover:border-neutral-700"
          >
            <h4 className="text-lg font-semibold text-white">
              {project.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-800 px-3 py-1 font-mono text-xs text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
