import {connection,prisma} from "../database/database.js";
import {QueryResult} from "pg";
import { MovieEntity, MovieInsert, MovieUpdate, Platform } from "../protocols/movie";
import { statustype } from "@prisma/client";

export function getMoviesRepo(){
    return prisma.movie.findMany({
        select: {
            id: true,
            name: true,
            platform: {
                select:{
                    name: true
                }
            },
            genre:{
                select:{
                    name: true
                }
            },
            status: true,
            review: true,
            grade: true
        }
    });
}
export function getMoviesperplatformRepo(){
    return prisma.movie.groupBy({
        by: ['platformId'],
            _count: {
                _all: true
            }
    });
}
export function getMoviespergenreRepo(){
    return prisma.movie.groupBy({
        by: ['genreId'],
            _count: {
                _all: true
            }
    });
}

export function postPlatformRepo(obj: Platform){
    return prisma.platform.create({
        data: obj
    });
}

export function postGenreRepo(obj: Platform){
    return prisma.genre.create({
        data: obj
    });
}

export function postMovieRepo(obj: MovieInsert){
    return prisma.movie.create({
        data: obj
    });
}

export function updateMovieRepo(obj: MovieUpdate){
    return prisma.movie.update({
        where: {
            id: obj.id
        },
        data : {
            status: obj.status as statustype,
            grade: obj.grade,
            review: obj.review
        }
    });
}

export function selectMovieRepo(movieid: number){
    return prisma.movie.findUnique({
        where: {
            id: movieid
        }
    })}

export function deleteMovieRepo(movieid: number){
    return prisma.movie.delete({
        where: {
            id: movieid
        }
    });
}