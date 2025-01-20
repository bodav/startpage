import { linkConfig } from "@/lib/config";
import LinkCell from "@/components/LinkCell";
import { useMediaQuery } from "react-responsive";
import useStore from "@/lib/store";
import useKeyDown from "@/hooks/useKeyDown";

function LinkGrid() {
  const config = linkConfig;
  const query = useStore((state) => state.query);

  const isXl = useMediaQuery({
    query: "(min-width: 1280px)"
  });

  useKeyDown(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        const highlightedLinks = config.links.filter((link) =>
          link.title.toLowerCase().includes(query.toLowerCase())
        );

        if (highlightedLinks.length === 1) {
          window.location.href = highlightedLinks[0].url;
        }
      }
    },
    [query, config.links]
  );

  return (
    <div className="flex h-full items-center justify-center text-black dark:text-white">
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
