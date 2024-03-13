import axios from 'axios';
import { toast } from 'sonner';
import { create } from 'zustand';





const axiosInstance = axios.create({
  baseURL: 'https://wrong-eggnog-production.up.railway.app',
});



const useGlobalStore = create<Zustand>((set) => ({
  apiProducts: [],
  webProducts: [],
    tickets: [],
  setApiProducts: (newApiProducts: ProductApi[]) => set({ apiProducts: newApiProducts }),
  setWebProducts: (newWebProducts: ProductWeb[]) => set({ webProducts: newWebProducts }),
  setTicketProducts: (newTicketProducts: Ticket[]) => set({ tickets: newTicketProducts }),
/* toggleAvailableForSale: async (productId: string, availableForSale: boolean) => {
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
  }, */
  toggleAvailableForSale: async (productId: string, availableForSale: boolean) => {
  try {
    const response = await axiosInstance.put(`/api/products/update/${productId}`, { availableForSale: !availableForSale });

    if (response.status !== 200) {
      toast.error("Error al actualizar el producto");
      throw new Error('Error al actualizar el producto');
    }

    toast.success("Producto actualizado correctamente");

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
/* export const fetchApiProducts = async () => {
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
}; */
export const fetchApiProducts = async () => {
  try {
    const response = await axiosInstance.get("/api/products");

    if (response.status !== 200) {
      toast.error("Error al obtener los productos de la API");
      throw new Error("Error al obtener los productos de la API");
    }

    toast.success("Productos cargados correctamente");

    return response.data;
  } catch (error:any) {
    throw new Error(error);
  }
};



/* export const  fetchTicketsDB= async () => {
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
} */
export const fetchTicketsDB = async () => {
  try {
    const response = await axiosInstance.get("/api/payments/list");

    if (response.status !== 200) {
      toast.error("Error al obtener los tickets");
      throw new Error("Error al obtener los tickets");
    }

    toast.success("Tickets cargados correctamente");

    return response.data;
  } catch (error) {
    throw new Error("Error al obtener los tickets");
  }
};
  
/* export const fetchWebProducts = async () => {
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
}; */
export const fetchWebProducts = async () => {
  try {
    const response = await axiosInstance.get("/api/products/web");

    if (response.status !== 200) {
      toast.error("Error al obtener los productos de la WEB");
      throw new Error("Error al obtener los productos de la WEB");
    }

    toast.success("Productos cargados correctamente");

    return response.data;
  } catch (error) {
    throw new Error("Error al obtener los productos de la WEB");
  }
};

/* const deleteProductFromDatabase = async (productId: string | number) => {
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
  
}; */
const deleteProductFromDatabase = async (productId: string | number) => {
  try {
    const response = await axiosInstance.delete(`/api/products/delete/${productId}`);

    toast.success("Producto borrado correctamente");
    return "Producto borrado correctamente"
  } catch (error) {
    toast.error("Error al borrar el producto");
    throw new Error("Error al borrar el producto");
  }
};

export default useGlobalStore;



export interface ProductWeb {
  quantity: string | (readonly string[] & string) | undefined;
  SizeCode: string | (readonly string[] & string) | undefined;
  ColorName: string | (readonly string[] & string) | undefined;
  StockQty?: any;
  id: string;
  imagesURL: string[];
  handle: string;
  Desc2: string;
  slug: string;
  DeptName: string;
  descriptionHtml: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  availableForSale: boolean;
  title: string;
  Desc1: string;
  updatedAt: string;
  SKU: string;
  StyleName: string;
  UPC: string;
  RetailPrice: string;
  GetPercentOff: string;
  promoPrice: string;
  OnHandQty: string;
  createdAt: string;
}


export interface ProductApi {
  id?: string;
  StockQty: string;
  SKU: string;
  StyleName: string;
  Desc1: string;
Desc2: string;
  UPC: string;
  name?: string;
  RetailPrice: string;
  GetPercentOff: string; 
  PromoPrice: string; 
  price?: number;
  DeptName?: string;
  OnHandQty?: number;
  ColorName: string;
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