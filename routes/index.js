import express from 'express';
import drivers from './drivers';
import trips from './trips';

const router = express.Router();

router.use('/api/v1/drivers', drivers);
router.use('/api/v1/trips', trips);

export default router;
