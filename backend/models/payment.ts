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
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  payerId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  payerEmail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  payerFirstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  payerLastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  payerPhone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  payerAddress: {
    type: DataTypes.STRING,
    allowNull: false
  },
  payerPostalCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  payerCity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  payerCountry: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

export default Payment;
