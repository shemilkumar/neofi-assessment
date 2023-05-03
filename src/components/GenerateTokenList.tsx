/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { Stoke } from "../App";
import tickVector from "../assets/tick-vector.png";

interface GenerateTokenListProps {
  handleDropdownClick: () => void;
  handleSelectToken: (token: Stoke) => void;
  tokens: Stoke[];
}

function GenerateTokenList({
  tokens,
  handleDropdownClick,
  handleSelectToken,
}: GenerateTokenListProps) {
  // Getting selected token from Redux store
  const selectedTokenFromStore = useSelector(
    (state: any) => state.selectedToken.selectedToken
  );

  return (
    <ul className="flex flex-col gap-2 text-sm text-white xs:text-xs">
      {tokens.map((token, i) => {
        return (
          <li
            key={`${token.symbol}-${i}`}
            className={`flex items-center justify-between px-4 py-2 cursor-pointer ${
              token.symbol === selectedTokenFromStore.symbol
                ? "bg-[#1B192D]"
                : ""
            }`}
            onClick={() => {
              handleDropdownClick();
              handleSelectToken(token);
            }}
          >
            <div className="flex items-center gap-4">
              <img
                src={`/icons/${token.symbol.toLowerCase()}.png`}
                alt="logo"
                className="w-8 h-8 p-1 rounded-full"
              />
              <span>{token.symbol}</span>
            </div>
            {token.symbol === selectedTokenFromStore.symbol ? (
              <div className="flex items-center justify-between">
                <img src={tickVector} alt="logo" className="w-6 h-auto" />
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export default GenerateTokenList;
