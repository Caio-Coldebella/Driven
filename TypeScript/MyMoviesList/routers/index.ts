import {Router} from "express";
import { getmovies, moviesperplatform } from "../controllers/getmoviesController.js";
import { postgenre, postmovie, postplatform } from "../controllers/postMoviesController.js";
import { deleteMovie, updateMovie } from "../controllers/updatedeleteController.js";
import { MovieMiddleware, MovieUpdateMiddleware, PlatformMiddleware } from "../middlewares/ValidationMiddleware.js";

const router = Router();
router.get("/",getmovies);
router.get("/moviesperplatform", moviesperplatform);
router.get("/moviespergenre", moviesperplatform);
router.post("/platform", PlatformMiddleware, postplatform);
router.post("/genre", PlatformMiddleware, postgenre);
router.post("/movie",MovieMiddleware, postmovie);
router.put("/movie",MovieUpdateMiddleware, updateMovie);
router.delete("/movie/:id",deleteMovie);
export default router;