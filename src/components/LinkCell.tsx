import LinkIcon from "@/components/LinkIcon";
import { QueryContext } from "@/context/QueryContext";
import { use, forwardRef } from "react";

interface LinkCellProps {
  title: string;
  url: string;
  icon: string;
  index: number;
  isFocused?: boolean;
}

const mdRounding: Record<number, string> = {
  0: "rounded-tl-2xl",
  3: "rounded-tr-2xl",
  8: "rounded-bl-2xl",
  11: "rounded-br-2xl"
};

const LinkCell = forwardRef<HTMLAnchorElement, LinkCellProps>(({
  title,
  url,
  icon,
  index,
  isFocused = false
}, ref) => {
  const { query } = use(QueryContext);

  const roundCell = (index: number) =>
    mdRounding[index] || "";

  const isSelected =
    query.length > 0 && title.toLowerCase().includes(query.toLowerCase());

  const getFocusStyle = () => {
    if (isFocused) return { boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(225, 225, 225)' };
    if (isSelected) return { boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(225, 225, 225)' };
    return {};
  };

  return (
    <div
      aria-selected={isSelected ? "true" : undefined}
      className={`glass ${roundCell(index)} transition-all`}
      style={getFocusStyle()}>
      <a
        ref={ref}
        href={url}
        target="_blank"
        className="flex items-center justify-start p-6 outline-none">
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
});

LinkCell.displayName = 'LinkCell';

export default LinkCell;
