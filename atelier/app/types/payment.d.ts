// paymentTypes.ts

interface Payment {
    id: string;
    cardNumber?: string;
    expirationDate?: string;
    securityCode?: string;
    amount: number;
    cardType?: string;
    cardHolderName: string;
    billingAddress?: string;
    paymentMethod?: string;
    orderNumber: string;
    comments: string;
    userId: string;
    isDeleted: boolean;
    createdAt?: string;
  }
  
  export default Payment;
  