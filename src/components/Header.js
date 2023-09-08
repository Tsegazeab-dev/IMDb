import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkSwitchMode from "./DarkSwitchMode";

function Header() {
  return (
    <div className="flex justify-between mx-2 items-center max-w-6xl sm:mx-auto py-6">
      <div className="flex">
        <MenuItem title="HOME" destination="/" Icon={AiFillHome} />
        <MenuItem
          title="ABOUT"
          destination="/about"
          Icon={BsFillInfoCircleFill}
        />
      </div>

      <div className="flex space-x-5 items-center">
        <DarkSwitchMode/>
        <Link href="/">
        <h2 className="text-2xl">
        <span className="font-bold rounded-lg bg-amber-500 px-1 py-2">IMDb</span>
        <span className="text-xl ml-1">Clone</span>
        </h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
