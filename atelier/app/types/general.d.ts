export type Maybe<T> = T | null;

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};

export type Cart = Omit<Cart, 'lines'> & {
  lines: CartItem[];
};

export type CartItem = {
  price: string;
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: Product;
  };
};

export type Collection = Collection & {
  path: string;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Menu = {
  title: string;
  path: string;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Page = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt: string;
  updatedAt: string;
};

export type Product = Omit<Product, 'variants' | 'images'> & {
  variants: ProductVariant[];
  images: Image[];
};

export type ProductOption = {
  title: ReactNode;
  id: Key | null | undefined;
  values: any;
  color: ColorOption[];
  id: string;
  title: string;
  available: boolean; 
  // Otras propiedades de ProductOption...
};

export type ColorOptions = {
  id: string;
  title: string;
  values: string[];
};

export type ProductVariant = {
  medidas(medidas: any): unknown;
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};

export type MedidasVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
};



export type Product = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  featuredImage: Image;
  images: Connection<Image>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
};


export type Collection = {
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
};
export type SEO = {
  title: string;
  description: string;
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: Connection<CartItem>;
  totalQuantity: number;
};

export type CartOperation = {
  data: {
    cart: Cart;
  };
  variables: {
    cartId: string;
  };
};

export type CreateCartOperation = {
  data: { cartCreate: { cart: Cart } };
};

export type AddToCartOperation = {
  data: {
    cartLinesAdd: {
      cart: Cart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type RemoveFromCartOperation = {
  data: {
    cartLinesRemove: {
      cart: Cart;
    };
  };
  variables: {
    cartId: string;
    lineIds: string[];
  };
};

export type UpdateCartOperation = {
  data: {
    cartLinesUpdate: {
      cart: Cart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      id: string;
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type CollectionOperation = {
  data: {
    collection: Collection;
  };
  variables: {
    handle: string;
  };
};

export type CollectionProductsOperation = {
  data: {
    collection: {
      products: Connection<Product>;
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type CollectionsOperation = {
  data: {
    collections: Connection<Collection>;
  };
};

export type MenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

export type PageOperation = {
  data: { pageByHandle: Page };
  variables: { handle: string };
};

export type PagesOperation = {
  data: {
    pages: Connection<Page>;
  };
};

export type ProductOperation = {
  data: { product: Product };
  variables: {
    handle: string;
  };
};

export type ProductRecommendationsOperation = {
  data: {
    productRecommendations: Product[];
  };
  variables: {
    productId: string;
  };
};

export type ProductsOperation = {
  data: {
    products: Connection<Product>;
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
  };
};


export type SortFilterItem = {
    handle: string | null;
    title: string;
    slug: string | null;
    sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
    reverse: boolean;
}
