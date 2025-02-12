"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(): React.ReactElement {
  const pathname = usePathname();
  const getLinkClasses = (path: string) => {
    return pathname === path
      ? "text-[21px] text-[rgb(250,250,250)] decoration-1 decoration-double underline-offset-[6px] underline"
      : " hover-tab hover:overline-offset-[12px]";
  };
  return (
    <div className=" relative w-full flex flex-col justify-center items-center">
      {/* <div className="bg-slate-900 opacity-10 w-full h-full absolute z-[-1]"></div> */}
      <div className="h-[6rem] bg-blue-600 opacity-60 rounded-[12px] w-full absolute z-[0] max-w-[1280px]"></div>
      <nav className="text-[rgb(210,240,240)] z-[1] h-[6rem] my-[1rem] rounded-[12px] max-w-[1280px] w-full shadow-[3px_3px_6px_3px_rgba(255,200,200,0.6)] p-[1rem] flex flex-row items-center justify-between">
        <Link href="/" className={getLinkClasses("/")}>
          News
        </Link>
        <Link
          href="/pages/titan-quest"
          className={`${getLinkClasses("/pages/titan-quest")}`}
        >
          Titan Quest
        </Link>
        <Link
          href="/pages/game002"
          className={getLinkClasses("/pages/game002")}
        >
          Game 002
        </Link>
        <Link
          href="/pages/game003"
          className={getLinkClasses("/pages/game003")}
        >
          Game 003
        </Link>
        <Link
          href="/pages/game004"
          className={getLinkClasses("/pages/game004")}
        >
          Game 004
        </Link>
        <Link
          href="/pages/game005"
          className={getLinkClasses("/pages/game005")}
        >
          Game 005
        </Link>
        <Link
          href="/pages/game006"
          className={getLinkClasses("/pages/game006")}
        >
          Game 006
        </Link>
        <Link href="/pages/more" className={getLinkClasses("/pages/more")}>
          And more ...
        </Link>
        <Link href="/pages/user" className={getLinkClasses("/pages/user")}>
          User
        </Link>
      </nav>
    </div>
  );
}
