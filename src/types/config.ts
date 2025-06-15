interface StartpageConfig {
  background: BackgroundConfig;
  internalUrl: string;
  links: LinkItem[];
}

interface LinkItem {
  title: string;
  url: string;
  icon: string;
}

interface BackgroundConfig {
  url: string;
  brightness: number;
}

export type { StartpageConfig, LinkItem, BackgroundConfig };
