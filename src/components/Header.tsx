import GithubLink from "./GithubLink";

function Header() {
  return (
    <>
      <div className="grid grid-cols-[auto_1fr_auto] pb-2">
        <div className="col-3 text-muted hover:text-primary transition-all duration-500 ease-in-out">
          <GithubLink />
        </div>
      </div>
    </>
  );
}

export default Header;
