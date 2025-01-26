import DynamicSvg from "@/components/DynamicSvg";
import useStore from "@/lib/store";

interface LinkCellProps {
  title: string;
  url: string;
  icon: string;
  index: number;
  isXl: boolean;
}

const LinkCell: React.FC<LinkCellProps> = ({
  title,
  url,
  icon,
  index,
  isXl
}) => {
  const query = useStore((state) => state.query);

  const roundCell = (index: number, isXl: boolean) => {
    if (isXl) {
      if (index === 0) {
        return "rounded-tl-2xl";
      } else if (index === 5) {
        return "rounded-tr-2xl";
      } else if (index === 6) {
        return "rounded-bl-2xl";
      } else if (index === 11) {
        return "rounded-br-2xl";
      } else {
        return "";
      }
    } else {
      if (index === 0) {
        return "rounded-tl-2xl";
      } else if (index === 3) {
        return "rounded-tr-2xl";
      } else if (index === 8) {
        return "rounded-bl-2xl";
      } else if (index === 11) {
        return "rounded-br-2xl";
      } else {
        return "";
      }
    }
  };

  const getHighlight = () => {
    if (query.length > 0 && title.toLowerCase().includes(query.toLowerCase())) {
      return "bg-white/95 dark:bg-black/80";
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
        rel="noreferrer noopener"
        className="flex items-center justify-start p-6">
        <DynamicSvg icon={icon} className="w-10 h-10 fill-current" />
        <span className=" hidden text-sm font-normal ml-4 sm:inline">
          {title}
        </span>
      </a>
    </div>
  );
};

export default LinkCell;
