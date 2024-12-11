import express from 'express'
import {  getAllWithdrawals, getWithdrawCount, updateRequest } from '../contollers/withdraw.controller.js';

const router = express.Router();

router.route("/getallwithdraws").get(getAllWithdrawals);
router.route("/updaterequest/:id").post(updateRequest);
router.route("/count").get(getWithdrawCount);

export default router;