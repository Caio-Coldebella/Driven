import Joi from "joi";

export const MovieSchema = Joi.object({
    name: Joi.string().min(1).required(),
    platformId : Joi.number().required(),
    genreId: Joi.number().required()
});
export const MovieUpdateSchema = Joi.object({
    id: Joi.number().required(),
    status: Joi.string().valid('Não Assistido','Assistindo','Assistido'),
    review: Joi.string(),
    grade: Joi.number()
});

export const GenreSchema = Joi.object({
    name: Joi.string().min(1).required()
});

export const PlatformSchema = Joi.object({
    name: Joi.string().min(1).required()
});