import express from 'express';
import drivers from './drivers';

const router = express.Router();

router.use('/api/v1/drivers', drivers);

export default router;
