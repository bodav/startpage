import React from "react";
import GithubIcon from "@/assets/icons/github.svg?react";
import RedditIcon from "@/assets/icons/reddit.svg?react";
import JvIcon from "@/assets/icons/jv.svg?react";
import YcombinatorIcon from "@/assets/icons/ycombinator.svg?react";
import DmiIcon from "@/assets/icons/dmi.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";
import YoutubeIcon from "@/assets/icons/youtube.svg?react";
import DrIcon from "@/assets/icons/dr.svg?react";
import XIcon from "@/assets/icons/x.svg?react";
import StravaIcon from "@/assets/icons/strava.svg?react";
import PolarFlowIcon from "@/assets/icons/polarflow.svg?react";
import PushoverIcon from "@/assets/icons/pushover.svg?react";
import Bluesky from "@/assets/icons/bluesky.svg?react";

const ICONS: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  jv: JvIcon,
  ycombinator: YcombinatorIcon,
  dmi: DmiIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  dr: DrIcon,
  x: XIcon,
  strava: StravaIcon,
  polarflow: PolarFlowIcon,
  pushover: PushoverIcon,
  bluesky: Bluesky,
  reddit: RedditIcon
};

interface LinkIconProps {
  icon: string;
  className?: string;
}

const LinkIcon: React.FC<LinkIconProps> = ({ icon, className }) => {
  const SvgIcon = ICONS[icon];
  if (!SvgIcon) return null;
  return <SvgIcon className={className} />;
};

export default LinkIcon;
