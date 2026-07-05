import { motion } from "framer-motion";
import Image from "../assets/image.jpg"; // Ensure the path is correct
import { FaEye, FaDownload } from "react-icons/fa";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Completed Projects", value: "15+" },
    { label: "Technologies", value: "12+" }
  ];

  return (
    <section id="about" className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[350px] h-[350px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-rose-500/3 dark:bg-rose-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 relative z-10 gap-12">
        
        {/* Left - Avatar Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-600 to-rose-600 opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
            <img
              src={Image}
              alt="Developer Working on Laptop"
              width={380}
              height={380}
              className="object-cover rounded-3xl shadow-2xl border border-slate-200/50 dark:border-white/10 group-hover:border-fuchsia-500/30 transition-all duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </motion.div>

        {/* Right - Text Details */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-transparent bg-clip-text">
            About Me
          </h2>
          <span className="block h-1 w-16 mt-2 mb-6 bg-gradient-to-r from-fuchsia-500 to-rose-500 rounded-full"></span>
          
          <p className="text-slate-650 dark:text-gray-300 leading-relaxed text-lg max-w-xl">
            I'm a passionate full-stack developer specializing in front-end technologies. I love creating modern, responsive, and performant web applications with sleek designs and highly interactive experiences.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-md my-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-slate-100/50 dark:bg-white/[0.02] border border-slate-200/65 dark:border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center backdrop-blur-md hover:border-fuchsia-500/30 transition-all duration-300"
              >
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-rose-600 dark:from-fuchsia-400 dark:to-rose-400">
                  {stat.value}
                </span>
                <span className="text-slate-500 dark:text-gray-400 text-xs text-center mt-1 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Side-by-Side Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {/* View Resume Button */}
            <motion.a
              href="/new_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 rounded-full text-slate-800 dark:text-white text-base font-bold transition-all duration-300 border border-slate-200 dark:border-white/15 hover:border-slate-350 dark:hover:border-white/30 shadow-sm dark:shadow-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaEye className="text-lg text-fuchsia-600 dark:text-fuchsia-400" />
              View Resume
            </motion.a>

            {/* Download Resume Button */}
            <motion.a
              href="/new_resume.pdf"
              download="Dineshfullstackresume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-rose-600 rounded-full text-white text-base font-bold shadow-md dark:shadow-lg shadow-fuchsia-500/10 dark:shadow-fuchsia-500/20 hover:shadow-rose-500/20 dark:hover:shadow-rose-500/30 transition-all duration-300 border border-fuchsia-500/20 dark:border-white/10 hover:border-fuchsia-600/30 dark:hover:border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload className="text-base text-white" />
              Download
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
