// routes/productRoutes.ts
import express from 'express';
import productController from '../controllers/productController';
import upload from '../multer';



const router = express.Router();

router.post('/create', productController.addProduct);

router.get('/',upload.array('images'), productController.getProductsWithStock);

export default router;
