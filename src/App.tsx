import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import axios from "axios";
import LensIcon from "./assets/svg/LensIcon";
import CloseIcon from "./assets/svg/CloseIcon";

interface Stoke {
  symbol: string;
  price: number;
}

interface DropdownModalProps {
  handleDropdownClick: () => void;
  handleSelectToken: (token: Stoke) => void;
  selectedToken: Stoke;
  tokenData: [Stoke];
}

interface GenerateTokenListProps {
  handleDropdownClick: () => void;
  handleSelectToken: (token: Stoke) => void;
  selectedToken: Stoke;
  tokens: Stoke[];
}

function GenerateTokenList({
  tokens,
  selectedToken,
  handleDropdownClick,
  handleSelectToken,
}: GenerateTokenListProps) {
  return (
    <ul className="flex flex-col gap-2 text-sm text-white">
      {tokens.map((token) => {
        return (
          <li
            className={`flex items-center justify-between px-4 py-2 cursor-pointer ${
              token.symbol === selectedToken.symbol ? "bg-[#1B192D]" : ""
            }`}
            onClick={() => {
              handleDropdownClick();
              handleSelectToken(token);
            }}
          >
            <div className="flex items-center gap-4">
              <img
                src={`/src/assets/icons/${token.symbol.toLowerCase()}.png`}
                alt="logo"
                className="w-8 h-8 p-1 rounded-full"
              />
              <span>{token.symbol}</span>
            </div>
            {token.symbol === selectedToken.symbol ? (
              <div className="flex items-center justify-between">
                <img
                  src="/src/assets/tick-vector.png"
                  alt="logo"
                  className="w-6 h-auto"
                />
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

function DropdownModal({
  handleDropdownClick,
  handleSelectToken,
  selectedToken,
  tokenData,
}: DropdownModalProps) {
  const [searchOutputTokens, setSearchOutputTokens] = useState<Stoke[] | null>(
    null
  );

  const handleSearch = (input: string) => {
    if (!tokenData) return;
    const searchData: Stoke[] | [] = tokenData.filter((token) =>
      token.symbol.toLowerCase().includes(input.toLowerCase())
    );

    console.log(searchData);
    setSearchOutputTokens(searchData);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full text-white bg-[#0B0819]/80 ">
      <div className="relative flex flex-col items-center pt-8 pb-16 -translate-x-1/2 top-80 left-1/2 w-[400px] px-10 bg-[#181627] h-[470px] rounded-2xl gap-6 border-[#3B79D4]/60 border-solid border-t">
        <div onClick={handleDropdownClick}>
          <CloseIcon className="absolute top-2 w-6 h-6 right-2 bg-[#6e56f826] fill-light rounded-md p-1 cursor-pointer" />
        </div>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search chains"
            className={`w-full bg-transparent border-[#6E56F8]/25 text-white py-2 px-6 border-2 border-[#1C1731] rounded-full  pl-12`}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <LensIcon className="absolute ml-4 -translate-y-1/2 top-1/2" />
        </div>
        <div className="w-full h-[400px] overflow-y-auto scrollbar-hide">
          <GenerateTokenList
            tokens={
              searchOutputTokens !== null ? searchOutputTokens : tokenData
            }
            handleDropdownClick={handleDropdownClick}
            handleSelectToken={handleSelectToken}
            selectedToken={selectedToken}
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  const USD = 80;
  const [tokens, setTokens] = useState<[Stoke]>();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedToken, setSelectedToken] = useState<Stoke>();
  const [investingAmount, setInvestingAmount] = useState<number>();
  const [numberOfETH, setNumberOfETH] = useState<number>();

  const handleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleSelectToken = (token: Stoke) => setSelectedToken(token);

  const handleInvestment = (amount: number) => {
    setInvestingAmount(amount);
    if (selectedToken) {
      if (selectedToken.price === 0) {
        setNumberOfETH(0.0);
      } else {
        // console.log(amount, selectedToken.price * USD);
        const noOfETH = amount / (selectedToken.price * USD);
        setNumberOfETH(Math.floor(noOfETH));
      }
    } else setNumberOfETH(0.0);
  };

  // const calculateNoOfETH = () =>

  useEffect(() => {
    const getAllToken = async () => {
      try {
        const { data } = await axios.get(
          "https://api.binance.com/api/v3/ticker/price"
        );
        const minimumData: [Stoke] = data.slice(0, 25);
        setTokens(minimumData);
        // console.log(tokens[0].symbol);
        setSelectedToken(minimumData[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getAllToken();
    tokens && console.log(tokens[0].symbol);
  }, []);

  return (
    <>
      <Navbar />
      <Layout>
        {isDropdownOpen && selectedToken && tokens && (
          <DropdownModal
            tokenData={tokens}
            selectedToken={selectedToken}
            handleDropdownClick={handleDropdown}
            handleSelectToken={handleSelectToken}
          />
        )}
        <div
          className={`flex items-center justify-center h-screen text-light ${
            isDropdownOpen ? "overflow-y-hidden" : ""
          }`}
        >
          {tokens && selectedToken ? (
            <section
              className="relative font-poppins flex flex-col w-[460px] items-center gap-4 px-10 bg-boxColor/70 rounded-xl pt-20 pb-12 border-1 border-light/50 border-t
            "
            >
              <div className="absolute z-20 flex items-center justify-center w-20 h-20 -translate-x-1/2 border-b rounded-full bg-dark -top-10 left-1/2 border-light">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1C1731] ">
                  <img
                    src={`/src/assets/icons/${selectedToken.symbol.toLowerCase()}.png`}
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
                  {selectedToken
                    ? `₹ ${(selectedToken.price * USD).toFixed(4)}`
                    : "₹ 0"}
                </span>
              </div>
              <form className="flex flex-col items-center gap-6">
                {selectedToken ? (
                  <div
                    className="relative cursor-pointer"
                    onClick={handleDropdown}
                  >
                    <img
                      src={`/src/assets/icons/${selectedToken.symbol.toLowerCase()}.png`}
                      alt="logo"
                      className="absolute object-cover w-7 top-1/2 -translate-y-1/2 h-7 p-1 bg-[#3387D5] rounded-full ml-6"
                    />
                    <Input
                      type="text"
                      value={selectedToken.symbol}
                      className="pl-16 appearance-none cursor-pointer"
                      disabled={true}
                    />
                    <img
                      src="/src/assets/dropdown-vector.png"
                      alt="dropdown"
                      className="absolute -translate-y-1/2 top-1/2 right-6"
                    />
                  </div>
                ) : (
                  <div className="text-white">Loading...</div>
                )}

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
                      defaultValue={
                        investingAmount ? investingAmount : undefined
                      }
                      handleInvest={handleInvestment}
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
                    value={`${numberOfETH}`}
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
