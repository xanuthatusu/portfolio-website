import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="pb-24 pt-16">
      <p className="mb-3 font-mono text-sm text-neutral-400">Hi, my name is</p>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {SITE.name}
      </h1>
      <h2 className="mt-2 text-2xl font-semibold text-neutral-400 sm:text-3xl">
        {SITE.title}
      </h2>
      <p className="mt-6 max-w-xl leading-relaxed text-neutral-400">
        {SITE.description}
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200"
        >
          View Projects
        </a>
        <a
          href={SITE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-neutral-700 px-5 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
