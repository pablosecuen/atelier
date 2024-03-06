"use client";
import React from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import Image from "next/image";
import model from "@/public/assets/sesion-estudio-ropa-moda-hombre-camisa-verde-basica-removebg-preview.png";
import model2 from "@/public/assets/retrato-hombre-alegre-camisa-blanca-pie-removebg-preview.png";
import picture from "@/public/assets/DSC_1422.jpg";
import tag from "@/public/assets/mmb-u82o.png";
import mockup from "@/public/assets/mockup.webp";
import perchero from "@/public/assets/perchero.webp";
import customfit from "@/public/assets/customfit.webp";
import Link from "next/link";

function Nosotros() {
  return (
    <div className="min-h-screen text-black flex flex-col items-center bg-white z-40 mdpt-16 max-w-screen overflow-hidden">
      <div className=" mt-12 md:mt-16   flex flex-col h-full  justify-center items-center   md:gap-4 gap-10 max-w-7xl">
        <VisibilitySensor partialVisibility>
          {({ isVisible }: any) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 50 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:h-[80vh]  h-full flex flex-col animate-me relative justify-center mb-80 md:mb-0"
            >
              <Image
                src={model}
                alt="foto"
                width={0}
                height={0}
                className="absolute z-0 scale-150 right-0 bottom-[50%] translate-y-[50%] contrast-150"
                quality={100}
              />
              <strong className=" font-atlas-grotesk-bold z-10 text-xl md:text-4xl ml-4 md:ml-0 w-1/3 md:w-4/5 text-end">
                ANDREWS
              </strong>
              <p className="font-atlas-grotesk-medium md:text-center w-2/3 md:self-center  md:text-2xl z-10 md:leading-8 p-8 md:p-0">
                En Andrews, nuestra pasión por la moda y nuestro compromiso con la excelencia se
                reflejan en cada prenda que creamos. Desde nuestra fundación en 2008, hemos sido
                pioneros y líderes en la industria de la moda, especializándonos en la confección de
                camisas, pantalones, corbatas y accesorios de calidad excepcional. Como una empresa
                familiar arraigada en la tradición, cada diseño que ofrecemos es una manifestación
                de nuestra dedicación a la artesanía y la originalidad.
              </p>
            </motion.div>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }: any) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 50 }}
              transition={{ ease: "easeOut", duration: 2 }}
              className="md:h-[80vh] h-full flex flex-col animate-me relative  justify-center  mb-40 md:mb-0"
            >
              <Image
                src={model2}
                alt="foto"
                width={250}
                height={0}
                className="absolute z-0 scale-150 left-0  bottom-[50%] translate-y-[50%]"
                quality={100}
              />
              <div className="w-2/3 md:self-center self-end md:text-center text-start z-10 ">
                <strong className=" font-atlas-grotesk-bold z-10 text-xl md:text-4xl md:w-1/3 text-start">
                  EQUIPO
                </strong>
                <p className="font-atlas-grotesk-medium md:text-center    md:text-2xl z-10 md:leading-8">
                  Nuestro equipo de diseñadores y técnicos trabaja incansablemente para desarrollar
                  productos que no solo sigan las tendencias actuales, sino que también establezcan
                  nuevos estándares en moda y estilo. Desde la selección cuidadosa de materiales de
                  primera calidad hasta la meticulosa atención al detalle en cada puntada, nos
                  esforzamos por ofrecer a nuestros clientes prendas que no solo luzcan bien, sino
                  que también se sientan excepcionales.
                </p>
              </div>
            </motion.div>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }: any) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 50 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:h-screen h-full flex flex-col animate-me relative  justify-center items-center mt-48"
            >
              <Image
                src={picture}
                alt="foto"
                width={0}
                height={0}
                className=" z-0 w-full "
                quality={100}
              />
              <div className=" self-end text-center flex flex-col md:flex-row items-center md:justify-evenly p-8 mt-10">
                <strong className=" font-atlas-grotesk-bold z-10 text-xl md:text-4xl md:w-1/3 text-start">
                  NUESTRAS CAMISAS
                </strong>
                <p className="!font-canela-regular md:text-justify text-start  md:w-2/3 md:text-lg z-10 leading-8 pt-2 md:pt-0">
                  Todo comienza con materiales auténticos, naturales y sostenibles. Empleamos
                  materiales de la más alta calidad para perfeccionar el aspecto, la sensación y el
                  rendimiento de cada pieza que fabricamos. Nuestro diseño minimalista deja
                  traslucir la belleza innata y la longevidad de estos materiales. La calidad del
                  algodón Pima peruano es inigualable. Su longitud de fibra extra larga le da una
                  sensación increíblemente suave y tersa y un brillo brillante. Es muy duradero,
                  hasta un 45 % más resistente que el algodón normal, por lo que no se apelmaza ni
                  se deshilacha con el tiempo. El algodón Pima también es hipoalergénico, lo que lo
                  convierte en una opción ideal para las personas con piel sensible. La combinación
                  de la semilla, la tierra y el microclima ha hecho que el algodón Pima sea el
                  algodón más fino y de fibra más larga en el mundo. Cuando es procesado
                  correctamente tiene un brillo especial y una suavidad al tacto insuperable.
                  Además, a pesar de ser una fibra fina y larga, el algodón Pima es también más
                  resistente que casi todos los demás algodones, haciendo las prendas más duraderas.
                  Por la longitud de su fibra está considerado entre los mejores del mundo
                </p>
              </div>
            </motion.div>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }: any) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 50 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:h-screen flex flex-col animate-me relative  justify-center items-center md:mt-48"
            >
              <Image
                src={tag}
                alt="foto"
                width={0}
                height={0}
                className=" z-0 w-full "
                quality={100}
              />
              <div className=" self-end text-center flex flex-col md:flex-row items-center md:justify-evenly p-8 mt-10">
                <strong className=" font-atlas-grotesk-bold z-10 text-xl md:text-4xl md:w-1/3 text-start">
                  EL CAMINO DE ANDREWS
                </strong>
                <p className="!font-canela-regular md:text-center text-start  md:w-2/3 md:text-xl z-10 leading-8 pt-2 md:pt-0">
                  En Andrews, creemos firmemente que la moda es más que solo seguir las tendencias;
                  es una forma de expresión personal y una oportunidad para destacar en cualquier
                  ocasión. Nuestro objetivo es brindar a nuestros clientes la confianza para
                  expresar su individualidad a través de su estilo único. Únete a nosotros en
                  nuestro viaje mientras continuamos redefiniendo la moda masculina en Perú y más
                  allá. Con Andrews, descubre el poder transformador de la moda que perdura más allá
                  de las tendencias pasajeras, y haz una declaración de estilo que perdure en el
                  tiempo.
                </p>
              </div>
            </motion.div>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }: any) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: 50 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:h-screen flex flex-col animate-me relative  justify-center p-4 md:p-0"
            >
              <Image
                src={mockup}
                alt="foto"
                width={0}
                height={0}
                className="absolute z-0 w-2/5 scale-150 left-0  bottom-[50%] translate-y-[50%]"
                quality={100}
              />
              <div className="w-1/2 self-end text-start z-10">
                <strong className=" font-atlas-grotesk-bold  py-8 z-10 md:text-2xl text-xl ">
                  Nuestras Camisas
                </strong>
                <p className="font-atlas-grotesk-medium text-start  text-sm  md:text-lg z-10 leading-6 pt-2">
                  Todo comienza con materiales auténticos, naturales y sostenibles. Empleamos
                  materiales de la más alta calidad para perfeccionar el aspecto, la sensación y el
                  rendimiento de cada pieza que fabricamos. Nuestro diseño minimalista deja
                  traslucir la belleza innata y la longevidad de estos materiales. La calidad del
                  algodón Pima peruano es inigualable. Su longitud de fibra extra larga le da una
                  sensación increíblemente suave y tersa y un brillo brillante. Es muy duradero,
                  hasta un 45 % más resistente que el algodón normal, por lo que no se apelmaza ni
                  se deshilacha con el tiempo. El algodón Pima también es hipoalergénico, lo que lo
                  convierte en una opción ideal para las personas con piel sensible. La combinación
                  de la semilla, la tierra y el microclima ha hecho que el algodón Pima sea el
                  algodón más fino y de fibra más larga en el mundo. Cuando es procesado
                  correctamente tiene un brillo especial y una suavidad al tacto insuperable.
                  Además, a pesar de ser una fibra fina y larga, el algodón Pima es también más
                  resistente que casi todos los demás algodones, haciendo las prendas más duraderas.
                  Por la longitud de su fibra está considerado entre los mejores del mundo
                </p>
              </div>
            </motion.div>
          )}
        </VisibilitySensor>

        {/* <VisibilitySensor partialVisibility>
          {({ isVisible }: any) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:h-screen flex flex-col animate-me relative overflow-hidden justify-center p-4 md:p-0 "
            >
              <Image
                src={perchero}
                alt="foto"
                width={0}
                height={0}
                className="absolute z-0 w-2/5 scale-150 right-0  bottom-[50%] translate-y-[50%]"
                quality={100}
              />
              <div className="w-1/2 self-start text-start z-10">
                <strong className=" font-atlas-grotesk-bold  py-8 z-10 md:text-2xl text-xl ">
                  CÓMO EMPEZÓ
                </strong>
                <p className="font-atlas-grotesk-medium text-start  text-sm  md:text-lg z-10 leading-6 pt-2">
                  Pero, por supuesto, no siempre ha sido así. En 2014, pedirnos algo requería una
                  cinta métrica, paciencia debido a los largos tiempos de entrega y amor por las
                  camisetas de algodón (nuestro único producto en ese momento). Con el paso de los
                  años, hicimos que el proceso de pedido fuera mucho más sencillo, redujimos
                  nuestros tiempos de entrega a menos de la mitad y ampliamos nuestra gama de
                  productos para cubrir una amplia variedad de prendas esenciales, todas hechas a
                  medida en Portugal e Italia.
                </p>
              </div>
            </motion.div>
          )}
        </VisibilitySensor> */}

        {/* <VisibilitySensor partialVisibility>
          {({ isVisible }: any) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: 50 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="md:h-screen flex flex-col animate-me relative overflow-hidden justify-center p-4 md:p-0 "
            >
              <Image
                src={customfit}
                alt="foto"
                width={0}
                height={0}
                className="absolute z-0 w-2/5 scale-150 left-0  bottom-[50%] translate-y-[50%]"
                quality={100}
              />
              <div className="w-1/2 self-end text-start z-10">
                <strong className=" font-atlas-grotesk-bold  py-8 z-10 md:text-2xl text-xl ">
                  EL FUTURO ES PERSONALIZADO
                </strong>
                <p className="font-atlas-grotesk-medium text-start  text-sm  md:text-lg z-10 leading-6 pt-2">
                  ¿Qué sigue para nosotros? Emocionar a más clientes con un ajuste personalizado,
                  así como nuevos productos, y, por último pero no menos importante, inspirar a más
                  marcas a cambiar de rumbo y unirse a nuestra misión de reingeniería de la
                  industria de la moda para el planeta y las personas.
                  <br /> Atentamente, Andrews Team
                </p>
              </div>
            </motion.div>
          )}
        </VisibilitySensor> */}
      </div>
      <div className="flex justify-center items-center p-10 md:p-48 mb-10 md:mb-0">
        <Link href="/">
          <h5 className="md:text-4xl  animate-pulse border-4 border-black px-10 py-8 pt-9">
            VOLVER AL INICIO
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default Nosotros;
