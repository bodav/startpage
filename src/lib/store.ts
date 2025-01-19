import { create } from "zustand";

interface QueryState {
  query: string;
  setQuery: (q: string) => void;
}

const useStore = create<QueryState>()((set) => ({
  query: "",
  setQuery: (q) => set({ query: q })
}));

export default useStore;
