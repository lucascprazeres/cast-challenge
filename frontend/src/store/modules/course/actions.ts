import { CourseState } from './types';

interface CourseStateWithId extends CourseState {
  id: string;
}

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

export function updateCourseRequest(course: CourseStateWithId) {
  return {
    type: 'UPDATE_COURSE',
    payload: {
      course,
    },
  };
}
