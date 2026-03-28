import { MenuType } from "@/types/types";
import Link from "next/link";
import React from "react";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   console.log(res);

//   if (!res.ok) {
//     throw new Error("Failed to fetch");
//   }

//   return res.json();
// };

const MenuPage = async () => {
  //   const data = await getData();

  //   const menu: MenuType[] = data.categories;

  //   console.log(menu);
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      <Link href={``} className="w-full h-1/3 bg-cover p-8 md:h-1/2">
        <div className={` w-1/2`}>
          <h1 className="uppercase font-bold text-3xl">NEW WHIP</h1>
          <p className="text-sm my-8">
            NEVER HAD ANY SORT OF DESCRIPTION BEFORE
          </p>
          <button
            className={`hidden 2xl:block bg-red-400 text-black py-2 px-4 rounded-md`}
          >
            Explore
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuPage;
