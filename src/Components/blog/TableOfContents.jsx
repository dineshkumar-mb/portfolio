import { useState, useEffect } from "react";
import { FaList, FaChevronDown, FaChevronUp } from "react-icons/fa";

const TableOfContents = ({ sections }) => {
  const [activeId, setActiveId] = useState("");
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpenMobile(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full">
      {/* Mobile Collapsible TOC */}
      <div className="lg:hidden mb-8 bg-white/80 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="w-full px-5 py-3.5 flex items-center justify-between font-bold text-sm text-slate-800 dark:text-white"
        >
          <span className="flex items-center gap-2">
            <FaList className="text-blue-500" />
            On this page
          </span>
          {isOpenMobile ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
        </button>

        {isOpenMobile && (
          <ul className="px-5 pb-4 space-y-2.5 border-t border-slate-200/60 dark:border-white/10 pt-3">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`block text-xs font-medium transition-colors ${
                    activeId === sec.id
                      ? "text-blue-600 dark:text-blue-400 font-bold"
                      : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <div className="hidden lg:block bg-white/40 dark:bg-gray-900/30 backdrop-blur-md p-6 rounded-3xl border border-slate-200/60 dark:border-white/10 sticky top-28 shadow-sm">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-400 mb-4 flex items-center gap-2">
          <FaList className="text-blue-500" />
          Table of Contents
        </h4>

        <ul className="space-y-3 text-sm border-l-2 border-slate-200 dark:border-white/10 pl-3">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                  className={`block transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-bold translate-x-1"
                      : "text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white font-normal"
                  }`}
                >
                  {sec.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
