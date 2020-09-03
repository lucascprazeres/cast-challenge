import {
  Repository,
  getRepository,
  LessThanOrEqual,
  MoreThanOrEqual,
  Like,
} from 'typeorm';
import Course from '../database/entities/Course';

interface CreateCourseDTO {
  description: string;
  from: Date;
  to: Date;
  students_per_class?: number;
  category_code: number;
}

interface FindbyPeriodDTO {
  from: Date;
  to: Date;
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

  public async listAllBySearchTerm(description: string): Promise<Course[]> {
    const courses = await this.ormRepository.find({
      where: {
        description: Like(`%${description}%`),
      },
    });

    return courses;
  }

  public async findById(id: string): Promise<Course | undefined> {
    const course = await this.ormRepository.findOne(id);

    return course;
  }

  public async findByPeriod({
    from,
    to,
  }: FindbyPeriodDTO): Promise<Course | undefined> {
    const course = await this.ormRepository.findOne({
      where: {
        from: MoreThanOrEqual(from) && LessThanOrEqual(to),
      },
    });

    return course;
  }

  public async update(course: Course): Promise<Course> {
    await this.ormRepository.save(course);

    return course;
  }

  public async destroy(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
