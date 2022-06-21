import Joi from 'joi';

export const validClientSchema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    birth: Joi.date().required(),
    phone: Joi.string().required(),
    DPI: Joi.string().required(),
    address: Joi.string().required(),
    password: Joi.string().required(),
});