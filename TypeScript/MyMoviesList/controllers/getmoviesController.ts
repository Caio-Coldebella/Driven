import { Request, Response } from "express";
import { Movie } from "../protocols/movie";
import { getMoviespergenreRepo, getMoviesperplatformRepo, getMoviesRepo } from "../respositories/respositores.js";

export async function getmovies(req: Request,res: Response){
    try {
        const data = await getMoviesRepo();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function moviesperplatform(req: Request, res: Response) {
    try {
        const data =await getMoviesperplatformRepo();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export async function moviespergenre(req: Request, res: Response) {
    try {
        const data = await getMoviespergenreRepo();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}