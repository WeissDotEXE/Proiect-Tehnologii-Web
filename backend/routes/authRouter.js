import express from "express";

import { registerUser } from "../controllers/authController";

const router = express.Router();

router.route("/").get();

router.route("/login").post();
router.route("/register").post(registerUser);
