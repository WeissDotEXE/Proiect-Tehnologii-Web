import express from "express";

import {
  getAllStudyGroups,
  getStudyGroup,
  createStudyGroup,
  updateStudyGroup,
  deleteStudyGroup,
  insertMessage,
  getMessages,
} from "../controllers/studyGroupController.js";

const router = express.Router();

router.route("/").get(getAllStudyGroups).post(createStudyGroup);
router.route("/messages/:groupId").get(getMessages).post(insertMessage);
router
  .route("/:id")
  .get(getStudyGroup)
  .patch(updateStudyGroup)
  .delete(deleteStudyGroup);

export default router;
