//paymentActions.ts

// paymentActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';
import Payment from '@/app/types/payment';
import axios from 'axios';

export type CreatePreferencePayload = {
    items: {
    id: string;
    title: string;
    description: string;
    category_id: string;
    unit_price: number;
    quantity: number;
  }[];
  back_urls: {
    success: string;
    failure: string;
    pending: string;
  };
  auto_return: string;
  notification_url:any
};



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
export const createPreferenceAsync = createAsyncThunk(
  'payment/createPreference',
  async (body: CreatePreferencePayload) => {

    try {
      const response = await axiosInstance.post(`/api/payments/preference`, body);
        
      return response.data;
    } catch (error: any) {
      console.error('Error creating preference:', error);
      throw error; // Lanza el error para ser manejado por el middleware de Redux Toolkit
    }
  }
);
