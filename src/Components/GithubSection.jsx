import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaLock, 
  FaExternalLinkAlt, 
  FaCodeBranch, 
  FaStar, 
  FaSyncAlt, 
  FaFire, 
  FaBuilding, 
  FaCode,
  FaCheckCircle 
} from "react-icons/fa";
import GithubSnakeCalendar from "./GithubSnakeCalendar";

// Pinned Enterprise / Private projects that aren't public on GitHub API
const pinnedPrivateRepos = [
  {
    id: "inno-ide",
    name: "InnoIDE",
    repo: "innotrat-labs/inno-ide",
    isPrivate: true,
    language: "React.js",
    langColor: "bg-cyan-400",
    description: "Industrial Automation Workflow & Virtual Sensor Simulation Platform used by 50+ internal engineers.",
    link: "https://ide.innotrat.in/",
    badge: "Enterprise Repository (Private)",
    stars: 0,
    forks: 0,
    pushedAt: new Date().toISOString()
  }
];

// Curated seed data for initial render or offline fallback
const initialCuratedRepos = [
  ...pinnedPrivateRepos,
  {
    id: "brahadeshwarar",
    name: "Brahadeshwarar 3D Temple",
    repo: "dineshkumar-mb/Brahadeshwarar-temple",
    isPrivate: false,
    language: "JavaScript",
    langColor: "bg-amber-400",
    description: "3D Cinematic & Gesture-Controlled Virtual Tour of Brihadisvara Temple with React 19, Three.js, and MediaPipe AI hand tracking.",
    link: "https://github.com/dineshkumar-mb/Brahadeshwarar-temple",
    badge: "Open Source",
    stars: 0,
    forks: 0,
    pushedAt: "2026-10-05T16:40:42Z"
  },
  {
    id: "brand-os",
    name: "Brand OS Multi-Agent",
    repo: "dineshkumar-mb/Brand-os-multi-agent",
    isPrivate: false,
    language: "TypeScript",
    langColor: "bg-blue-600",
    description: "Autonomous Multi-Agent AI Platform for Personal Brand Growth. Scrapes tech trends, conducts deep research, and publishes daily.",
    link: "https://github.com/dineshkumar-mb/Brand-os-multi-agent",
    badge: "Open Source",
    stars: 0,
    forks: 0,
    pushedAt: "2026-10-03T16:23:56Z"
  },
  {
    id: "taskflow",
    name: "TaskFlow",
    repo: "dineshkumar-mb/taskflow-frontend",
    isPrivate: false,
    language: "JavaScript / React",
    langColor: "bg-amber-400",
    description: "Multi-Tenant SaaS project management system with granular RBAC, subscriptions, and AI ticket extraction.",
    link: "https://github.com/dineshkumar-mb/taskflow-frontend",
    badge: "Open Source",
    stars: 0,
    forks: 0,
    pushedAt: "2026-09-20T12:00:00Z"
  },
  {
    id: "emi-platform",
    name: "AI Financial Assistant",
    repo: "dineshkumar-mb/emi-frontend-platform",
    isPrivate: false,
    language: "JavaScript / Python",
    langColor: "bg-emerald-500",
    description: "RAG + OCR loan document intelligence platform with ChromaDB embeddings and Gemini grounded answers.",
    link: "https://github.com/dineshkumar-mb/emi-frontend-platform",
    badge: "Open Source",
    stars: 0,
    forks: 0,
    pushedAt: "2026-09-29T17:43:03Z"
  },
  {
    id: "career-os",
    name: "Career OS",
    repo: "dineshkumar-mb/carrier-os-client",
    isPrivate: false,
    language: "TypeScript / React 19",
    langColor: "bg-blue-600",
    description: "Autonomous career intelligence engine with 17-agent execution kernel, ATS analysis, and Socket.io traces.",
    link: "https://github.com/dineshkumar-mb/carrier-os-client",
    badge: "Open Source",
    stars: 0,
    forks: 0,
    pushedAt: "2026-09-18T10:00:00Z"
  },
  {
    id: "ai-code-review",
    name: "AI Code Review",
    repo: "dineshkumar-mb/code-ReviewFrontend",
    isPrivate: false,
    language: "JavaScript / React",
    langColor: "bg-purple-500",
    description: "Intelligent code reviewer delivering automated security audits, time-complexity analysis, and refactoring diffs.",
    link: "https://github.com/dineshkumar-mb/code-ReviewFrontend",
    badge: "Open Source",
    stars: 0,
    forks: 0,
    pushedAt: "2026-09-15T08:00:00Z"
  }
];

const getLanguageColor = (lang) => {
  const map = {
    JavaScript: "bg-amber-400",
    TypeScript: "bg-blue-500",
    "React.js": "bg-cyan-400",
    "React JS": "bg-cyan-400",
    React: "bg-cyan-400",
    Python: "bg-emerald-500",
    HTML: "bg-orange-500",
    CSS: "bg-purple-500",
    Rust: "bg-amber-700",
    Go: "bg-cyan-500",
    Shell: "bg-emerald-400",
    PowerShell: "bg-blue-600",
  };
  return map[lang] || "bg-cyan-400";
};

const formatTimeAgo = (dateStr) => {
  if (!dateStr) return "";
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
};

const GithubSection = () => {
  const githubUsername = "dineshkumar-mb";
  
  // Theme state
  const [isDark, setIsDark] = useState(() => 
    typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : true
  );

  // Live GitHub Data State
  const [repos, setRepos] = useState(initialCuratedRepos);
  const [profileStats, setProfileStats] = useState({
    publicRepos: 53,
    followers: 2,
    totalStars: 2,
    latestCommit: "dineshkumar-mb/Brahadeshwarar-temple",
    latestCommitDate: "6d ago"
  });
  const [filter, setFilter] = useState("all"); // "all" | "recent" | "enterprise"
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState("Just now");
  const [syncKey, setSyncKey] = useState(0);

  // Theme observer
  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    const observer = new MutationObserver(() => checkDark());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Sync Live Data from GitHub API
  const fetchLiveGithubData = useCallback(async (manual = false) => {
    setIsSyncing(true);
    try {
      // 1. Fetch User Profile
      const userPromise = fetch(`https://api.github.com/users/${githubUsername}`).then(r => r.ok ? r.json() : null);

      // 2. Fetch Latest Repositories sorted by pushed date
      const reposPromise = fetch(`https://api.github.com/users/${githubUsername}/repos?sort=pushed&direction=desc&per_page=12`)
        .then(r => r.ok ? r.json() : null);

      // 3. Fetch Recent Public Events (Pushes, Commits)
      const eventsPromise = fetch(`https://api.github.com/users/${githubUsername}/events/public?per_page=5`)
        .then(r => r.ok ? r.json() : null);

      const [userData, reposData, eventsData] = await Promise.all([userPromise, reposPromise, eventsPromise]);

      // Process Repositories
      if (Array.isArray(reposData) && reposData.length > 0) {
        const liveMapped = reposData.map((r) => ({
          id: r.id,
          name: r.name,
          repo: r.full_name,
          isPrivate: r.private || false,
          language: r.language || "Code",
          langColor: getLanguageColor(r.language),
          description: r.description || "Open source implementation on GitHub.",
          link: r.html_url,
          homepage: r.homepage,
          badge: "Live Public Repo",
          stars: r.stargazers_count || 0,
          forks: r.forks_count || 0,
          pushedAt: r.pushed_at
        }));

        // Merge: Keep pinned enterprise items at top, then append live repos
        const merged = [...pinnedPrivateRepos];
        liveMapped.forEach(lr => {
          if (!merged.some(m => m.repo.toLowerCase() === lr.repo.toLowerCase())) {
            merged.push(lr);
          }
        });
        setRepos(merged);
      }

      // Process Stats & Events
      let calculatedStars = 0;
      if (Array.isArray(reposData)) {
        calculatedStars = reposData.reduce((acc, curr) => acc + (curr.stargazers_count || 0), 0);
      }

      let latestCommitStr = "Brahadeshwarar-temple";
      let latestCommitTime = "recently";
      if (Array.isArray(eventsData) && eventsData.length > 0) {
        const firstPush = eventsData.find(e => e.type === "PushEvent") || eventsData[0];
        if (firstPush) {
          latestCommitStr = firstPush.repo?.name || latestCommitStr;
          latestCommitTime = formatTimeAgo(firstPush.created_at);
        }
      }

      setProfileStats({
        publicRepos: userData?.public_repos || 53,
        followers: userData?.followers || 2,
        totalStars: calculatedStars || 2,
        latestCommit: latestCommitStr,
        latestCommitDate: latestCommitTime
      });

      setLastSyncTime("Just now");
      setSyncKey(k => k + 1);
    } catch (err) {
      console.warn("GitHub live fetch notice:", err);
    } finally {
      setIsSyncing(false);
    }
  }, [githubUsername]);

  // Initial fetch and dynamic listeners
  useEffect(() => {
    fetchLiveGithubData();

    // Re-sync whenever the user switches back to this tab (e.g., after pushing code to GitHub)
    const handleWindowFocus = () => {
      fetchLiveGithubData();
    };
    window.addEventListener("focus", handleWindowFocus);

    // Auto-polling every 3 minutes for live updates
    const pollTimer = setInterval(() => {
      fetchLiveGithubData();
    }, 180000);

    return () => {
      window.removeEventListener("focus", handleWindowFocus);
      clearInterval(pollTimer);
    };
  }, [fetchLiveGithubData]);

  // Filtered repositories based on active tab
  const filteredRepos = useMemo(() => {
    if (filter === "enterprise") {
      return repos.filter(r => r.isPrivate);
    }
    if (filter === "recent") {
      return repos.filter(r => !r.isPrivate).slice(0, 6);
    }
    return repos.slice(0, 9);
  }, [repos, filter]);

  return (
    <section id="github" className="py-24 bg-transparent text-slate-800 dark:text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-slate-500/5 dark:bg-slate-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-gray-300 text-xs font-bold uppercase tracking-wider mb-4 border border-slate-300 dark:border-white/10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaGithub size={14} /> Open Source & Enterprise Code
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-gray-300 dark:to-white text-transparent bg-clip-text mb-3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            GitHub Activity & Repositories
          </motion.h2>

          <motion.p
            className="text-slate-600 dark:text-gray-300 max-w-2xl text-base leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Consistent engineering activity, production contributions, and open-source implementations updated live from GitHub.
          </motion.p>

          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-slate-500 to-slate-800 dark:from-gray-500 dark:to-gray-300 rounded-full mt-4 mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />

          {/* Live GitHub Sync Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-3xl flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-white/60 dark:bg-gray-900/40 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-sm text-xs"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-700 dark:text-gray-200">
                Live GitHub Sync Active
              </span>
              <span className="text-slate-400 dark:text-gray-500 hidden sm:inline">•</span>
              <span className="text-slate-600 dark:text-gray-400 hidden sm:inline">
                {profileStats.publicRepos} Public Repos
              </span>
              <span className="text-slate-400 dark:text-gray-500 hidden md:inline">•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium hidden md:inline truncate max-w-[280px]">
                🔥 Latest commit: {profileStats.latestCommit.replace("dineshkumar-mb/", "")} ({profileStats.latestCommitDate})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500 dark:text-gray-400">
                Synced {lastSyncTime}
              </span>
              <button
                onClick={() => fetchLiveGithubData(true)}
                disabled={isSyncing}
                className="px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white font-medium flex items-center gap-1.5 transition-all active:scale-95 disabled:opacity-50"
                title="Sync now from GitHub API"
              >
                <FaSyncAlt className={`${isSyncing ? "animate-spin text-blue-500" : ""}`} size={11} />
                <span>{isSyncing ? "Syncing..." : "Sync"}</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Repositories Section Header & Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-3 border-b border-slate-200/80 dark:border-white/10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FaCodeBranch className="text-blue-500" /> Repositories & Engineering Artifacts
            </h3>

            {/* Filter Tabs */}
            <div className="flex items-center bg-slate-200/80 dark:bg-white/10 rounded-full p-1 border border-slate-300 dark:border-white/10 text-xs">
              <button
                onClick={() => setFilter("all")}
                className={`px-3 py-1 rounded-full font-medium transition-all ${
                  filter === "all"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                All Featured ({repos.length})
              </button>
              <button
                onClick={() => setFilter("recent")}
                className={`px-3 py-1 rounded-full font-medium transition-all flex items-center gap-1 ${
                  filter === "recent"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <FaFire className="text-amber-400" size={11} /> Recently Pushed
              </button>
              <button
                onClick={() => setFilter("enterprise")}
                className={`px-3 py-1 rounded-full font-medium transition-all flex items-center gap-1 ${
                  filter === "enterprise"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <FaLock size={10} /> Enterprise Private
              </button>
            </div>
          </div>

          {/* Repositories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredRepos.map((repo, idx) => (
                <motion.div
                  key={repo.repo || idx}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-white/10 p-5 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div>
                    {/* Top Meta: Repo Name + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="font-mono text-xs text-slate-500 dark:text-gray-400 truncate">
                        {repo.repo}
                      </span>
                      {repo.isPrivate ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-gray-300 border border-slate-200 dark:border-white/10 whitespace-nowrap">
                          <FaLock className="text-[9px]" /> Enterprise Private
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 whitespace-nowrap">
                          Public Code
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                      {repo.name}
                    </h4>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-3 mb-4">
                      {repo.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`}></span>
                        <span className="text-xs text-slate-600 dark:text-gray-400 font-medium">{repo.language}</span>
                      </div>

                      {repo.pushedAt && (
                        <span className="text-[11px] text-slate-400 dark:text-gray-500 font-normal">
                          {formatTimeAgo(repo.pushedAt)}
                        </span>
                      )}
                    </div>

                    {repo.isPrivate ? (
                      <a
                        href={repo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5"
                      >
                        Live Demo <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    ) : (
                      <a
                        href={repo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5"
                      >
                        <FaGithub /> View Code ↗
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* GitHub Stats Cards Grid */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center mb-6">
          
          {/* Main Stats Card */}
          <motion.div
            className="w-full lg:w-1/2 p-2 bg-white/50 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&icon_color=8b5cf6&text_color=475569&bg_color=00000000&hide=issues,prs,contribs&count_private=true&include_all_commits=true&cache_seconds=1800&t=${syncKey}`}
              alt="GitHub Stats" 
              className="w-full h-auto dark:hidden drop-shadow-sm"
            />
            <img 
              src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=60a5fa&icon_color=a78bfa&text_color=cbd5e1&bg_color=00000000&hide=issues,prs,contribs&count_private=true&include_all_commits=true&cache_seconds=1800&t=${syncKey}`}
              alt="GitHub Stats Dark" 
              className="w-full h-auto hidden dark:block drop-shadow-sm"
            />
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            className="w-full lg:w-1/2 p-2 bg-white/50 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img 
              src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=475569&bg_color=00000000&cache_seconds=1800&t=${syncKey}`}
              alt="Top Languages" 
              className="w-full h-auto dark:hidden drop-shadow-sm"
            />
            <img 
              src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=60a5fa&text_color=cbd5e1&bg_color=00000000&cache_seconds=1800&t=${syncKey}`}
              alt="Top Languages Dark" 
              className="w-full h-auto hidden dark:block drop-shadow-sm"
            />
          </motion.div>

        </div>

        {/* Contribution Activity Calendar with Snake Game Animations */}
        <motion.div
          className="w-full p-4 lg:p-6 bg-white/50 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GithubSnakeCalendar 
            username={githubUsername} 
            isDark={isDark} 
            refreshKey={syncKey}
          />
        </motion.div>

        {/* Visit Profile Action Button */}
        <div className="flex justify-center mt-10">
          <a 
            href={`https://github.com/${githubUsername}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm shadow-lg hover:opacity-90 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <FaGithub size={18} /> Visit @{githubUsername} on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default GithubSection;
