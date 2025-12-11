import GithubLink from "./GithubLink";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  return (
    <>
      <div className="grid grid-cols-[auto_1fr_auto] pb-2">
        <div className="col-3 flex justify-end gap-3 text-white dark:text-black">
          <DarkModeToggle />
          <GithubLink />
        </div>
      </div>
    </>
  );
}

export default Header;
