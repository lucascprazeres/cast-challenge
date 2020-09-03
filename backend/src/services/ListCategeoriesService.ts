import Category from '../database/entities/Category';
import CategoriesRepository from '../repositories/CategoriesRepository';

export default class ListCategoriesService {
  private categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.all();

    return categories;
  }
}
