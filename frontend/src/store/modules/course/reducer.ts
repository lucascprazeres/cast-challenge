import { Reducer } from 'redux';

import produce from 'immer';

import { CourseState } from './types';

const INITIAL_STATE: CourseState = {
  description: '',
  from: '',
  to: '',
  students_per_class: 0,
  category: '',
};

const course: Reducer<CourseState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'SAVE_COURSE_DRAFT': {
        draft = { ...action.payload.course };

        return draft;
      }

      case 'CLEAR_COURSE_DRAFT': {
        draft.category = '';
        draft.description = '';
        draft.from = '';
        draft.to = '';
        draft.students_per_class = 0;

        return draft;
      }

      default: {
        return draft;
      }
    }
  });
};

export default course;
