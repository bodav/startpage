import React from "react";
import DynamicSvg from "@/components/DynamicSvg";
import Github from "../assets/icons/github.svg?react";

interface LinkCellProps {
  title: string;
  url: string;
  Icon: React.FC;
}

const LinkCell: React.FC<LinkCellProps> = ({ title, url, Icon }) => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 bg-opacity-50 dark:bg-opacity-40 hover:bg-opacity-80 dark:hover:bg-opacity-80 backdrop-filter backdrop-blur-sm">
      <a href={url} className="flex items-center justify-start p-4 space-x-2">
        {/* <DynamicSvg icon={icon} className="w-8 h-8" /> */}
        <Github className="w-8 h-8" />
        <span className="hidden text-sm font-light sm:inline">{title}</span>
      </a>
    </div>
  );
};

export default LinkCell;
