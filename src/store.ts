import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface MobileStore {
  isActive: boolean;
  changeIsActive: () => void;
}

const useMobileStore = create<MobileStore>()(
  devtools((set) => ({
    isActive: false,
    changeIsActive: () => {
      set((s) => ({ isActive: !s.isActive }));
    },
  }))
);

export default useMobileStore;
