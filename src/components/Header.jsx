import * as React from "react";
import { Link } from "gatsby";
import { ReactComponent as Logo } from "../images/logo.svg";

export const Header = () => {
  return (
    <div className="grid grid-cols-2  lg:grid-cols-3 items-center justify-items-center mx-auto relative text-sm py-6">
      <div className="hidden lg:block"></div>
      <div className="z-10 justify-self-start lg:justify-self-auto">
        <Link to="#" className="block px-8 bg-gray-800">
          <Logo className="w-12 h-12 text-white bg-gray-800 fill-current" />
        </Link>
      </div>
      <div className="uppercase z-10 flex gap-x-5 font-medium tracking-widest text-violet-light text-opacity-60">
        <Link to="#work" className="px-4 bg-gray-800">
          <div>my work</div>
        </Link>
        <Link to="#contacnts" className="px-4 bg-gray-800">
          <div>contacts</div>
        </Link>
      </div>
      <div className="absolute w-full h-px border-gray-700 border-b inset-y-0 my-auto" />
    </div>
  );
};
