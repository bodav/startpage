import GithubLink from "./GithubLink";

function Header() {
  return (
    <>
      <div className="grid grid-cols-[auto_1fr_auto]">
        <div className="col-3">
          <GithubLink />
        </div>
      </div>
    </>
  );
}

export default Header;
