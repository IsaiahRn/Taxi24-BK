import express from 'express';
import RiderController from '../controllers/riders';
import ValidationMiddleware from '../middlewares/validation';


const router = express.Router();


router.get('/', RiderController.fetchAllRiders);
router.get('/:id', ValidationMiddleware.validateId, RiderController.fetchRiderById);
router.get('/near/:name', ValidationMiddleware.validateString, RiderController.fetchNearRider);

export default router;
