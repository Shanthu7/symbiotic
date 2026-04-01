import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const phrases = [
  "Full-Stack Developer",
  "Cyber Security Enthusiast",
  "React Developer",
  "Problem Solver",
];

const HeroSection = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const timeout = deleting ? 40 : 80;

    if (!deleting && charIdx === current.length) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIdx((prev) => prev + (deleting ? -1 : 1));
    }, timeout);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          I am the Symbiote...
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-display text-4xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
        >
          I am{" "}
          <span className="venom-text-gradient">GUNTHA SANTH RAJ</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="h-10 md:h-14 flex items-center justify-center"
        >
          <span className="font-body text-xl md:text-3xl text-primary font-medium">
            {phrases[phraseIdx].substring(0, charIdx)}
          </span>
          <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm hover:shadow-[0_0_30px_hsl(220_80%_55%/0.4)] transition-all duration-300"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg border border-primary/30 text-primary font-body font-semibold tracking-wider uppercase text-sm hover:bg-primary/10 transition-all duration-300"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
