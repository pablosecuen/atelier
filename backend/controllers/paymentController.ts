// controllers/checkoutController.js
import { Request, Response } from 'express';
import { MercadoPagoConfig, Preference } from "mercadopago";
import Payment from '../models/payment'; 
import axios from 'axios';
require("dotenv").config();



interface MercadoPagoItem {
  id: string;
  title: string;
  description: string;
  category_id: string;
  unit_price: number;
  quantity: number;
  size: string;
}

const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

if (!accessToken) {
  throw new Error('El token de acceso a Mercado Pago no está definido.');
}

const client = new MercadoPagoConfig({
  accessToken: accessToken,
});

// Controlador para crear una preferencia de Mercado Pago
export const createPreference = async (req: Request, res: Response) => {
  const { items, back_urls, notification_url } = req.body;
  console.log("log de req.body en controller", req.body);
  const body = {
    items: items.map((item: MercadoPagoItem) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      category_id: item.category_id,
      unit_price: item.unit_price,
      quantity: item.quantity,
      size: item.size,
    })),
    back_urls: {
      success: back_urls.success,
      failure: back_urls.failure,
      pending: back_urls.pending,
    },
    auto_return: "approved",
    notification_url: notification_url,
  };

  console.log("log del body formado para enviar", body);
  try {
    const preference = new Preference(client);
    console.log("log de preference", preference);
    const result = await preference.create({ body });
    console.log("log de preference id", result.id);
    res.status(200).json({ preferenceId: result.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};



const webHookController = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const action = data.action;
    const paymentId = data.data.id;
    const dateCreated = data.date_created;
    const userId = data.user_id;

    if (action === "payment.created") {
      // Obtener los detalles de la orden de comerciante (merchant order) desde Mercado Pago
      const response = await axios.get(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
        },
      });

      if (response.status === 200) {
           const paymentDetails = response.data;
        // Guardar los detalles de la orden de comerciante como un nuevo registro de pago en la base de datos
       await Payment.create({
          paymentId: paymentDetails.id,
          dateCreated: dateCreated,
          userId: userId,
          products: paymentDetails.items, 
          payer: paymentDetails.payer, 
        });
      }
    }
        
    res.status(200).json("webhook recibido exitosamente");
  } catch (error) {
    console.error("Error al manejar el webhook: ", error);
    res.status(500).json({ status: "error", message: "Error interno del servidor" });
  }
};

export const getAllPayments = async (req: Request, res: Response) => {
  try {
    // Consultar todos los pagos de la base de datos
    const payments = await Payment.findAll();

    // Verificar si se encontraron pagos
    if (!payments || payments.length === 0) {
      return res.status(400).json({ message: 'No se encontraron pagos.' });
    }

    // Retornar los pagos encontrados
    res.status(200).json(payments);
  } catch (error) {
    console.error('Error al obtener los pagos: ', error);
    res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
  }
};

export default { createPreference, webHookController, getAllPayments  };