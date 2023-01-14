import express from "express";

import {
  getAllStudyGroups,
  getStudyGroup,
  createStudyGroup,
  updateStudyGroup,
  deleteStudyGroup,
  insertMessage,
} from "../controllers/studyGroupController.js";

const router = express.Router();

router.route("/").get(getAllStudyGroups).post(createStudyGroup);
router.route("/insertmessage").post(insertMessage);
router
  .route("/:id")
  .get(getStudyGroup)
  .patch(updateStudyGroup)
  .delete(deleteStudyGroup);

export default router;
