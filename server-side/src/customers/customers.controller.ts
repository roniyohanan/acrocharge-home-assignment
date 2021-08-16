import { Request, Response } from 'express';
import { CustomersManager } from './customers.manager';

export class CustomersController {
  static async getAll(_req: Request, res: Response): Promise<void> {
    res.json(await CustomersManager.getAll());
  }

  static async getById(req: Request, res: Response): Promise<void> {
    res.json(await CustomersManager.getById(req.params.id));
  }

  static async create(req: Request, res: Response): Promise<void> {
    res.json(await CustomersManager.create(req.body));
  }

  static async updateById(req: Request, res: Response): Promise<void> {
    res.json(await CustomersManager.updateById(req.params.id, req.body));
  }

  static async deleteById(req: Request, res: Response): Promise<void> {
    res.json(await CustomersManager.deleteById(req.params.id));
  }
}
