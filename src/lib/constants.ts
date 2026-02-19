export const SITE = {
  name: "Anthony George",
  title: "Software Engineer",
  description:
    "Engineering-focused portfolio showcasing backend systems, distributed architecture, and SaaS design.",
  url: "https://anthonygeorge.dev",
  github: "https://github.com/xanuthatusu",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Multi-Tenant SaaS Backend",
    description:
      "Event-driven backend in Go supporting multi-tenant isolation, async job processing, and horizontally scalable APIs.",
    tags: ["Go", "PostgreSQL", "AWS"],
  },
  {
    title: "Infrastructure & Deployment Pipeline",
    description:
      "Automated CI/CD with GitHub Actions, containerized builds, and AWS deployment with zero-downtime rollouts.",
    tags: ["AWS", "GitHub Actions", "Terraform", "Docker"],
  },
  {
    title: "Portfolio Website",
    description:
      "This site — built with Next.js, TypeScript, and Tailwind CSS. Deployed via GitHub Actions to AWS.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
