import { Repository, getRepository } from 'typeorm';
import Course from '../database/entities/Course';

interface CreateCourseDTO {
  description: string;
  from: Date;
  to: Date;
  students_per_class?: number;
  category: string;
}

export default class CoursesRepository {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  public async create(courseData: CreateCourseDTO): Promise<Course> {
    const course = await this.ormRepository.create(courseData);

    await this.ormRepository.save(course);

    return course;
  }
}
