import React from "react";
import DynamicSvg from "@/components/DynamicSvg";

interface LinkCellProps {
  title: string;
  url: string;
  icon: string;
}

const LinkCell: React.FC<LinkCellProps> = ({ title, url, icon }) => {
  return (
    <div className="text-slate-950 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 bg-opacity-50 dark:bg-opacity-40 hover:bg-opacity-80 dark:hover:bg-opacity-80 backdrop-filter backdrop-blur-sm">
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-start p-6">
        <DynamicSvg icon={icon} className="w-10 h-10 fill-current" />
        <span className=" hidden text-sm font-light ml-4 sm:inline">
          {title}
        </span>
      </a>
    </div>
  );
};

export default LinkCell;
