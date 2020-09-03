import { Router } from 'express';

import categoriesRouter from './category.routes';
import coursesRouter from './course.routes';

const appRouter = Router();

appRouter.use('/categories', categoriesRouter);
appRouter.use('/courses', coursesRouter);

export default appRouter;
