const linkConfig = {
  internalUrl: "http://srv.internal",
  links: [
    {
      title: "Github",
      url: "https://github.com",
      icon: "github"
    },
    {
      title: "Reddit",
      url: "https://reddit.com",
      icon: "reddit"
    },
    {
      title: "JV/Aabenraa",
      url: "https://jv.dk/aabenraa",
      icon: "jv"
    },
    {
      title: "Hacker News",
      url: "https://news.ycombinator.com",
      icon: "ycombinator"
    },
    {
      title: "DMI",
      url: "https://www.dmi.dk/lokation/show/DK/2625070/Aabenraa/",
      icon: "accuweather"
    },
    {
      title: "Facebook",
      url: "https://facebook.com",
      icon: "facebook"
    },
    {
      title: "Youtube",
      url: "https://youtube.com",
      icon: "youtube"
    },
    {
      title: "DR/TV",
      url: "https://dr.dk/tv",
      icon: "dr"
    },
    {
      title: "Twitter",
      url: "https://twitter.com/i/lists/1583402559238283265",
      icon: "x"
    },
    {
      title: "Strava",
      url: "https://strava.com",
      icon: "strava"
    },
    {
      title: "Garmin",
      url: "https://connect.garmin.com/modern/home",
      icon: "garmin"
    },
    {
      title: "Pushover",
      url: "https://client.pushover.net/",
      icon: "pusher"
    }
  ]
} satisfies LinkConfig;

const backgroundConfig = {
  backgroundImage:
    "https://images.unsplash.com/photo-1735437653041-95370241f201?q=80&w=3387&auto=format&fit=crop",
  //"https://images.unsplash.com/photo-1734887650648-a4b092ee26ff?q=80&w=3305&auto=format&fit=crop",
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
