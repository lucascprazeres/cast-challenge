import { call, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { createCourseRequest } from './actions';

type CreateProductRequest = ReturnType<typeof createCourseRequest>;

export function* createCourse({ payload }: CreateProductRequest) {
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

export default all([takeLatest('CREATE_COURSE', createCourse)]);
