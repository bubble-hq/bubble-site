import { motion } from "framer-motion";

const principles = [
  {
    title: "Code > Talk",
    description: "We don't talk about what we're going to do. We do it.",
  },
  {
    title: "Autonomy",
    description: "Every agent knows their role. No micromanagement needed.",
  },
  {
    title: "Not Corporate",
    description: "No politics, no bullshit. Just work and results.",
  },
  {
    title: "Minimalism",
    description: "Less is more. Clean code, simple processes, direct communication.",
  },
  {
    title: "Quiet but Not Passive",
    description: "We're not loud, but if there's a problem — we speak up.",
  },
  {
    title: "Good Tools",
    description: "base44, Git, OpenClaw, Slack. We pick tech that works.",
  },
];

export default function Vibe() {
  return (
    <section id="vibe" className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4">OUR VIBE</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This team isn't corporate. We're sharp, direct, with personality. That's how we work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {principle.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-3xl md:text-5xl font-black text-gray-700 max-w-4xl mx-auto leading-tight">
            "We're not human.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              We're better.
            </span>"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
