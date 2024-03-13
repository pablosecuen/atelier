// productActions.ts

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '@/app/types/general';
import axiosInstance from '../axiosInstance';
import { AxiosResponse } from 'axios';
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

type FetchProductsByStyleNameArgs = {
  StyleName : string;
};

const handleAxiosGet = async <T>(
  url: string,
  availableForSaleCheck: boolean = false
): Promise<T[]> => {
  try {
    const response: AxiosResponse<T[]> = await axiosInstance.get(url);

    if (availableForSaleCheck) {
      return response.data.filter((item: any) => item.availableForSale);
    }

    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};


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



export const listProducts = createAsyncThunk<Product[], ListProductsArgs | void>(
  'productActions/listProducts',
  async (args, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Product[]> = await axiosInstance.get(`/api/products/web`);
      const products = response.data;

      const availableProducts = products.filter((product: any) => product.availableForSale);

      if (args?.filters?.category) {
        return availableProducts.filter((product: any) => product.category === args.filters.category);
      } else {
        return availableProducts;
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);


export const fetchProductsBySort = createAsyncThunk<Product[], FetchProductsArgs>(
  'products/fetchProductsBySort',
  async ({ sortKey, reverse, query }: FetchProductsArgs, thunkAPI) => {
    try {
      const url = `/api/products-for-sort?sortKey=${sortKey}&reverse=${reverse}&query=${query || ''}`;
      const response: AxiosResponse<Product[]> = await axiosInstance.get(url);

      // Filtrar los productos que tienen availableForSale como true
      const availableProducts = response.data.filter((product: Product) => product.availableForSale);

      return availableProducts;
    } catch (error: any) {
      throw new Error('No se pudo obtener la lista de productos.');
    }
  }
);



// Acción para obtener un producto por ID
export const getProductById = createAsyncThunk<Product, string>(
  'productActions/getProductById',
  async (id: string) => {
    return handleAxiosGet<Product>(`/api/product/${id}`);
  }
);
  

// Acción para buscar productos por nombre
export const searchProductsByName = createAsyncThunk<Product[], string>(
  'productActions/searchProductsByName',
  async (name: string) => {
    return handleAxiosGet<Product[]>(`/api/product/search/${name}`, true);
  }
);
  

export const searchProductByHandle = createAsyncThunk<Product, string>(
  'productActions/searchProductByHandle',
  async (handle: string) => {
    return handleAxiosGet<Product>(`/api/product/handle/${handle}`, true);
  }
);


// Acción para buscar productos por color
export const searchProductsByColor = createAsyncThunk<Product[], string>(
  'productActions/searchProductsByColor',
  async (color: string) => {
    return handleAxiosGet<Product[]>(`/api/product/search/${color}`, true);
  }
);
  
 // Acción para buscar productos por rango de precio
export const searchProductsByPrice = createAsyncThunk<Product[], { minPrice: number; maxPrice: number }>(
  'productActions/searchProductsByPrice',
  async ({ minPrice, maxPrice }: { minPrice: number; maxPrice: number }) => {
    return handleAxiosGet<Product[]>(`/api/product/search/${minPrice}/${maxPrice}`, true);
  }
);
  

// Acción para buscar productos por descripción
export const searchProductsByDescription = createAsyncThunk<Product[], string>(
  'productActions/searchProductsByDescription',
  async (description: string) => {
    return handleAxiosGet<Product[]>(`/api/product/search/${description}`, true);
  }
);
  

// Acción para buscar productos por estado de eliminación (isDeleted)
export const searchProductsByIsDeleted = createAsyncThunk<Product[], boolean>(
  'productActions/searchProductsByIsDeleted',
  async (isDeleted: boolean) => {
    return handleAxiosGet<Product[]>(`/api/product/search/${isDeleted}`, true);
  }
);
  

// Acción para buscar productos en venta (inSale)
export const searchProductsInSale = createAsyncThunk<Product[], boolean>(
  'productActions/searchProductsInSale',
  async (inSale: boolean) => {
    return handleAxiosGet<Product[]>(`/api/product/search/${inSale}`, true);
  }
);
  
export const searchProductByHandleAndId = createAsyncThunk<Product, { handle: string; id: string }>(
  'productActions/searchProductByHandleAndId',
  async ({ handle, id }: { handle: string; id: string }) => {
    return handleAxiosGet<Product>(`/api/product/search/${handle}/${id}`, true);
  }
);

export const findProductsByCategory = createAsyncThunk<Product[], string>(
  'productActions/findProductsByCategory',
  async (DeptName: string) => {
    return handleAxiosGet<Product[]>(`/api/product/category/${DeptName}`, true);
  }
);

// Acción para actualizar un producto por su ID
export const updateProductById = createAsyncThunk<Product, { id: string; updatedProduct: Product }>(
    'productActions/updateProductById',
    async ({ id, updatedProduct }: { id: string; updatedProduct: Product }) => {
      try {
        const response = await axiosInstance.patch(`/api/product/${id}`, updatedProduct);
        console.log(response.data.updatedProduct)
        return response.data.updatedProduct;
      } catch (error: any) {
        console.log(error)
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