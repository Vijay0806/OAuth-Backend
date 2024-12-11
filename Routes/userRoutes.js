import express from 'express';
import { getProfile } from '../Controllers/userController.js';
import { ensureAuthenticated } from '../Middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', ensureAuthenticated, getProfile);

export default router;
