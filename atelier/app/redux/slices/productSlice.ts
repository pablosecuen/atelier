// productSlice.ts
import {  PayloadAction, createSlice } from '@reduxjs/toolkit';
import * as productActions from '../actions/productActions'; // Importa el archivo de acciones
import { Product } from '@/app/types/general';


// Define un tipo para el estado de productos
interface ProductState {
  product: Product;
  products: Product[];
  selectedProduct: Product;
  productsByCategory: Product[], 
  productByHandle: Product,
  error: any | null;
  searchResults: Product[],
  status: "idle" | "loading" | "succeeded" | "failed";
}

// Define el estado inicial
const initialState: ProductState = {
  product: {},
  products: [],
  searchResults:[],
  selectedProduct: {},
  productsByCategory: [],
  productByHandle:{},
  error: null,
  status: "idle",
};

// Define el slice de productos
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  
  extraReducers: (builder) => {
    builder
      .addCase(productActions.listProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productActions.listProducts.fulfilled, (state, action) => {      
        state.products = action.payload;       
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(productActions.listProducts.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload as string;
          state.status = "failed";
        } else {
          state.error = 'Error al buscar productos por nombre';
          state.status = "failed";
        }
      })
      .addCase(productActions.findProductByVariantId, (state, action: PayloadAction<string>) => {
        const variantId = action.payload;
        const selectedProduct = state.products.find((product:Product) => {
          const matchingVariant = product.variants.find((variant:any) => variant.id === variantId);
          return matchingVariant;
        });
        state.selectedProduct = selectedProduct;
      })
      .addCase(productActions.fetchProductsBySort.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productActions.fetchProductsBySort.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload; // Actualiza los productos en el estado
      })
      .addCase(productActions.fetchProductsBySort.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(productActions.searchProductByHandle.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(productActions.searchProductByHandle.fulfilled, (state, action) => {
        state.productByHandle = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(productActions.searchProductByHandle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(productActions.deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productActions.deleteProduct.fulfilled, (state, action) => {
        // Actualiza el estado después de eliminar el producto
        state.products = state.products.filter((product:Product) => product.id !== action.meta.arg);
        state.error = null;
        state.status = "succeeded";
      })
      .addCase(productActions.deleteProduct.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = "failed";
      })
 /*      .addCase(productActions.createProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productActions.createProduct.fulfilled, (state, action) => {
        state.product = action.payload.product;
        state.error = null;
        state.status = "succeeded";
      })
      
      .addCase(productActions.createProduct.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = "failed";
      }) */
      .addCase(productActions.getProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productActions.getProductById.fulfilled, (state, action) => {
        state.product = action.payload; 
        state.error = null;
        state.status = "succeeded";
      })
      
      .addCase(productActions.getProductById.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = "failed";
      })
      .addCase(productActions.searchProductsByName.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productActions.searchProductsByName.fulfilled, (state, action) => {
        state.products = action.payload;
        state.error = null;
        state.status = "succeeded";
      })
      .addCase(productActions.searchProductsByName.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = "failed";
      })
      .addCase(productActions.searchProductsByColor.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productActions.searchProductsByColor.fulfilled, (state, action) => {
        state.products = action.payload; 
        state.error = null;
        state.status = "succeeded";
      })
      
      .addCase(productActions.searchProductsByColor.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = "failed";
      })
      .addCase(productActions.searchProductsByPrice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productActions.searchProductsByPrice.fulfilled, (state, action) => {
        state.products = action.payload;
        state.error = null;
        state.status = "succeeded";
      })
      
      .addCase(productActions.searchProductsByPrice.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = "failed";
      })
      .addCase(productActions.searchProductsByDescription.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productActions.searchProductsByDescription.fulfilled, (state, action) => {
        state.products = action.payload;
        state.error = null;
        state.status = "succeeded";
      })
      
      .addCase(productActions.searchProductsByDescription.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = "failed";
      })
      .addCase(productActions.searchProductsByIsDeleted.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productActions.searchProductsByIsDeleted.fulfilled, (state, action) => {
        state.products = action.payload; 
        state.error = null;
        state.status = "succeeded";
      })
      
      .addCase(productActions.searchProductsByIsDeleted.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = "failed";
      })
      .addCase(productActions.searchProductsInSale.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productActions.searchProductsInSale.fulfilled, (state, action) => {
        state.products = action.payload;
        state.error = null;
        state.status = "succeeded";
      })      
      .addCase(productActions.searchProductsInSale.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = "failed";
      })
      .addCase(productActions.searchProductByHandleAndId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productActions.searchProductByHandleAndId.fulfilled, (state, action) => {
        state.product = action.payload;
        state.error = null;
        state.status = 'succeeded';
      })
      .addCase(productActions.searchProductByHandleAndId.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = 'failed';
      })
      .addCase(productActions.findProductsByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productActions.findProductsByCategory.fulfilled, (state, action) => {
        state.productsByCategory = action.payload;
        state.error = null;
        state.status = 'succeeded';
      })
      .addCase(productActions.findProductsByCategory.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = 'failed';
      })
      .addCase(productActions.updateProductById.pending, (state) => {
        state.status = "loading";
      })
      //findProductsByCategory
      .addCase(productActions.updateProductById.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const updatedIndex = state.products.findIndex((product: Product) => product.id === updatedProduct.id);
        if (updatedIndex !== -1) {
          state.products[updatedIndex] = updatedProduct;
        }
        state.error = null;
        state.status = "succeeded";
      })
      .addCase(productActions.updateProductById.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.status = "failed";
      })
  },
});

export default productSlice.reducer;
