/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GITHUB_SHA: string;
  readonly GITHUB_REPOSITORY: string;
  readonly GITHUB_REF_NAME: string;
}
