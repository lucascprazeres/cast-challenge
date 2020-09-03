import { Request, Response } from 'express';
import CoursesRepository from '../repositories/CoursesRepository';
import CreateCourseService from '../services/CreateCourseService';
import CategoriesRepository from '../repositories/CategoriesRepository';

export default class CoursesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      description,
      from,
      to,
      students_per_class,
      category,
    } = request.body;

    const coursesRepository = new CoursesRepository();
    const categoriesRepository = new CategoriesRepository();
    const createCourse = new CreateCourseService(
      coursesRepository,
      categoriesRepository,
    );

    const course = await createCourse.execute({
      description,
      from,
      to,
      students_per_class,
      category,
    });

    return response.json(course);
  }
}
