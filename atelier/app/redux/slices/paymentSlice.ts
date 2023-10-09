//paymentSlice.ts
// paymentSlice.ts
import {  createSlice } from '@reduxjs/toolkit';
import { listPayments, getPaymentById, createPayment, deletePayment,getPaymentsByProduct,getPaymentsByUserId } from '../actions/paymentActions';
import Payment from '@/app/types/payment';

interface PaymentState {
    payment:Payment;
  payments: Payment[];
  selectedPayment: Payment | null;
  error: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: PaymentState = {
    payment: {
        id: '',
        cardNumber: '',
        expirationDate: '',
        securityCode: '',
        amount: 0,
        cardType: '',
        cardHolderName: '',
        billingAddress: '',
        paymentMethod: '',
        orderNumber: '',
        comments: '',
        userId: '',
        isDeleted: false
    },
  payments: [],
  selectedPayment: null,
  error: null,
  status: 'idle',
};

const paymentSlice = createSlice({
    name: 'payments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(listPayments.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(listPayments.fulfilled, (state, action) => {
          state.payments = action.payload;
          state.status = 'succeeded';
          state.error = null;
        })
        .addCase(listPayments.rejected, (state, action) => {
          state.error = action.error.message || null;
          state.status = 'failed';
        })
        .addCase(getPaymentById.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getPaymentById.fulfilled, (state, action) => {
          state.selectedPayment = action.payload;
          state.status = 'succeeded';
          state.error = null;
        })
        .addCase(getPaymentById.rejected, (state, action) => {
          state.error = action.error.message || null;
          state.status = 'failed';
        })
        .addCase(createPayment.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(createPayment.fulfilled, (state, action) => {
          state.payments.push(action.payload);
          state.status = 'succeeded';
          state.error = null;
        })
        .addCase(createPayment.rejected, (state, action) => {
          state.error = action.error.message || null;
          state.status = 'failed';
        })
        .addCase(deletePayment.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(deletePayment.fulfilled, (state, action) => {
          const paymentIdToDelete = action.meta.arg;
          state.payments = state.payments.filter((payment) => payment.id !== paymentIdToDelete);
          state.error = null;
          state.status = 'succeeded';
        })
        .addCase(deletePayment.rejected, (state, action) => {
          state.error = action.error.message || null;
          state.status = 'failed';
        })
        .addCase(getPaymentsByProduct.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getPaymentsByProduct.fulfilled, (state, action) => {
          state.payments = action.payload;
          state.status = 'succeeded';
          state.error = null;
        })
        .addCase(getPaymentsByProduct.rejected, (state, action) => {
          state.error = action.error.message || null;
          state.status = 'failed';
        })
        .addCase(getPaymentsByUserId.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getPaymentsByUserId.fulfilled, (state, action) => {
          state.payments = action.payload;
          state.status = 'succeeded';
          state.error = null;
        })
        .addCase(getPaymentsByUserId.rejected, (state, action) => {
          state.error = action.error.message || null;
          state.status = 'failed';
        });
    },
  });
  
  export default paymentSlice.reducer;
