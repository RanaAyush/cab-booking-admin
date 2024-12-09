import express from 'express'
import { getAllWithdrals } from '../contollers/withdraw.controller.js';

const router = express.Router();

router.route("/getallwithdraws").get(getAllWithdrals);

export default router;