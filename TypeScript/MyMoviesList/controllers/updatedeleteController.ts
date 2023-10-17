import { Request, Response } from "express";
import { deleteMovieRepo, selectMovieRepo, updateMovieRepo } from "../respositories/respositores.js";

export async function updateMovie(req: Request, res: Response) {
    const obj = res.locals.data;
    try {
        await updateMovieRepo(obj);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function deleteMovie(req: Request, res: Response) {
    const id : string = req.params.id;
    const idnumber : number = parseInt(id);
    if(isNaN(idnumber)){
        res.sendStatus(422);
        return;
    }
    try {
        const exists = await selectMovieRepo(idnumber);
        if(!exists){
            res.sendStatus(404);
            return;
        }   
        await deleteMovieRepo(idnumber);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}