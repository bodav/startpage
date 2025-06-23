import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const DEFAULT_THEME = "light";

function DarkModeToggle() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : DEFAULT_THEME;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="rounded-full focus:outline-hidden transition-all duration-200 ease-in-out"
      onClick={toggleDarkMode}>
      {theme === "light" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}

export default DarkModeToggle;
