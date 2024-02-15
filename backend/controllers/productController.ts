import { Request, Response } from 'express';
import axios from 'axios';
import cloudinary from 'cloudinary';
import { Product } from '../models/product'; 
require('dotenv').config();
import fs from 'fs';
import { promisify } from 'util';

const unlinkAsync = promisify(fs.unlink);

interface UploadedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

const getProductsWithStock = async (req: Request, res: Response) => {
  try {
    const headers = {
      'APIKey': process.env.API_KEY,
      'Authorization': process.env.AUTHORIZATION,
      'Content-Type': 'application/json',
      'ConfigId': process.env.CONFIG_ID
    };

    // Configurar las opciones de la solicitud con los encabezados
    const requestOptions = {
      headers: headers
    };

    // Realizar ambas solicitudes en paralelo
    const [responsePrice, responseStock] = await Promise.all([
      axios.get('http://181.177.239.13:80/WSAPIWebQA/RCSCatServices.svc/Product/GetProductPriceByWeb', requestOptions),
      axios.get('http://181.177.239.13:80/WSAPIWebQA/RCSCatServices.svc/Product/GetProductStock', requestOptions)
    ]);

    const productsWithPrice = responsePrice.data?.Webs[0]?.ProductsByWeb;
    const productsWithStock = responseStock.data?.Products;

    // Filtrar productos con stock mayor a 0
    const products = productsWithPrice.filter((productPrice: any) => {
      const matchingProduct = productsWithStock.find((productStock: any) => productStock.SKU === productPrice.SKU);
      if (matchingProduct && parseFloat(matchingProduct.OnHandQty) > 0) {
        // Crear una nueva propiedad "StockQty" en el objeto del producto y asignarle la cantidad de stock
        productPrice.StockQty = parseFloat(matchingProduct.OnHandQty);
        return true; // Mantener el producto en la lista filtrada
      }
      return false; // Descartar el producto de la lista filtrada
    });

    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


const updateProductsWithAdditionalProperties = async (req: Request, res: Response) => {
  try {
    const { productId, additionalProperties } = req.body;
    if (!productId || !additionalProperties) {
      return res.status(400).json({ message: 'Se requiere productId y additionalProperties' });
    }

    const product = await Product.findByPk(productId);


    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    Object.assign(product, additionalProperties);

    await product.save();

    res.status(200).json({ message: 'Producto actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const addProduct = async (req: Request, res: Response) => {
  try {
    console.log("Inicio de la función addProduct");
    const files = req.files as UploadedFile[]; 
    if (!files || files.length === 0) {
      console.log("No se han subido archivos");
      return res.status(400).json({ success: false, message: "No se han subido archivos" });
    }

    const uploadPromises = files.map(async (file) => {
      const uploadedImage = await cloudinary.v2.uploader.upload(file.path);
      return uploadedImage.url;
    });

    const uploadedImageUrls = await Promise.all(uploadPromises);

    const deletePromises = files.map(async (file) => {
      if (fs.existsSync(file.path)) {
        await unlinkAsync(file.path);
      } else {
        console.error("El archivo no existe:", file.path);
      }
    });

    await Promise.all(deletePromises);

    const newProduct = await Product.create({
      title: req.body.title,
      handle: req.body.title,
      description: req.body.description,
      size: req.body.size,
      color: req.body.color,
      RetailPrice: req.body.retailPrice,
      getPercentOff: req.body.getPercentOff,
      promoPrice: req.body.promoPrice,
      category: req.body.category,
      quantity: req.body.quantity,
      imagesURL: uploadedImageUrls,
      SKU: req.body.SKU,
      StyleName: req.body.styleName,
      UPC: req.body.UPC,
    });

    console.log("Fin de la función addProduct");
    res.status(201).json({ success: true, message: "Producto agregado exitosamente", data: newProduct });
  } catch (error) {
    console.error("Error al agregar el producto:", error);
    res.status(500).json({ success: false, message: "Error al agregar el producto" });
  }
};

const getAllProductsFromDb = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


export default { updateProductsWithAdditionalProperties,getProductsWithStock, addProduct, getAllProductsFromDb  };
