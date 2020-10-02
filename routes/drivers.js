import express from 'express';
import DriverController from '../controllers/drivers';
import ValidationMiddleware from '../middlewares/validation';

const router = express.Router();

router.get('/', DriverController.fetchAllDrivers);
router.get('/available', DriverController.fetchAvailableDrivers);
router.get('/availableNear', DriverController.fetchAvailableDriversWithin3Km);
router.get('/:id', ValidationMiddleware.validateId, DriverController.fetchDriverById);

export default router;
