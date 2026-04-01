import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Software Engineering Intern",
    org: "G&D Solutions India Pvt. Ltd.",
    period: "Dec 2024 — Mar 2025",
    details: "Developed proficiency in JavaScript, React.js, and AWS. Gained hands-on experience in software engineering practices.",
    icon: Briefcase,
  },
  {
    type: "edu",
    title: "B.Tech CSE (Cyber Security)",
    org: "Madanapalle Institute of Technology & Science",
    period: "2025 — 2028",
    details: "Currently pursuing with 7.5 CGPA.",
    icon: GraduationCap,
  },
  {
    type: "edu",
    title: "Diploma",
    org: "Loyola Polytechnic College, Pulivendula",
    period: "2022 — 2025",
    details: "Completed with 86% aggregate.",
    icon: GraduationCap,
  },
  {
    type: "edu",
    title: "SSC",
    org: "Sri G. Venkattapa Memorial School",
    period: "2021 — 2022",
    details: "Completed with 89%.",
    icon: GraduationCap,
  },
];

const certifications = [
  "FreeCodeCamp — Frontend Skills",
  "AAPS Hackathon",
  "NASSCOM — AI Fundamentals",
  "GND Solutions — Software Engineering",
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
            Origin <span className="dp-text-gradient">Story</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-4" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, i) => {
            const Icon = item.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative flex items-start mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-2 z-10 shadow-[0_0_10px_hsl(0_80%_50%/0.5)]" />

                <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="dp-card p-5">
                    <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}>
                      <Icon size={16} className="text-primary" />
                      <span className="font-body text-xs uppercase tracking-widest text-primary">{item.period}</span>
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">{item.org}</p>
                    <p className="font-body text-sm text-muted-foreground mt-2">{item.details}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <h3 className="font-display text-xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Award size={20} className="text-primary" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="dp-card p-4 flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="font-body text-sm text-secondary-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
