import Category from '../entities/Category';
import CategoriesRepository from '../repositories/CategoriesRepository';

export default class CreateCategoryService {
  public async execute(): Promise<Category> {
    const categoriesRepository = new CategoriesRepository();

    const category = await categoriesRepository.create();

    return category;
  }
}
