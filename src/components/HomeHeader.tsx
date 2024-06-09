import { useState } from "react";
import { LogoIcon } from "../assets";
import { SecondaryButton } from "./Button";

import menu from "../assets/icons/menu.svg";

const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed bg-white z-30 top-0 w-full flex items-center justify-between px-5 md:px-10 lg:px-20">
      <LogoIcon />

      <div className="hidden lg:flex flex-row gap-10">
        <p className="font-semibold text-md">Mobile Point of Sale</p>
        <p className="font-semibold text-md">Create Store</p>
        <p className="font-semibold text-md">Pricing</p>
        <p className="font-semibold text-md">Support</p>
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
          <div className="hidden lg:flex flex-row gap-10">
            <p className="font-semibold text-sm md:text-md block">
              Mobile Point of Sale
            </p>
            <p className="font-semibold text-sm md:text-md block">
              Create Store
            </p>
            <p className="font-semibold text-sm md:text-md block">Pricing</p>
            <p className="font-semibold text-sm md:text-md block">Support</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
