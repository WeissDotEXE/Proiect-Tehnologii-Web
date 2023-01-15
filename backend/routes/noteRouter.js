import express from "express";

import {
  createNote,
  getNote,
  deleteNote,
  updateNote,
  getAllNotes,
} from "../controllers/noteController.js";

const router = express.Router();

router.route("/").get(getAllNotes).post(createNote);
router.route("/:id").get(getNote).patch(updateNote).delete(deleteNote);

export default router;
