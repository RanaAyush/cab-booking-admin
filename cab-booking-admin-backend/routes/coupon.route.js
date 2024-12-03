import express from 'express'
import { deleteCoupon, getAllCoupons, getCouponById, saveCoupon, updateCoupon } from '../contollers/coupon.controller.js';

const router = express.Router();

router.route("/savecoupon").post(saveCoupon);
router.route("/getallcoupons").get(getAllCoupons);
router.route("/deletecoupon").delete(deleteCoupon);
router.route("/getcouponbyid").post(getCouponById);
router.route("/updatecoupon/:id").post(updateCoupon);

export default router;