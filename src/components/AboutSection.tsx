import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-2">
            About <span className="venom-text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="font-body text-lg text-secondary-foreground leading-relaxed">
              I'm <span className="text-primary font-semibold">Gunthasanthraj</span>, a B.Tech Computer Science (Cyber Security) student at Madanapalle Institute of Technology & Science with a passion for building impactful web applications and exploring cybersecurity.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              With hands-on internship experience at G&D Solutions where I developed proficiency in JavaScript, React.js, and AWS, I bring both academic knowledge and real-world skills. I thrive on solving complex problems and creating elegant, functional solutions.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me playing cricket or listening to music. I'm driven by curiosity and the desire to continuously grow as a developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "CGPA", value: "7.5" },
              { label: "Diploma", value: "86%" },
              { label: "SSC", value: "89%" },
              { label: "Internship", value: "G&D Solutions" },
            ].map((item, i) => (
              <div
                key={i}
                className="venom-card p-6 text-center animate-glow-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">{item.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-1 uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
