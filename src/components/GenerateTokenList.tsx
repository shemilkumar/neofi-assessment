import { Stoke } from "../App";
import tickVector from "../assets/tick-vector.png";

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
    <ul className="flex flex-col gap-2 text-sm text-white xs:text-xs">
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
                src={`/icons/${token.symbol.toLowerCase()}.png`}
                alt="logo"
                className="w-8 h-8 p-1 rounded-full"
              />
              <span>{token.symbol}</span>
            </div>
            {token.symbol === selectedToken.symbol ? (
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
