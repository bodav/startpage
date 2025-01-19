import { useCallback, useEffect, useRef, useState } from "react";

function Header() {
  const [query, setQuery] = useState("");
  const inputQuery = useRef(null);

  const globalKeyHandler = useCallback(
    (e: KeyboardEvent) => {
      if (document.activeElement != inputQuery.current) {
        console.log(e);
        if (e.key === "Escape") {
          setQuery("");
        } else if (/^[a-zA-Z0-9]$/.test(e.key)) {
          setQuery(query + e.key);
        }
      }
    },
    [query]
  );

  useEffect(() => {
    document.addEventListener("keydown", globalKeyHandler);

    return () => {
      document.removeEventListener("keydown", globalKeyHandler);
    };
  }, [globalKeyHandler]);

  return (
    <>
      <div className="flex justify-center items-center p-4">
        <input
          type="text"
          value={query}
          ref={inputQuery}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-3xl p-2 focus:outline-none rounded-xl text-slate-950 dark:text-slate-100 bg-slate-100 dark:bg-slate-950 bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-blur-sm"
        />
      </div>
    </>
  );
}

export default Header;
