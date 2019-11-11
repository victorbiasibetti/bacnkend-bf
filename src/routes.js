import {Router} from 'express'
import Multer from 'multer'

import HomeController from './controller/HomeController'
import CamController from './controller/CamController'

const routes = new Router();

const upload = Multer({destination: 'uploads/'});

routes.get('/users', HomeController.index)

routes.post('/cam', upload.single('camImage'),CamController.store)

export default routes;