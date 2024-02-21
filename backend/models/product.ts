// Importa Sequelize y configura la conexión a la base de datos
import {  DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../db';


// Define el modelo Product
const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
     defaultValue: () => uuidv4(),
    primaryKey: true
    },
  imagesURL: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  handle: {
    type: DataTypes.STRING,
    allowNull: false
  },
    slug: {
    type: DataTypes.STRING,
    allowNull: false
  },
        size: {
    type: DataTypes.STRING,
    allowNull: false
  },
                color: {
    type: DataTypes.STRING,
    allowNull: false
  },
    category: {
    type: DataTypes.STRING,
    allowNull: false
  },
    descriptionHtml: {
    type: DataTypes.STRING,
    allowNull: false
  },
       seo: {
    type: DataTypes.JSON,
    allowNull: false
  },
  availableForSale: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    },
  SKU: {
    type: DataTypes.STRING,
    allowNull: false
    },
   StyleName: {
    type: DataTypes.STRING,
    allowNull: false
    },
    UPC: {
    type: DataTypes.STRING,
    allowNull: false
    },
    RetailPrice: {
    type: DataTypes.STRING,
    allowNull: false
    },
    GetPercentOff: {
    type: DataTypes.STRING,
    allowNull: true
  },
   promoPrice: {
    type: DataTypes.STRING,
    allowNull: true
  },
      stock: {
    type: DataTypes.STRING,
    allowNull: true
  },
});


export { Product };
