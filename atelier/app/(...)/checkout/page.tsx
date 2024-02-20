"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@/public/assets/icons/shop-cart";
import ChevronRight from "@/public/assets/icons/chevron-right";
import ChevronLeft from "@/public/assets/icons/chevron-left";
import { Wallet } from "@mercadopago/sdk-react";
import "@/app/globals.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { CreatePreferencePayload, createPreferenceAsync } from "@/app/redux/actions/paymentActions";

function Checkout() {
  const dispatch: AppDispatch = useDispatch();
  const { cart, cost } = useSelector((state: RootState) => state.cart);
  const preferenceId = useSelector((state: RootState) => state.payments.preferenceId);
  const [activeTab, setActiveTab] = useState("information");
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    area_code: "",
    number: "",
    firstname: "",
    lastname: "",
    calle: "",
    altura: "",
    provincia: "",
    ciudad: "",
    codigoPostal: "",
    mail: "",
    dni: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  const handleCreatePreference = () => {
    // Verifica que cart esté definido y sea un array
    if (cart && Array.isArray(cart) && cart.length > 0) {
      const body: CreatePreferencePayload = {
        items: cart.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          category_id: item.category,
          unit_price: parseInt(item.RetailPrice),
          quantity: item.quantity,
          size: item.size,
        })),
        back_urls: {
          success: "http://localhost:3005/checkout/success",
          failure: "http://localhost:3005/checkout/failure",
          pending: "http://localhost:3005/checkout/pending",
        },
        auto_return: "approved",
        notification_url: "https://57f4-190-30-7-148.ngrok-free.app/webhook",
        payer: {
          name: formData.firstname,
          email: formData.mail,
          identification: {
            type: "DNI",
            number: formData.dni,
          },
          phone: {
            number: formData.number,
            area_code: formData.area_code,
          },
          address: {
            street_name: formData.calle,
            street_number: formData.altura,
            zip_code: formData.codigoPostal,
          },
        },
        shipments: {
          receiver_address: {
            street_name: formData.calle,
            street_number: formData.altura,
            zip_code: formData.codigoPostal,
            state_name: formData.provincia,
            city_name: formData.ciudad,
            country_id: "AR",
          },
        },
      };

      dispatch(createPreferenceAsync(body));
    } else {
      console.error("Error: 'cart' no está definido o no es un array");
      // Manejo adicional si es necesario, como mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="">
      <div className="flex flex-col !font-atlas-grotesk-medium   md:min-h-[80vh] pt-0 md:pt-24 h-full  rounded-lg  bg-white p-4 text-black dark:terciario md:p-0 lg:flex-row lg:gap-8 ">
        <aside className="border-l md:w-1/2 md:pt-10 md:order-last  rounded-lg md:rounded-none    py-4 px-2 w-full">
          <details
            className={`custom-transition md:hidden ${
              isOpen ? "max-h-[1000px] opacity-100" : "max-h-10 opacity-100"
            }`}
          >
            <summary className="flex items-center justify-center" onClick={toggleDetails}>
              <span className="h-5 w-5 mr-2">
                <ShoppingCartIcon />
              </span>
              <span className="text-blue-600 text-sm pt-2 ">Mostrar</span>
            </summary>
            <div
              className={`mt-8 custom-transition gap-2 ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {cart.map((item: any, index: number) => (
                <div key={index} className="flex justify-between py-2 border-b items-center ">
                  <div>
                    <div className="relative">
                      <Image
                        src={item.imagesURL[0]}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="border border-gray-500/80 rounded-xl"
                      />
                      <span className="absolute top-0  right-0 z-10 text-sm px-[6px] -translate-y-[50%] bg-gray shadow-inner bg-gray-400 shadow-white rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full px-6">
                    <span>{item.title}</span>
                    <span className="text-sm opacity-70">{item.title}</span>
                  </div>
                  <div>
                    <span className="font-semibold tracking-wide w-auto flex text-sm">
                      ${item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <span className="font-semibold tracking-wide">Total</span>
              {
                <span className="font-semibold tracking-wide">
                  {cost.totalAmount.currencyCode} {cost.totalAmount.amount}
                </span>
              }
            </div>
          </details>
          <div className="hidden md:flex p-8 md:flex-col gap-2 md:w-96 overflow-y-auto">
            {cart.map((item: any, index: number) => (
              <div key={index} className="flex justify-between  border-b pb-4 items-center ">
                <div>
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.imagesURL[0]}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="border border-gray-500/80 rounded-xl bg-[#181818] w-full h-full "
                    />
                    <span className="absolute top-0 right-0 z-10 text-sm px-[6px] -translate-y-[50%] bg-gray shadow-inner bg-gray-400 shadow-white rounded-full">
                      {item.quantity}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col w-full px-6">
                  <span>{item.title}</span>
                  <span className="text-sm opacity-70">{item.title}</span>
                </div>
                <div>
                  <span className="font-semibold tracking-wide w-auto flex text-sm">
                    ${item.price}
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-8 flex justify-between items-center md:pl-2">
              <span className="font-semibold tracking-wide ">Total</span>
              {
                <span className="font-semibold tracking-wide">
                  {" "}
                  {cost.totalAmount.currencyCode} {cost.totalAmount.amount}
                </span>
              }
            </div>
          </div>
        </aside>
        <div className="md:w-1/2 md:flex md:pt-10 md:justify-end max-w-screen">
          <div className="mb-4  md:border-none md:w-[550px] ">
            {/* Pestañas */}
            <div className="mb-4 flex items-center ">
              <button
                onClick={() => handleTabChange("information")}
                className={` py-2 mr-2 text-xs flex items-center  ${
                  activeTab === "information" ? "text-blue-500 font-regular" : "font-semibold"
                }`}
              >
                <span className="mr-1 "> Informacion</span>
                {/* <AiOutlineRight /> */}
                <ChevronRight />
              </button>
              <button
                onClick={() => handleTabChange("shipping")}
                className={` py-2 mr-2 text-xs  ${
                  activeTab === "shipping" ? "text-blue-500 font-regular" : "font-semibold"
                }`}
              >
                Envio
              </button>
            </div>

            {/* Contenido del formulario */}
            {activeTab === "information" && (
              <form onSubmit={handleSubmit} className="w-auto ">
                <div className="pb-8">
                  <h3 className="md:mb-4 font-bold tracking-wide">Contacto</h3>
                  <div className="mb-4 border border-gray-500/80 rounded-lg px-2 py-1 ">
                    <label htmlFor="area_code" className="block opacity-60 text-xs -mb-1">
                      Cod. de area:
                    </label>
                    <input
                      type="text"
                      id="area_code"
                      name="area_code"
                      value={formData.area_code}
                      onChange={handleChange}
                      className=" text-sm h-6 w-full "
                      required
                    />
                  </div>
                  <div className="mb-4 border border-gray-500/80 rounded-lg px-2 py-1 ">
                    <label htmlFor="number" className="block opacity-60 text-xs -mb-1">
                      Teléfono:
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      className=" text-sm h-6 w-full "
                      required
                    />
                  </div>
                  <div className="mb-4 border border-gray-500/80 rounded-lg px-2 py-1 ">
                    <label htmlFor="telefono" className="block opacity-60 text-xs -mb-2">
                      Mail:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      className="  h-6 text-sm md:h-8   w-full"
                      required
                    />
                  </div>
                  <div className="mb-4 border border-gray-500/80 rounded-lg px-2 py-1 ">
                    <label htmlFor="dni" className="block opacity-60 text-xs -mb-2">
                      Dni:
                    </label>
                    <input
                      type="dni"
                      id="dni"
                      name="dni"
                      onChange={handleChange}
                      className="  h-6 text-sm md:h-8   w-full"
                      required
                    />
                  </div>
                </div>
                <div>
                  <h3 className="md:mb-4 font-bold tracking-wide">Datos de envio</h3>
                  <div className="md:flex md:gap-2">
                    <div className="mb-4 border md:w-1/2 border-gray-500/80 rounded-lg px-2 py-1 ">
                      <label htmlFor="firstname" className="block opacity-60 text-xs -mb-2">
                        Nombre:
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        className="  h-6 text-sm md:h-8   w-full"
                        required
                      />
                    </div>
                    <div className="mb-4 border md:w-1/2 border-gray-500/80 rounded-lg px-2 py-1 ">
                      <label htmlFor="lastname" className="block opacity-60 text-xs -mb-2">
                        Apellido:
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        className="  h-6 text-sm md:h-8   w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4 border border-gray-500/80 rounded-lg px-2 py-1 ">
                    <label htmlFor="calle" className="block opacity-60 text-xs -mb-2">
                      Calle:
                    </label>
                    <input
                      type="text"
                      id="calle"
                      name="calle"
                      value={formData.calle}
                      onChange={handleChange}
                      className="  h-6 text-sm md:h-8   w-full"
                      required
                    />
                  </div>
                  <div className="mb-4 border border-gray-500/80 rounded-lg px-2 py-1 ">
                    <label htmlFor="altura" className="block opacity-60 text-xs -mb-2">
                      Altura:
                    </label>
                    <input
                      type="text"
                      id="altura"
                      name="altura"
                      value={formData.altura}
                      onChange={handleChange}
                      className="  h-6 text-sm md:h-8   w-full"
                      required
                    />
                  </div>
                  <div className="md:flex md:gap-2">
                    <div className="mb-4 border border-gray-500/80 rounded-lg px-2 py-1 ">
                      <label htmlFor="ciudad" className="block opacity-60 text-xs -mb-2">
                        Ciudad:
                      </label>
                      <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleChange}
                        className="  h-6 text-sm md:h-8   w-full"
                        required
                      />
                    </div>
                    <div className="mb-4 border border-gray-500/80 rounded-lg px-2 py-1 ">
                      <label htmlFor="provincia" className="block opacity-60 text-xs -mb-2">
                        Provincia:
                      </label>
                      <input
                        type="text"
                        id="provincia"
                        name="provincia"
                        value={formData.provincia}
                        onChange={handleChange}
                        className="  h-6 text-sm md:h-8   w-full"
                        required
                      />
                    </div>
                    <div className="mb-4 border border-gray-500/80 rounded-lg px-2 py-1 ">
                      <label htmlFor="codigoPostal" className="block opacity-60 text-xs -mb-2">
                        Código Postal:
                      </label>
                      <input
                        type="text"
                        id="codigoPostal"
                        name="codigoPostal"
                        value={formData.codigoPostal}
                        onChange={handleChange}
                        className="  h-6 text-sm md:h-8   w-full"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="md:flex md:justify-end text-white">
                  <button
                    type="button"
                    onClick={() => handleTabChange("shipping")}
                    className="bg-blue-600 hover:bg-blue-800 md:w-1/3  py-2 px-4 rounded w-full h-16 semibold tracking-wider text-sm semibold"
                  >
                    Continuar a envios
                  </button>
                </div>
              </form>
            )}

            {activeTab === "shipping" && (
              <form onSubmit={handleSubmit} className="w-full">
                <div className="border rounded-lg px-4 mb-10  ">
                  <div className="flex justify-between gap-2 border-b py-4">
                    <div className="flex flex-col gap-2">
                      <span className="opacity-70 text-sm ">Contacto</span>
                      <span className="text-sm">
                        {formData.area_code} {"-"}
                        {formData.number}
                      </span>
                    </div>
                    <button
                      onClick={() => handleTabChange("information")}
                      className="text-blue-600 underline"
                    >
                      cambiar
                    </button>
                  </div>

                  <div className="flex justify-between gap-2 py-4">
                    <div className="flex flex-col gap-2">
                      <span className="opacity-70 text-sm">Envio</span>
                      <span className="text-sm">
                        {formData.calle}, {formData.altura}, {formData.ciudad}, {formData.provincia}
                        , {formData.codigoPostal}
                      </span>
                    </div>
                    <button
                      onClick={() => handleTabChange("information")}
                      className="text-blue-600 underline"
                    >
                      cambiar
                    </button>
                  </div>
                </div>

                {preferenceId && (
                  <Wallet
                    initialization={{ preferenceId: preferenceId }}
                    customization={{ texts: { valueProp: "smart_option" } }}
                  />
                )}
                {!preferenceId && (
                  <button
                    color="primary"
                    type="button"
                    onClick={() => handleCreatePreference()}
                    className="w-full bg-blue-600 text-white py-6 rounded-md"
                  >
                    Generar Pago
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => handleTabChange("information")}
                  className="flex justify-center w-full h-16 mt-6 items-center  semibold"
                >
                  <ChevronLeft />
                  <span className="text-blue-600 pl-2">Volver a informacion</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
