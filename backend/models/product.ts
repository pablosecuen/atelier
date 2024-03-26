// Importa Sequelize y configura la conexión a la base de datos
import {  DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../db';


const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
     defaultValue: () => uuidv4(),
    primaryKey: true
  },
    Desc1: {
    type: DataTypes.TEXT,
    allowNull: false
  },
    handle: {
    type: DataTypes.TEXT,
    allowNull: false
  },
    SizeCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
      BrandName: {
    type: DataTypes.STRING,
    allowNull: false
  },
        ColorName: {
    type: DataTypes.STRING,
    allowNull: false
  },
    slug: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  imagesURL: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
    DeptName: {
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
   StyleNote: {
    type: DataTypes.STRING,
    allowNull: false
  },
    Desc2: {
    type: DataTypes.STRING,
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
    allowNull: true
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
    OnHandQty: {
    type: DataTypes.STRING,
    allowNull: true
  },
});


export { Product };
