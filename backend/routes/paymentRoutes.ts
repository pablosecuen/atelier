// routes/productRoutes.ts
import express from 'express';
import paymentController from '../controllers/paymentController';
import upload from '../multer';



const router = express.Router();


router.get('/list',  paymentController.getAllPayments);

router.get('/preference',  paymentController.createPreference);

router.get('/webhook', paymentController.webHookController);



export default router;
