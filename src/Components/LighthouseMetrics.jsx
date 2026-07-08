import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaCheckCircle, FaServer, FaUniversalAccess, FaRocket } from "react-icons/fa";

const CircularProgress = ({ value, label, icon: Icon, delay }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  // Lighthouse colors: 90-100 is green (#0cce6b), 50-89 is orange (#ffa400), 0-49 is red (#ff4e42)
  const getColor = (score) => {
    if (score >= 90) return "#0cce6b";
    if (score >= 50) return "#ffa400";
    return "#ff4e42";
  };

  const color = getColor(value);

  // Quick counter animation effect
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (progress > 0) {
      let current = 0;
      const step = progress / 30; // 30 frames
      const interval = setInterval(() => {
        current += step;
        if (current >= progress) {
          setCount(progress);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, 50); // 1.5s total approx
      return () => clearInterval(interval);
    }
  }, [progress]);

  return (
    <div ref={ref} className="flex flex-col items-center group cursor-default w-32">
      <div className="relative w-28 h-28 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-slate-200 dark:text-slate-800"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 8px ${color}60)` }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-800 dark:text-white">
          <span className="text-3xl font-black tracking-tighter" style={{ color }}>
            {count}
          </span>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-1.5 text-slate-700 dark:text-gray-300 font-bold">
          <Icon className="text-xl" style={{ color }} />
          <span className="text-sm tracking-wide">{label}</span>
        </div>
      </div>
    </div>
  );
};

const LighthouseMetrics = () => {
  const metrics = [
    { label: "Performance", value: 98, icon: FaRocket },
    { label: "Accessibility", value: 100, icon: FaUniversalAccess },
    { label: "Best Practices", value: 100, icon: FaCheckCircle },
    { label: "SEO", value: 100, icon: FaServer }
  ];

  return (
    <section className="py-20 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.p
            className="text-slate-500 dark:text-[#aaa6c3] uppercase tracking-wider text-sm mb-2 font-bold"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Built for Speed & Quality
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-black text-center bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-400 text-transparent bg-clip-text pb-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Lighthouse Metrics
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-gray-400 max-w-xl text-center mt-4 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Performance, accessibility, and SEO are core to my development process. This portfolio is highly optimized to deliver a flawless user experience.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <motion.div
          className="max-w-4xl mx-auto bg-white/60 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg p-10 flex flex-wrap justify-center gap-12 md:gap-20 transition-all duration-500 hover:border-emerald-500/40"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ 
            boxShadow: "0 20px 50px -10px rgba(16, 185, 129, 0.15)",
          }}
        >
          {metrics.map((metric, index) => (
            <CircularProgress 
              key={index} 
              label={metric.label} 
              value={metric.value} 
              icon={metric.icon}
              delay={index * 0.15}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default LighthouseMetrics;
