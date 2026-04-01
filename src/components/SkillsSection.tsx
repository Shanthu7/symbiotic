import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skills = [
  { name: "Java", level: 75, category: "Languages" },
  { name: "Python", level: 70, category: "Languages" },
  { name: "JavaScript", level: 80, category: "Languages" },
  { name: "C", level: 65, category: "Languages" },
  { name: "SQL", level: 70, category: "Languages" },
  { name: "React.js", level: 80, category: "Frameworks" },
  { name: "HTML/CSS", level: 90, category: "Frameworks" },
  { name: "AWS", level: 60, category: "Tools" },
  { name: "Linux", level: 65, category: "Tools" },
  { name: "Git", level: 70, category: "Tools" },
  { name: "VS Code", level: 85, category: "Tools" },
  { name: "Cyber Security", level: 60, category: "Domains" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
            The <span className="venom-text-gradient">Symbiote</span> Arsenal
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="font-body text-muted-foreground">Technologies I bond with</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onMouseEnter={() => setHovered(skill.name)}
              onMouseLeave={() => setHovered(null)}
              className="venom-card p-5 text-center relative overflow-hidden group cursor-pointer transition-all duration-300 hover:border-primary/50"
              style={{
                boxShadow: hovered === skill.name ? "0 0 25px hsl(220 80% 55% / 0.2)" : "none",
              }}
            >
              {/* Progress ring background */}
              <div className="relative w-16 h-16 mx-auto mb-3">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" fill="none" strokeWidth="3" className="stroke-border" />
                  <motion.circle
                    cx="32" cy="32" r="28" fill="none" strokeWidth="3"
                    className="stroke-primary"
                    strokeLinecap="round"
                    strokeDasharray={175.9}
                    initial={{ strokeDashoffset: 175.9 }}
                    animate={inView ? { strokeDashoffset: 175.9 * (1 - skill.level / 100) } : {}}
                    transition={{ duration: 1, delay: i * 0.05 + 0.3 }}
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-display text-xs font-bold text-primary">
                  {skill.level}%
                </span>
              </div>
              <p className="font-body font-semibold text-sm text-foreground">{skill.name}</p>
              <p className="font-body text-xs text-muted-foreground mt-1">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
