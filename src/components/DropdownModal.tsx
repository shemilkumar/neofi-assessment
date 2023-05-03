import { useState } from "react";
import { Stoke } from "../App";
import CloseIcon from "../assets/svg/CloseIcon";
import LensIcon from "../assets/svg/LensIcon";
import GenerateTokenList from "./GenerateTokenList";
import { useSelector } from "react-redux";

interface DropdownModalProps {
  handleDropdownClick: () => void;
  handleSelectToken: (token: Stoke) => void;
}

function DropdownModal({
  handleDropdownClick,
  handleSelectToken,
}: DropdownModalProps) {
  const [searchOutputTokens, setSearchOutputTokens] = useState<Stoke[] | null>(
    null
  );
  const allTokensFromStore = useSelector(
    (state: any) => state.tokens.allTokens
  );

  const handleSearch = (input: string) => {
    if (!allTokensFromStore) return;
    const searchData: Stoke[] | [] = allTokensFromStore.filter((token: Stoke) =>
      token.symbol.toLowerCase().includes(input.toLowerCase())
    );

    setSearchOutputTokens(searchData);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full text-white bg-[#0B0819]/80 ">
      <div className="relative flex flex-col items-center pt-8 xs:pt-4 xs:pb-10 pb-16 -translate-x-1/2 top-80 left-1/2 w-[400px] xs:w-[340px] px-10 bg-[#181627] h-[470px] rounded-2xl gap-6 border-[#3B79D4]/60 border-solid border-t xs:px-6">
        <div onClick={handleDropdownClick}>
          <CloseIcon className="absolute top-2 w-6 h-6 right-2 bg-[#6e56f826] fill-light rounded-md p-1 cursor-pointer" />
        </div>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search chains"
            className={`w-full bg-transparent border-[#6E56F8]/25 text-white py-2 px-6 border-2 border-[#1C1731] rounded-full  pl-12 xs:text-sm`}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <LensIcon className="absolute ml-4 -translate-y-1/2 top-1/2" />
        </div>
        <div className="w-full h-[400px] overflow-y-auto scrollbar-hide">
          <GenerateTokenList
            tokens={
              searchOutputTokens !== null
                ? searchOutputTokens
                : allTokensFromStore
            }
            handleDropdownClick={handleDropdownClick}
            handleSelectToken={handleSelectToken}
          />
        </div>
      </div>
    </div>
  );
}

export default DropdownModal;
