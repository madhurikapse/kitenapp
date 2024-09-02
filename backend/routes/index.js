import { Router } from 'express';
import gameRoutes from '../routes/gameRoutes.js';
import userRoutes from '../routes/userRoutes.js'

const router = Router();

router.use('/game', gameRoutes);
router.use('/user', userRoutes);

export default router;
