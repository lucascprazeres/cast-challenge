import { CourseState } from './types';

export function saveCourseDraft(course: CourseState) {
  return {
    type: 'SAVE_COURSE_DRAFT',
    payload: {
      course,
    },
  };
}

export function createCourseRequest(course: CourseState) {
  return {
    type: 'CREATE_COURSE',
    payload: {
      course,
    },
  };
}
