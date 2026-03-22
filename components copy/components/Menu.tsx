"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "./Footer";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState();

  // temporary user
  const user = false;

  const links = [
    { id: 1, title: "Product", url: "/product" },
    { id: 2, title: "Blog", url: "/blog" },
    { id: 3, title: "About", url: "/about" },
    { id: 4, title: "Contact", url: "/contact" },
    { id: 5, title: "Login", url: "/login" },
  ];

  return (
    <div className="uppercase">
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div  className= " bg-red-500 text-white absolute left-0 top-18 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
