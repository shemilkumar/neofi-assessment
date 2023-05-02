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
      <nav className="flex gap-4">
        <div className="flex flex-col">
          <img src="/src/assets/logo/upper.png" alt="logo" />
          <img src="/src/assets/logo/lower.png" alt="logo" />
        </div>
        <div className="my-auto">
          <img src="/src/assets/logo/NeoFi.png" alt="logo" />
        </div>
      </nav>
      <nav>
        <ul className="flex items-center h-full gap-2 text-base font-normal tracking-wide text-light/60">
          <li className="font-semibold text-[#627EEA] py-6 px-4 border-b-2 border-[#627EEA]">
            Trade
          </li>
          <li className="px-4 py-6">Earn</li>
          <li className="px-4 py-6">Support</li>
          <li className="px-4 py-6">About</li>
        </ul>
      </nav>
      <nav>
        <Button text="Connect wallet" className="text-sm" />
      </nav>
    </header>
  );
};

export default Navbar;

