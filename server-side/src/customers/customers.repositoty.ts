import { CustomerModel } from './customers.model';
import { Customer } from './customers.interface';

export class CustomersRepository {
  static create(transaction: Customer): Promise<Customer> {
    return CustomerModel.create(transaction);
  }

  static getById(id: string): Promise<Customer | null> {
    return CustomerModel.findById(id).exec();
  }

  static getAll(): Promise<Customer[]> {
    return CustomerModel.find({}).exec();
  }

  static updateById(id: string, updatedValues: Partial<Customer>): Promise<Customer | null> {
    return CustomerModel.findByIdAndUpdate(id, updatedValues, { new: true }).exec();
  }

  static deleteById(id: string): Promise<Customer | null> {
    return CustomerModel.findByIdAndDelete(id).exec();
  }
}
