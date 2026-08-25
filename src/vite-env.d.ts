// Environment variables injected at build time (see .env / .env.development)

interface ImportMetaEnv {
	readonly VITE_APP_NAME: string;
	readonly VITE_GITHUB_REPOSITORY: string;
	readonly VITE_GIT_REF: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
