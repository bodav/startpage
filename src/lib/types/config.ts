export interface LinkItem {
	title: string;
	url: string;
	icon: string;
}

export interface BackgroundConfig {
	url: string;
}

export interface StartpageConfig {
	background: BackgroundConfig;
	internalUrl: string;
	links: LinkItem[];
}
