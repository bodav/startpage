import LinkIcon from "@/components/LinkIcon";
import { QueryContext } from "@/context/QueryContext";
import { use } from "react";

interface LinkCellProps {
  title: string;
  url: string;
  icon: string;
  index: number;
  isXl: boolean;
}

const xlRounding: Record<number, string> = {
  0: "rounded-tl-2xl",
  5: "rounded-tr-2xl",
  6: "rounded-bl-2xl",
  11: "rounded-br-2xl"
};

const mdRounding: Record<number, string> = {
  0: "rounded-tl-2xl",
  3: "rounded-tr-2xl",
  8: "rounded-bl-2xl",
  11: "rounded-br-2xl"
};

const LinkCell: React.FC<LinkCellProps> = ({
  title,
  url,
  icon,
  index,
  isXl
}) => {
  const { query } = use(QueryContext);

  const roundCell = (index: number, isXl: boolean) =>
    isXl ? xlRounding[index] || "" : mdRounding[index] || "";

  const getHighlight = () => {
    if (query.length > 0 && title.toLowerCase().includes(query.toLowerCase())) {
      return "ring-2 ring-blue-500/70 ring-inset";
    } else {
      return "";
    }
  };

  return (
    <div
      className={`text-black dark:text-white bg-white/75 dark:bg-black/50 hover:bg-white/95 dark:hover:dark:bg-black/80 backdrop-filter backdrop-blur-xs ${roundCell(
        index,
        isXl
      )} ${getHighlight()}`}>
      <a
        href={url}
        target="_blank"
        className="flex items-center justify-start p-6">
        <LinkIcon icon={icon} className="w-10 h-10 fill-current" />
        <span className="hidden text-sm font-normal ml-4 sm:inline">
          {title}
        </span>
      </a>
    </div>
  );
};

export default LinkCell;
