import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2 } from "lucide-react";

const projects = [
  {
    title: "College Website",
    desc: "Designed and developed an informational website for Loyola Polytechnic College showcasing academic programs, facilities, and services. Created structured navigation and visual layout to improve user engagement.",
    tech: ["HTML", "CSS", "VS Code"],
    type: "Web Development",
  },
  {
    title: "Deepfake Analyser",
    desc: "Analyzed and determined the implications of deepfake technology. Explored detection methods and assessed the societal impact of AI-generated synthetic media.",
    tech: ["Python", "Google Colab", "AI/ML"],
    type: "Research & Analysis",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
            Maximum <span className="dp-text-gradient">Effort</span> Projects
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="font-body text-muted-foreground">Built with chimichangas & code</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="dp-card p-6 md:p-8 group hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, hsl(0 80% 50% / 0.05), transparent 70%)" }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-xs uppercase tracking-widest text-primary">{p.type}</span>
                  <Code2 size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-body font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
