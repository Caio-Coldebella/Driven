import { Router } from "express";
import { gettwwets, getusertweets, posttweets } from "../controllers/tweets-controller.js";

const tweets = Router();
tweets.post('/tweets', posttweets);
tweets.get('/tweets', gettwwets);
tweets.get('/tweets/:username', getusertweets);
export default tweets;