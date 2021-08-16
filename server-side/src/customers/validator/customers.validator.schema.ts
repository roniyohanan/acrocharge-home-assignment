import * as Joi from 'joi';
import { Gender } from '../customers.interface';

const customerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  gender: Joi.string().valid(...Object.values(Gender)).required(),
  email: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  address: Joi.string().required(),
});

export const validateId = Joi.object({
  query: {},
  body: {},
  params: {
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  },
});

export const canCreate = Joi.object({
  body: customerSchema,
  query: {},
  params: {},
});

export const canUpdate = Joi.object({
  body: customerSchema,
  query: {},
  params: {
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  },
});
