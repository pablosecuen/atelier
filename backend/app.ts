// app.ts
require('dotenv').config();
import express from 'express';
import {v2 as cloudinary} from 'cloudinary';
import productRoutes from './routes/productRoutes';
import paymentsRoutes from './routes/paymentRoutes';
import morgan from 'morgan';
import cors from 'cors'; 

const app = express();
const PORT = 3000;
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'https://andrews-theta.vercel.app'
}));

app.use('/api/products', productRoutes);
app.use('/api/payments', paymentsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
