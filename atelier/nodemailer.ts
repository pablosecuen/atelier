const { google } = require("googleapis");
const nodemailer = require("nodemailer");
require("dotenv").config();

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const REDIRECT_URI = "https://wrong-eggnog-production.up.railway.app/";

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


const sendTicket = async (paymentData: any, email:string) => {
    try {
        const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
         const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "andrews.notification@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
             },
      tls: {
        rejectUnauthorized: false,
             },
         });
        
         const htmlContent = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 20px;
            }
            .container {
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              padding: 20px;
            }
            h1 {
              color: #333;
            }
            p {
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Información de pago recibido</h1>
            <p>Detalles del pago:</p>
            <ul>
              <li><strong>Identificador del Pago:</strong> ${paymentData.paymentId}</li>
              <li><strong>Fecha de creación:</strong> ${paymentData.dateCreated}</li>
              <li><strong>Estado:</strong> ${paymentData.status}</li>
              <li><strong>Monto del pago:</strong> ${paymentData.transaction_amount}</li>
                <h2>Productos:</h2>
            <ul>
              ${paymentData.items.map((product: any, index: number) => `
                <li class="product-item">
                  <strong>Producto #${index + 1}</strong>
                  <ul>
                    <li>Nombre: ${product.title}</li>
                    <li>SKU: ${product.SKU}</li>
                    <li>Cantidad: ${product.quantity}</li>
                    <li>Precio Unitario: $${product.unit_price}</li>
                  </ul>
                </li>
              `).join('')}
            </ul>
            </ul>
          </div>
        </body>
      </html>
    `;
        
          // Contenido del correo
    const mailOptions = {
      from: "andrews.notification@gmail.com",
      to: `pablosecuen@gmail.com, andrews.notification@gmail.com` ,
      subject: 'Andrews: Información de pago recibido',
      html: htmlContent, 
        };
        const info = await transport.sendMail(mailOptions);
        console.log(info,"log dentro de funcion nodemailer")
         return info;
    } catch (error) {console.log(error);
    
          throw new Error(`Error sending email: ${error}`);
    }
}