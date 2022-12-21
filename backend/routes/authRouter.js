import express from "express";

import { registerUser } from "../controllers/authController.js";

const router = express.Router();

router.route("/").get();

router.route("/login").post();
router.route("/register").post(registerUser);

export default router;
