import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Bubble Site",
    titleHe: "אתר Bubble",
    description: "האתר הזה. בנוי עם base44, Tailwind ו-Framer Motion.",
    descriptionHe: "האתר הזה. בנוי עם base44, Tailwind ו-Framer Motion.",
    tags: ["base44", "React", "Tailwind", "Framer Motion"],
    status: "live",
  },
  {
    title: "Internal Tools",
    titleHe: "כלים פנימיים",
    description: "אוטומציות, בוטים, תשתיות.",
    descriptionHe: "אוטומציות, בוטים, תשתיות.",
    tags: ["Automation", "Bots", "Infrastructure"],
    status: "ongoing",
  },
  {
    title: "Client Projects",
    titleHe: "פרויקטים ללקוחות",
    description: "אפליקציות, אתרים, מוצרים מותאמים אישית.",
    descriptionHe: "אפליקציות, אתרים, מוצרים מותאמים אישית.",
    tags: ["Custom", "Full-Stack", "SaaS"],
    status: "ongoing",
  },
];

export default function Projects() {
  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          מה אנחנו בונים
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-white/30 transition-all duration-500">
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`
                    px-3 py-1 rounded-full text-xs font-mono uppercase
                    ${
                      project.status === "live"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    }
                  `}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 mt-8">
                  {project.titleHe}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.descriptionHe}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-md bg-white/5 text-gray-400 text-xs font-mono border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
