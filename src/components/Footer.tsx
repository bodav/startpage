import DarkModeToggle from "@/components/DarkModeToggle";
import { linkConfig } from "@/lib/config";

function Footer() {
  const config = linkConfig;
  const internalDomain = new URL(config.internalUrl).hostname;

  return (
    <>
      <div className="flex justify-between text-white dark:text-black m-4 text-xs font-normal">
        <div>
          <a href={config.internalUrl} target="_blank">
            {internalDomain}
          </a>
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </>
  );
}

export default Footer;
