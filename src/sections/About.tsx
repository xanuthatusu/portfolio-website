export default function About() {
  return (
    <section id="about" className="py-24">
      <h2 className="mb-2 font-mono text-sm text-neutral-400">About</h2>
      <h3 className="text-2xl font-bold text-white">Background</h3>

      <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-neutral-400">
        <p>
          I&apos;m a software engineer focused on backend systems, distributed
          architecture, and building reliable infrastructure at scale.
        </p>
        <p>
          My recent work centers on designing multi-tenant SaaS platforms with
          event-driven architectures, primarily in Go. I care about clean APIs,
          observability, and systems that are easy to understand, maintain, and scale.
        </p>
      </div>
    </section>
  );
}
