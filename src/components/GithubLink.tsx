import GithubIcon from "@/assets/icons/github.svg?react";

const GithubLink = () => {
  const repo = import.meta.env.VITE_GITHUB_REPOSITORY;
  const ref = import.meta.env.VITE_GIT_REF.split("/").pop() || "N/A";
  const url = `https://github.com/${repo}/tree/${ref}`;

  return (
    <a
      href={url}
      target="_blank"
      className="opacity-60 hover:opacity-80 transition-all duration-500 ease-in-out">
      <GithubIcon className="w-6 h-6 fill-current" />
    </a>
  );
};

export default GithubLink;
