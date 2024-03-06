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

const webUrl = process.env.WEB_URL || "";
const adminUrl = process.env.ADMIN_URL  || "";
const deployUrl = process.env.DEPLOY_URL || "";


app.use((req, res, next) => {
      const allowedOrigins = [
    webUrl,
    adminUrl,
    deployUrl,
    ];

  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS,PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  }

  // Handling preflight requests
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/products', productRoutes);
app.use('/api/payments', paymentsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});