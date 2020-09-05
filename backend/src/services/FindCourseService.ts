import Course from '../database/entities/Course';
import CoursesRepository from '../repositories/CoursesRepository';
import AppError from '../errors/AppError';

export default class FindCourseService {
  private coursesRepository: CoursesRepository;

  constructor(coursesRepository: CoursesRepository) {
    this.coursesRepository = coursesRepository;
  }

  public async execute(id: string): Promise<Course> {
    const course = await this.coursesRepository.findById(id);

    if (!course) {
      throw new AppError('Curso não encontrado.', 400);
    }

    return course;
  }
}
