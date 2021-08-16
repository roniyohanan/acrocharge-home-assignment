import { Router } from 'express';
import { CustomersRouter } from './customers/customers.router';
import { TransactionRouter } from './transactions/transactions.router';

const AppRouter: Router = Router();

AppRouter.use('/api/transactions', TransactionRouter);
AppRouter.use('/api/customers', CustomersRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };
