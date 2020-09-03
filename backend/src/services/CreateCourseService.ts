import { isBefore, startOfDay } from 'date-fns';
import CoursesRepository from '../repositories/CoursesRepository';
import Course from '../database/entities/Course';
import CategoriesRepository from '../repositories/CategoriesRepository';
import AppError from '../errors/AppError';

interface Request {
  description: string;
  from: Date;
  to: Date;
  students_per_class?: number;
  category: string;
}

export default class CreateCourseService {
  private coursesRepository: CoursesRepository;

  private categoriesRepository: CategoriesRepository;

  constructor(
    coursesRepository: CoursesRepository,
    categoriesRepository: CategoriesRepository,
  ) {
    this.coursesRepository = coursesRepository;
    this.categoriesRepository = categoriesRepository;
  }

  public async execute({
    description,
    from,
    to,
    students_per_class,
    category,
  }: Request): Promise<Course> {
    const courseCategory = await this.categoriesRepository.findByDescription(
      category,
    );

    if (!courseCategory) {
      throw new AppError('Invalid category.', 400);
    }

    const parsedStartDate = new Date(from);
    const parsedEndDate = new Date(to);

    const todaysFirstHour = startOfDay(Date.now());

    if (isBefore(parsedStartDate, todaysFirstHour)) {
      throw new AppError(
        'Não é possivel agendar um curso em uma data passada.',
        400,
      );
    }

    if (isBefore(parsedEndDate, parsedStartDate)) {
      throw new AppError(
        'Data de término do curso deve ser posterior ao seu início.',
        400,
      );
    }

    const foundCourseOnSamePeriod = await this.coursesRepository.findByPeriod({
      from: parsedStartDate,
      to: parsedEndDate,
    });

    if (foundCourseOnSamePeriod) {
      throw new AppError(
        'Existe(m) curso(s) planejado(s) no mesmo período.',
        400,
      );
    }

    const course = await this.coursesRepository.create({
      description,
      from: parsedStartDate,
      to: parsedEndDate,
      students_per_class,
      category: courseCategory.description,
    });

    return course;
  }
}
