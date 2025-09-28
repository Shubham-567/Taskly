import { create } from "zustand";
import { getProfile, loginUser, registerUser } from "../services/authApi";

import { toast } from "react-toastify";

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,

  register: async (data) => {
    try {
      set({ loading: true, error: null });

      const res = await registerUser(data);
      localStorage.setItem("token", res.token);

      set({ user: res, token: res.token, loading: false });

      toast.success("Registration successful");
    } catch (err) {
      set({
        error: err.response?.data?.message || "Registration failed",
        loading: false,
      });

      // toast.error("Registration failed");
    }
  },

  login: async (data) => {
    try {
      set({ loading: true, error: null });

      const res = await loginUser(data);
      localStorage.setItem("token", res.token);

      set({ user: res, token: res.token, loading: false });

      toast.success("Login successful");
    } catch (err) {
      set({
        error: err.response?.data?.message || "Login failed",
        loading: false,
      });

      // toast.error("Login failed");
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null, error: null });

    toast.success("Logout successful");
  },

  fetchProfile: async () => {
    try {
      set({ loading: true });

      const res = await getProfile();

      set({ user: res, loading: false });
    } catch (err) {
      set({ user: null, token: null, loading: false });
      localStorage.removeItem("token");
    }
  },
}));

export default useAuthStore;
