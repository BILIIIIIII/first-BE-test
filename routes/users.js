import express from "express";

import {
  createUsers,
  deleteUser,
  getUser,
  getUsers,
  updatedUser,
} from "../controllers/users.js";

const router = express.Router();

router.post("/", createUsers);

router.get("/", getUsers);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updatedUser);

export default router;
