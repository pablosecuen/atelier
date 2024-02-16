"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "./scrollbar.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { listProducts } from "@/app/redux/actions/productActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ColorSection() {
  const dispatch: AppDispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />, // Flecha personalizada de retroceso
    nextArrow: <NextArrow />, // Flecha personalizada de avance
  };
  return (
    <div className="categories flex flex-col md:max-w-[90vw] max-w-[80vw] !gap-10 md:pt-10 lg:max-w-[95vw] mx-auto z-50">
      <Slider {...settings}>
        {products?.map((product: any) => (
          <Link
            className="block aspect-square h-full w-full product-item"
            href={`/product/${product.handle}`}
            key={product.id}
          >
            <div className="rounded-md min-w-[280px] md:min-w-[450px] lg:min-w-[600px] px-2 md:px-0 pb-6">
              <Image
                src={product.imagesURL[0]}
                alt={product.title}
                className="w-full h-96 mb-1 object-contain"
                priority={true}
                width={200}
                height={0}
              />
              <span className="text-md text-xl mt-8 font-semibold text-black">{product.title}</span>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default ColorSection;

function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} !bg-black rounded-full !text-black h-4 w-4 fill-black`}
      onClick={onClick}
    >
      {"<"}asdasd
    </button>
  );
}

function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} !bg-black  rounded-full !text-black h-4 w-4 fill-black`}
      onClick={onClick}
    >
      {">"}asd
    </button>
  );
}
