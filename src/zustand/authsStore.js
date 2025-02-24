import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const token = localStorage.getItem("accessToken");
const useAuthStore = create(
  immer((set) => ({
    token,
    isAuthenticated: !!token,
    user: { userId: "", nickname: "" },
    login: (token, userId, nickname) => {
      localStorage.setItem("accessToken", token);
      set({ isAuthenticated: true });
      set({ user: { userId, nickname } });
    },
    logout: () => {
      localStorage.removeItem("accessToken");
      set({ isAuthenticated: false });
      set({ user: null });
    },
  }))
);

export default useAuthStore;
