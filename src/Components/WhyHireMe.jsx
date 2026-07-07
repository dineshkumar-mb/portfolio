import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  BrainCircuit, 
  Workflow, 
  Zap, 
  Building2, 
  Rocket,
  Sparkles,
  Layout
} from 'lucide-react';

const reasons = [
  {
    title: "React Expertise",
    description: "Crafting highly interactive and optimized user interfaces with 3+ years of React experience.",
    icon: Code2,
    gradient: "from-cyan-500 to-blue-500",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    title: "Full-Stack MERN",
    description: "Building scalable end-to-end web applications with MongoDB, Express.js, React, and Node.js.",
    icon: Database,
    gradient: "from-emerald-400 to-green-500",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
  },
  {
    title: "AI Development",
    description: "Integrating intelligent features and modern AI models to create smart, forward-thinking applications.",
    icon: BrainCircuit,
    gradient: "from-fuchsia-400 to-purple-500",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50 dark:bg-purple-500/10",
  },
  {
    title: "Workflow Automation",
    description: "Designing systems that streamline operations, boost productivity, and eliminate manual tasks.",
    icon: Workflow,
    gradient: "from-orange-400 to-red-500",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50 dark:bg-orange-500/10",
  },
  {
    title: "Real-Time Systems",
    description: "Developing responsive applications with live updates and low-latency data synchronization.",
    icon: Zap,
    gradient: "from-amber-400 to-orange-500",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
  },
  {
    title: "Enterprise Ready",
    description: "Delivering robust, secure, and maintainable software architectures for enterprise requirements.",
    icon: Building2,
    gradient: "from-blue-400 to-indigo-500",
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
  },
  {
    title: "SaaS Products",
    description: "Architecting and launching complete Software-as-a-Service platforms from concept to deployment.",
    icon: Rocket,
    gradient: "from-pink-400 to-rose-500",
    iconColor: "text-pink-500",
    iconBg: "bg-pink-50 dark:bg-pink-500/10",
  },
  {
    title: "UI/UX Focus",
    description: "Dedicated to creating intuitive, accessible, and pixel-perfect user experiences across all devices.",
    icon: Layout,
    gradient: "from-teal-400 to-cyan-500",
    iconColor: "text-teal-500",
    iconBg: "bg-teal-50 dark:bg-teal-500/10",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
    <section className="py-24 relative z-10 overflow-hidden bg-slate-50/50 dark:bg-[#0a0a0a]" id="why-hire-me">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-40 dark:opacity-20 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-[100px] mix-blend-multiply dark:mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium text-sm mb-6 border border-blue-100 dark:border-blue-500/20">
            <Sparkles size={16} />
            <span>My Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Why you should <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">hire me</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I combine technical excellence with a strong product mindset to deliver high-performance, scalable, and beautifully designed web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white dark:bg-slate-900/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-transparent dark:hover:border-transparent transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 overflow-hidden flex flex-col h-full"
              >
                {/* Hover Gradient Background (subtle) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.05] transition-opacity duration-500`} />
                
                {/* Top Border Highlight on hover */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${reason.iconBg} group-hover:scale-110 transition-transform duration-500 mb-6 shadow-sm`}>
                    <Icon className={`w-7 h-7 ${reason.iconColor} transition-colors duration-500`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMe;
