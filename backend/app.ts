// app.ts
import express from 'express';
import {v2 as cloudinary} from 'cloudinary';
import productRoutes from './routes/productRoutes';
require('dotenv').config();
import morgan from 'morgan';
import uploadMiddleware from './multer';
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
app.use(cors()); // Agregar middleware de CORS

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
