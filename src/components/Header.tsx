import GithubLink from "./GithubLink";

function Header() {
  return (
    <>
      <div className="grid grid-cols-[auto_1fr_auto]">
        <div className="col-3 text-white dark:text-black">
          <GithubLink />
        </div>
      </div>
    </>
  );
}

export default Header;
