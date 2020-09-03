import { Router } from 'express';

import CategoriesController from '../controllers/CategoriesController';

const categoryRouter = Router();

const categoriesController = new CategoriesController();

/*

[ ] - get
[ ] - post
[ ] - upate
[ ] - delete

*/

categoryRouter.get('/', categoriesController.list);

categoryRouter.post('/', categoriesController.create);

categoryRouter.put('/', categoriesController.update);

categoryRouter.delete('/', categoriesController.delete);

export default categoryRouter;
