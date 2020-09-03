import CoursesRepository from '../repositories/CoursesRepository';
import Course from '../database/entities/Course';

export default class DeleteCourseService {
  private coursesRepository: CoursesRepository;

  constructor(coursesRepository: CoursesRepository) {
    this.coursesRepository = coursesRepository;
  }

  public async execute(searchTerm: string): Promise<Course[]> {
    let courses: Course[] = [];

    if (searchTerm) {
      courses = await this.coursesRepository.listAllBySearchTerm(searchTerm);
    }

    return courses;
  }
}
