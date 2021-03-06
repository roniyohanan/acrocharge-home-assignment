import * as Joi from 'joi';

const transactionSchema = Joi.object({
  customerId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  totalPrice: Joi.number().required(),
  currency: Joi.string().required(),
  cerditCardType: Joi.string().required(),
  cerditCardNumber: Joi.string().length(16).required(),
});

export const validateId = Joi.object({
  query: {},
  body: {},
  params: {
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  },
});

export const createTransactionSchema = Joi.object({
  body: transactionSchema,
  query: {},
  params: {},
});

export const updateTransactionSchema = Joi.object({
  body: transactionSchema,
  query: {},
  params: {
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  },
});
