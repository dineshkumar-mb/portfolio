import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Innotrat Labs",
      duration: "June 2025 - Present",
      sections: {
        Responsibilities: "Leading the development of complex frontend architectures and custom IDE integrations. Collaborating with cross-functional teams to build premium glassmorphic UI components.",
        Achievements: "Successfully integrated real-time video calling features utilizing the Dyte SDK, enabling seamless collaboration.",
        "Engineering Contributions": "Developed interactive flowcharts, block diagrams, and advanced node-based systems using React Flow. Built custom Postman-style API testers.",
        "Business Impact": "Enhanced user engagement and platform capabilities, positioning the product as a competitive solution in the low-code space."
      },
      tech: ["React.js", "Node.js", "React Flow", "Dyte SDK", "Tailwind CSS", "Framer Motion"]
    },
    {
      role: "Frontend Developer",
      company: "Neelan Oxysoft Pvt Ltd",
      duration: "Jul 2022 - Jun 2025",
      sections: {
        Responsibilities: "Architected and built responsive, dynamic web interfaces. Integrated complex Node.js/Express backend APIs and structured secure JWT authentication flows.",
        Achievements: "Successfully migrated legacy CSS components into modular Tailwind CSS architectures.",
        "Engineering Contributions": "Implemented state management using Redux Toolkit, drastically reducing unnecessary re-renders across the application.",
        "Business Impact": "Improved overall application loading speed by 20% and significantly elevated the user experience."
      },
      tech: ["React.js", "Redux Toolkit", "Tailwind CSS", "REST APIs", "Node.js"]
    },
    {
      role: "Web Development Training",
      company: "Livewire",
      duration: "Dec 2021 - May 2022",
      sections: {
        Responsibilities: "Engaged in an intensive full-stack development curriculum, focusing on modern web standards.",
        Achievements: "Developed over 10 independent projects spanning diverse use cases.",
        "Engineering Contributions": "Built responsive interfaces using HTML5, CSS3, and JavaScript, establishing a strong foundation for React development.",
        "Business Impact": "Accelerated transition into professional software engineering through rigorous hands-on project delivery."
      },
      tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      role: "Senior Accountant",
      company: "Sri Renuka Devi Silks[pasuth]",
      duration: "Jan 2018 - Nov 2021",
      sections: {
        Responsibilities: "Managed financial reporting, regulatory compliance, account reconciliation, and day-to-day business operations.",
        Achievements: "Streamlined financial reporting processes, improving overall accuracy and efficiency.",
        "Engineering Contributions": "Automated repetitive spreadsheet workflows using advanced Excel functions.",
        "Business Impact": "Provided accurate financial insights that guided strategic business decisions."
      },
      tech: ["Financial Reporting", "Data Analysis", "Account Reconciliation"]
    },
    {
      role: "Family Caregiving Sabbatical",
      company: "Career Break",
      duration: "Dec 2016 - Dec 2017",
      sections: {
        Responsibilities: "Provided full-time family caregiving support while concurrently pursuing self-learning.",
        Achievements: "Maintained a disciplined self-study schedule in web technologies.",
        "Engineering Contributions": "Studied software development fundamentals, focusing on web architecture.",
        "Business Impact": "Successfully managed personal responsibilities while preparing for a career pivot."
      },
      tech: ["Time Management", "Self-Learning", "Adaptability"]
    },
    {
      role: "Production Trainee",
      company: "Sungwoo Hitech",
      duration: "May 2015 - Nov 2016",
      sections: {
        Responsibilities: "Supported production planning, quality assurance, process documentation, and manufacturing operations in an automotive component environment.",
        Achievements: "Optimized workflow efficiency on the production floor by implementing lean methodologies.",
        "Engineering Contributions": "Assisted in the troubleshooting and maintenance of production machinery.",
        "Business Impact": "Maintained high operational uptime and reduced defect rates during the shift."
      },
      tech: ["Process Optimization", "Quality Assurance", "Operations"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 relative z-10">

        {/* Section Title with Accent Underline */}
        <div className="flex flex-col items-center mb-16">
          <motion.p
            className="text-slate-500 dark:text-[#aaa6c3] uppercase tracking-wider text-sm mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Journey
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-black text-center bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Professional Experience
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto mt-20">

          {/* Vertical Center Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500/20 dark:from-cyan-500 dark:via-indigo-500 dark:to-purple-500/10 -translate-x-1/2" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-stretch mb-12 w-full ${isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
              >
                {/* Timeline Icon Node */}
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  >
                    <motion.div
                      className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full shadow-lg shadow-cyan-500/25 border-2 border-slate-50 dark:border-[#030014]"
                      whileHover={{ scale: 1.15 }}
                      viewport={{ once: true }}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <FaBriefcase className="text-sm" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Job Card Wrapper (50% Width on desktop, Offset to align with center line) */}
                <motion.div
                  className="w-full md:w-[calc(50%-32px)] pl-12 md:pl-0"
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="bg-white/70 dark:bg-gray-900/30 backdrop-blur-md border border-slate-200/60 dark:border-white/10 rounded-3xl p-6 transition-all duration-500 hover:border-cyan-500/40 hover:shadow-md dark:hover:shadow-[0_15px_30px_rgba(6,182,212,0.12)] group relative overflow-hidden flex flex-col h-full text-left">
                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:to-indigo-500/5 transition-all duration-500 pointer-events-none" />

                    {/* Role & Date */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 border-b border-slate-200 dark:border-white/5 pb-3">
                      <div>
                        <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-cyan-600 dark:text-cyan-300 font-semibold text-sm mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400 font-semibold bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/5 w-fit self-start">
                        <FaCalendarAlt className="text-cyan-500 dark:text-cyan-400" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="space-y-4 mb-6 flex-1 text-slate-650 dark:text-gray-300 text-sm leading-relaxed">
                      {Object.entries(exp.sections).map(([title, content], sIdx) => (
                        <div key={sIdx}>
                          <span className="font-bold text-slate-800 dark:text-white mr-1 block sm:inline">{title}:</span>
                          <span>{content}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200 dark:border-white/5 justify-start">
                      {exp.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
