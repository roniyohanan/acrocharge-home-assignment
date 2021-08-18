import TransactionsService from '../services/transactions.service';
import CustomersService from '../services/customers.service';

const collectionService = {
  customer: CustomersService,
  transaction: TransactionsService,
};

export default collectionService;
