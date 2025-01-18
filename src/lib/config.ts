import Github from "@/assets/icons/github.svg?react";

const linkConfig = {
  internalUrl: "http://srv.internal",
  links: [
    {
      title: "Github",
      url: "https://github.com",
      icon: Github
    },
    {
      title: "Reddit",
      url: "https://reddit.com",
      icon: "github"
    },
    {
      title: "JV/Aabenraa",
      url: "https://jv.dk/aabenraa",
      icon: "github"
    },
    {
      title: "Hacker News",
      url: "https://news.ycombinator.com",
      icon: "github"
    },
    {
      title: "DMI",
      url: "https://www.dmi.dk/lokation/show/DK/2625070/Aabenraa/",
      icon: "github"
    },
    {
      title: "Facebook",
      url: "https://facebook.com",
      icon: "github"
    },
    {
      title: "Youtube",
      url: "https://youtube.com",
      icon: "github"
    },
    {
      title: "DR/TV",
      url: "https://dr.dk/tv",
      icon: "github"
    },
    {
      title: "Twitter",
      url: "https://twitter.com/i/lists/1583402559238283265",
      icon: "github"
    },
    {
      title: "Strava",
      url: "https://strava.com",
      icon: "github"
    },
    {
      title: "Garmin",
      url: "https://connect.garmin.com/modern/home",
      icon: "github"
    },
    {
      title: "Pushover",
      url: "https://client.pushover.net/",
      icon: "github"
    }
  ]
} satisfies LinkConfig;

const backgroundConfig = {
  backgroundImage:
    //"https://images.unsplash.com/photo-1735064812398-48f3bb6330c1?q=80&w=3387&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548777123-e216912df7d8?q=80&w=1935&auto=format&fit=crop",
  brightness: 80
} satisfies BackgroundConfig;

interface LinkConfig {
  internalUrl: string;
  links: LinkItem[];
}

interface LinkItem {
  title: string;
  url: string;
  icon: string;
}

interface BackgroundConfig {
  backgroundImage: string;
  brightness: number;
}

export { linkConfig, backgroundConfig };
export type { LinkConfig, BackgroundConfig };
