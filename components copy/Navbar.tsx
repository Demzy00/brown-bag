import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className=" fixed top-0 left-0 right-0 h-18 bg-black flex items-center justify-between text-red-500 border-b-2 border-b-red-500 p-4 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT SIDE */}
      <div className="hidden md:flex lg:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">
          <img
            src="/pp.jpeg"
            className="object-cover"
            alt="logo"
            width={70}
            height={70}
          />
        </Link>

        {/* <Link href="/" className="">
          <img
            src="/pp.jpeg"
            alt=""
            className="object-cover"
            width={50}
            height={50}
          />{" "}
        </Link> */}
      </div>
      {/* MOBILE VIEW */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <span>123 456 78</span>
        </div>
        {!user ? <Link href="/login">Login</Link> : <Link href="/">Order</Link>}
        <Link href="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
