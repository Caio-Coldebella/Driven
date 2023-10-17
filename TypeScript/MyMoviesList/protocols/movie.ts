export type MovieEntity = {
    id: number,
    name: string,
    platformId : number,
    genreId: number,
    status: string,
    review?: string,
    grade?: number
};

export type Movie = Omit<MovieEntity, "id">
export type MovieInsert = Omit<MovieEntity, "id"|"status">

export type MovieUpdate = Partial<MovieEntity>

export type PlatformEntity = {
    id: number,
    name: string
}

export type Platform = Omit<PlatformEntity, "id">