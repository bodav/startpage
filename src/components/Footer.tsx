import ThemePicker from "./ThemePicker";

interface FooterProps {
  internalUrl: string;
}

function Footer({ internalUrl }: FooterProps) {
  const internalDomain = new URL(internalUrl).hostname;

  return (
    <>
      <div className="flex justify-between  m-4 text-xs font-normal">
        <div>
          <a
            href={internalUrl}
            target="_blank"
            className="text-muted hover:text-primary transition-all duration-200 ease-in-out">
            {internalDomain}
          </a>
        </div>
        <div>
          <ThemePicker />
        </div>
      </div>
    </>
  );
}

export default Footer;
