/* eslint-disable @typescript-eslint/no-empty-interface */
import { FC, useState } from "react";
import Button from "./ui/Button";

interface NavbarProps {}

// eslint-disable-next-line no-empty-pattern
const Navbar: FC<NavbarProps> = ({}) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleMenuClick = () => setIsOpenMenu(!isOpenMenu);

  return (
    <header
      className="flex justify-between items-center font-poppins text-[#5A5A5A] bg-navbar
    px-64 xl:px-32 lg:px-24 md:px-16 sm:px-10 xs:px-4 "
    >
      <nav className="flex gap-4 cursor-pointer">
        <div className="flex flex-col">
          <img src="/src/assets/logo/upper.png" alt="logo" />
          <img src="/src/assets/logo/lower.png" alt="logo" />
        </div>
        <div className="my-auto">
          <img src="/src/assets/logo/NeoFi.png" alt="logo" />
        </div>
      </nav>

      {/* Desktop Menu */}
      <nav className="lg:hidden">
        <ul className="flex items-center h-full gap-2 text-base font-normal tracking-wide text-light/60">
          <li className="font-semibold text-[#627EEA] py-6 px-4 border-b-2 border-[#627EEA] cursor-pointer">
            Trade
          </li>
          <li className="px-4 py-6 cursor-pointer">Earn</li>
          <li className="px-4 py-6 cursor-pointer">Support</li>
          <li className="px-4 py-6 cursor-pointer">About</li>
        </ul>
      </nav>
      <nav className="lg:hidden">
        <Button text="Connect wallet" className="text-sm" />
      </nav>

      {/* Mobile Menu */}
      <button
        className={`flex-col items-center justify-center hidden lg:flex py-6
          ${isOpenMenu ? "z-50" : ""}`}
        onClick={handleMenuClick}
      >
        <span
          className={`w-6 h-0.5 block rounded-sm transition-all duration-500 ease-out bg-light ${
            isOpenMenu
              ? "rotate-45 translate-y-1.5 bg-light "
              : "-translate-y-0.5"
          }`}
        />
        <span
          className={`w-6 h-0.5 block rounded-sm transition-all duration-500 ease-out bg-light my-1 ${
            isOpenMenu ? "opacity-0 bg-light " : "opacity-100"
          }`}
        />
        <span
          className={`w-6 h-0.5 block rounded-sm transition-all duration-500 ease-out bg-light ${
            isOpenMenu
              ? "-rotate-45 -translate-y-1.5 bg-light "
              : "translate-y-0.5"
          }`}
        />
      </button>

      {isOpenMenu ? (
        <nav className="fixed top-0 left-0 z-30 w-full h-full bg-dark/90 backdrop-blur-lg text-light/75/75 dark:text-dark/75">
          <div className="fixed flex flex-col items-center justify-end gap-8 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
            <nav>
              <ul className="flex flex-col items-center h-full gap-4 text-base font-normal tracking-wide text-light/60">
                <li className="font-semibold text-[#627EEA] py-4 cursor-pointer ">
                  Trade
                </li>
                <li className="py-4 cursor-pointer ">Earn</li>
                <li className="py-4 cursor-pointer ">Support</li>
                <li className="py-4 cursor-pointer ">About</li>
              </ul>
            </nav>
            <nav>
              <Button text="Connect wallet" className="text-sm" />
            </nav>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Navbar;

