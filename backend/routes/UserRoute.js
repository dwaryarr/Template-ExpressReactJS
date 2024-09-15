import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/Users.js";
import { adminOnly, verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/users", verifyUser, adminOnly, getUsers);
router.get("/users/:userid", verifyUser, adminOnly, getUserById);
router.post("/users", createUser, verifyUser, adminOnly);
router.patch("/users/:userid", verifyUser, adminOnly, updateUser);
router.delete("/users/:userid", verifyUser, adminOnly, deleteUser);

export default router;
