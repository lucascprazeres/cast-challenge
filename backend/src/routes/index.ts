import { Router } from 'express';

import categoriesRouter from './category.routes';

const appRouter = Router();

appRouter.use('/categories', categoriesRouter);

export default appRouter;
