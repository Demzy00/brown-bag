"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Product2 = () => {
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

  const [random, setRandom] = useState(2);

  //   useEffect(() => {
  //     const interval = setInterval(
  //       () => setRandom((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
  //       4000,
  //     );
  //     return () => clearInterval(interval);
  //   }, []);
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <h1 className="font-bold">PRODUCT OF THE DAY</h1>
      <div className="">
        <h2 className="flex-1 text-center">{data[random].title}</h2>
        <Image
          src={data[random].image}
          alt=""
          width={300}
          height={300}
          className="object-cover "
        />
        <p>{data[random].text}</p>
      </div>
    </div>
  );
};

export default Product2;
