// routes/productRoutes.ts
import express from 'express';
import paymentController from '../controllers/paymentController';




const router = express.Router();


router.get('/list',  paymentController.getAllPayments);

router.post('/preference',  paymentController.createPreference);

router.post('/webhook', paymentController.webHookController);

router.get('/merchantOrder',  paymentController.searchPaymentInfo);



export default router;
