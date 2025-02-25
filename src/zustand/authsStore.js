import { create } from "zustand";
import { persist } from "zustand/middleware";

const token = localStorage.getItem("accessToken");
const useAuthStore = create(
  persist(
    (set) => ({
      token,
      isAuthenticated: !!token,
      user: { userId: "", nickname: "" },
      login: (token, userId, nickname) => {
        set({ token });
        set({ isAuthenticated: true });
        set({ user: { userId, nickname } });
      },
      logout: () => {
        set({ token: null });
        set({ isAuthenticated: false });
        set({ user: null });
      },
    }),
    {
      name: "now-user-storage",
    }
  )
);

export default useAuthStore;
