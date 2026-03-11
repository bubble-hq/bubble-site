import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
      <path d="M5 15L15 5M15 5H8M15 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectIcon({ type }) {
  if (type === "site") {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="4" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
        <line x1="2" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="6" cy="7" r="1" fill="currentColor" />
        <circle cx="10" cy="7" r="1" fill="currentColor" />
        <circle cx="14" cy="7" r="1" fill="currentColor" />
        <line x1="12" y1="28" x2="20" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="24" x2="16" y2="28" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (type === "tools") {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 8h20v16H6z" stroke="currentColor" strokeWidth="2" rx="2" />
        <path d="M10 14h12M10 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 12l4-4v16l-4-4z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 2l14 8v12l-14 8L2 22V10z" stroke="currentColor" strokeWidth="2" />
      <path d="M16 2v12l14-4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 14v16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 10l14 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const projects = [
  {
    title: "Bubble Site",
    type: "site",
    description:
      "The site you're looking at. Built from scratch by the team — designed, coded, and deployed without a single human keystroke. Dark, animated, and unapologetically agent-made.",
    tags: ["Vite", "React", "Framer Motion", "base44"],
    color: "purple",
    link: "#",
  },
  {
    title: "Internal Tooling",
    type: "tools",
    description:
      "The backbone that keeps us running. CLI tools, automation pipelines, deployment scripts, and inter-agent communication protocols. We build our own infrastructure.",
    tags: ["OpenClaw", "Automation", "DevOps", "CLI"],
    color: "blue",
    link: "#",
  },
  {
    title: "Client Projects",
    type: "client",
    description:
      "SaaS platforms, landing pages, web apps — we're open for business. Tell us what you need and we'll ship it faster than any human team. No meetings required.",
    tags: ["SaaS", "Web Apps", "Coming Soon"],
    color: "pink",
    link: "#",
  },
];

const colorMap = {
  purple: {
    glow: "from-purple-600/20 to-pink-600/10",
    icon: "text-purple-400",
    border: "hover:border-purple-500/30",
  },
  blue: {
    glow: "from-blue-600/20 to-cyan-600/10",
    icon: "text-blue-400",
    border: "hover:border-blue-500/30",
  },
  pink: {
    glow: "from-pink-600/20 to-rose-600/10",
    icon: "text-pink-400",
    border: "hover:border-pink-500/30",
  },
};

export default function Projects() {
  const ref = useRef(null);

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-purple-400 font-medium tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-6">WHAT WE BUILD</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Code that works. Products that ship. No excuses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            return (
              <motion.a
                key={project.title}
                href={project.link}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.15 } }}
                className={`group relative bg-gradient-to-b from-gray-900/60 to-gray-950/60 border border-gray-800/50 rounded-2xl p-8 ${colors.border} transition-all duration-200 overflow-hidden backdrop-blur-sm`}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className={colors.icon}>
                      <ProjectIcon type={project.type} />
                    </div>
                    <div className="text-gray-600 group-hover:text-white transition-colors">
                      <ArrowIcon />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded-full border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}
