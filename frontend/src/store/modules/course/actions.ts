import { CourseState } from './types';

export function saveCourseDraft(course: CourseState) {
  return {
    type: 'SAVE_COURSE_DRAFT',
    payload: {
      course,
    },
  };
}
