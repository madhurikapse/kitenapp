import { Router } from 'express';
import { createGame, drawCard, saveCards } from '../controller/gamecontroller.js';

const router = Router();

router.post('/start', createGame);
router.post('/draw', drawCard);
router.post('/save', saveCards);

export default router;
