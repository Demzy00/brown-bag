"use client";
import React from "react";

const Product = () => {
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
      image: "/p4.png",
    },
  ];
  return (
    <div className=" bg-purple-400">
      <h1 className="text-3xl text-center p-4">OUR PRODUCTS</h1>
      <div className="md:h-120 flex flex-row md:flex-row md:min-w-30 items-center ">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col relative border-r-16 w-full h-100 md:w-1/3 border border-amber-500"
          >
            <img
              src={item.image}
              alt=""
              className="object-cover"
              width={50}
              height={50}
            />
            <div className="">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-sm">{item.text}</p>
              <button
                className="mt-2 bg-red-500 text-white p-4 py-1 border-r-4 rounded-md cursor-pointer"
                onClick={() => console.log("first")}
              >
                ORDER NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
