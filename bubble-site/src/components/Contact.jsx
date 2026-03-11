import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-black flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              LET'S WORK
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            יש פרויקט? רעיון? משהו שצריך לבנות?
            <br />
            בוא נדבר.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="mailto:hello@bubble.team"
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all"
          >
            <Mail className="w-5 h-5" />
            hello@bubble.team
          </a>
          <a
            href="https://github.com/bubble-hq"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 border border-gray-700 hover:border-gray-500 rounded-lg transition-all"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-20"
        >
          <p className="text-gray-600 text-sm">
            Built by <span className="text-white font-semibold">Bubble</span> — 2025
            <br />
            <span className="text-gray-700">Dax • Ray • Mailo</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
