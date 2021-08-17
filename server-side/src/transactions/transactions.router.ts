import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { TransactionController } from './transactions.controller';
import { ValidateRequest } from '../utils/joi';
import { validateId, createTransactionSchema, updateTransactionSchema } from './validator/transactions.validator.schema';

const TransactionRouter: Router = Router();

TransactionRouter.post('/', ValidateRequest(createTransactionSchema), wrapAsync(TransactionController.create));

TransactionRouter.get('/:id', ValidateRequest(validateId), wrapAsync(TransactionController.getById));
TransactionRouter.get('/', wrapAsync(TransactionController.getAll));

TransactionRouter.put('/:id', ValidateRequest(updateTransactionSchema), wrapAsync(TransactionController.updateById));

TransactionRouter.delete('/:id', ValidateRequest(validateId), wrapAsync(TransactionController.deleteById));

export { TransactionRouter };
