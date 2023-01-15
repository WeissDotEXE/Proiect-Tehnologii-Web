import express from "express";

import {
  createTask,
  getTask,
  deleteTask,
  updateTask,
  getAllTasks,
} from "../controllers/taskController.js";

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
