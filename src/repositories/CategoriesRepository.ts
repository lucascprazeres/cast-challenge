import Category from '../entities/Category';

export default class CategoriesRepository {
  public async create(): Promise<Category> {
    return new Category();
  }
}
