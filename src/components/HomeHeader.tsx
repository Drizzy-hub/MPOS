import { useState } from "react";
import { LogoIcon } from "../assets";
import { SecondaryButton } from "./Button";

import menu from "../assets/icons/menu.svg";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed bg-white z-30 top-0 w-full flex items-center justify-between px-5 md:px-10 lg:px-20">
      <LogoIcon />

      <div className="hidden lg:flex flex-row gap-10 font-semibold text-md">
        <Link to="/">Mobile Point of Sale</Link>
        <Link to="/">Create Store</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Support</Link>
      </div>
      <div className="hidden lg:block">
        <SecondaryButton
          fontSize="14"
          fontWeight="600"
          color="#151515"
          to="/login"
          title="Log in"
        />
      </div>

      <div className="block lg:hidden">
        <img
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer"
          src={menu}
          alt="menu"
        />
        <div className={`${isOpen ? "" : "hidden"}`}>
          <div className="absolute top-20 w-full shadow-lg left-0 bg-white font-semibold text-sm md:text-md p-5">
            <Link
              onClick={() => setIsOpen(false)}
              to="/"
              className="py-3 block"
            >
              Mobile Point of Sale
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/"
              className="py-3 block"
            >
              Create Store
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/"
              className="py-3 block"
            >
              Pricing
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/"
              className="py-3 block"
            >
              Support
            </Link>
            <Link onClick={() => setIsOpen(false)} to="/login">
              <button className="rounded-full mt-5 py-3 cursor-pointer mb-5 border border-primary text-md bg-primary text-white w-full">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
