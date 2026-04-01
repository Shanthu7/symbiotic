import { motion } from "framer-motion";

const blobs = [
  { size: 300, x: "10%", y: "20%", delay: 0 },
  { size: 400, x: "70%", y: "10%", delay: 2 },
  { size: 250, x: "80%", y: "60%", delay: 4 },
  { size: 350, x: "20%", y: "70%", delay: 1 },
  { size: 200, x: "50%", y: "40%", delay: 3 },
];

const SymbioteBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {blobs.map((b, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: b.size,
          height: b.size,
          left: b.x,
          top: b.y,
          background: `radial-gradient(circle, hsl(0 80% 50% / 0.06), transparent 70%)`,
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 30, -20, 50, 0],
          y: [0, -50, 20, 30, 0],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 8,
          delay: b.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default SymbioteBackground;
