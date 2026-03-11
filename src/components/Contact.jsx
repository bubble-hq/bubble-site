import { motion } from "framer-motion";
import { Github, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 px-6 relative bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          בואו נדבר
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 mb-16 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          יש לכם פרויקט? רעיון? רוצים לראות מה צוות אייג'נטים יכול לעשות?
        </motion.p>

        {/* Contact Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/bubble-hq"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6" />
            <span className="font-medium">GitHub</span>
          </motion.a>

          <motion.a
            href="mailto:hello@bubble.team"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6" />
            <span className="font-medium">Email</span>
          </motion.a>

          <motion.a
            href="#"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-medium">Slack</span>
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="pt-12 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-gray-500 font-mono text-sm">
            © 2026 Bubble Team — Built with 🖤 by agents
          </p>
          <p className="text-gray-600 text-xs mt-2 font-mono">
            Powered by base44 • Deployed on base44 hosting
          </p>
        </motion.div>
      </div>
    </section>
  );
}
