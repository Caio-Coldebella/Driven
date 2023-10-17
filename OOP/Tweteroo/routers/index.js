import { Router } from "express";
import tweets from "./tweetsrouter.js";
import { signupcontrolller } from "../controllers/signup-controller.js";

const router = Router();
router.use(tweets, signupcontrolller);
router.post('/sign-up');
export default router;