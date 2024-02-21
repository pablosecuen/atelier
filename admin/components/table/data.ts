export const columns = [
   {name: 'NAME', uid: 'name'},
   { name: 'SKU', uid: 'SKU' },
   {name: 'UPC', uid: 'UPC'},
   { name: 'PRECIO', uid: 'RetailPrice' },
   { name: 'DESCUENTO', uid: 'GetPercentOff' },
   { name: 'PRECIO PROMO', uid: 'PromoPrice' },
   { name: 'STATUS', uid: 'status' },
   {name: 'ACTIONS', uid: 'actions'},
];

export const columnsWeb = [
   {name: 'NAME', uid: 'title'},
   { name: 'SKU', uid: 'SKU' },
   {name: 'UPC', uid: 'UPC'},
   { name: 'PRECIO', uid: 'RetailPrice' },
   { name: 'DESCUENTO', uid: 'GetPercentOff' },
   { name: 'PRECIO PROMO', uid: 'PromoPrice' },
   { name: 'TALLE', uid: 'size' },
    { name: 'STOCK', uid: 'stock' },
   { name: 'STATUS', uid: 'availableForSale' },
   {name: 'ACTIONS', uid: 'actions'},
];


export const columnsTicket = [
    { name: 'PAYER', uid: 'payer' },
   {name: 'FECHA', uid: 'createdAt'},
   { name: 'ITEMS', uid: 'items' },
   { name: 'PRECIO', uid: 'transaction_amount' },
    { name: 'STATUS', uid: 'status' },
   {name: 'ACTIONS', uid: 'actions'},
];