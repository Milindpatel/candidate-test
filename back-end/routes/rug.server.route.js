// ./express-server/routes/rug.server.route.js
import express from 'express';

//import controller file
import * as rugController from '../controllers/rug.server.controller';

// get an instance of express router
const router = express.Router();
router.route('/')
    .get(rugController.getRugs)
    .post(rugController.addRug)
    .put(rugController.updateRug);
router.route('/:id')
    .get(rugController.getRug)
    .delete(rugController.deleteRug);
export default router;