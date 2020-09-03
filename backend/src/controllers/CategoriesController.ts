import { Request, Response } from 'express';
import CreateCategoryService from '../services/CreateCategoryService';
import CategoriesRepository from '../repositories/CategoriesRepository';
import ListCategoriesService from '../services/ListCategeoriesService';

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
    const categoriesRepository = new CategoriesRepository();
    const listCategories = new ListCategoriesService(categoriesRepository);

    const categories = await listCategories.execute();

    return response.json(categories);
  }
}
