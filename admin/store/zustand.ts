import { create } from 'zustand';


export interface ProductWeb {
  id: string;
  imagesURL: string[];
  handle: string;
  slug: string;
  category: string;
  descriptionHtml: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  availableForSale: boolean;
  title: string;
  description: string;
  updatedAt: string;
  SKU: string;
  StyleName: string;
  UPC: string;
  RetailPrice: string;
  GetPercentOff: string;
  promoPrice: string;
  stock: string;
  createdAt: string;
}


export interface ProductApi {
  StockQty: string;
  SKU?: string;
  StyleName: string;
  UPC: string;
  name?: string;
  RetailPrice: string;
  GetPercentOff: string; 
  PromoPrice: string; 
  price?: number;
  category?: string;
  quantity?: number;
}

interface Zustand {
  apiProducts: ProductApi[];
  webProducts: ProductWeb[];
  setApiProducts: (newApiProducts: ProductApi[]) => void;
  setWebProducts: (newWebProducts: ProductWeb[]) => void;
  toggleAvailableForSale: (productId: string, availableForSale:boolean) => void;
}

const useGlobalStore = create<Zustand>((set) => ({
  apiProducts: [],
  webProducts: [],
  setApiProducts: (newApiProducts: ProductApi[]) => set({ apiProducts: newApiProducts }),
  setWebProducts: (newWebProducts: ProductWeb[]) => set({ webProducts: newWebProducts }),
toggleAvailableForSale: async (productId: string, availableForSale: boolean) => {
   try {
    // Realizar la llamada PUT al endpoint
    const response = await fetch(`http://localhost:3000/api/products/update/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ availableForSale: !availableForSale })
    });

    if (!response.ok) throw new Error('Error al actualizar el producto');

    // Actualizar el estado local después de una actualización exitosa
    set((state) => ({
      webProducts: state.webProducts.map((product) =>
        product.id === productId ? { ...product, availableForSale: !product.availableForSale } : product
      )
    }));
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
  }
}

}));

// Función para cargar productos de la API
export const fetchApiProducts = async () => {
  try {
      const response = await fetch("http://localhost:3000/api/products");
      console.log(response);
      
    if (!response.ok) {
      throw new Error("Error al obtener los productos de la API");
    }
      const data = await response.json();
       console.log(data);
    return data;
  } catch (error) {
    console.error("Error al obtener los productos de la API:", error);
    throw error; 
  }
};


export const fetchWebProducts = async () => {
  try {
   const response = await fetch("http://localhost:3000/api/products/web");
    if (!response.ok) {
      throw new Error("Error al obtener los productos de la WEB");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los productos del sitio web:", error);
    throw error; 
  }
};



export default useGlobalStore;
