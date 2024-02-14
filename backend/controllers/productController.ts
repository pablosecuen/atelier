import { Request, Response } from 'express';
import axios from 'axios';
import cloudinary from 'cloudinary';
import { Product } from '../models/product'; 
require('dotenv').config();
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
    // Obtener las propiedades adicionales del cuerpo de la solicitud
    const { productId, additionalProperties } = req.body;

    // Verificar si productId y additionalProperties están presentes
    if (!productId || !additionalProperties) {
      return res.status(400).json({ message: 'Se requiere productId y additionalProperties' });
    }

    // Buscar el producto en la base de datos
    const product = await Product.findByPk(productId);

    // Verificar si el producto existe
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Actualizar el producto con las propiedades adicionales
    Object.assign(product, additionalProperties);

    // Guardar el producto actualizado en la base de datos
    await product.save();

    res.status(200).json({ message: 'Producto actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const addProduct = async (req: Request, res: Response) => {
  const {
    title,
    handle,
    size,
    color,
    retailPrice,
    getPercentOff,
    promoPrice,
    category,
    quantity,
  } = req.body;
  console.log(req.body);
  let imageUrls: string[] = [];

  try {



    if (req.files && (Array.isArray(req.files) ? req.files.length > 0 : Object.keys(req.files).length > 0)) {

      const imageUploadPromises = Array.isArray(req.files)
        ? req.files.map((image) => cloudinary.v2.uploader.upload(image.path))
        : Object.values(req.files).flatMap((images: Express.Multer.File[]) => images.map((image) => cloudinary.v2.uploader.upload(image.path)));


      const uploadedImages = await Promise.all(imageUploadPromises);

      imageUrls = uploadedImages.map((image) => image.url);
    }


    const newProduct = await Product.create({
      title,
      handle,
      images: imageUrls, 
      size,
      color,
      retailPrice,
      getPercentOff,
      promoPrice,
      category,
      quantity,
    });

    // La instancia de nuevo producto se crea correctamente en la base de datos
    res.status(201).json({ success: true, message: "Producto agregado exitosamente", data: newProduct });
  } catch (error) {
    console.error("Error al agregar el producto:", error);
    res.status(500).json({ success: false, message: "Error al agregar el producto" });
  }
};








export default { updateProductsWithAdditionalProperties,getProductsWithStock, addProduct };
