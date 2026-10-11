import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaCheckCircle, FaAward, FaShieldAlt } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: "Model Context Protocol: Advanced Topics",
      issuer: "Anthropic Academy",
      date: "2026",
      credentialId: "gumbuyac4j6k",
      skills: ["MCP Server Architecture", "Custom Tool Development", "Protocol Spec"],
      verifyUrl: "https://verify.skilljar.com/c/gumbuyac4j6k"
    },
    {
      title: "Introduction to Model Context Protocol",
      issuer: "Anthropic Academy",
      date: "2026",
      credentialId: "pti3qzqdh5ro",
      skills: ["Client-Host-Server Topology", "JSON-RPC 2.0", "Context Grounding"],
      verifyUrl: "https://verify.skilljar.com/c/pti3qzqdh5ro"
    },
    {
      title: "Introduction to Agent Skills",
      issuer: "Anthropic Academy",
      date: "2026",
      credentialId: "kxz8ub5fjiqp",
      skills: ["Autonomous Workflows", "Tool Orchestration", "Agent Decision Loops"],
      verifyUrl: "https://verify.skilljar.com/c/kxz8ub5fjiqp"
    },
    {
      title: "AI Fluency Framework & Foundations",
      issuer: "Anthropic Academy",
      date: "2026",
      credentialId: "gxmwzaofbhk9",
      skills: ["Prompt Architecture", "LLM Evaluation", "Safety & Alignment"],
      verifyUrl: "https://verify.skilljar.com/c/gxmwzaofbhk9"
    },
    {
      title: "Claude Platform 101",
      issuer: "Anthropic Academy",
      date: "2026",
      credentialId: "wa6r26veeq8h",
      skills: ["Anthropic API", "Streaming Responses", "System Prompts"],
      verifyUrl: "https://verify.skilljar.com/c/wa6r26veeq8h"
    },
    {
      title: "Claude Code in Action",
      issuer: "Anthropic Academy",
      date: "2026",
      credentialId: "kei5y6m8xuws",
      skills: ["CLI Workflows", "Automated Refactoring", "Agentic Pair Programming"],
      verifyUrl: "https://verify.skilljar.com/c/kei5y6m8xuws"
    },
    {
      title: "Claude Code 101",
      issuer: "Anthropic Academy",
      date: "2026",
      credentialId: "mqngonj3o3fi",
      skills: ["Terminal AI Tools", "Codebase Navigation", "Task Execution"],
      verifyUrl: "https://verify.skilljar.com/c/mqngonj3o3fi"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-20 relative z-10 max-w-6xl">

        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-4">
            <FaAward className="text-sm" /> Verified Technical Proof
          </div>
          <motion.h2
            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 via-amber-600 to-orange-600 dark:from-white dark:via-amber-400 dark:to-orange-400 text-transparent bg-clip-text mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Engineering Certifications
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-gray-300 max-w-2xl text-base leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Official credentials verified through Skilljar and Anthropic Academy, demonstrating deep expertise in Model Context Protocol (MCP), Agentic Workflows, and Claude AI integrations.
          </motion.p>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </div>

        {/* Certifications Grid (Item 32: Issuer, Date, Credential, Verification Link) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-md border border-slate-200/80 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-amber-500/40 hover:shadow-lg dark:hover:shadow-[0_10px_25px_rgba(245,158,11,0.08)] flex flex-col justify-between group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-base shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                      <FaCertificate />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                        {cert.issuer} &bull; {cert.date}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200/60 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <FaShieldAlt aria-hidden="true" className="text-[11px]" /> Verified Credential
                </span>
                
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verify ${cert.title} credential on Skilljar (opens in new tab)`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold hover:bg-amber-100 dark:hover:bg-amber-500/20 transition-colors border border-amber-200/60 dark:border-amber-500/30 group/link focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                >
                  Verify <FaExternalLinkAlt aria-hidden="true" className="text-[9px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verification Summary Banner */}
        <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/70 dark:border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <FaCheckCircle aria-hidden="true" className="text-emerald-500 text-2xl flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-white">
                All 7 Credentials Issued Under Dinesh Kumar M B
              </p>
              <p className="text-xs text-slate-500 dark:text-gray-400">
                Official accreditation through Skilljar certification validation engine.
              </p>
            </div>
          </div>
          <a
            href="https://verify.skilljar.com/c/gumbuyac4j6k"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View sample certificate record for Model Context Protocol on Skilljar (opens in new tab)"
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition whitespace-nowrap shadow-sm focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            Sample Certificate Record ↗
          </a>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
