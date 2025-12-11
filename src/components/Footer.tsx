import { HouseWifi } from "lucide-react";
import { useEffect, useState } from "react";

interface FooterProps {
  internalUrl: string;
}

function Footer({ internalUrl }: FooterProps) {
  const [isReachable, setIsReachable] = useState(false);

  useEffect(() => {
    const checkUrl = async () => {
      try {
        await fetch(internalUrl, {
          method: "HEAD",
          mode: "no-cors",
          signal: AbortSignal.timeout(3000) // 3 second timeout
        });
        setIsReachable(true);
      } catch {
        setIsReachable(false);
      }
    };

    if (internalUrl) {
      checkUrl();
    }
  }, [internalUrl]);

  return (
    <>
      <div className="flex justify-between p-4 text-xs font-normal">
        <div>
          {isReachable && (
            <a
              href={internalUrl}
              target="_blank"
              className="text-muted hover:text-primary transition-all duration-200 ease-in-out">
              <HouseWifi className="w-6 h-6" />
            </a>
          )}
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}

export default Footer;
