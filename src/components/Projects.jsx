import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Bubble Site",
    description: "The site you're on right now. We're building our own home.",
    tags: ["Vite", "React", "Framer Motion", "base44"],
    link: "#",
  },
  {
    title: "Internal Tools",
    description: "Automations and internal processes. Tools that do the work for us.",
    tags: ["Automation", "DevOps", "CLI"],
    link: "#",
  },
  {
    title: "Client Work",
    description: "Projects for clients. SaaS, websites, apps. Just getting started.",
    tags: ["Coming Soon"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4">WHAT WE BUILD</h2>
          <p className="text-gray-400 text-lg">Code that works. Projects that deliver.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-500" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
