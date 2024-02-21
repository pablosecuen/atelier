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
  notification_url: any
    payer: {
      firstname: string;
      lastname: string;
    email: string;
    identification: {
      type: string;
      number: string;
      },
      phone: {
        number: string;
        area_code: string;
      }
    address: {
      street_name: string;
      street_number: string;
      zip_code: string;
    },
  },
  shipments: {
    receiver_address: {
      street_name: string;
      street_number: string;
      zip_code: string;
      state_name: string;
      city_name: string;
      country_id: string,
    },
  },
};


export const listPayments = createAsyncThunk<Payment[], void>('paymentActions/listPayments', async () => {
  try {
    const response = await axiosInstance.get('/api/payment');
    return response.data.payments;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
});

// Acción para crear una preferencia de pago 
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

// Acción para obtener un pago por su ID
export const getMerchantOrder = createAsyncThunk(
  'payment/getMerchantOrder',
  async (paymentId: string) => {
    try {
      // Realiza la solicitud al endpoint del backend para buscar la orden del comerciante
      const response = await axios.get(`http://localhost:3000/api/payments/merchantOrder?payment_id=${paymentId}`);

      // Devuelve los datos de la orden del comerciante
      return response.data;
    } catch (error) {
      // Captura y maneja cualquier error que ocurra durante la solicitud
      console.error('Error al obtener la orden del comerciante:', error);
      throw error; // Lanza el error para ser manejado por el middleware de Redux Toolkit
    }
  }
);
