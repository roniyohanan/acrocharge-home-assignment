import * as Joi from 'joi';

const customerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
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

export const createCustomerSchema = Joi.object({
  body: customerSchema,
  query: {},
  params: {},
});

export const updateCustomerSchema = Joi.object({
  body: customerSchema,
  query: {},
  params: {
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  },
});
