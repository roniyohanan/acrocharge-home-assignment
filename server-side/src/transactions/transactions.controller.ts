import { Request, Response } from 'express';
import { TransactionManager } from './transactions.manager';

export class TransactionController {
  static async getAll(_req: Request, res: Response): Promise<void> {
    res.json(await TransactionManager.getAll());
  }

  static async getById(req: Request, res: Response): Promise<void> {
    res.json(await TransactionManager.getById(req.params.id));
  }

  static async create(req: Request, res: Response): Promise<void> {
    res.json(await TransactionManager.create(req.body));
  }

  static async updateById(req: Request, res: Response): Promise<void> {
    res.json(await TransactionManager.updateById(req.params.id, req.body));
  }

  static async deleteById(req: Request, res: Response): Promise<void> {
    res.json(await TransactionManager.deleteById(req.params.id));
  }
}
