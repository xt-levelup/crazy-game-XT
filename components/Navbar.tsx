"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(): React.ReactElement {
  const pathname = usePathname();
  const getLinkClasses = (path: string) => {
    return pathname === path
      ? "text-[21px] text-[rgb(250,250,250)] decoration-1 decoration-double underline-offset-[6px] underline"
      : undefined;
  };
  return (
    <div className=" relative w-full flex flex-col justify-center items-center">
      <div className="bg-slate-900 opacity-30 w-full h-full absolute z-[-1]"></div>
      <div className="h-[6rem] bg-blue-600 opacity-60 rounded-[12px] w-full absolute z-[0] max-w-[1280px]"></div>
      <nav className="text-[rgb(210,240,240)] z-[1] h-[6rem] my-[1rem] rounded-[12px] max-w-[1280px] w-full shadow-[3px_3px_6px_3px_rgba(255,200,200,0.6)] p-[1rem] flex flex-row items-center justify-between">
        <Link href="/" className={getLinkClasses("/")}>
          Home
        </Link>
        <Link href="/pages/games" className={getLinkClasses("/pages/games")}>
          Game 001
        </Link>
        <Link href="/pages/user" className={getLinkClasses("/pages/user")}>
          User
        </Link>
      </nav>
    </div>
  );
}
