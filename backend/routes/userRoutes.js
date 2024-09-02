import { Router } from 'express';
import { addUser, updatePoints, getLeaderboard } from '../controller/usercontrooler.js';

const router = Router();

router.post('/add', addUser);
router.post('/update-points', updatePoints);
router.get('/leaderboard', getLeaderboard);

export default router;
