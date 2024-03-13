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

interface ProductUpdates {
  id?: string;
  imagesURL?: string[];
  handle?: string;
  slug?: string;
  size?: string;
  category?: string;
  descriptionHtml?: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
  };
  availableForSale?: boolean;
  title?: string;
  description?: string;
  updatedAt?: Date;
  SKU?: string;
  StyleName?: string;
  UPC?: string;
  RetailPrice?: string;
  GetPercentOff?: string | null;
  promoPrice?: string | null;
  stock?: string;
}


type ProductUpdateKey = keyof ProductUpdates;



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

    const response = await axios.get('http://181.177.239.13:80/WSAPIWeb/RCSCatServices.svc/Product/GetProductAll', requestOptions);

    const products = response.data.Products.filter((product: any) => {
      if (parseFloat(product.OnHandQty) > 0) {
     
        product.StockQty = parseFloat(product.OnHandQty);
        return true; 
      }
      return false; 
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
    const files = req.files as UploadedFile[]; 
    if (!files || files.length === 0) {

      return res.status(400).json({ success: false, message: "No se han subido archivos" });
    }

 const product = JSON.parse(req.body.product);

    const uploadPromises = files.map(async (file) => {
      const uploadedImage = await cloudinary.v2.uploader.upload(file.path);
      return uploadedImage.url;
    });

    const uploadedImageUrls = await Promise.all(uploadPromises);

    const deletePromises = files.map(async (file) => {
      if (fs.existsSync(file.path)) {
        await unlinkAsync(file.path);
      } else {
   
      }
    });

    await Promise.all(deletePromises);

    const newProduct = await Product.create({
       ...product,
      handle: product.Desc1?.replace(/\s+/g, '-').toLowerCase(),
      slug: product.Desc1?.replace(/\s+/g, '-').toLowerCase(),
      imagesURL: uploadedImageUrls,
      featuredImage: uploadedImageUrls[0],
      descriptionHtml: `<p>${product.Desc2}</p>`,
      seo: {
        title: product.Desc1,
        description: product.Desc2,
        keywords: product.DeptName,
      }
    });


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


const getProductsByStyleName = async (req: Request, res: Response) => {
  try {
    let styleName: string | undefined;

    // Verifica si el valor de StyleName está en los parámetros de la URL
    if (req.params.styleName) {
      styleName = req.params.styleName as string;
    }

    // Si no está en los parámetros, verifica si está en la consulta de la solicitud
    if (!styleName && req.query.styleName) {
      styleName = req.query.styleName as string;
    }

    if (!styleName) {
      return res.status(400).json({ message: 'Se requiere el nombre de estilo (StyleName) en los parámetros de la URL o en la consulta de la solicitud' });
    }

    const products = await Product.findAll({
      where: {
        StyleName: styleName
      }
    });
    
    res.status(200).json(products);
  } catch (error) {
    console.error('Error al obtener productos por StyleName:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Utiliza este tipo en tu controlador para tipar las actualizaciones
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updates: ProductUpdates = req.body;
    if (!productId || !updates) {
      return res.status(400).json({ message: 'Se requiere productId y actualizaciones' });
    }

    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Aplicar las actualizaciones al producto
    Object.keys(updates).forEach((key: string) => {
      const productKey = key as ProductUpdateKey;
      if (productKey in Product.rawAttributes && updates[productKey] !== undefined) {
        product.set(productKey, updates[productKey]); // Utiliza set para asignar valores de forma segura
      }
    });

    await product.save();

    res.status(200).json({ message: 'Producto actualizado exitosamente', product });
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};



const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    if (!productId) {
      return res.status(400).json({ message: 'Se requiere productId' });
    }

    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    await product.destroy();

    res.status(200).json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};



export default { updateProductsWithAdditionalProperties,getProductsWithStock, addProduct, getAllProductsFromDb , updateProduct, deleteProduct ,getProductsByStyleName};
