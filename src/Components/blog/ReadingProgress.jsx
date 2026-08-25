import { useState, useEffect } from "react";

const ReadingProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(3)) * 100);
      }
    };

    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 transition-all duration-150 ease-out shadow-sm"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
