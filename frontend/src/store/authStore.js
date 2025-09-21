import { create } from "zustand";
import { getProfile, loginUser, registerUser } from "../services/authApi";

import { toast } from "react-toastify";

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  userLoading: false,
  error: null,

  register: async (data) => {
    try {
      set({ userLoading: true, error: null });

      const res = await registerUser(data);
      localStorage.setItem("token", res.token);

      set({ user: res, token: res.token, userLoading: false });

      toast.success("Registration successful");
    } catch (err) {
      set({
        error: err.response?.data?.message || "Registration failed",
        userLoading: false,
      });

      toast.error("Registration failed");
    }
  },

  login: async (data) => {
    try {
      set({ userLoading: true, error: null });

      const res = await loginUser(data);
      localStorage.setItem("token", res.token);

      set({ user: res, token: res.token, userLoading: false });

      toast.success("Login successful");
    } catch (err) {
      set({
        error: err.response?.data?.message || "Login failed",
        userLoading: false,
      });

      toast.error("Login failed");
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, error: null });

    toast.success("Logout successful");
  },

  fetchProfile: async () => {
    try {
      set({ userLoading: true });

      const res = await getProfile();

      set({ user: res, userLoading: false });
    } catch (err) {
      set({ user: null, token: null, userLoading: false });
      localStorage.removeItem("token");
    }
  },
}));

export default useAuthStore;
