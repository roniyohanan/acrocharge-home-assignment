import { TransactionModel } from './transactions.model';
import { Transaction } from './transactions.interface';

export class TransactionRepository {
  static create(transaction: Transaction): Promise<Transaction> {
    return TransactionModel.create(transaction);
  }

  static getById(id: string): Promise<Transaction | null> {
    return TransactionModel.findById(id).exec();
  }

  static getAll(): Promise<Transaction[]> {
    return TransactionModel.find({}).exec();
  }

  static updateById(id: string, updatedValues: Partial<Transaction>): Promise<Transaction | null> {
    return TransactionModel.findByIdAndUpdate(id, updatedValues, { new: true }).exec();
  }

  static deleteById(id: string): Promise<Transaction | null> {
    return TransactionModel.findByIdAndDelete(id).exec();
  }
}
