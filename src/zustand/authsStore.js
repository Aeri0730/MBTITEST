import { create } from "zustand";
import { persist } from "zustand/middleware";

const token = localStorage.getItem("accessToken");
const useAuthStore = create(
  persist((set) => ({
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
  }),
{
  name:"now-user-storage",
})
);

export default useAuthStore;
