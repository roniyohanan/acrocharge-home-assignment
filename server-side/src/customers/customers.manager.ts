import { CustomerNotFound } from '../utils/errors/errors';
import { Customer } from './customers.interface';
import { CustomersRepository } from './customers.repositoty';

export class CustomersManager {
  static getAll(): Promise<Customer[]> {
    return CustomersRepository.getAll();
  }

  static async getById(id: string): Promise<Customer> {
    const customer = await CustomersRepository.getById(id);
    if (!customer) throw new CustomerNotFound();
    return customer;
  }

  static create(customer: Customer): Promise<Customer> {
    return CustomersRepository.create(customer);
  }

  static async updateById(id: string, updatedValues: Partial<Customer>): Promise<Customer | null> {
    const upadtedCustomer = await CustomersRepository.updateById(id, updatedValues);
    if (!upadtedCustomer) throw new CustomerNotFound();
    return upadtedCustomer;
  }

  static async deleteById(id: string): Promise<Customer | null> {
    const customer = await CustomersRepository.deleteById(id);
    if (!customer) throw new CustomerNotFound();
    return customer;
  }
}
