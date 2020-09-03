import { Request, Response } from 'express';
import CreateCategoryService from '../services/CreateCategoryService';

export default class CategoriesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { code, description } = request.body;

    const createCategory = new CreateCategoryService();

    const category = await createCategory.execute();

    return response.json(category);
  }

  async list(request: Request, response: Response): Promise<Response> {
    return response.send();
  }

  async update(request: Request, response: Response): Promise<Response> {
    return response.send();
  }

  async delete(request: Request, response: Response): Promise<Response> {
    return response.send();
  }
}
