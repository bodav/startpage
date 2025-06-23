import LinkCell from "@/components/LinkCell";
import { useMediaQuery } from "react-responsive";
import useKeyDown from "@/hooks/useKeyDown";
import { QueryContext } from "@/context/QueryContext";
import { use } from "react";
import configJson from "@/config.json";
import { StartpageConfig } from "@/types/config";

function LinkGrid() {
  const config = configJson as StartpageConfig;

  const isXl = useMediaQuery({
    query: "(min-width: 1280px)"
  });

  const { query, setQuery } = use(QueryContext);

  useKeyDown((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setQuery("");
    } else if (e.key === "Backspace") {
      if (query.length > 0) {
        setQuery(query.slice(0, -1));
      }
    } else if (/^[a-zA-Z0-9\s]$/.test(e.key)) {
      setQuery(query + e.key);
    }
  });

  return (
    <div className="flex h-full items-center justify-center text-primary-foreground mx-10">
      <div className="grid xl:grid-rows-2 xl:grid-cols-6 grid-rows-3 grid-cols-4 gap-1">
        {config.links.map((link, index) => (
          <LinkCell
            key={link.title}
            title={link.title}
            url={link.url}
            icon={link.icon}
            index={index}
            isXl={isXl}
          />
        ))}
      </div>
    </div>
  );
}

export default LinkGrid;
