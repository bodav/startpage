import { createContext, useState, ReactNode } from "react";

interface QueryContextType {
  query: string;
  setQuery: (q: string) => void;
}

const initialState: QueryContextType = {
  query: "",
  setQuery: () => null
};

const QueryContext = createContext<QueryContextType>(initialState);

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState("");

  return <QueryContext value={{ query, setQuery }}>{children}</QueryContext>;
};

export { QueryContext, QueryProvider };
