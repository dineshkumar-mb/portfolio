import { useState } from "react";
import { FaCopy, FaCheck, FaCode } from "react-icons/fa";

const CodeBlock = ({ code, language = "javascript", filename }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-slate-800 bg-[#0d1117] shadow-xl text-xs md:text-sm font-mono">
      {/* Code Header Bar */}
      <div className="px-4 py-2.5 bg-[#161b22] border-b border-slate-800/80 flex items-center justify-between text-slate-400">
        <div className="flex items-center gap-2">
          <FaCode className="text-blue-400 text-xs" />
          <span className="font-semibold text-slate-300 text-xs">{filename || language}</span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-sans font-medium text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Copy code snippet"
        >
          {copied ? (
            <>
              <FaCheck className="text-green-400 text-xs" />
              <span className="text-green-400 font-bold">Copied!</span>
            </>
          ) : (
            <>
              <FaCopy className="text-xs" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto text-slate-200 leading-relaxed font-mono selection:bg-blue-500/30">
        <pre className="m-0 whitespace-pre">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
