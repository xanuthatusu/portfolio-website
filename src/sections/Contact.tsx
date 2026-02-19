import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <h2 className="mb-2 font-mono text-sm text-neutral-400">Contact</h2>
      <h3 className="text-2xl font-bold text-white">Get In Touch</h3>

      <p className="mt-6 max-w-lg leading-relaxed text-neutral-400">
        I&apos;m always open to discussing new projects, architecture
        challenges, or opportunities. Feel free to reach out.
      </p>

      <a
      href={`mailto:pategeorge12@gmail.com`} // TODO: setup hello@anthonygeorge.dev
        className="mt-8 inline-block rounded-md border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
      >
        Say Hello
      </a>
    </section>
  );
}
