// payment.js
import { DataTypes, UUIDV4 } from 'sequelize';
import sequelize from '../db';

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => UUIDV4(),
    primaryKey: true
  },
  paymentId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  },

  products: {
    type: DataTypes.JSONB, 
    allowNull: false
  },

  payer: {
    type: DataTypes.JSONB, 
    allowNull: true
  },
});

export default Payment;
