import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import axios from "axios";
import LensIcon from "./assets/svg/LensIcon";
import CloseIcon from "./assets/svg/CloseIcon";

interface Stoke {
  token: string;
  price: number;
}

function DropdownModal({
  handleDropdownClick,
}: {
  handleDropdownClick: () => void;
}) {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full text-white bg-[#0B0819]/80 ">
      <div className="relative flex flex-col items-center pt-8 pb-16 -translate-x-1/2 top-80 left-1/2 w-[400px] px-10 bg-[#181627] h-[470px] rounded-2xl gap-6 border-[#3B79D4]/60 border-solid border-t">
        <div onClick={handleDropdownClick}>
          <CloseIcon className="absolute top-2 w-6 h-6 right-2 bg-[#6e56f826] fill-light rounded-md p-1 cursor-pointer" />
        </div>
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Search chains"
            className="border-2 !bg-transparent !rounded-full border-[#6E56F8]/25 pl-12
        !py-2 text-sm w-full"
          />
          <LensIcon className="absolute ml-4 -translate-y-1/2 top-1/2" />
        </div>
        <div className="w-full h-[400px] overflow-y-auto scrollbar-hide">
          <ul className="flex flex-col gap-2 text-sm">
            <li
              className="flex items-center justify-between px-4 py-2 bg-[#1B192D]"
              onClick={handleDropdownClick}
            >
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/icons/ethbtc.png"
                  alt="logo"
                  className="w-8 h-8 p-1 rounded-full bg-[#3387D5]"
                />
                <span>Ethereum</span>
              </div>
              <div className="flex items-center justify-between">
                <img
                  src="/src/assets/tick-vector.png"
                  alt="logo"
                  className="w-6 h-auto"
                />
              </div>
            </li>
            <li className="flex items-center justify-between px-4 py-2 ">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/icons/ethbtc.png"
                  alt="logo"
                  className="w-8 h-8 p-1 rounded-full bg-[#3387D5]"
                />
                <span>Ethereum</span>
              </div>
            </li>
            <li className="flex items-center justify-between px-4 py-2 ">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/icons/ethbtc.png"
                  alt="logo"
                  className="w-8 h-8 p-1 rounded-full bg-[#3387D5]"
                />
                <span>Ethereum</span>
              </div>
            </li>
            <li className="flex items-center justify-between px-4 py-2 ">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/icons/ethbtc.png"
                  alt="logo"
                  className="w-8 h-8 p-1 rounded-full bg-[#3387D5]"
                />
                <span>Ethereum</span>
              </div>
            </li>
            <li className="flex items-center justify-between px-4 py-2 ">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/icons/ethbtc.png"
                  alt="logo"
                  className="w-8 h-8 p-1 rounded-full bg-[#3387D5]"
                />
                <span>Ethereum</span>
              </div>
            </li>
            <li className="flex items-center justify-between px-4 py-2 ">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/icons/ethbtc.png"
                  alt="logo"
                  className="w-8 h-8 p-1 rounded-full bg-[#3387D5]"
                />
                <span>Ethereum</span>
              </div>
            </li>
            <li className="flex items-center justify-between px-4 py-2 ">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/icons/ethbtc.png"
                  alt="logo"
                  className="w-8 h-8 p-1 rounded-full bg-[#3387D5]"
                />
                <span>Ethereum</span>
              </div>
            </li>
            <li className="flex items-center justify-between px-4 py-2 ">
              <div className="flex items-center gap-4">
                <img
                  src="/src/assets/icons/ethbtc.png"
                  alt="logo"
                  className="w-8 h-8 p-1 rounded-full bg-[#3387D5]"
                />
                <span>Ethereum</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [token, setToken] = useState<Stoke>();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const getAllToken = async () => {
      try {
        const { data } = await axios.get(
          "https://api.binance.com/api/v3/ticker/price"
        );
        const minimumData: Stoke = data.slice(0, 25);
        setToken(minimumData);
      } catch (error) {
        console.log(error);
      }
    };

    getAllToken();
    console.log(token);
  }, []);

  return (
    <>
      <Navbar />
      <Layout>
        {isDropdownOpen && (
          <DropdownModal handleDropdownClick={handleDropdown} />
        )}
        <div className="flex items-center justify-center h-screen text-light">
          {token !== undefined ? (
            <section
              className="relative font-poppins flex flex-col w-[460px] items-center gap-4 px-10 bg-boxColor/70 rounded-xl pt-20 pb-12 border-1 border-light/50 border-t
            "
            >
              <div className="absolute z-20 flex items-center justify-center w-20 h-20 -translate-x-1/2 border-b rounded-full bg-dark -top-10 left-1/2 border-light">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1C1731] ">
                  <img
                    src="/src/assets/icons/ethbtc.png"
                    alt="logo"
                    className="object-cover w-12 h-12 p-1 bg-[#3387D5] rounded-full"
                  />
                </div>
              </div>

              <div className="flex justify-between w-full">
                <span className="text-sm font-light text-light">
                  Current value
                </span>
                <span className="font-semibold text-2xl text-[#627EEA]">
                  ₹ 24882
                </span>
              </div>
              <form className="flex flex-col items-center gap-6">
                <div
                  className="relative cursor-pointer"
                  onClick={handleDropdown}
                >
                  <img
                    src="/src/assets/icons/ethbtc.png"
                    alt="logo"
                    className="absolute object-cover w-7 top-1/2 -translate-y-1/2 h-7 p-1 bg-[#3387D5] rounded-full ml-6"
                  />
                  <Input
                    type="text"
                    value="Ethereum"
                    className="pl-16 appearance-none cursor-pointer"
                    disabled={true}
                  />
                  <img
                    src="/src/assets/dropdown-vector.png"
                    alt="dropdown"
                    className="absolute -translate-y-1/2 top-1/2 right-6"
                  />
                </div>

                {/* <select
                  className="relative appearance-none cursor-pointer"
                  onClick={handleDropdown}
                >
                  <option
                    value=""
                    className="flex items-center justify-between 
                    w-full text-white py-3.5 px-6 rounded-lg bg-[#1C1731] border-2 border-[#1C1731]"
                  >
                    <img
                      src="/src/assets/icons/ethbtc.png"
                      alt="logo"
                      className="object-cover w-7 h-7 p-1 bg-[#3387D5] rounded-full ml-6"
                    />
                    <span>Ethereum</span>
                    <img
                      src="/src/assets/dropdown-vector.png"
                      alt="dropdown"
                      className="pr-6"
                    />
                  </option>
                </select> */}

                <div className="">
                  <label
                    htmlFor="invest"
                    className="text-sm font-light text-light "
                  >
                    Amount you want to invest
                  </label>
                  {/* <input type="number" placeholder='0.00' id='invest' className='w-full'/> */}
                  <div className="relative w-full">
                    <span className="absolute inset-y-0 flex items-center px-2 mt-3 text-base text-white right-4">
                      INR
                    </span>
                    <Input
                      type="number"
                      placeholder="0.00"
                      id="invest"
                      className="border-2 !bg-transparent mt-3 font-bold text-xl"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="eth"
                    className="mb-2 text-sm font-light text-light "
                  >
                    Estimate Number of ETH You will get
                  </label>
                  {/* <input type="number" placeholder='0.00' id='eth'  className='w-full'/> */}
                  <Input
                    type="number"
                    placeholder="0.00"
                    id="eth"
                    className="mt-3 mb-8 text-xl font-bold"
                    disabled={true}
                  />
                </div>

                <Button text="Buy" className="" />
              </form>
            </section>
          ) : (
            <div>Loading...</div>
          )}
        </div>

        {/* Dropdown layout */}
      </Layout>
    </>
  );
}

export default App;
