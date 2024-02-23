// productActions.ts

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '@/app/types/general';
import axiosInstance from '../axiosInstance';
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



interface ListProductsArgs {
  filters?: any;
}



//accion de productos para fakedb
/* export const listProducts = createAsyncThunk<Product[], ListProductsArgs | void>(
  'productActions/listProducts',
  async (args, { rejectWithValue }) => {
    try {
      if (args) {
        const filteredProducts = products.filter((product : Product) => {
          if (args.filters?.category) {
            return product.category === args.filters.category;
          }
          return true;
        });

        return filteredProducts;
      } else {
        return products;
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
); */

export const listProducts = createAsyncThunk<Product[], ListProductsArgs | void>(
  'productActions/listProducts',
  async (args, { rejectWithValue }) => {
    try {
      // Realizar la llamada a la API para obtener la lista de productos
      const response = await fetch("http://localhost:3000/api/products/web");
      if (!response.ok) {
        throw new Error('Error al cargar los productos');
      }
      const products = await response.json();

      if (args?.filters?.category) {
        return products.filter((product: Product) => {
          return product.category === args.filters.category;
        });
      } else {
        return products;
      }
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
        const response = await axiosInstance.get(`/api/product/${id}`);
        return response.data.product;
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
        const response = await axiosInstance.get(`/api/product/search/${name}`);
        return response.data.products;
      } catch (error: any) {
        throw new Error(error.response.data.message);
      }
    }
  );
  

export const searchProductByHandle = createAsyncThunk<Product, string>(
    'productActions/searchProductByHandle',
    async (handle: string) => {
      try {
        const response = await axiosInstance.get(`/api/product/handle/${handle}`);
        return response.data.product;
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
        const response = await axiosInstance.get(`/api/product/search/${color}`);
        return response.data.products;
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
        const response = await axiosInstance.get(`/api/product/search/${minPrice}/${maxPrice}`);
        return response.data.products;
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
        const response = await axiosInstance.get(`/api/product/search/${description}`);
        return response.data.products;
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
        const response = await axiosInstance.get(`/api/product/search/${isDeleted}`);
        return response.data.products;
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
        const response = await axiosInstance.get(`/api/product/search/${inSale}`);
        return response.data.products;
      } catch (error: any) {
        throw new Error(error.response.data.message);
      }    }
  );
  
export const searchProductByHandleAndId = createAsyncThunk(
    'productActions/searchProductByHandleAndId',
    async ({ handle, id }: { handle: string; id: string }) => {
      try {
        const response = await axiosInstance.get(`/api/product/search/${handle}/${id}`);
        return response.data.product; 
      } catch (error: any) {
        throw new Error(error.response.data.message);
      }
    }
  );

export const findProductsByCategory = createAsyncThunk(
    "productActions/findProductsByCategory",
    async (category: string) => {
      try {
        const response = await axiosInstance.get(`/api/product/category/${category}`); // Reemplaza esto con tu ruta de API real
        const data = await response.data.products;
        return data;
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
        const response = await axiosInstance.patch(`/api/product/${id}`, updatedProduct);

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