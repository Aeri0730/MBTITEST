import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const token = localStorage.getItem("accessToken");
const useAuthStore = create(
  immer((set) => ({
    token,
    isAuthenticated: !!token,
    login: (token) => {
      localStorage.setItem("accessToken", token);
      set({ isAuthenticated: true });
    },
    logout: () => {
      localStorage.removeItem("accessToken");
      set({ isAuthenticated: false });
    },
  }))
);

export default useAuthStore;
