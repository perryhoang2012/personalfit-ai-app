import { create } from "zustand";

interface GeneralState {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
}

export const useGeneralStore = create<GeneralState>((set) => ({
  isLoading: false,
  showLoading: () => set({ isLoading: true }),
  hideLoading: () => set({ isLoading: false }),
}));
