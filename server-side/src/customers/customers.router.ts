import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { CustomersController } from './customers.controller';
import { ValidateRequest } from '../utils/joi';
import { validateId, canCreate, canUpdate } from './validator/customers.validator.schema';

const CustomersRouter: Router = Router();

CustomersRouter.post('/', ValidateRequest(canCreate), wrapAsync(CustomersController.create));

CustomersRouter.get('/:id', ValidateRequest(validateId), wrapAsync(CustomersController.getById));
CustomersRouter.get('/', wrapAsync(CustomersController.getAll));

CustomersRouter.put('/:id', ValidateRequest(canUpdate), wrapAsync(CustomersController.updateById));

CustomersRouter.delete('/:id', ValidateRequest(validateId), wrapAsync(CustomersController.deleteById));

export { CustomersRouter };
