import DarkModeToggle from "@/components/DarkModeToggle";

interface FooterProps {
  internalUrl: string;
}

function Footer({ internalUrl }: FooterProps) {
  const internalDomain = new URL(internalUrl).hostname;

  return (
    <>
      <div className="flex justify-between text-muted hover:text-primary m-4 text-xs font-normal">
        <div>
          <a
            href={internalUrl}
            target="_blank"
            className="transition-all duration-200 ease-in-out">
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
