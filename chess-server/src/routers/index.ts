import { Router } from "express";
const router = Router();
import { authRouter } from '../controllers'

router.use('/v1/auth', authRouter)

export { router };