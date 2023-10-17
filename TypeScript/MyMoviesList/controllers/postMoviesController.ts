import { MovieInsert, MovieUpdate, Platform } from "../protocols/movie";
import { Request, Response } from "express";
import { postGenreRepo, postMovieRepo, postPlatformRepo } from "../respositories/respositores.js";

export async function postmovie(req: Request, res: Response) {
    const data = res.locals.data as MovieInsert;
    try {
        await postMovieRepo(data);
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function postplatform(req: Request, res: Response) {
    const data = res.locals.data as Platform;
    try {
        await postPlatformRepo(data);
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }

}

export async function postgenre(req: Request, res: Response) {
    const data = res.locals.data as Platform;
    try {
        await postGenreRepo(data);
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.sendStatus(201);
    }
}