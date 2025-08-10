import ThemePicker from "./ThemePicker";
import { HouseWifi } from 'lucide-react';

interface FooterProps {
  internalUrl: string;
}

function Footer({ internalUrl }: FooterProps) {
  return (
    <>
      <div className="flex justify-between  m-4 text-xs font-normal">
        <div>
          <a
            href={internalUrl}
            target="_blank"
            className="text-muted hover:text-primary transition-all duration-200 ease-in-out">
            <HouseWifi className="w-6 h-6" />
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
