import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { CourseState } from './modules/course/types';

export interface State {
  course: CourseState;
}

const store = createStore(rootReducer);

export default store;
