import React from "react";

import { LogoIcon } from "../assets";
import { socials } from "../constants/links";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-5 md:px-10 lg:px-20 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 py-10">
        <div className="">
          <LogoIcon />
          <p className="lg:w-1/2">
            Manage your online or offline business seamlessly from any device of
            your choice.
          </p>
          <div className="flex items-center gap-5 mt-5">
            {socials.map(({ label, icon, link }) => (
              <Link key={label} to={link} target="_blank">
                <img
                  src={icon}
                  alt={label}
                  className="hover:scale-105 duration-300 ease-in"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-end flex-col md:flex-row text-[#6D6969] gap-5">
          <div className="">
            <p className="font-semibold md:text-lg mb-5">Company</p>
            <p className="mb-3">Mobile point of sale</p>
            <p className="mb-3">Online store</p>
            <p className="mb-3">Pricing</p>
          </div>
          <div className="">
            <p className="font-semibold md:text-lg mb-5">Legal</p>
            <p className="mb-3">Terms and conditions</p>
            <p className="mb-3">Privacy policy</p>
          </div>
          <div className="">
            <p className="font-semibold md:text-lg mb-5">Support</p>
            <p className="mb-3">Call</p>
            <p className="mb-3">Help centre</p>
          </div>
        </div>
      </div>
      <div className="p-5 border-t border-secondary">
        <p className="text-sm text-center">© 2023, MPOS All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
