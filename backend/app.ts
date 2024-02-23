// app.ts
require('dotenv').config();
import express from 'express';
import {v2 as cloudinary} from 'cloudinary';
import productRoutes from './routes/productRoutes';
import paymentsRoutes from './routes/paymentRoutes';
import morgan from 'morgan';
import cors from 'cors'; 

const app = express();
const PORT = process.env.PORT || 3000; 
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const webUrl = process.env.WEB_URL || '';
const adminUrl = process.env.ADMIN_URL || '';

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: [webUrl, adminUrl]
}));

app.use('/api/products', productRoutes);
app.use('/api/payments', paymentsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
