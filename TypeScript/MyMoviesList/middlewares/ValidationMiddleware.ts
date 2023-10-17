import { Request, Response, NextFunction } from "express";
import { MovieUpdate, Platform } from "../protocols/movie.js";
import { selectMovieRepo } from "../respositories/respositores.js";
import { MovieSchema, MovieUpdateSchema, PlatformSchema } from "../schemas/Allschemas.js";

export async function PlatformMiddleware(req: Request, res: Response, next: NextFunction){
    const obj = req.body as Platform;
    const validate = PlatformSchema.validate(obj);
    if(validate.error){
        res.sendStatus(422);
        return;
    }
    res.locals.data = obj;
    next();
}

export async function MovieMiddleware(req: Request, res: Response, next: NextFunction){
    const obj = req.body as MovieUpdate;
    const validate = MovieSchema.validate(obj);
    if(validate.error){
        res.sendStatus(422);
        return;
    }
    res.locals.data = obj;
    next();
}

export async function MovieUpdateMiddleware(req: Request, res: Response, next: NextFunction){
    const obj = req.body as MovieUpdate;
    const validate = MovieUpdateSchema.validate(obj);
    if(validate.error){
        res.sendStatus(422);
        return;
    }
    const exists = await selectMovieRepo(obj.id);
    if(!exists){
        res.sendStatus(404);
        return;
    }
    if(obj.review==undefined){
        obj.review = null;
    }
    if(obj.grade==undefined){
        obj.grade = null;
    }
    if(obj.status==undefined){
        obj.status = 'Não Assistido';
    }
    res.locals.data = obj;
    next();
}