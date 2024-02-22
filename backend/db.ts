// db.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const databaseName = process.env.DATABASE_NAME || 'default_database_name';
const databaseUserName = process.env.DATABASE_USERNAME || 'default_database_name';
const databasePassword = process.env.DATABASE_PASSWORD || 'default_database_name';

const DATABASE_URL = process.env.RAILWAY_DATABASE_URL;

let sequelize: Sequelize;

if (DATABASE_URL) {
  sequelize = new Sequelize(DATABASE_URL.toString(), {
    logging: false
  });
} else {
  sequelize = new Sequelize(databaseName, databaseUserName, databasePassword, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  });
}

sequelize.sync({ force: true })
  .then(() => {
    console.log('Modelos sincronizados correctamente con la base de datos.');
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos con la base de datos:', error);
  });

export default sequelize;
