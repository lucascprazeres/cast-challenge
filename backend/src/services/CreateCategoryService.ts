import Category from '../database/entities/Category';
import CategoriesRepository from '../repositories/CategoriesRepository';

interface Request {
  code: number;
  description: string;
}

export default class CreateCategoryService {
  private categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  public async execute({ code, description }: Request): Promise<Category> {
    const category = await this.categoriesRepository.create({
      code,
      description,
    });

    return category;
  }
}
