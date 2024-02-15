// Importa Sequelize y configura la conexión a la base de datos
import { Sequelize, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();

const databaseName = process.env.DATABASE_NAME || 'default_database_name';
const databaseUserName = process.env.DATABASE_USERNAME || 'default_database_name';
const databasePassword = process.env.DATABASE_PASSWORD || 'default_database_name';

const sequelize = new Sequelize(databaseName, databaseUserName, databasePassword, {
  host: 'localhost',
    dialect: 'postgres',
    logging: false
});

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

// Define el modelo Variant
const Variant = sequelize.define('Variant', {
  id: {
    type: DataTypes.UUID,
     defaultValue: () => uuidv4(),
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
  },
  availableForSale: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  priceAmount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  priceCurrencyCode: {
    type: DataTypes.STRING,
  },
});

// Relación entre Product y Variant
Product.hasMany(Variant);
Variant.belongsTo(Product);

// Sincroniza los modelos con la base de datos
sequelize.sync({ force: true })
  .then(() => {
    console.log('Modelos sincronizados correctamente con la base de datos.');
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos con la base de datos:', error);
  });

// Exporta los modelos y la instancia de Sequelize
export { sequelize, Product, Variant };
