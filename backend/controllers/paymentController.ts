// controllers/checkoutController.js
import { Request, Response } from 'express';
import { MercadoPagoConfig, Preference } from "mercadopago";
import Payment from '../models/payment'; 
import axios from 'axios';
import nodemailer from 'nodemailer';
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
 
  const body = {
    items: req.body.items.map((item: MercadoPagoItem) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      category_id: item.category_id,
      unit_price: item.unit_price,
      quantity: item.quantity,
      size: item.size,
    })),
    back_urls: {
      success: req.body.back_urls.success,
      failure: req.body.back_urls.failure,
      pending: req.body.back_urls.pending,
    },
    auto_return: "approved",
    notification_url: req.body.notification_url,
     payer: {
       first_name: req.body.firstname,
       last_name: req.body.lastname,
          email: req.body.mail,
          identification: {
            type: "DNI",
            number: req.body.dni,
          },
          address: {
            street_name: req.body.calle,
            street_number: req.body.altura,
            zip_code: req.body.codigoPostal,
       },
       phone: {
         area_code: req.body.area_code,
         number: req.body.number,
       }
        },
        shipments: {
          receiver_address: {
            street_name: req.body.calle,
            street_number: req.body.altura,
            zip_code: req.body.codigoPostal,
            state_name: req.body.provincia,
            city_name: req.body.ciudad,
            country_id: "PE",
          },
        },
  };

  try {
    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.status(200).json({ preferenceId: result.id });
  } catch (error) {
    console.error(error);
    res.status(500).json( "Error interno del servidor" );
  }
};






const webHookController = async (req: Request, res: Response) => {
  const paymentId = req.body?.data?.id;

  
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

    res.status(200).json('webhook recibido exitosamente');
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


export const getAllPayments = async (req: Request, res: Response) => {
  try {
    // Consultar todos los pagos de la base de datos
    let payments = await Payment.findAll();

    // Verificar si se encontraron pagos
    if (!payments) {
      payments = []; // Si no hay pagos, asignamos un array vacío
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


