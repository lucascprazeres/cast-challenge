import { Router } from 'express';
import CoursesController from '../controllers/CoursesController';

const coursesRouter = Router();

const coursesController = new CoursesController();

coursesRouter.post('/', coursesController.create);

export default coursesRouter;
