import LinkCell from "@/components/LinkCell";
import useKeyDown from "@/hooks/useKeyDown";
import { QueryContext } from "@/context/QueryContext";
import { use, useState, useRef, useEffect } from "react";
import configJson from "@/config.json";
import { StartpageConfig } from "@/types/config";

function LinkGrid() {
  const config = configJson as StartpageConfig;
  const { query, setQuery } = use(QueryContext);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const COLS = 4;
  const totalLinks = config.links.length;

  useEffect(() => {
    if (focusedIndex >= 0 && linkRefs.current[focusedIndex]) {
      linkRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  useKeyDown((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setQuery("");
      setFocusedIndex(-1);
    } else if (e.key === "Backspace") {
      if (query.length > 0) {
        setQuery(query.slice(0, -1));
      }
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setQuery("");
      setFocusedIndex((prev) => {
        if (prev === -1) return 0;
        return prev < totalLinks - 1 ? prev + 1 : prev;
      });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setQuery("");
      setFocusedIndex((prev) => {
        if (prev === -1) return 0;
        return prev > 0 ? prev - 1 : prev;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setQuery("");
      setFocusedIndex((prev) => {
        if (prev === -1) return 0;
        const next = prev + COLS;
        return next < totalLinks ? next : prev;
      });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setQuery("");
      setFocusedIndex((prev) => {
        if (prev === -1) return 0;
        const next = prev - COLS;
        return next >= 0 ? next : prev;
      });
    } else if (e.key === "Enter") {
      if (focusedIndex >= 0) {
        e.preventDefault();
        setQuery("");
        setFocusedIndex(-1);
        linkRefs.current[focusedIndex]?.click();
      }
    } else if (/^[a-zA-Z0-9\s]$/.test(e.key)) {
      setQuery(query + e.key);
    }
  });

  return (
    <div className="flex h-full items-center justify-center text-primary-foreground">
      <div className="grid  grid-rows-3 grid-cols-4 gap-2 text-white dark:text-black">
        {config.links.map((link, index) => (
          <LinkCell
            key={link.title}
            title={link.title}
            url={link.url}
            icon={link.icon}
            index={index}
            isFocused={focusedIndex === index}
            ref={(el: HTMLAnchorElement | null) => { linkRefs.current[index] = el; }}
          />
        ))}
      </div>
    </div>
  );
}

export default LinkGrid;
