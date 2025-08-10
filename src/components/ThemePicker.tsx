import React, { useState, useRef, useEffect } from "react";
import { Palette } from "lucide-react";

const THEMES = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
  { name: "Stone", value: "stone" },
  { name: "Amber", value: "amber" },
  { name: "Lime", value: "lime" },
  { name: "Rose", value: "rose" },
  { name: "Blue", value: "blue" }
];

function setTheme(theme: string) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function getTheme(): string {
  return localStorage.getItem("theme") || "light";
}

const ThemePicker: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(getTheme());
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const handleThemeSelect = (theme: string) => {
    setTheme(theme);
    setCurrent(theme);
    setOpen(false);
  };

  return (
    <div
      className="relative inline-block text-muted hover:text-primary transition-all duration-500 ease-in-out"
      ref={popoverRef}>
      <button
        className="focus:outline-hidden"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        aria-haspopup="true"
        aria-expanded={open}>
        <Palette className="w-6 h-6 inline-block mr-1" />
      </button>
      {open && (
        <div className="absolute right-0 z-10 bottom-full mb-2 w-40 rounded-lg bg-muted text-muted-foreground shadow-lg p-2">
          <div className="grid grid-cols-4 gap-2">
            {THEMES.map((theme) => (
              <button
                key={theme.value}
                title={theme.name}
                style={{
                  background: `var(--theme-color-${theme.value})`
                }}
                className={`h-6 w-6 rounded-lg flex items-center justify-center border-2
                  ${current === theme.value ? "ring-2 ring-highlight" : "ring-0"}
                `}
                onClick={() => handleThemeSelect(theme.value)}
                aria-label={theme.name}>
                {current === theme.value && (
                  <span className="text-xs font-bold text-blue-700">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemePicker;
