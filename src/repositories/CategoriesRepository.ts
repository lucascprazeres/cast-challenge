import { getRepository, Repository } from 'typeorm';

import Category from '../database/entities/Category';

interface CreateCategory {
  code: number;
  description: string;
}

export default class CategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async create({
    code,
    description,
  }: CreateCategory): Promise<Category> {
    const category = await this.ormRepository.create({
      code,
      description,
    });

    await this.ormRepository.save(category);

    return category;
  }
}
