// db.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();




let sequelize: Sequelize;


if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    logging: false
  });
} else {
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