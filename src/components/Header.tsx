import useKeyDown from "@/hooks/useKeyDown";
import GithubLink from "./GithubLink";
import { use } from "react";
import { QueryContext } from "@/context/QueryContext";

function Header() {
  const { query, setQuery } = use(QueryContext);

  useKeyDown((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setQuery("");
    } else if (e.key === "Backspace") {
      if (query.length > 0) {
        setQuery(query.slice(0, -1));
      }
    } else if (/^[a-zA-Z0-9\s]$/.test(e.key)) {
      setQuery(query + e.key);
    }
  });

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
