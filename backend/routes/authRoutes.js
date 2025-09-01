import express from "express";
import {
  getUserProfile,
  loginUser,
  registerUser,
} from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// public
router.post("/register", registerUser);
router.post("/login", loginUser);

// private
router.get("/profile", protect, getUserProfile);

export default router;
