"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Macaronni",
    text: "always fresh & always crispy & always hot",
    image: "/p4.png",
  },
  {
    id: 2,
    title: "Burger",
    text: "we deliver your order wherever you are",
    image: "/p5.png",
  },
  {
    id: 3,
    title: "Pizza",
    text: "the best pizza to share with your family",
    image: "/p3.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:text-8xl md:h-[calc(100vh-6rem)] lg:flex-row bg-green-500">
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 flex items-center justify-center">
        <Image
          src={data[currentSlide].image}
          alt=""
          width={300}
          height={300}
          className="object-cover flex justify-center items-center"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500  ">
        <div className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}

          <h1 className="font-black"></h1>
          <p>{data[currentSlide].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
