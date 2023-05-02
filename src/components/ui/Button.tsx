import { FC } from 'react'

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ text, className = "" }) => {
  return (
    <button
      className={`font-semibold py-2.5 px-4 rounded-full bg-gradient-to-l to-[#3387D5] from-[#7A06C9]
      w-full text-white border-t border-l border-solid border-light ${className}`}
    >
      {text}
    </button>
  );
};

export default Button