import DarkModeToggle from "@/components/DarkModeToggle";
import { linkConfig } from "@/lib/config";

function Footer() {
  const repo = import.meta.env.VITE_GITHUB_REPOSITORY;
  const url = `https://github.com/${repo}`;
  const ref = import.meta.env.VITE_GIT_REF.split("/").pop() || "N/A";
  const config = linkConfig;
  const internalDomain = new URL(config.internalUrl).hostname;

  return (
    <>
      <div className="flex justify-between text-slate-100 dark:text-slate-950 m-4 text-xs font-light">
        <div>
          <a href={config.internalUrl} target="_blank">
            {internalDomain}
          </a>
        </div>
        <div>
          <a href={url} target="_blank" rel="noreferrer">
            {ref} - {repo}
          </a>
          <div className="inline ml-4">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
