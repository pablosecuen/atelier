import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/types/general';

type CartState = {
  cart: Product[];
  cost: {
    totalAmount: {
      amount: number;
      currencyCode: string;
    };
  };
};

const initialState: CartState = {
  cart: [],
  cost: {
    totalAmount: {
      amount: 0,
      currencyCode: '$',
    },
  },
};

const calculateTotalCost = (cart: Product[]) => {
  return cart.reduce((total: number, item: Product) => {
    if (typeof item.product?.price === 'number' && !isNaN(item.product.price)) {
      return total + item.product.price;
    }
    return total;
  }, 0);
};



const savedCartState = localStorage.getItem('cart');
const initialCartState = savedCartState ? JSON.parse(savedCartState) : initialState;

if (typeof window !== 'undefined') {
  // Actualiza initialCartState solo si estamos en el lado del cliente
  const savedCartStateClient = localStorage.getItem('cart');
  if (savedCartStateClient) {
    initialCartState.cart = JSON.parse(savedCartStateClient).cart;
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState || initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.cart.findIndex((item: Product) =>
        item.product?.id === product?.id &&
        item.product?.variants.medidas.medidas.id === product?.variants.medidas.medidas.id &&
        item.product?.price === product?.price
      );

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += quantity;
      } else {
        state.cart.push(action.payload);
      }
      state.cost.totalAmount.amount = calculateTotalCost(state.cart);
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((product: Product) => product?.id !== action.payload);
      state.cost.totalAmount.amount = calculateTotalCost(state.cart);
      localStorage.setItem('cart', JSON.stringify(state));
    },
    subtractQuantity: (state, action: PayloadAction<string>) => {
      const productIndex = state.cart.findIndex((item: Product) => item.product?.id === action.payload);
  
      if (productIndex !== -1) {
        // Restar 1 a la cantidad del producto
        if (state.cart[productIndex].quantity > 1) {
          state.cart[productIndex].quantity -= 1;
          state.cost.totalAmount.amount = calculateTotalCost(state.cart);
          localStorage.setItem('cart', JSON.stringify(state));
        }
      }
    },
    addQuantity: (state, action: PayloadAction<string>) => {
      const productIndex = state.cart.findIndex((item: Product) => item.product?.id === action.payload);

      if (productIndex !== -1) {
        // Sumar 1 a la cantidad del producto
        state.cart[productIndex].quantity += 1;
        state.cost.totalAmount.amount = calculateTotalCost(state.cart);
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    
  },
});



export const { addToCart, removeFromCart,subtractQuantity,addQuantity } = cartSlice.actions;


export default cartSlice.reducer;

