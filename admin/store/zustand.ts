import { toast } from 'sonner';
import { create } from 'zustand';




const useGlobalStore = create<Zustand>((set) => ({
  apiProducts: [],
  webProducts: [],
    tickets: [],
  setApiProducts: (newApiProducts: ProductApi[]) => set({ apiProducts: newApiProducts }),
  setWebProducts: (newWebProducts: ProductWeb[]) => set({ webProducts: newWebProducts }),
  setTicketProducts: (newTicketProducts: Ticket[]) => set({ tickets: newTicketProducts }),
toggleAvailableForSale: async (productId: string, availableForSale: boolean) => {
   try {
    // Realizar la llamada PUT al endpoint
    const response = await fetch(`https://wrong-eggnog-production.up.railway.app/api/products/update/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ availableForSale: !availableForSale })
    });

     if (!response.ok) {
       toast.error("Error al actualizar el producto")
       throw new Error('Error al actualizar el producto');
     } 
toast.success("Producto actualizado correctamente")
    // Actualizar el estado local después de una actualización exitosa
    set((state) => ({
      webProducts: state.webProducts.map((product) =>
        product.id === productId ? { ...product, availableForSale: !product.availableForSale } : product
      )
    }));
  } catch (error) {
     throw new Error('Error al actualizar el producto');
  }
  },
 deleteProduct: async (productId: string|number) => {
    try {
      await deleteProductFromDatabase(productId);
    } catch (error) {
       throw new Error('Error al borrar el producto');
    }
  }
}));

// Función para cargar productos de la API
export const fetchApiProducts = async () => {
  try {
      const response = await fetch("https://wrong-eggnog-production.up.railway.app/api/products");
      
    if (!response.ok) {
      toast.error("Error al obtener los productos de la API")
      throw new Error("Error al obtener los productos de la API");
    }
    toast.success("Productos cargados correctamente")
      const data = await response.json();
toast.success("Productos cargados correctamente")
    return data;
  } catch (error:any) {
    throw new Error(error); 
  }
};



export const  fetchTicketsDB= async () => {
    try {
      const response = await fetch("https://wrong-eggnog-production.up.railway.app/api/payments/list");
      if (!response.ok) {
        toast.error("Error al obtener los tickets")
        throw new Error("Error al obtener los tickets");
      }
toast.success("Tickets cargados correctamente")
      const data = await response.json();
         toast.success("Tickets cargados correctamente")
return data
    } catch (error) {
      throw new Error("Error al obtener los tickets");
    }
}
  
export const fetchWebProducts = async () => {
  try {
   const response = await fetch("https://wrong-eggnog-production.up.railway.app/api/products/web");
    if (!response.ok) {
      toast.error("PError al obtener los productos de la WEB")
      throw new Error("Error al obtener los productos de la WEB");
    }
toast.success("Productos cargados correctamente")
    const data = await response.json();
      toast.success("Productos web cargados correctamente")
    return data;
  } catch (error) {
    throw new Error("Error al obtener los productos de la WEB");
  }
};

const deleteProductFromDatabase = async (productId: string | number) => {
try {
    const response = await fetch(`https://wrong-eggnog-production.up.railway.app/api/products/delete/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  toast.success("Producto borrado correctamente")
} catch (error) {
  toast.error("Error al borrar el producto")
  throw new Error("Error al obtener los productos de la WEB");
}
  
};

export default useGlobalStore;



export interface ProductWeb {
  quantity: string | (readonly string[] & string) | undefined;
  size: string | (readonly string[] & string) | undefined;
  color: string | (readonly string[] & string) | undefined;
  StockQty: any;
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
  id?: string;
  StockQty: string;
  SKU: string;
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
  tickets: Ticket[];
  setApiProducts: (newApiProducts: ProductApi[]) => void;
  setWebProducts: (newWebProducts: ProductWeb[]) => void;
   setTicketProducts: (newTicketProducts: Ticket[]) => void;
  toggleAvailableForSale: (productId: string, availableForSale: boolean) => void;
  deleteProduct: (productId: string | number) => void;
}

export interface Ticket {
  id: string;
  paymentId: string;
  dateCreated: string;
  items: any[];
  status: string;
  transaction_amount: number;
  payer: any;
  shipments: any;
}