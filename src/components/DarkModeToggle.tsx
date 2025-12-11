import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", String(isDark));
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="opacity-60 hover:opacity-80 transition-all duration-500 ease-in-out"
    >
      {isDark ? (
        <Sun className="w-6 h-6 fill-current" />
      ) : (
        <Moon className="w-6 h-6 fill-current" />
      )}
    </button>
  );
};

export default DarkModeToggle;
