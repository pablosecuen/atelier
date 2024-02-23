import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, Product } from '@/app/types/general';
import { AppDispatch } from '../store';

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

const calculateTotalCost = (cart: Cart) => {
  
  const total = cart.reduce((accumulatedTotal:number, item:Product) => {
    // Verificar si el precio es un número válido antes de sumarlo
    const retailPrice = parseFloat(item.RetailPrice);
    const quantity = item.quantity || 1; // Si no se proporciona la cantidad, asumir 1
    
    // Verificar si retailPrice es un número válido
    if (!isNaN(retailPrice)) {
      return accumulatedTotal + retailPrice * quantity;
    }
    
    // Si el precio no es válido, puedes omitir este artículo en el cálculo
    return accumulatedTotal;
  }, 0);

  return total;
};





const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
      state.cost.totalAmount.amount = calculateTotalCost(state.cart);
      localStorage.setItem('cart', JSON.stringify(state.cart));
      localStorage.setItem('cost', JSON.stringify(state.cost));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((product: Product) => product?.id !== action.payload);
      state.cost.totalAmount.amount = calculateTotalCost(state.cart);
      localStorage.setItem('cart', JSON.stringify(state.cart));
      localStorage.setItem('cost', JSON.stringify(state.cost));
    },
    subtractQuantity: (state, action: PayloadAction<string>) => {
      const productIndex = state.cart.findIndex((item: Product) => item?.id === action.payload);
  
      if (productIndex !== -1) {
        // Restar 1 a la cantidad del producto
        if (state.cart[productIndex].quantity > 1) {
          state.cart[productIndex].quantity -= 1;
          state.cost.totalAmount.amount = calculateTotalCost(state.cart);
          localStorage.setItem('cart', JSON.stringify(state.cart));
          localStorage.setItem('cost', JSON.stringify(state.cost));
        }
      }
    },
    addQuantity: (state, action: PayloadAction<string>) => {
      const productIndex = state.cart.findIndex((item: Product) => item?.id === action.payload);

      if (productIndex !== -1) {
        // Sumar 1 a la cantidad del producto
        state.cart[productIndex].quantity += 1;
        state.cost.totalAmount.amount = calculateTotalCost(state.cart);
        localStorage.setItem('cart', JSON.stringify(state.cart));
        localStorage.setItem('cost', JSON.stringify(state.cost));
      }
    },
         clearCart: (state) => {
      state.cart = [];
      state.cost.totalAmount.amount = 0;
      localStorage.removeItem('cart');
      localStorage.removeItem('cost');
    },
  },
});



export const { addToCart, removeFromCart,subtractQuantity,addQuantity,  } = cartSlice.actions;

// Define clearCart como una acción fuera del slice
export const clearCart = () => (dispatch: AppDispatch) => {
  dispatch(cartSlice.actions.clearCart());
  localStorage.removeItem('cart');
  localStorage.removeItem('cost');
};


export default cartSlice.reducer;

