import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, Product } from '@/app/types/general';

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
    if (item.variants[0]?.price && typeof item.variants[0].price === 'number' && !isNaN(item.variants[0].price)) {
      return accumulatedTotal + item.variants[0].price * item.variants[0].quantity;
    }
    // Si el precio no es válido, puedes omitir este artículo en el cálculo
    return accumulatedTotal;
  }, 0);

  // Redondear el total a dos decimales
  const roundedTotal = Number(total.toFixed(2));

  return roundedTotal;
};




const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
      state.cost.totalAmount.amount = calculateTotalCost(state.cart);
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((product: Product) => product?.id !== action.payload);
      state.cost.totalAmount.amount = calculateTotalCost(state.cart);
      localStorage.setItem('cart', JSON.stringify(state));
    },
    subtractQuantity: (state, action: PayloadAction<string>) => {
      const productIndex = state.cart.findIndex((item: Product) => item?.id === action.payload);
  
      if (productIndex !== -1) {
        // Restar 1 a la cantidad del producto
        if (state.cart[productIndex].variants[0].quantity > 1) {
          state.cart[productIndex].variants[0].quantity -= 1;
          state.cost.totalAmount.amount = calculateTotalCost(state.cart);
          localStorage.setItem('cart', JSON.stringify(state));
        }
      }
    },
    addQuantity: (state, action: PayloadAction<string>) => {
      const productIndex = state.cart.findIndex((item: Product) => item?.id === action.payload);

      if (productIndex !== -1) {
        // Sumar 1 a la cantidad del producto
        state.cart[productIndex].variants[0].quantity += 1;
        state.cost.totalAmount.amount = calculateTotalCost(state.cart);
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    
  },
});



export const { addToCart, removeFromCart,subtractQuantity,addQuantity } = cartSlice.actions;


export default cartSlice.reducer;

