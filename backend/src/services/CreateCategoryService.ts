import Category from '../database/entities/Category';
import CategoriesRepository from '../repositories/CategoriesRepository';
import AppError from '../errors/AppError';

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

    if (!code || !description) {
      throw new AppError(
        "properties 'code' and 'description' are required.",
        400,
      );
    }

    if (!Number(code)) {
      throw new AppError("property 'code' must be an integer.", 400);
    }

    return category;
  }
}
