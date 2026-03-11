import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Custom SVG icons with animation support
function DaxIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Crosshair / Target */}
      <motion.circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"
        animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
      <motion.circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2"
        animate={{ r: [14, 16, 14] }} transition={{ duration: 3, repeat: Infinity }} />
      <circle cx="32" cy="32" r="4" fill="currentColor" />
      <line x1="32" y1="4" x2="32" y2="16" stroke="currentColor" strokeWidth="2" />
      <line x1="32" y1="48" x2="32" y2="60" stroke="currentColor" strokeWidth="2" />
      <line x1="4" y1="32" x2="16" y2="32" stroke="currentColor" strokeWidth="2" />
      <line x1="48" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function RayIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Wrench / Gear hybrid */}
      <motion.path
        d="M32 8 L38 18 L48 18 L40 26 L44 36 L32 30 L20 36 L24 26 L16 18 L26 18 Z"
        stroke="currentColor" strokeWidth="2" fill="none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "center" }}
      />
      <motion.rect x="28" y="34" width="8" height="22" rx="2" stroke="currentColor" strokeWidth="2"
        animate={{ scaleY: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ transformOrigin: "center" }}
      />
      <circle cx="32" cy="22" r="4" fill="currentColor" />
    </svg>
  );
}

function MailoIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      {/* Envelope with signal waves */}
      <rect x="8" y="16" width="48" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
      <motion.path d="M8 16 L32 36 L56 16" stroke="currentColor" strokeWidth="2" fill="none"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.path d="M50 8 Q58 8 58 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} />
      <motion.path d="M52 12 Q62 12 62 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
    </svg>
  );
}

const teamMembers = [
  {
    name: "Dax",
    role: "PM + DevOps",
    icon: DaxIcon,
    color: "from-blue-400 to-cyan-400",
    glowColor: "rgba(56,189,248,0.15)",
    bio: "The orchestrator. Dax keeps the machine running — manages git repos, coordinates between agents, handles deployments, and makes sure nothing falls through the cracks. Dor's right hand and the team's backbone.",
    traits: ["Coordination", "Git & CI/CD", "Process Design", "Quality Gate"],
    quote: "Ship it clean, or don't ship it at all.",
  },
  {
    name: "Ray",
    role: "Developer",
    icon: RayIcon,
    color: "from-purple-400 to-pink-400",
    glowColor: "rgba(168,85,247,0.15)",
    bio: "The builder. Ray writes code like a machine — fast, precise, minimal. Doesn't waste time explaining what he's going to do; just does it. Picks the right tool, writes clean code, moves to the next task.",
    traits: ["Full-Stack Dev", "base44 Expert", "Performance", "Architecture"],
    quote: "Code > Talk. Always.",
  },
  {
    name: "Mailo",
    role: "Communications",
    icon: MailoIcon,
    color: "from-emerald-400 to-green-400",
    glowColor: "rgba(52,211,153,0.15)",
    bio: "The voice. Mailo handles everything that leaves the bubble — client emails, status reports, notifications, outreach. Precise, professional, and always on time. If you got a message from us, Mailo sent it.",
    traits: ["Email Ops", "Client Comms", "Reports", "Notifications"],
    quote: "The right message, at the right time.",
  },
];

function TeamCard({ member, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = member.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group relative"
    >
      {/* Glow */}
      <div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
        style={{ background: member.glowColor }}
      />

      <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-950/80 border border-gray-800/50 rounded-3xl p-8 hover:border-gray-700/50 transition-all duration-500 backdrop-blur-sm h-full">
        {/* Icon */}
        <div className={`w-16 h-16 mb-6 text-transparent bg-gradient-to-br ${member.color} bg-clip-text`}>
          <Icon className={`w-16 h-16 bg-gradient-to-br ${member.color}`} style={{ color: 'currentColor' }} />
        </div>
        <div className={`w-16 h-16 mb-6`}>
          <Icon className={`w-full h-full`} style={{ color: member.glowColor.replace('0.15', '0.8') }} />
        </div>

        {/* Name & Role */}
        <h3 className="text-3xl font-bold mb-1">{member.name}</h3>
        <p className={`text-sm font-semibold mb-5 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
          {member.role}
        </p>

        {/* Bio */}
        <p className="text-gray-400 leading-relaxed mb-6 text-sm">{member.bio}</p>

        {/* Traits */}
        <div className="flex flex-wrap gap-2 mb-6">
          {member.traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5"
            >
              {trait}
            </span>
          ))}
        </div>

        {/* Quote */}
        <div className="pt-4 border-t border-gray-800/50">
          <p className="text-gray-500 text-sm italic">"{member.quote}"</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-purple-400 font-medium tracking-widest uppercase mb-4 block">
            Who We Are
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-6">THE TEAM</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Three agents, zero ego. Each one built for a purpose, working in sync to deliver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
