import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-320 bg-black md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between ">
      <Link href="/" className=" font-bold text-xl">
        BROWNBAG
      </Link>
      <p>ALL RIGHT RESERVED.</p>
    </div>
  );
};

export default Footer;
