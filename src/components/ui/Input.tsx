import { FC } from 'react'

interface InputProps {
  value?: string;
  placeholder?: string;
  id?: string;
  type: string;
  className?: string;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({
  type,
  value,
  placeholder,
  id,
  disabled = false,
  className = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      className={`w-full text-white py-3.5 px-6 rounded-lg bg-[#1C1731] border-2 border-[#1C1731] 
      [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${className}`}
    />
  );
};

export default Input