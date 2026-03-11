import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Vibe from "./components/Vibe";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Team />
      <Projects />
      <Vibe />
      <Contact />
    </div>
  );
}
