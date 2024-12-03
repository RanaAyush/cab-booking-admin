import cookieParser from 'cookie-parser';
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './utils/db.js';
import adminRoute from './routes/admin.route.js'
import regionRoute from './routes/region.route.js'
import serviceRoute from './routes/service.route.js'
import couponRoute from './routes/coupon.route.js'
import termsRoute from './routes/terms.route.js'
import policyRoute from './routes/policy.route.js'
import NotificationRoute from './routes/pushnotification.route.js'

dotenv.config({})

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const coreOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(coreOptions))

const PORT = process.env.PORT ||8000;

app.use("/api/admin",adminRoute);
app.use("/api/region",regionRoute);
app.use("/api/service",serviceRoute);
app.use("/api/coupon",couponRoute);
app.use("/api/terms",termsRoute);
app.use("/api/privacypolicy",policyRoute);
app.use("/api/pushnotification",NotificationRoute);

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running on ${PORT}`)
})