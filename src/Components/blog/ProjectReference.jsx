import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaFolderOpen, FaArrowRight } from "react-icons/fa";

const ProjectReference = ({ projectTitle, projectSlug, projectLink }) => {
  if (!projectTitle) return null;

  return (
    <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-slate-900/40 border border-blue-200/80 dark:border-blue-500/30 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <FaFolderOpen />
            Related Portfolio Project
          </div>
          <h4 className="text-xl font-black text-slate-900 dark:text-white">
            {projectTitle}
          </h4>
          <p className="text-xs md:text-sm text-slate-600 dark:text-gray-300">
            Explore the live application, interactive architecture diagrams, and full project case study.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {projectSlug && (
            <Link
              to={`/projects/${projectSlug}`}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs md:text-sm shadow-md transition-all flex items-center gap-2"
            >
              View Case Study <FaArrowRight className="text-xs" />
            </Link>
          )}

          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white dark:bg-white/10 text-slate-800 dark:text-white font-bold text-xs md:text-sm border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/20 transition-all flex items-center gap-2"
            >
              Live Demo <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectReference;
