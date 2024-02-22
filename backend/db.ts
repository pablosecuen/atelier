// db.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.RAILWAY_DATABASE_URL;

let sequelize: Sequelize | undefined;

if (DATABASE_URL) {
  sequelize = new Sequelize(DATABASE_URL, {
    dialect: "postgres",
    logging: false
  });
}

if (!sequelize) {
  throw new Error('No se pudo establecer una conexión a la base de datos. Verifique la URL de la base de datos.');
}

sequelize.sync({ force: true })
  .then(() => {
    console.log('Modelos sincronizados correctamente con la base de datos.');
  })
  .catch((error) => {
    console.error('Error al sincronizar modelos con la base de datos:', error);
  });

export default sequelize;
