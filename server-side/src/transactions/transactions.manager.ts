import { TransactionNotFound } from '../utils/errors/errors';
import { Transaction } from './transactions.interface';
import { TransactionRepository } from './transactions.repositoty';

export class TransactionManager {
  static getAll(): Promise<Transaction[]> {
    return TransactionRepository.getAll();
  }

  static async getById(id: string): Promise<Transaction> {
    const transaction = await TransactionRepository.getById(id);
    if (!transaction) throw new TransactionNotFound();
    return transaction;
  }

  static create(transaction: Transaction): Promise<Transaction> {
    return TransactionRepository.create(transaction);
  }

  static async updateById(id: string, updatedValues: Partial<Transaction>): Promise<Transaction | null> {
    const upadtedTransaction = await TransactionRepository.updateById(id, updatedValues);
    if (!upadtedTransaction) throw new TransactionNotFound();
    return upadtedTransaction;
  }

  static async deleteById(id: string): Promise<Transaction | null> {
    const transaction = await TransactionRepository.deleteById(id);
    if (!transaction) throw new TransactionNotFound();
    return transaction;
  }
}
