import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import axios from "axios";
import DropdownModal from "./components/DropdownModal";
import Spinner from "./components/Spinner";
import dropDownVector from "../src/assets/dropdown-vector.png";
import { useDispatch } from "react-redux";
import { setAllTokens } from "./Redux/Slicers/tokensSlice";
import { setSelectToken } from "./Redux/Slicers/selectedTokenSlice";

export interface Stoke {
  symbol: string;
  price: number;
}

function App() {
  const USD = 80;
  const [tokens, setTokens] = useState<[Stoke]>();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedToken, setSelectedToken] = useState<Stoke>();
  const [investingAmount, setInvestingAmount] = useState<number>();
  const [numberOfETH, setNumberOfETH] = useState<number>();

  const dispatch = useDispatch();

  const handleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelectToken = (token: Stoke) => {
    setSelectedToken(token);
    dispatch(setSelectToken(token));
  };

  const handleInvestment = (amount: number) => {
    setInvestingAmount(amount);
    if (selectedToken) {
      if (selectedToken.price === 0) setNumberOfETH(0.0);
      else {
        const noOfETH = amount / (selectedToken.price * USD);
        setNumberOfETH(Math.floor(noOfETH));
      }
    } else setNumberOfETH(0.0);
  };

  useEffect(() => {
    const getAllToken = async () => {
      try {
        const { data } = await axios.get(
          "https://api.binance.com/api/v3/ticker/price"
        );
        const minimumData: [Stoke] = data.slice(0, 25);
        setTokens(minimumData);
        dispatch(setAllTokens(minimumData));
        setSelectedToken(minimumData[0]);
        dispatch(setSelectToken(minimumData[0]));
      } catch (error) {
        alert(error);
      }
    };

    getAllToken();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Layout>
        {isDropdownOpen && (
          <DropdownModal
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
              className="relative font-poppins flex flex-col w-[460px] sm:w-[400px] xs:w-[350px] items-center gap-4 xs:gap-3 px-10 xs:px-6 bg-boxColor/70 rounded-xl pt-20 pb-12 xs:pt-12 xs:pb-8 border-1 border-light/50 border-t
            "
            >
              <div className="absolute z-20 flex items-center justify-center w-20 h-20 -translate-x-1/2 border-b rounded-full bg-dark -top-10 left-1/2 border-light">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1C1731] ">
                  <img
                    src={`/icons/${selectedToken.symbol.toLowerCase()}.png`}
                    alt="logo"
                    className="object-cover w-12 h-12 p-1 bg-[#3387D5] rounded-full"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between w-full">
                <span className="text-sm font-light text-light xs:text-xs">
                  Current value
                </span>
                <span className="font-semibold text-2xl xs:text-xl text-[#627EEA]">
                  {selectedToken
                    ? `₹ ${(selectedToken.price * USD).toFixed(4)}`
                    : "₹ 0"}
                </span>
              </div>
              <form className="flex flex-col items-center gap-6 xs:gap-3">
                {selectedToken ? (
                  <div
                    className="relative cursor-pointer"
                    onClick={handleDropdown}
                  >
                    <img
                      src={`/icons/${selectedToken.symbol.toLowerCase()}.png`}
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
                      src={dropDownVector}
                      alt="dropdown"
                      className="absolute -translate-y-1/2 top-1/2 right-6"
                    />
                  </div>
                ) : (
                  <Spinner />
                )}

                <div className="">
                  <label
                    htmlFor="invest"
                    className="text-sm font-light xs:text-xs text-light "
                  >
                    Amount you want to invest
                  </label>
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
                    className="mb-2 text-sm font-light xs:text-xs text-light "
                  >
                    Estimate Number of ETH You will get
                  </label>
                  <Input
                    type="number"
                    value={`${numberOfETH}`}
                    placeholder="0.00"
                    id="eth"
                    className="mt-3 mb-8 text-xl font-bold xs:mb-6"
                    disabled={true}
                  />
                </div>

                <Button text="Buy" className="" />
              </form>
            </section>
          ) : (
            <Spinner />
          )}
        </div>
      </Layout>
    </>
  );
}

export default App;
