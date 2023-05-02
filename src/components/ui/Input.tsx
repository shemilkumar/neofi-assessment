import { FC } from 'react'

interface InputProps {
  defaultValue?: number;
  value?: string;
  placeholder?: string;
  id?: string;
  type: string;
  className?: string;
  disabled?: boolean;
  // investAmount?: number;
  handleInvest?: (amount: number) => void;
}

const Input: FC<InputProps> = ({
  type,
  value,
  defaultValue,
  placeholder,
  id,
  disabled = false,
  className = "",
  handleInvest,
}) => {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      value={value}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      className={`w-full text-white py-3.5 px-6 rounded-lg bg-[#1C1731] border-2 border-[#1C1731] 
      [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${className}`}
      onChange={(e) => {
        handleInvest && handleInvest(parseFloat(e.target.value));
      }}
    />
  );
};

export default Input