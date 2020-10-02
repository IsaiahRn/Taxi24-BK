import express from 'express';
import drivers from './drivers';
import trips from './trips';
import riders from './riders';

const router = express.Router();

router.use('/api/v1/drivers', drivers);
router.use('/api/v1/trips', trips);
router.use('/api/v1/riders', riders);

export default router;
