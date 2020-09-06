import { call, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { createCourseRequest, updateCourseRequest } from './actions';

type CreateCoursesRequest = ReturnType<typeof createCourseRequest>;
type UpdateCourseRequest = ReturnType<typeof updateCourseRequest>;

export function* createCourse({ payload }: CreateCoursesRequest) {
  try {
    const {
      category,
      description,
      from,
      to,
      students_per_class,
    } = payload.course;

    const course = {
      category,
      description,
      from,
      to,
      students_per_class,
    };

    yield call(api.post, '/courses', course);

    // eslint-disable-next-line no-alert
    alert('Curso cadastrado com sucesso!');
  } catch (err) {
    alert('Houve um erro ao cadastrar o curso, tente novamente.');
  }
}

export function* updateCourse({ payload }: UpdateCourseRequest) {
  try {
    const {
      id,
      category,
      description,
      from,
      to,
      students_per_class,
    } = payload.course;

    const course = {
      id,
      category,
      description,
      from,
      to,
      students_per_class,
    };

    yield call(api.put, `/courses/${id}`, course);

    // eslint-disable-next-line no-alert
    alert('Curso atualizado com sucesso!');
  } catch (err) {
    alert('Houve um erro ao atualizar o curso, tente novamente.');
  }
}

export default all([
  takeLatest('CREATE_COURSE', createCourse),
  takeLatest('UPDATE_COURSE', updateCourse),
]);
