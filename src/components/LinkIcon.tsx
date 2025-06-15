import React from "react";
import GithubIcon from "@/assets/icons/github.svg?react";
import RedditIcon from "@/assets/icons/reddit.svg?react";
import JvIcon from "@/assets/icons/jv.svg?react";
import YcombinatorIcon from "@/assets/icons/ycombinator.svg?react";
import AccuweatherIcon from "@/assets/icons/accuweather.svg?react";
import FacebookIcon from "@/assets/icons/facebook.svg?react";
import YoutubeIcon from "@/assets/icons/youtube.svg?react";
import DrIcon from "@/assets/icons/dr.svg?react";
import XIcon from "@/assets/icons/x.svg?react";
import StravaIcon from "@/assets/icons/strava.svg?react";
import GarminIcon from "@/assets/icons/garmin.svg?react";
import PusherIcon from "@/assets/icons/pusher.svg?react";

const ICONS: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  reddit: RedditIcon,
  jv: JvIcon,
  ycombinator: YcombinatorIcon,
  accuweather: AccuweatherIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  dr: DrIcon,
  x: XIcon,
  strava: StravaIcon,
  garmin: GarminIcon,
  pusher: PusherIcon
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
