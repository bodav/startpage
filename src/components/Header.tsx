import useKeyDown from "@/hooks/useKeyDown";
import useStore from "@/lib/store";
import { useRef } from "react";

function Header() {
  const inputQuery = useRef(null);

  const query = useStore((state) => state.query);
  const setQuery = useStore((state) => state.setQuery);

  useKeyDown(
    (e: KeyboardEvent) => {
      if (document.activeElement != inputQuery.current) {
        if (e.key === "Escape") {
          setQuery("");
        } else if (e.key === "Backspace") {
          if (query.length > 0) {
            setQuery(query.slice(0, -1));
          }
        } else if (/^[a-zA-Z0-9\s]$/.test(e.key)) {
          setQuery(query + e.key);
        }
      }
    },
    [query, setQuery]
  );

  return (
    <>
      <div className="flex justify-center items-center p-4">
        <input
          type="text"
          value={query}
          ref={inputQuery}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-3xl p-2 focus:outline-none font-medium rounded-xl text-black dark:text-white bg-white dark:bg-black bg-opacity-30 dark:bg-opacity-30 backdrop-filter backdrop-blur-sm"
        />
      </div>
    </>
  );
}

export default Header;
