import express from "express";

import {
  registerUser,
  loginUser,
  validateapass,
  createCredentials,
  getAllUsers,
} from "../controllers/authController.js";

const router = express.Router();

router.route("/").get(getAllUsers);

// router.route("/").post(createCredentials);
router.route("/login").get(loginUser);
router.route("/validatepass").post(validateapass);
router.route("/register").post(registerUser);

export default router;
