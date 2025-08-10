import GithubIcon from "@/assets/icons/github.svg?react";

const GithubLink = () => {
  const repo = import.meta.env.VITE_GITHUB_REPOSITORY;
  const url = `https://github.com/${repo}`;
  const ref = import.meta.env.VITE_GIT_REF.split("/").pop() || "N/A";
  const sha = import.meta.env.VITE_GIT_SHA.slice(0, 7);

  return (
    <a
      href={url}
      target="_blank"
      className="flex items-center justify-start text-xs font-normal transition-all duration-500 ease-in-out">
      <GithubIcon className="w-6 h-6 mr-2 fill-current" />
      <span>
        <div className="flex items-center justify-center">
          <span>{ref}-{sha}</span>
        </div>
      </span>
    </a>
  );
};

export default GithubLink;
