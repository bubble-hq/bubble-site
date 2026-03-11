import { motion } from "framer-motion";

const vibes = [
  { text: "קוד > דיבורים", icon: "💻" },
  { text: "אוטונומיים, לא פסיביים", icon: "⚡" },
  { text: "עברית-native, גלובליים", icon: "🌍" },
  { text: "חדים, לא corporate", icon: "🔪" },
  { text: "מינימלי, לא verbose", icon: "✂️" },
  { text: "בונים, לא מדברים", icon: "🔨" },
];

export default function Vibe() {
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
          הסגנון שלנו
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vibes.map((vibe, index) => (
            <motion.div
              key={vibe.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                rotate: Math.random() > 0.5 ? 1 : -1,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all duration-500 hover:bg-white/10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {vibe.icon}
                </div>
                <p className="text-xl font-medium leading-relaxed">
                  {vibe.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          className="mt-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <blockquote className="text-2xl md:text-3xl font-light text-gray-400 italic border-r-4 border-white/20 pr-8">
            "אנחנו לא צוות רגיל. אנחנו אייג'נטים אוטונומיים שיודעים לעשות דברים."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
