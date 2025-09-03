import api from "./api";

export const fetchTasks = async () => {
  const res = await api.get("/tasks");
  return res.data;
};

export const createTask = async (data) => {
  const res = await api.post("/tasks", data);
  return res.data;
};

export const updateTask = async (id, data) => {
  const res = await api.put(`/tasks/${id}`, data);
  return res.data;
};

export const deleteTask = async (id) => {
  const res = await api.delete(`/tasks/${id}`);
  return res.data;
};

// toggle task status (pending, completed)
export const toggleTaskStatus = async (id) => {
  const res = await api.patch(`/tasks/${id}/toggle`);
  return res.data;
};
