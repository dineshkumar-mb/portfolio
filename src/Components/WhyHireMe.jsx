import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "3+ Years React Experience",
  "Full-Stack MERN Development",
  "AI Application Development",
  "Workflow Automation Systems",
  "Real-Time Applications",
  "Enterprise Application Experience",
  "SaaS Product Development"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const WhyHireMe = () => {
  return (
    <section className="py-20 relative z-10 overflow-hidden" id="why-hire-me">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 mb-4 tracking-tight">
            Why Hire Me?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Delivering high-performance, scalable, and beautifully designed web applications tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 group flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <CheckCircle2 size={24} className="stroke-[2.5px]" />
              </div>
              <span className="text-lg font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {reason}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMe;
