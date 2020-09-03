import { Request, Response } from 'express';
import CoursesRepository from '../repositories/CoursesRepository';
import CreateCourseService from '../services/CreateCourseService';
import SearchCoursesService from '../services/SearchCoursesService';
import CategoriesRepository from '../repositories/CategoriesRepository';
import UpdatedCourseService from '../services/UpdateCourseService';

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

  public async list(request: Request, response: Response): Promise<Response> {
    const { search } = request.query;

    const coursesRepository = new CoursesRepository();
    const searchCourses = new SearchCoursesService(coursesRepository);

    const courses = await searchCourses.execute(String(search));

    return response.json(courses);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
      description,
      from,
      to,
      students_per_class,
      category,
    } = request.body;

    const coursesRepository = new CoursesRepository();
    const categoriesRepository = new CategoriesRepository();
    const updateCourse = new UpdatedCourseService(
      coursesRepository,
      categoriesRepository,
    );

    const updatedCourse = await updateCourse.execute({
      id,
      description,
      from,
      to,
      students_per_class,
      category,
    });

    return response.json(updatedCourse);
  }
}