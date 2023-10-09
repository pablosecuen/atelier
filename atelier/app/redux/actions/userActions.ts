// userActions.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';
import User from '@/app/types/User';


// Acción para listar usuarios
export const listUsers = createAsyncThunk<User[], void>('userActions/listUsers', async () => {
  try {
    const response = await axiosInstance.get('/api/users/list');
    return response.data.users;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
});


// Acción para eliminar un usuario por su ID
export const deleteUser = createAsyncThunk<void, string>(
  'userActions/deleteUser',
  async (userId: string) => {
    try {
      await axiosInstance.delete(`/api/users/delete/${userId}`);
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
// Acción para obtener un usuario por su ID
export const getUserById = createAsyncThunk<User, string>(
  'userActions/getUserById',
  async (userId: string) => {
    try {
      const response = await axiosInstance.get(`/api/users/list/${userId}`);
      return response.data.user;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
// Acción para actualizar la información del usuario
export const updateUser = createAsyncThunk<void, { userId: string, updatedData: Partial<User> }>(
  'userActions/updateUser',
  async ({ userId, updatedData }) => {
    try {
      await axiosInstance.patch(`/api/users/update/${userId}`, updatedData);
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  });
  // Acción para marcar un usuario como eliminado
export const softDeleteUser = createAsyncThunk<void, string>(
  'userActions/softDeleteUser',
  async (userId: string) => {
    try {
      await axiosInstance.delete(`/api/users/delete/${userId}`);
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
// Función para obtener un usuario por su dirección de correo electrónico
// Acción para obtener un usuario por su dirección de correo electrónico
export const getUserByEmail = createAsyncThunk<User, string>(
  'userActions/getUserByEmail',
  async (email: string) => {
    try {
      const response = await axiosInstance.get(`/api/users/list/email/${email}`);
      return response.data.user;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);

// Acción para obtener un usuario por su número de teléfono
export const getUserByPhone = createAsyncThunk<User, string>(
  'userActions/getUserByPhone',
  async (phone: string) => {
    try {
      const response = await axiosInstance.get(`/api/users/list/phone/${phone}`);
      return response.data.user;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);