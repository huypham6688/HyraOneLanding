import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  language: string;
  setLanguage: (language: string) => void;
};

const useAppStore = create<State, [["zustand/persist", State]]>(
  persist(
    (set, get) => ({
      language: "en",
      setLanguage: (language: string) => set({ language }),
    }),
    {
      name: "app",
      version: 1,
    }
  )
);

export default useAppStore;
