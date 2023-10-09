//paymentActions.ts

// paymentActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';
import Payment from '@/app/types/payment';



// Acción para listar todos los pagos
export const listPayments = createAsyncThunk<Payment[], void>('paymentActions/listPayments', async () => {
  try {
    const response = await axiosInstance.get('/api/payment');
    return response.data.payments;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
});

// Acción para obtener un pago por su ID
export const getPaymentById = createAsyncThunk<Payment, string>('paymentActions/getPaymentById', async (paymentId: string) => {
  try {
    const response = await axiosInstance.get(`/api/payment/${paymentId}`);
    return response.data.payment;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
});

// Acción para obtener los pagos por ID de producto
export const getPaymentsByProduct = createAsyncThunk<Payment[], string>(
    'paymentActions/getPaymentsByProduct',
    async (productId: string) => {
      try {
        const response = await axiosInstance.get(`/api/payment/product/${productId}`);
        return response.data.payments;
      } catch (error: any) {
        throw new Error(error.response.data.message);
      }
    }
  );
  
  // Acción para obtener los pagos por ID de usuario
  export const getPaymentsByUserId = createAsyncThunk<Payment[], string>(
    'paymentActions/getPaymentsByUserId',
    async (userId: string) => {
      try {
        const response = await axiosInstance.get(`/api/payment/user/${userId}`);
        return response.data.payments;
      } catch (error: any) {
        throw new Error(error.response.data.message);
      }
    }
  );

// Acción para crear un nuevo pago
export const createPayment = createAsyncThunk<Payment, any>('paymentActions/createPayment', async (paymentData: any) => {
  try {
    const response = await axiosInstance.post('/api/payment/create', paymentData);
    return response.data.payment;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
});

// Acción para eliminar un pago por su ID
export const deletePayment = createAsyncThunk<void, string>('paymentActions/deletePayment', async (paymentId: string) => {
  try {
    await axiosInstance.delete(`/api/payment/delete/${paymentId}`);
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
});
