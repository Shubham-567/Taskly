import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleStatus,
} from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// private
router.get("/", protect, getTasks);
router.post("/", protect, createTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

router.patch("/:id/toggle", protect, toggleStatus);

export default router;
