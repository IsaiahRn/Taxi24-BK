import express from 'express';
import TripController from '../controllers/trips';
import ValidationMiddleware from '../middlewares/validation';


const router = express.Router();


router.post('/', TripController.createTrip);
router.put('/complete/:id/:amount', ValidationMiddleware.validateId, ValidationMiddleware.validateAmount, TripController.completeTrip);
router.get('/active', TripController.fetchAllActiveTrip);

export default router;
