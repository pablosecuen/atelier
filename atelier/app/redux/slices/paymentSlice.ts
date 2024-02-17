import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createPreferenceAsync } from '../actions/paymentActions';
 // Ajusta la ruta según tu estructura de carpetas

export interface CheckoutState {
  paymentInfo: PaymentInfo | null;
  preferenceId: string | undefined;
  loading: boolean;
  error: string | null;
}

export interface PaymentInfo {
  accounts_info: null;
  acquirer_reconciliation: [];
  additional_info: {
    authentication_code: null;
    available_balance: null;
    ip_address: string;
    items: [
      {
        category_id: null;
        description: null;
        id: null;
        picture_url: null;
        quantity: string;
        title: string;
        unit_price: string;
      }
    ];
    nsu_processadora: null;
  };
  authorization_code: null;
  binary_mode: boolean;
  brand_id: null;
  build_version: string;
  call_for_authorize_id: null;
  captured: boolean;
  card: {};
  charges_details: [
    {
      accounts: {
        from: string;
        to: string;
      };
      amounts: {
        original: number;
        refunded: number;
      };
      client_id: number;
      date_created: string;
      id: string;
      last_updated: string;
      metadata: {};
      name: string;
      refund_charges: [];
      reserve_id: null;
      type: string;
    }
  ];
  collector_id: number;
  corporation_id: null;
  counter_currency: null;
  coupon_amount: number;
  currency_id: string;
  date_approved: string;
  date_created: string;
  date_last_updated: string;
  date_of_expiration: null;
  deduction_schema: null;
  description: string;
  differential_pricing_id: null;
  external_reference: null;
  fee_details: [
    {
      amount: number;
      fee_payer: string;
      type: string;
    }
  ];
  financing_group: null;
  id: number;
  installments: number;
  integrator_id: null;
  issuer_id: string;
  live_mode: boolean;
  marketplace_owner: null;
  merchant_account_id: null;
  merchant_number: null;
  metadata: {};
  money_release_date: string;
  money_release_schema: null;
  money_release_status: string;
  notification_url: null;
  operation_type: string;
  order: {
    id: string;
    type: string;
  };
  payer: {
    identification: {
      number: string;
      type: string;
    };
    entity_type: null;
    phone: {
      number: null;
      extension: null;
      area_code: null;
    };
    last_name: null;
    id: string;
    type: null;
    first_name: null;
    email: string;
  };
  payment_method: {
    id: string;
    issuer_id: string;
    type: string;
  };
  payment_method_id: string;
  payment_type_id: string;
  platform_id: null;
  point_of_interaction: {
    business_info: {
      branch: null;
      sub_unit: string;
      unit: string;
    };
    transaction_data: {
      e2e_id: null;
    };
    type: string;
  };
  pos_id: null;
  processing_mode: string;
  refunds: [];
  shipping_amount: number;
  sponsor_id: null;
  statement_descriptor: null;
  status: string;
  status_detail: string;
  store_id: null;
  tags: null;
  taxes_amount: number;
  transaction_amount: number;
  transaction_amount_refunded: number;
  transaction_details: {
    acquirer_reference: null;
    external_resource_url: null;
    financial_institution: null;
    installment_amount: number;
    net_received_amount: number;
    overpaid_amount: number;
    payable_deferral_period: null;
    payment_method_reference_id: null;
    total_paid_amount: number;
  };
}


export const initialState: CheckoutState = {
    paymentInfo: null,
    preferenceId: undefined,
    loading: false,
    error: null,
};


const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPreferenceAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
    .addCase(createPreferenceAsync.fulfilled, (state, action: PayloadAction<{ preferenceId: string }>) => {
        state.loading = false;      
          state.preferenceId = action.payload.preferenceId;
        })
      .addCase(createPreferenceAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error desconocido';
      })
  },
});



export default paymentSlice.reducer;
