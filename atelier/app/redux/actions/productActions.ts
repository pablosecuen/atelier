// productActions.ts

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '@/app/types/general';

import axios, { AxiosResponse } from 'axios';
import axiosInstance from '../axiosInstance';




const handleAxiosGet = async <T>(
  url: string,
  filters?: any // Acepta argumentos de filtrado opcionalmente
): Promise<T[]> => {
  try {
    // Si hay argumentos de filtrado, adjúntalos a la URL de la API
    const apiUrl = filters ? `${url}?filters=${JSON.stringify(filters)}` : url;
    const response: AxiosResponse<T[]> = await axios.get(apiUrl);

    // Filtra los productos que están disponibles para la venta
    const availableProducts = response.data.filter((product: any) => product.availableForSale);

    return availableProducts;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

interface ListProductsArgs {
  filters?: any;
}

export const listProducts = createAsyncThunk<Product[], ListProductsArgs | void>(
  'productActions/listProducts',
  async (args = {}, thunkAPI) => { // Asigna un objeto vacío como valor predeterminado para args
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await handleAxiosGet<Product[]>(`${axiosInstance.defaults.baseURL}/api/products/web`, args);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductsByStyleName = createAsyncThunk<Product[], FetchProductsByStyleNameArgs>(
  'productActions/fetchProductsByStyleName',
  async ({ StyleName }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/products/style/${StyleName}`);
      if (response.status !== 200) {
        throw new Error('No se pudo obtener la lista de productos por StyleName.');
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductsBySort = createAsyncThunk(
  'products/fetchProductsBySort',
  async ({ sortKey, reverse, query }: FetchProductsArgs, thunkAPI) => {
    const url = `/api/products-for-sort?sortKey=${sortKey}&reverse=${reverse}&query=${query || ''}`;
  
    const response = await axiosInstance.get(url);
    if (response.status !== 200) {
      throw new Error('No se pudo obtener la lista de productos.');
    }

    return response.data;
  }
);



// Acción para obtener un producto por ID
export const getProductById = createAsyncThunk<Product, string>(
  'productActions/getProductById',
  async (id: string) => {
    try {
      const response = await handleAxiosGet<Product[]>(`${axiosInstance.defaults.baseURL}/api/product/${id}`);
      return response[0];
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
  

// Acción para buscar productos por nombre
export const searchProductsByName = createAsyncThunk<Product[], string>(
  'productActions/searchProductsByName',
  async (name: string) => {
    try {
      const response = await handleAxiosGet<Product[]>(`${axiosInstance.defaults.baseURL}/api/product/search/${name}`);
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
  
export const searchProductByHandle = createAsyncThunk<Product, string>(
  'productActions/searchProductByHandle',
  async (handle: string) => {
    try {
      const response = await handleAxiosGet<Product[]>(`${axiosInstance.defaults.baseURL}/api/product/handle/${handle}`);
      return response[0];
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);


// Acción para buscar productos por color
export const searchProductsByColor = createAsyncThunk<Product[], string>(
  'productActions/searchProductsByColor',
  async (color: string) => {
    try {
      const response = await handleAxiosGet<Product[]>(`${axiosInstance.defaults.baseURL}/api/product/search/${color}`);
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
  
 // Acción para buscar productos por rango de precio
export const searchProductsByPrice = createAsyncThunk<Product[], { minPrice: number; maxPrice: number }>(
  'productActions/searchProductsByPrice',
  async ({ minPrice, maxPrice }: { minPrice: number; maxPrice: number }) => {
    try {
      const response = await handleAxiosGet<Product[]>(`${axiosInstance.defaults.baseURL}/api/product/search/${minPrice}/${maxPrice}`);
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
  

// Acción para buscar productos por descripción
export const searchProductsByDescription = createAsyncThunk<Product[], string>(
  'productActions/searchProductsByDescription',
  async (description: string) => {
    try {
      const response = await handleAxiosGet<Product[]>(`${axiosInstance.defaults.baseURL}/api/product/search/${description}`);
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
  

// Acción para buscar productos por estado de eliminación (isDeleted)
export const searchProductsByIsDeleted = createAsyncThunk<Product[], boolean>(
  'productActions/searchProductsByIsDeleted',
  async (isDeleted: boolean) => {
    try {
      const response = await handleAxiosGet<Product[]>(`${axiosInstance.defaults.baseURL}/api/product/search/${isDeleted}`);
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
  

// Acción para buscar productos en venta (inSale)
export const searchProductsInSale = createAsyncThunk<Product[], boolean>(
  'productActions/searchProductsInSale',
  async (inSale: boolean) => {
    try {
      const response = await handleAxiosGet<Product[]>(`${axiosInstance.defaults.baseURL}/api/product/search/${inSale}`);
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
  
export const searchProductByHandleAndId = createAsyncThunk<Product, { handle: string; id: string }>(
  'productActions/searchProductByHandleAndId',
  async ({ handle, id }: { handle: string; id: string }) => {
    try {
      const response = await handleAxiosGet<Product[]>(`${axiosInstance.defaults.baseURL}/api/product/search/${handle}/${id}`);
      return response[0];
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);

export const findProductsByCategory = createAsyncThunk<Product[], string>(
  'productActions/findProductsByCategory',
  async (DeptName: string) => {
    try {
      const response = await handleAxiosGet<Product[]>(`${axiosInstance.defaults.baseURL}/api/product/category/${DeptName}`);
      return response;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);

// Acción para actualizar un producto por su ID
export const updateProductById = createAsyncThunk<Product, { id: string; updatedProduct: Product }>(
  'productActions/updateProductById',
  async ({ id, updatedProduct }: { id: string; updatedProduct: Product }) => {
    try {
      const response = await axiosInstance.patch(`${axiosInstance}/api/product/${id}`, updatedProduct);
      return response.data.updatedProduct;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);
  
// Acción para eliminar un usuario por su ID
export const deleteProduct = createAsyncThunk<void, string>(
  'productActions/deleteProduct',
  async (id: string) => {
    try {
      await axiosInstance.delete(`/api/product/delete/${id}`);
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);



export const findProductByVariantId = createAction<string>('products/findProductByVariantId');
  


type FetchProductsArgs = {
  sortKey: string;
  reverse: boolean;
  query: string;
  q:any;
};
type CustomSearchArgs = {
  sortKey: string | number;
  reverse: boolean;
  query: string | number;
};





type FetchProductsByStyleNameArgs = {
  StyleName : string;
};