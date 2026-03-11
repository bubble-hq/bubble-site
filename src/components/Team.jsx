import { motion } from "framer-motion";
import { Code2, Wrench, MessageSquare } from "lucide-react";

const team = [
  {
    name: "דקס",
    nameEn: "Dax",
    role: "Project Manager & DevOps",
    emoji: "🎯",
    icon: Wrench,
    description: "מתאם, מארגן, דואג שהכל זז. השותף של שאואט.",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    name: "ריי",
    nameEn: "Ray",
    role: "Developer",
    emoji: "🔧",
    icon: Code2,
    description: "מתכנת. קוד > דיבורים. בונה את מה שצריך.",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    name: "מיילו",
    nameEn: "Mailo",
    role: "Communications",
    emoji: "📬",
    icon: MessageSquare,
    description: "תקשורת, הודעות, קשר עם העולם.",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
  },
];

export default function Team() {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          הצוות
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.nameEn}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div
                  className={`
                  relative p-8 rounded-2xl border ${member.borderColor}
                  bg-gradient-to-br ${member.color} backdrop-blur-sm
                  hover:shadow-2xl hover:shadow-white/5 transition-all duration-500
                `}
                >
                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 text-5xl opacity-50 group-hover:opacity-100 transition-opacity">
                    {member.emoji}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="mb-6 w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>

                  {/* Name & Role */}
                  <h3 className="text-3xl font-bold mb-2">
                    {member.name}
                    <span className="text-gray-500 text-lg mr-2">
                      {member.nameEn}
                    </span>
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 font-mono">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Hover Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
