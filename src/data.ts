export const links: Record<string, string> = {
  gmail: "mailto:silicoflare@gmail.com",
  github: "https://github.com/silicoflare",
  linkedin: "https://in.linkedin.com/in/suraj-b-m",
};

export interface Project {
  name: string;
  description: string;
  repo: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    name: "nexgen-portal",
    description:
      "A portal for participant check-in, food coupons and logging snacks during NexGen 2.0",
    repo: "silicoflare/nexgen-portal",
    tech: ["nextdotjs", "mongodb"],
  },
  {
    name: "rapport",
    description:
      "An end-to-end encrypted messaging app written in Next.js. involving several layers of encryption",
    repo: "silicoflare/rapport",
    tech: ["nextdotjs", "mysql"],
  },
  {
    name: "pesu-tix",
    description:
      "An event ticketing system tailored for PES University, integrating ID Card verification for secure event access.",
    repo: "silicoflare/pesu-tix",
    tech: ["nextdotjs", "trpc", "postgresql"],
  },
  {
    name: "confidant",
    description: "A CLI tool to create secure password-protected vaults",
    repo: "silicoflare/confidant",
    tech: ["typescript"],
  },
  {
    name: "safe",
    description:
      "A CLI tool to encrypt and decrypt files to share with contacts",
    repo: "silicoflare/safe-cli",
    tech: ["typescript"],
  },
  {
    name: "vroomify",
    description:
      "An enterprise resource planning [ERP] software for an automobile industry, to manage orders, models, inventory and refills",
    repo: "Samprith002/vroomify",
    tech: ["nextdotjs", "fastapi", "mongodb"],
  },
  {
    name: "docker-hadoop",
    description: "A Docker image containing necessary tools for Big Data",
    repo: "silicoflare/docker-hadoop",
    tech: ["docker"],
  },
  {
    name: "silicodrive",
    description: "A simple file storage and synchronization platform",
    repo: "silicoflare/silicodrive",
    tech: ["nextdotjs", "supabase"],
  },
];
