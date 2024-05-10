import Joi from '@hapi/joi';
export const newemployeevalidator = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        image: Joi.string().min(3).required(),
        gender: Joi.string().min(3).required(),
        department: Joi.string().min(3).required(),
        salary: Joi.number().integer().min(8).required(),
        start_date: Joi.string().min(8).required(),
        notes: Joi.string().isoDate().required()
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        next(error);
    } else {
        req.validatedBody = value;
        next();
    }
}