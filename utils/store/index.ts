import { create } from "zustand";
type Store = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  resultList: string[];
  setResultList: (data: string) => void;
  resetResultList: () => void;
};

export const useStore = create<Store>((set) => ({
  isLoading: false,
  setIsLoading: (payload) => set({ isLoading: payload }),
  resultList: [],
  setResultList: (data) =>
    set((state) => ({ resultList: [...state.resultList, data] })),
  resetResultList: () => set({ resultList: [] }),
}));
