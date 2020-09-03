import { startOfDay, isBefore, parseISO } from 'date-fns';
import Course from '../database/entities/Course';
import CoursesRepository from '../repositories/CoursesRepository';
import AppError from '../errors/AppError';
import CategoriesRepository from '../repositories/CategoriesRepository';

interface Request {
  id: string;
  description: string;
  from: string;
  to: string;
  students_per_class?: number;
  category: string;
}

export default class UpdateCourseService {
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
    id,
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

    const currentCourse = await this.coursesRepository.findById(id);

    if (!currentCourse) {
      throw new AppError('Curso não encontrado.', 400);
    }

    const parsedStartDate = parseISO(from);
    const parsedEndDate = parseISO(to);

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

    if (foundCourseOnSamePeriod && foundCourseOnSamePeriod.id !== id) {
      throw new AppError(
        'Existe(m) curso(s) planejado(s) no mesmo período.',
        400,
      );
    }

    currentCourse.description = description;
    currentCourse.from = parseISO(from);
    currentCourse.to = parseISO(to);
    currentCourse.category_code = courseCategory.code;

    if (students_per_class) {
      currentCourse.students_per_class = students_per_class;
    }

    const updatedCourse = await this.coursesRepository.update(currentCourse);

    return updatedCourse;
  }
}
