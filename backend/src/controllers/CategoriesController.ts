import { Request, Response } from 'express';
import CreateCategoryService from '../services/CreateCategoryService';
import CategoriesRepository from '../repositories/CategoriesRepository';

export default class CategoriesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { code, description } = request.body;

    const categoriesRepository = new CategoriesRepository();
    const createCategory = new CreateCategoryService(categoriesRepository);

    const category = await createCategory.execute({
      code,
      description,
    });

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
