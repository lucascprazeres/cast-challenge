import { Router } from 'express';
import CoursesController from '../controllers/CoursesController';

const coursesRouter = Router();

const coursesController = new CoursesController();

coursesRouter.post('/', coursesController.create);
coursesRouter.get('/', coursesController.list);
coursesRouter.get('/:id', coursesController.show);
coursesRouter.put('/:id', coursesController.update);
coursesRouter.delete('/:id', coursesController.delete);

export default coursesRouter;
