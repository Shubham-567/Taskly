import { create } from "zustand";
import {
  createTask,
  updateTask,
  deleteTask,
  fetchTasks,
  toggleTaskStatus,
} from "../services/taskApi";
import { toast } from "react-toastify";

const useTaskStore = create((set, get) => ({
  tasks: [],
  taskLoading: false,
  error: null,

  loadTasks: async () => {
    try {
      set({ taskLoading: true, error: null });

      const res = await fetchTasks();

      set({ tasks: res, taskLoading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Failed to load task",
        taskLoading: false,
      });

      toast.error("Failed to load task");
    }
  },

  addTask: async (data) => {
    try {
      const newTask = await createTask(data);
      set({ tasks: [newTask, ...get().tasks] });

      toast.success("Task created successfully");
    } catch (err) {
      set({ error: err.response?.data?.message || "Failed to create task" });

      toast.error("Failed to create task");
    }
  },

  editTask: async (id, data) => {
    try {
      const updated = await updateTask(id, data);

      set({
        tasks: get().tasks.map((task) => (task._id === id ? updated : task)),
      });

      toast.success("Task updated successfully");
    } catch (err) {
      set({ error: err.response?.data?.message || "Failed to update task" });

      toast.error("Failed to update task");
    }
  },

  removeTask: async (id) => {
    try {
      await deleteTask(id);

      set({
        tasks: get().tasks.filter((task) => task._id !== id),
      });

      toast.success("Task deleted successfully");
    } catch (err) {
      set({ error: err.response?.data?.message || "Failed to delete task" });

      toast.error("Failed to delete task");
    }
  },

  toggleTaskStatus: async (id) => {
    try {
      const updated = await toast.promise(toggleTaskStatus(id), {
        pending: "Toggling task status...",
        success: "Task status toggled successfully",
        error: "Failed to toggle task status",
      });

      set({
        tasks: get().tasks.map((task) => (task._id === id ? updated : task)),
      });
    } catch (err) {
      set({ error: err.response?.data?.message || "Failed to toggle task" });

      toast.error("Failed to toggle task");
    }
  },
}));

export default useTaskStore;
