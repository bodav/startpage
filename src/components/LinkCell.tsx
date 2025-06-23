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

  const isSelected =
    query.length > 0 && title.toLowerCase().includes(query.toLowerCase());

  return (
    <div
      aria-selected={isSelected ? "true" : undefined}
      className={`bg-muted text-muted-foreground hover:text-primary-foreground hover:bg-primary backdrop-filter backdrop-blur-xs transition-all duration-500 ease-in-out aria-selected:inset-ring-2 aria-selected:inset-ring-highlight ${roundCell(
        index,
        isXl
      )}`}>
      <a
        href={url}
        target="_blank"
        className="flex items-center justify-start p-6">
        <LinkIcon
          icon={icon}
          className="w-10 h-10 fill-current stroke-current"
        />
        <span className="hidden text-sm font-normal ml-4 sm:inline">
          {title}
        </span>
      </a>
    </div>
  );
};

export default LinkCell;
