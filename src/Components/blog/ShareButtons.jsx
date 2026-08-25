import { useState } from "react";
import { FaLinkedin, FaTwitter, FaLink, FaCheck } from "react-icons/fa";

const ShareButtons = ({ title, url }) => {
  const [copied, setCopied] = useState(false);

  const articleUrl = url || window.location.href;
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(title);

  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  return (
    <div className="flex items-center gap-3 py-6 my-8 border-y border-slate-200/70 dark:border-white/10">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mr-2">
        Share Article:
      </span>

      <a
        href={linkedinShare}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
        title="Share on LinkedIn"
      >
        <FaLinkedin size={16} />
      </a>

      <a
        href={twitterShare}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
        title="Share on X (Twitter)"
      >
        <FaTwitter size={16} />
      </a>

      <button
        onClick={handleCopyLink}
        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-xs font-semibold cursor-pointer"
        title="Copy article link"
      >
        {copied ? (
          <>
            <FaCheck className="text-green-500" />
            <span className="text-green-500 font-bold">Link Copied</span>
          </>
        ) : (
          <>
            <FaLink />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ShareButtons;
