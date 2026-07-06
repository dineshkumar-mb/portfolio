import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const GithubSection = () => {
  const githubUsername = "dineshkumar-mb";

  return (
    <section id="github" className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-slate-500/5 dark:bg-slate-500/10 rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.p
            className="text-slate-500 dark:text-[#aaa6c3] uppercase tracking-wider text-sm mb-2 font-bold flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FaGithub size={18} /> Open Source
          </motion.p>
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-gray-400 dark:to-white text-transparent bg-clip-text pb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            GitHub Activity
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-slate-500 to-slate-800 dark:from-gray-500 dark:to-gray-300 rounded-full mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        {/* GitHub Stats Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          
          {/* Main Stats Card */}
          <motion.div
            className="w-full lg:w-1/2 p-2 bg-white/50 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg hover:border-slate-300 dark:hover:border-white/20 transition-colors"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&icon_color=8b5cf6&text_color=475569&bg_color=00000000`}
              alt="GitHub Stats" 
              className="w-full h-auto dark:hidden"
            />
            <img 
              src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=60a5fa&icon_color=a78bfa&text_color=cbd5e1&bg_color=00000000`}
              alt="GitHub Stats Dark" 
              className="w-full h-auto hidden dark:block"
            />
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            className="w-full lg:w-1/2 p-2 bg-white/50 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg hover:border-slate-300 dark:hover:border-white/20 transition-colors"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=475569&bg_color=00000000`}
              alt="Top Languages" 
              className="w-full h-auto dark:hidden"
            />
            <img 
              src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=60a5fa&text_color=cbd5e1&bg_color=00000000`}
              alt="Top Languages Dark" 
              className="w-full h-auto hidden dark:block"
            />
          </motion.div>

        </div>

        {/* Contribution Graph */}
        <motion.div
          className="mt-8 w-full p-2 lg:p-6 bg-white/50 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
            <img 
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react&hide_border=true&bg_color=00000000&color=475569&line=3b82f6&point=8b5cf6`}
              alt="Contribution Graph" 
              className="w-full h-auto dark:hidden min-w-[700px]"
            />
            <img 
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react&hide_border=true&bg_color=00000000&color=cbd5e1&line=60a5fa&point=a78bfa`}
              alt="Contribution Graph Dark" 
              className="w-full h-auto hidden dark:block min-w-[700px]"
            />
        </motion.div>

        <div className="flex justify-center mt-12">
           <a 
             href={`https://github/${githubUsername}`} 
             target="_blank" 
             rel="noreferrer"
             className="px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
           >
             <FaGithub size={20} /> View GitHub Profile
           </a>
        </div>

      </div>
    </section>
  );
};

export default GithubSection;
