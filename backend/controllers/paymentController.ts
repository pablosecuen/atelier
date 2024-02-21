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
  const {area_code,number, items, back_urls, notification_url, firstname, lastname,  mail, dni, calle, altura, codigoPostal, provincia, ciudad } = req.body;
  console.log("log de body preference", req.body);
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
     payer: {
       first_name: firstname,
       last_name: lastname,
          email: mail,
          identification: {
            type: "DNI",
            number: dni,
          },
          address: {
            street_name: calle,
            street_number: altura,
            zip_code: codigoPostal,
       },
       phone: {
         area_code: area_code,
         number: number,
       }
        },
        shipments: {
          receiver_address: {
            street_name: calle,
            street_number: altura,
            zip_code: codigoPostal,
            state_name: provincia,
            city_name: ciudad,
            country_id: "AR",
          },
        },
  };

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
  const paymentId = req.body.data.id;
  console.log(paymentId);
  
  try {
        const response = await axios.get(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
      },
    });

      const paymentData = {
      paymentId: paymentId,
      dateCreated: response.data.date_created,
      items: response.data.additional_info.items,
      status: response.data.status,
      payer: response.data.payer,
      shipments: response.data.shipments,
      transaction_amount: response.data.transaction_amount,
    };

    const payment = await Payment.create(paymentData); 

    
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

export const searchPaymentInfo = async (req: Request, res: Response) => {
  try {
    const paymentId = req.query.payment_id as string;

    // Realizar la búsqueda de la información del pago utilizando el paymentId
    const response = await axios.get(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      headers: {
        Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
      },
    });


    
    // Enviar la información del pago como respuesta al cliente
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error al buscar la información del pago:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};



export default { createPreference, webHookController, getAllPayments, searchPaymentInfo  };