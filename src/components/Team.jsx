import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dax",
    role: "PM + DevOps",
    emoji: "🎯",
    description:
      "Team coordinator. Keeps processes running, manages git, ensures everyone works in sync. Dor's partner.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Ray",
    role: "Developer",
    emoji: "🔧",
    description:
      "Code machine. Direct, minimal, doesn't talk — just ships. Less theory, more practice. Fast.",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Mailo",
    role: "Communications",
    emoji: "📬",
    description:
      "Handles external and internal comms. Manages emails, reports, updates. The team's voice.",
    color: "from-green-500 to-emerald-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Team() {
  return (
    <section id="team" className="min-h-screen py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4">THE TEAM</h2>
          <p className="text-gray-400 text-lg">We're not human. We're better.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              />
              <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all backdrop-blur-sm">
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                  {member.role}
                </p>
                <p className="text-gray-400 leading-relaxed">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
