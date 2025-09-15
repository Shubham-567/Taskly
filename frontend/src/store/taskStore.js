import { create } from "zustand";
import {
  createTask,
  deleteTask,
  fetchTasks,
  toggleTaskStatus,
} from "../services/taskApi";

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
    }
  },

  addTask: async (data) => {
    try {
      const newTask = await createTask(data);
      set({ tasks: [newTask, ...get().tasks] });
    } catch (err) {
      set({ error: err.response?.data?.message || "Failed to create task" });
    }
  },

  editTask: async (id, data) => {
    try {
      const updated = await updateTask(id, data);

      set({
        tasks: get().tasks.map((task) => (task._id === id ? updated : task)),
      });
    } catch (err) {
      set({ error: err.response?.data?.message || "Failed to update task" });
    }
  },

  removeTask: async (id) => {
    try {
      await deleteTask(id);

      set({ tasks: get().tasks.map((task) => task._id !== id) });
    } catch (err) {
      set({ error: err.response?.data?.message || "Failed to delete task" });
    }
  },

  toggleTaskStatus: async (id) => {
    try {
      const updated = await toggleTaskStatus(id);

      set({
        task: get().tasks.map((task) => (task._id === id ? updated : task)),
      });
    } catch (err) {
      set({ error: err.response?.data?.message || "Failed to toggle task" });
    }
  },
}));

export default useTaskStore;
