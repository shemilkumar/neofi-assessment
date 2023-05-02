/* eslint-disable @typescript-eslint/no-empty-interface */
import { FC } from 'react'
import Button from './ui/Button';

interface NavbarProps {}

// eslint-disable-next-line no-empty-pattern
const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header
      className="flex justify-between items-center font-poppins text-[#5A5A5A] bg-navbar
    px-64"
    >
      <nav className="text-3xl tracking-wide font-extrabold text-transparent bg-gradient-to-l from-blue-500 to-purple-600 bg-clip-text">
        NeoFi
      </nav>
      <nav>
        <ul className="flex items-center gap-2 text-base font-normal text-light/60 h-full tracking-wide">
          <li className="font-semibold text-[#627EEA] py-6 px-4 border-b-2 border-[#627EEA]">
            Trade
          </li>
          <li className="py-6  px-4">Earn</li>
          <li className="py-6  px-4">Support</li>
          <li className="py-6  px-4">About</li>
        </ul>
      </nav>
      <nav>
        <Button text="Connect wallet" className="text-sm" />
      </nav>
    </header>
  );
};

export default Navbar;

