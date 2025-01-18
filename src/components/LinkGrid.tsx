import { linkConfig } from "@/lib/config";
import LinkCell from "./LinkCell";

function LinkGrid() {
  const config = linkConfig;

  return (
    <div className="flex h-full items-center justify-center text-black dark:text-white">
      <div className="grid md:grid-rows-2 md:grid-cols-6 grid-rows-3 grid-cols-4 gap-1">
        {config.links.map((link, index) => (
          <LinkCell
            key={link.title}
            title={link.title}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default LinkGrid;
