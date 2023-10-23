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
    <div className="min-h-screen text-white flex flex-col items-center bg-black">
      <div className=" mt-12 md:mt-16   flex flex-col h-full  justify-center items-center   gap-4 max-w-7xl">
        <VisibilitySensor partialVisibility>
          {({ isVisible }: any) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 50 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="h-[80vh] flex flex-col animate-me relative justify-center mt-16"
            >
              <Image
                src={model}
                alt="foto"
                width={0}
                height={0}
                className="absolute z-0 scale-150 right-0 bottom-[50%] translate-y-[50%] contrast-150"
                quality={100}
              />

              <p className="font-atlas-grotesk-medium text-center w-2/3 self-center  text-2xl z-10 leading-8">
                Fundada en en Perú en 2008, Andrews & Andrews Atelier son pioneras y líderes en
                camisas, pantalones, corbatas y accesorios de calidad. Conformadas por un equipo
                joven con mucha iniciativa y motivación infinita, seguimos siendo únicos en nuestro
                enfoque, combinando la innovación técnica con materiales de primera calidad y un
                diseño de ropa de buen gusto. Nuestros productos se diseñan y desarrollan en Inca,
                en el corazón de Lima, dónde un equipo de diseñadores y técnicos trabajan juntos
                para crear nuestras colecciones cada temporada.
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
              className="h-[80vh] flex flex-col animate-me relative  justify-center"
            >
              <Image
                src={model2}
                alt="foto"
                width={250}
                height={0}
                className="absolute z-0 scale-150 left-0  bottom-[50%] translate-y-[50%]"
                quality={100}
              />
              <div className="w-2/3 self-center text-center z-10 ">
                <p className="font-atlas-grotesk-medium text-center   text-2xl z-10 leading-8">
                  Trabajamos con materiales auténticos, naturales y sostenibles. Buscamos la más
                  alta calidad para perfeccionar el aspecto, la sensación y el rendimiento de cada
                  pieza que fabricamos. Nuestro diseño minimalista deja traslucir la belleza innata
                  y la longevidad de estos tejidos. La calidad del algodón Pima peruano que
                  utilizamos es inigualable. Se caracteriza por la longitud de la fibra, lo que le
                  da una sensación increíblemente suave y tersa y un brillo particular. Es un tejido
                  duradero, hasta un 45% más resistente que el algodón normal, por lo que no se
                  apelmaza ni se deshilacha con el tiempo. Además, este material es hipoalergénico,
                  lo que lo convierte en una opción ideal para las personas con piel sensible.
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
              className="h-screen flex flex-col animate-me relative  justify-center items-center mt-48"
            >
              <Image
                src={picture}
                alt="foto"
                width={0}
                height={0}
                className=" z-0 w-full "
                quality={100}
              />
              <div className=" self-end text-center flex items-center justify-evenly p-8 mt-10">
                <strong className=" font-atlas-grotesk-bold z-10 text-4xl w-1/2 text-start">
                  INOVACION
                </strong>
                <p className="!font-canela-regular text-center  w-1/2 text-xl z-10 leading-8">
                  Profesional elegante que busca salir de lo clásico. Variedad de prendas estampadas
                  con amplitud de talles pero con un stock relativamente reducido.
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
              className="h-screen flex flex-col animate-me relative  justify-center items-center mt-48"
            >
              <Image
                src={tag}
                alt="foto"
                width={0}
                height={0}
                className=" z-0 w-full "
                quality={100}
              />
              <div className=" self-end text-center flex items-center justify-evenly p-8 mt-10">
                <strong className=" font-atlas-grotesk-bold z-10 text-4xl w-1/2 text-start">
                  EL CAMINO DE ANDREWS
                </strong>
                <p className="!font-canela-regular text-center  w-1/2 text-xl z-10 leading-8">
                  Eliminamos la sobreproduccion, fabricamos a medida, nada mas ni nada menos. De
                  esta manera podemos...
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
              className="h-screen flex flex-col animate-me relative  justify-center"
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
                <strong className=" font-atlas-grotesk-bold  py-8 z-10 text-2xl ">
                  AJUSTE PERFECTO EN 30 SEGUNDOS
                </strong>
                <p className="font-atlas-grotesk-medium text-start   text-lg z-10 leading-6 pt-2">
                  Con nuestro Algoritmo de Ajuste Perfecto, puedes crear tu talla personalizada en
                  30 segundos o menos; todo lo que necesitamos es tu altura, peso, edad y talla de
                  zapato. Una vez que se crea tu patrón individual, nuestro equipo de producción en
                  Italia y Portugal comienza a trabajar y la prenda se envía a ti. Si tu prenda no
                  se ajusta, estás cubierto por nuestra Garantía de Reposición Gratuita. ¿Suena
                  sencillo? ¡Lo es!
                </p>
              </div>
            </motion.div>
          )}
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }: any) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="h-screen flex flex-col animate-me relative overflow-hidden justify-center "
            >
              <Image
                src={perchero}
                alt="foto"
                width={0}
                height={0}
                className="absolute z-0 w-2/5 scale-150 right-0  bottom-[50%] translate-y-[50%]"
                quality={100}
              />
              <div className="w-1/2 self-start text-end z-10">
                <strong className=" font-atlas-grotesk-bold  py-8 z-10 text-2xl ">
                  CÓMO EMPEZÓ
                </strong>
                <p className="font-atlas-grotesk-medium text-end   text-lg z-10 leading-6 pt-2">
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
        </VisibilitySensor>

        <VisibilitySensor partialVisibility>
          {({ isVisible }: any) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: 50 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="h-screen flex flex-col animate-me relative overflow-hidden justify-center "
            >
              <Image
                src={customfit}
                alt="foto"
                width={0}
                height={0}
                className="absolute z-0 w-2/5 scale-150 left-0  bottom-[50%] translate-y-[50%]"
                quality={100}
              />
              <div className="w-1/2 self-end text-end z-10">
                <strong className=" font-atlas-grotesk-bold  py-8 z-10 text-2xl ">
                  EL FUTURO ES PERSONALIZADO
                </strong>
                <p className="font-atlas-grotesk-medium text-end   text-lg z-10 leading-6 pt-2">
                  ¿Qué sigue para nosotros? Emocionar a más clientes con un ajuste personalizado,
                  así como nuevos productos, y, por último pero no menos importante, inspirar a más
                  marcas a cambiar de rumbo y unirse a nuestra misión de reingeniería de la
                  industria de la moda para el planeta y las personas.
                  <br /> Atentamente, Andrews Team
                </p>
              </div>
            </motion.div>
          )}
        </VisibilitySensor>
      </div>
      <div className="flex justify-center items-center p-48">
        <Link href="/">
          <h5 className="text-4xl animate-pulse">VOLVER AL INICIO</h5>
        </Link>
      </div>
    </div>
  );
}

export default Nosotros;
