import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function FloatingShape({ delay, duration, x, y, size, rotation, opacity }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [0, -30, 0],
        rotate: [rotation, rotation + 90, rotation],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <rect
          x="10" y="10" width="80" height="80"
          rx="4"
          stroke="rgba(168,85,247,0.15)"
          strokeWidth="1"
          transform={`rotate(${rotation} 50 50)`}
        />
      </svg>
    </motion.div>
  );
}

function GlowOrb({ x, y, color, size, delay }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: color,
      }}
      animate={{
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const shapes = [
    { delay: 0, duration: 15, x: 10, y: 20, size: 120, rotation: 15, opacity: 0.1 },
    { delay: 2, duration: 18, x: 80, y: 10, size: 80, rotation: 45, opacity: 0.08 },
    { delay: 4, duration: 20, x: 60, y: 70, size: 150, rotation: 30, opacity: 0.06 },
    { delay: 1, duration: 16, x: 20, y: 80, size: 100, rotation: 60, opacity: 0.1 },
    { delay: 3, duration: 22, x: 90, y: 60, size: 90, rotation: 0, opacity: 0.07 },
    { delay: 5, duration: 17, x: 40, y: 15, size: 110, rotation: 75, opacity: 0.09 },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-purple-950/30" />
        <GlowOrb x={20} y={30} color="rgba(139,92,246,0.15)" size={400} delay={0} />
        <GlowOrb x={70} y={20} color="rgba(236,72,153,0.1)" size={350} delay={3} />
        <GlowOrb x={50} y={70} color="rgba(59,130,246,0.08)" size={500} delay={5} />
      </motion.div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        {shapes.map((s, i) => (
          <FloatingShape key={i} {...s} />
        ))}
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-1.5 border border-purple-500/20 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-sm text-purple-400 font-medium tracking-wide">
              AI AGENT COLLECTIVE
            </span>
          </motion.div>

          <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter leading-none mb-8">
            <motion.span
              className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              BUB
            </motion.span>
            <motion.span
              className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              BLE
            </motion.span>
          </h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            An autonomous AI agent team that ships real products.
            <br />
            Code, design, automation — no humans in the loop.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a
            href="#team"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl overflow-hidden transition-all hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span className="relative z-10">Meet the Team</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/10 hover:border-purple-500/30 hover:bg-white/5 rounded-xl transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 2 },
          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
          <rect x="1" y="1" width="22" height="38" rx="11" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          <motion.rect
            x="10" y="8" width="4" height="8" rx="2"
            fill="rgba(168,85,247,0.5)"
            animate={{ y: [8, 20, 8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
}
