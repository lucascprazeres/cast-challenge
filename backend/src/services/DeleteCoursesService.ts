import CoursesRepository from '../repositories/CoursesRepository';
import AppError from '../errors/AppError';

export default class SearchCoursesService {
  private coursesRepository: CoursesRepository;

  constructor(coursesRepository: CoursesRepository) {
    this.coursesRepository = coursesRepository;
  }

  public async execute(id: string): Promise<void> {
    const foundCourse = await this.coursesRepository.findById(id);

    if (!foundCourse) {
      throw new AppError('Id inválido.', 400);
    }

    await this.coursesRepository.destroy(id);
  }
}
